/* =====================================================
   Trilha do curso (pages/trilha.html)

   - Descobre o curso pelo endereço (trilha.html?curso=python).
   - Monta o mapa com UMA aula por círculo, na quantidade que o curso tem
     (script/trilhas.js), usando as cores do curso.
   - Camada de dados isolada para controle de progresso e XP
     (Fase 2: localStorage; Fase 3: substituível por API REST).
   - Player de lição (<dialog>) acessível: abre módulos desbloqueados,
     foco preso nativo, Esc fecha, foco devolvido a quem abriu.
   - Conclusão idempotente: soma XP uma única vez por aula, desbloqueia
     o próximo nó e notifica via sino/aviso rápido.
   - Módulos bloqueados permanecem inertes com aria-disabled.

   Precisa do cursos.js e do trilhas.js carregados antes.
   ===================================================== */

(() => {
    'use strict';

    const CURSO_PADRAO = 'fisica';
    const XP_POR_AULA = 10;

    const layout = document.getElementById('trilha-layout');
    const lista = document.getElementById('trilha');
    const voltar = document.getElementById('trilha-voltar');
    const titulo = document.getElementById('trilha-curso');
    const concluidosEl = document.getElementById('trilha-concluidos');
    const totalEl = document.getElementById('trilha-total');
    const barra = document.getElementById('trilha-barra');
    const chatTitulo = document.getElementById('trilha-chat-titulo');
    const chatTexto = document.getElementById('trilha-chat-texto');
    const chatBotao = document.getElementById('trilha-chat-botao');
    const aviso = document.getElementById('trilha-aviso');

    // Elementos do player de lição (<dialog>)
    const dialogoLicao = document.getElementById('licao-dialogo');
    const licaoCursoTag = document.getElementById('licao-curso-tag');
    const licaoNumeroTag = document.getElementById('licao-numero-tag');
    const licaoTitulo = document.getElementById('licao-titulo');
    const licaoConteudo = document.getElementById('licao-conteudo');
    const licaoXpTexto = document.getElementById('licao-xp-texto');
    const licaoConcluirBtn = document.getElementById('licao-concluir');
    const licaoConcluirTexto = document.getElementById('licao-concluir-texto');
    const licaoFecharBtn = document.getElementById('licao-fechar');

    // Se algum dos scripts de dados não carregou, avisa na tela em vez de ficar em branco
    if (!window.GaleaCursos || !window.GaleaTrilhas) {
        lista.innerHTML = '<li><p>Não foi possível carregar a trilha. Confira se cursos.js e trilhas.js estão na pasta script/ do projeto.</p></li>';
        return;
    }

    // ---------- qual curso? ----------
    const pedido = new URLSearchParams(location.search).get('curso');
    const cursoId = pedido && GaleaTrilhas.de(pedido) && GaleaCursos.buscar(pedido) ? pedido : CURSO_PADRAO;
    const curso = GaleaCursos.buscar(cursoId);
    const trilha = GaleaTrilhas.de(cursoId);

    // cores do curso: o CSS usa estas variáveis nos círculos, no cartão da aula atual e na barra
    layout.style.setProperty('--tema-claro', trilha.tema.claro);
    layout.style.setProperty('--tema-bloqueado', trilha.tema.bloqueado);

    document.title = trilha.titulo + ' - Galea';
    titulo.textContent = trilha.titulo;
    voltar.href = curso.pagina;
    chatTitulo.textContent = 'Chat de ' + curso.nome;

    // O Code Lab de testes de código só fica visível nos cursos de Python e Programação Web
    const cardCodeLab = document.getElementById('trilha-codelab-card');
    if (cardCodeLab) {
        const cursosComCodigo = ['python', 'web'];
        if (cursosComCodigo.includes(cursoId)) {
            cardCodeLab.hidden = false;
            cardCodeLab.style.display = 'block';

            // Ajusta o link para abrir com o modo certo (Python ou Web)
            const btnPlayground = cardCodeLab.querySelector('.btn-codelab-abrir');
            if (btnPlayground) {
                btnPlayground.href = `playground.html?modo=${cursoId}`;
                btnPlayground.innerHTML = `<span class="material-symbols-outlined" style="font-size: 16px;">code</span> Abrir Code Lab (${cursoId === 'web' ? 'HTML/CSS/JS' : 'Python'})`;
            }
        } else {
            cardCodeLab.hidden = true;
            cardCodeLab.style.display = 'none';
        }
    }

    let ultimoElementoFocado = null;
    let aulaAbertaIndice = null;

    // =====================================================
    // CAMADA DE DADOS ISOLADA (Fase 3: fetch autenticado + fallback offline)
    // =====================================================
    const CamadaProgresso = {
        CHAVE_XP: 'galea_usuario_xp',
        CHAVE_AULAS: 'galea_aulas_concluidas',

        carregarXP() {
            try {
                const salvo = localStorage.getItem(this.CHAVE_XP);
                return salvo !== null ? parseInt(salvo, 10) : 0;
            } catch (e) {
                return 0;
            }
        },

        salvarXP(novoXP) {
            try {
                localStorage.setItem(this.CHAVE_XP, String(novoXP));
            } catch (e) {}
        },

        carregarProgresso(idCurso, totalAulas) {
            try {
                const gravado = JSON.parse(localStorage.getItem(this.CHAVE_AULAS) || '{}');
                if (Array.isArray(gravado[idCurso])) {
                    return new Set(gravado[idCurso]);
                }
            } catch (e) {}

            const pct = GaleaCursos.progressoDe(idCurso);
            const qtd = pct !== null ? Math.min(totalAulas, Math.round(pct / 100 * totalAulas)) : 0;
            const inicial = new Set();
            for (let i = 0; i < qtd; i++) {
                inicial.add(i);
            }
            return inicial;
        },

        // Inicializa o progresso buscando o estado real do servidor (Fase 3).
        // Se offline ou não autenticado, usa o cache local sem perder dados.
        async inicializarDoServidor(idCurso, totalAulas) {
            try {
                const resp = await fetch('/api/trilhas/' + idCurso, { credentials: 'include' });

                if (resp.status === 401) {
                    // Não autenticado: preserva e usa cache local
                    return;
                }

                if (resp.ok) {
                    const dados = await resp.json();
                    if (!Array.isArray(dados.modulos)) return;

                    const concluidasServidor = new Set(
                        dados.modulos
                            .filter(m => m.estado === 'concluido')
                            .map(m => m.ordem)
                    );

                    // Carrega o que já está salvo no cache local
                    const gravado = JSON.parse(localStorage.getItem(this.CHAVE_AULAS) || '{}');
                    const concluidasLocal = new Set(Array.isArray(gravado[idCurso]) ? gravado[idCurso] : []);

                    // UNIÃO SEGURA: nunca apaga lições que o aluno concluiu localmente
                    const concluidasCombinadas = new Set([...concluidasLocal, ...concluidasServidor]);
                    gravado[idCurso] = Array.from(concluidasCombinadas);
                    localStorage.setItem(this.CHAVE_AULAS, JSON.stringify(gravado));

                    const novoPct = Math.min(100, Math.round((concluidasCombinadas.size / totalAulas) * 100));
                    if (typeof GaleaCursos.atualizarProgresso === 'function') {
                        GaleaCursos.atualizarProgresso(idCurso, novoPct);
                    }
                }
            } catch (e) {
                // API offline: segue com cache local sem interromper o fluxo
                console.warn('[Galea] Não foi possível sincronizar trilha com o servidor. Usando cache local.', e);
            }
        },

        async salvarConclusao(idCurso, indiceAula, totalAulas, xpGanha = XP_POR_AULA) {
            // Tenta salvar via API REST autenticada
            try {
                const resp = await fetch('/api/progresso', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({ curso_id: idCurso, aula_ordem: indiceAula })
                });

                // 401 = não autenticado (não é erro de rede)
                if (resp.status === 401) {
                    if (aviso) {
                        aviso.textContent = 'Você precisa estar logado para salvar seu progresso no servidor. Salvando localmente.';
                    }
                    // Cai no fallback local abaixo
                } else if (resp.ok) {
                    const dados = await resp.json();
                    const concluidas = this.carregarProgresso(idCurso, totalAulas);
                    concluidas.add(indiceAula);

                    // Sincroniza cache local
                    try {
                        const gravado = JSON.parse(localStorage.getItem(this.CHAVE_AULAS) || '{}');
                        gravado[idCurso] = Array.from(concluidas);
                        localStorage.setItem(this.CHAVE_AULAS, JSON.stringify(gravado));
                    } catch (e) {}

                    if (dados.novo_xp !== undefined) {
                        this.salvarXP(dados.novo_xp);
                    }

                    const novoPct = Math.min(100, Math.round((concluidas.size / totalAulas) * 100));
                    if (typeof GaleaCursos.atualizarProgresso === 'function') {
                        GaleaCursos.atualizarProgresso(idCurso, novoPct);
                    }

                    return {
                        sucesso: true,
                        primeiraVez: Boolean(dados.primeiraVez),
                        novoXP: dados.novo_xp !== undefined ? dados.novo_xp : this.carregarXP(),
                        xpGanha: dados.xp_ganha || 0,
                        totalConcluidas: concluidas.size,
                        novoPct,
                        origem: 'api'
                    };
                } else {
                    // Outros erros HTTP (400, 500…): avisa mas não bloqueia
                    const dados = await resp.json().catch(() => ({}));
                    console.warn('[Galea] Erro ao salvar progresso na API:', dados.erro || resp.status);
                }
            } catch (redeErr) {
                // Erro de rede real (servidor fora do ar, sem conexão)
                console.warn('[Galea] API offline. Gravando no armazenamento local como fallback.', redeErr);
                if (aviso) {
                    aviso.textContent = 'Servidor fora do ar ou sem conexão. Progresso salvo no modo offline.';
                }
            }

            // Fallback local se a API estiver fora do ar ou não autenticado
            const concluidas = this.carregarProgresso(idCurso, totalAulas);
            const jaConcluida = concluidas.has(indiceAula);

            if (!jaConcluida) {
                concluidas.add(indiceAula);
                try {
                    const gravado = JSON.parse(localStorage.getItem(this.CHAVE_AULAS) || '{}');
                    gravado[idCurso] = Array.from(concluidas);
                    localStorage.setItem(this.CHAVE_AULAS, JSON.stringify(gravado));
                } catch (e) {}

                const xpAtual = this.carregarXP();
                const novoXP = xpAtual + xpGanha;
                this.salvarXP(novoXP);

                const novoPct = Math.min(100, Math.round((concluidas.size / totalAulas) * 100));
                if (typeof GaleaCursos.atualizarProgresso === 'function') {
                    GaleaCursos.atualizarProgresso(idCurso, novoPct);
                }

                return {
                    sucesso: true,
                    primeiraVez: true,
                    novoXP,
                    xpGanha,
                    totalConcluidas: concluidas.size,
                    novoPct,
                    origem: 'local'
                };
            }

            return {
                sucesso: true,
                primeiraVez: false,
                novoXP: this.carregarXP(),
                xpGanha: 0,
                totalConcluidas: concluidas.size,
                novoPct: Math.min(100, Math.round((concluidas.size / totalAulas) * 100)),
                origem: 'local'
            };
        }
    };

    // =====================================================
    // RENDERIZAÇÃO SEGURA DE MARKDOWN (SEM INNERHTML CRU)
    // =====================================================
    function renderizarMarkdownSeguro(texto, container, dadosVisuais) {
        container.replaceChildren();

        // Se houver imagem ou gráfico didático (ex: SVG leve)
        if (dadosVisuais && dadosVisuais.imagem) {
            const figura = document.createElement('figure');
            figura.className = 'licao-figura';

            const img = document.createElement('img');
            img.src = dadosVisuais.imagem;
            img.alt = dadosVisuais.alt || 'Gráfico ilustrativo da aula';
            img.className = 'licao-grafico-svg';
            img.loading = 'lazy';

            figura.appendChild(img);
            if (dadosVisuais.alt) {
                const legenda = document.createElement('figcaption');
                legenda.className = 'licao-legenda';
                legenda.textContent = dadosVisuais.alt;
                figura.appendChild(legenda);
            }
            container.appendChild(figura);
        }

        if (!texto) return;

        const linhas = texto.split(/\r?\n/);
        let paragrafoAtual = null;
        let blocoDestaque = null;

        linhas.forEach(linha => {
            const trimmed = linha.trim();
            if (!trimmed) {
                paragrafoAtual = null;
                blocoDestaque = null;
                return;
            }

            // Subtítulos (### Título)
            if (trimmed.startsWith('### ')) {
                const h3 = document.createElement('h3');
                h3.className = 'licao-subtitulo';
                formatarTrechoSeguro(trimmed.replace(/^###\s+/, ''), h3);
                container.appendChild(h3);
                paragrafoAtual = null;
                blocoDestaque = null;
                return;
            }

            // Bloco de destaque / dica (> texto)
            if (trimmed.startsWith('>')) {
                const conteudoDica = trimmed.replace(/^>\s*/, '');
                if (!blocoDestaque) {
                    blocoDestaque = document.createElement('div');
                    blocoDestaque.className = 'licao-bloco-destaque';
                    const p = document.createElement('p');
                    formatarTrechoSeguro(conteudoDica, p);
                    blocoDestaque.appendChild(p);
                    container.appendChild(blocoDestaque);
                } else {
                    const p = document.createElement('p');
                    formatarTrechoSeguro(conteudoDica, p);
                    blocoDestaque.appendChild(p);
                }
                paragrafoAtual = null;
                return;
            }

            // Lista com marcador (- ou *)
            if (/^[-*]\s+/.test(trimmed)) {
                const itemTexto = trimmed.replace(/^[-*]\s+/, '');
                const p = document.createElement('p');
                p.style.paddingLeft = '1.2rem';
                p.appendChild(document.createTextNode('• '));
                formatarTrechoSeguro(itemTexto, p);
                container.appendChild(p);
                paragrafoAtual = null;
                blocoDestaque = null;
                return;
            }

            // Parágrafo regular
            if (!paragrafoAtual) {
                paragrafoAtual = document.createElement('p');
                formatarTrechoSeguro(trimmed, paragrafoAtual);
                container.appendChild(paragrafoAtual);
            } else {
                paragrafoAtual.appendChild(document.createTextNode(' '));
                formatarTrechoSeguro(trimmed, paragrafoAtual);
            }
        });
    }

    function formatarTrechoSeguro(texto, elementoPai) {
        // Separa trechos em negrito (**texto**), itálico (*texto*) e código (`texto`)
        const partes = texto.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/);
        partes.forEach(parte => {
            if (!parte) return;
            if (parte.startsWith('**') && parte.endsWith('**') && parte.length >= 4) {
                const strong = document.createElement('strong');
                strong.textContent = parte.slice(2, -2);
                elementoPai.appendChild(strong);
            } else if (parte.startsWith('*') && parte.endsWith('*') && parte.length >= 2) {
                const em = document.createElement('em');
                em.textContent = parte.slice(1, -1);
                elementoPai.appendChild(em);
            } else if (parte.startsWith('`') && parte.endsWith('`') && parte.length >= 2) {
                const code = document.createElement('code');
                code.style.backgroundColor = 'rgba(255,255,255,0.12)';
                code.style.padding = '2px 4px';
                code.style.borderRadius = '3px';
                code.textContent = parte.slice(1, -1);
                elementoPai.appendChild(code);
            } else {
                elementoPai.appendChild(document.createTextNode(parte));
            }
        });
    }

    function obterConteudoAula(nomeCurso, aulaIndice, aulaTitulo) {
        const numeroAula = aulaIndice + 1;
        if (window.GaleaConteudos) {
            const pedagogico = window.GaleaConteudos.obter(cursoId, numeroAula);
            if (pedagogico) {
                return {
                    texto: pedagogico.conteudo,
                    visual: {
                        imagem: pedagogico.imagem,
                        alt: pedagogico.alt
                    },
                    gamificacao: pedagogico.gamificacao || null
                };
            }
        }

        return {
            texto: [
                `**Objetivo da lição:** Compreender os fundamentos essenciais de *${aulaTitulo}* e fixar o conhecimento de forma leve e prática.`,
                `Nesta etapa do curso de **${nomeCurso}**, analisamos como esse conceito se aplica na prática. Cada lição foi planejada em blocos curtos para que você absorva o conteúdo no seu tempo, sem sobrecarga cognitiva.`,
                `> **Dica Galea:** Leia com calma, experimente relacionar a ideia ao seu dia a dia e celebre cada pequeno passo concluído.`,
                `Ao clicar no botão de conclusão abaixo, você conquista **+${XP_POR_AULA} XP** e desbloqueia a próxima aula na sua trilha.`
            ].join('\n\n'),
            visual: null
        };
    }

    // ---------- montar o mapa ----------
    function icone(nome) {
        const i = document.createElement('span');
        i.className = 'material-symbols-outlined';
        i.setAttribute('aria-hidden', 'true');
        i.textContent = nome;
        return i;
    }

    function criarAula(nomeAula, indice, estado) {
        const li = document.createElement('li');
        li.className = 'modulo modulo-' + estado;
        li.style.setProperty('--i', Math.min(indice, 12));

        const botao = document.createElement('button');
        botao.type = 'button';
        botao.className = 'modulo-botao';

        if (estado === 'bloqueado') {
            botao.setAttribute('aria-disabled', 'true');
            botao.setAttribute('title', 'Aula bloqueada: conclua as aulas anteriores para liberar.');
        } else {
            botao.setAttribute('aria-label', `${indice + 1}. ${nomeAula} (${estado === 'concluido' ? 'Concluída - clique para revisar' : 'Disponível - clique para iniciar'})`);
            botao.addEventListener('click', () => {
                abrirLicao(indice, nomeAula, estado, botao);
            });
        }

        const no = document.createElement('span');
        no.className = 'modulo-no';
        no.appendChild(icone(estado === 'concluido' ? 'check' : estado === 'atual' ? 'star' : 'lock'));

        const rotulo = document.createElement('span');
        rotulo.className = 'modulo-rotulo';
        rotulo.textContent = (indice + 1) + ' – ' + nomeAula;

        const leitor = document.createElement('span');
        leitor.className = 'sr-only';
        leitor.textContent = estado === 'concluido' ? '(aula concluída: clique para rever)'
            : estado === 'atual' ? '(aula atual disponível)'
            : '(bloqueada: conclua a aula anterior)';

        botao.append(no, rotulo, leitor);
        li.appendChild(botao);
        return li;
    }

    // ---------- Player de lição (<dialog>) ----------
    function abrirLicao(indice, nomeAula, estado, elementoOrigem) {
        ultimoElementoFocado = elementoOrigem;
        aulaAbertaIndice = indice;

        licaoCursoTag.textContent = curso.nome;
        licaoNumeroTag.textContent = `Aula ${indice + 1} de ${trilha.aulas.length}`;
        licaoTitulo.textContent = `${indice + 1}. ${nomeAula}`;

        const aulaDados = obterConteudoAula(curso.nome, indice, nomeAula);
        renderizarMarkdownSeguro(aulaDados.texto, licaoConteudo, aulaDados.visual);

        if (aulaDados.gamificacao && window.GaleaGamificacao) {
            dialogoLicao.classList.add('com-gamificacao');
            window.GaleaGamificacao.montar(licaoConteudo, aulaDados.gamificacao, () => {
                licaoConcluirBtn.classList.add('desafio-liberado');
            });
        } else {
            dialogoLicao.classList.remove('com-gamificacao');
        }

        const jaConcluida = estado === 'concluido';
        if (jaConcluida) {
            licaoXpTexto.textContent = 'Aula concluída';
            licaoConcluirTexto.textContent = 'Revisar aula';
            licaoConcluirBtn.classList.add('ja-concluido');
        } else {
            licaoXpTexto.textContent = `+${XP_POR_AULA} XP`;
            licaoConcluirTexto.textContent = 'Concluir aula';
            licaoConcluirBtn.classList.remove('ja-concluido');
        }

        dialogoLicao.showModal();
        licaoFecharBtn.focus();
    }

    function fecharLicao() {
        if (dialogoLicao.open) {
            dialogoLicao.close();
            dialogoLicao.classList.remove('com-gamificacao');
        }
    }

    licaoFecharBtn.addEventListener('click', fecharLicao);

    // Clicar no fundo escuro (backdrop) fecha o diálogo
    dialogoLicao.addEventListener('click', evento => {
        if (evento.target === dialogoLicao) {
            fecharLicao();
        }
    });

    // Devolve o foco ao botão que abriu quando o diálogo for fechado
    dialogoLicao.addEventListener('close', () => {
        if (ultimoElementoFocado && typeof ultimoElementoFocado.focus === 'function') {
            ultimoElementoFocado.focus();
        }
    });

    // Concluir lição
    licaoConcluirBtn.addEventListener('click', async () => {
        if (aulaAbertaIndice === null) return;

        const nomeAula = trilha.aulas[aulaAbertaIndice];
        const resultado = await CamadaProgresso.salvarConclusao(cursoId, aulaAbertaIndice, trilha.aulas.length, XP_POR_AULA);

        fecharLicao();

        if (resultado.primeiraVez) {
            const msg = `Parabéns! Você concluiu "${nomeAula}" e ganhou +${XP_POR_AULA} XP!`;
            aviso.textContent = msg;

            // Notifica a home via postMessage para acionar o sino e o aviso rápido
            if (window.parent !== window) {
                window.parent.postMessage({
                    tipo: 'nova-notificacao',
                    texto: msg,
                    icone: 'stars'
                }, '*');
            }
        } else {
            aviso.textContent = `Você revisou a aula "${nomeAula}".`;
        }

        // Re-renderiza o mapa com o novo nó liberado
        renderizar();

        // Posiciona o foco no novo nó atual desbloqueado
        setTimeout(() => {
            const novoAtual = lista.querySelector('.modulo-atual .modulo-botao');
            if (novoAtual) {
                novoAtual.focus();
            }
        }, 80);
    });

    let primeiraVez = true;

    function renderizar() {
        const total = trilha.aulas.length;
        const concluidasSet = CamadaProgresso.carregarProgresso(cursoId, total);
        const concluidasQtd = concluidasSet.size;

        // Monta os módulos: aulas concluídas, a próxima aula atual e as bloqueadas
        lista.replaceChildren(...trilha.aulas.map((nome, i) => {
            let estado = 'bloqueado';
            if (concluidasSet.has(i)) {
                estado = 'concluido';
            } else if (i === 0 || concluidasSet.has(i - 1)) {
                estado = 'atual';
            }
            return criarAula(nome, i, estado);
        }));

        concluidosEl.textContent = concluidasQtd;
        totalEl.textContent = total;
        const porcentagem = Math.min(100, Math.round((concluidasQtd / total) * 100));
        barra.style.setProperty('--progresso', porcentagem + '%');
        barra.setAttribute('aria-valuenow', porcentagem);

        const noMeusCursos = GaleaCursos.estaNosMeus(cursoId);
        atualizarChat(noMeusCursos);

        // Centraliza a aula atual na tela ao abrir pela primeira vez
        if (primeiraVez) {
            primeiraVez = false;
            const alvo = lista.querySelector('.modulo-atual') || lista.lastElementChild;
            if (alvo) {
                const topo = alvo.getBoundingClientRect().top + window.scrollY;
                window.scrollTo(0, Math.max(0, topo - window.innerHeight / 2));
            }
        }
    }

    // ---------- cartão do chat (lado direito) ----------
    function atualizarChat(noMeusCursos) {
        if (noMeusCursos) {
            chatTexto.textContent = 'Converse com quem também está fazendo ' + curso.nome + ': tire dúvidas e responda às mensagens da turma.';
            chatBotao.replaceChildren(icone('forum'), document.createTextNode('Abrir o chat'));
            chatBotao.dataset.acao = 'abrir';
            chatBotao.removeAttribute('aria-disabled');
        } else {
            chatTexto.textContent = 'O chat deste curso será liberado assim que você concluir a sua primeira lição na trilha.';
            chatBotao.replaceChildren(icone('lock'), document.createTextNode('Complete a 1ª lição'));
            chatBotao.dataset.acao = 'iniciar';
        }
    }

    chatBotao.addEventListener('click', () => {
        if (chatBotao.dataset.acao === 'iniciar') {
            const primeira = lista.querySelector('.modulo-atual .modulo-botao') || lista.querySelector('.modulo-botao');
            if (primeira) {
                primeira.focus();
                primeira.click();
            }
            return;
        }
        abrirChat();
    });

    function abrirChat() {
        if (window.parent !== window) {
            window.parent.postMessage({ tipo: 'abrir-chat', chat: cursoId }, '*');
        } else {
            location.href = '../home.html#comunidade-' + cursoId;
        }
    }

    GaleaCursos.aoMudar(renderizar);

    // 1. Renderiza imediatamente com os dados locais salvos para manter exatamente de onde parou
    renderizar();

    // 2. Sincroniza em segundo plano com o servidor (se autenticado/online) e atualiza se necessário
    CamadaProgresso.inicializarDoServidor(cursoId, trilha.aulas.length).then(() => {
        renderizar();
    });
})();
