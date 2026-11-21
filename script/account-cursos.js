/* =====================================================
   Perfil (pages/account.html): Listas de cursos, XP e Troféus

   - Monta "Cursos em andamento" e "Cursos concluídos" a partir da lista
     "Meus cursos" (script/cursos.js).
   - Para uma conta nova: inicia com 0 cursos, 0 XP e troféus zerados.
   - Atualiza em tempo real o XP total, o nível (barra de %) e os troféus
     (Bronze, Prata, Ouro, Platina) conforme as lições são concluídas.
   - Sincroniza tanto via localStorage quanto via API REST (/api/progresso).
   ===================================================== */

(() => {
    'use strict';

    const listaAndamento = document.getElementById('perfil-lista-cursos');
    const listaConcluidos = document.getElementById('perfil-lista-concluidos');
    const qtdAndamento = document.getElementById('perfil-qtd-cursos');
    const qtdConcluidos = document.getElementById('perfil-qtd-concluidos');

    // Elementos de gamificação (XP e Troféus)
    const perfilXp = document.getElementById('perfil-xp');
    const perfilXpBarra = document.getElementById('perfil-xp-barra');
    const perfilXpPct = document.getElementById('perfil-xp-percentual');
    const trofeuPlatina = document.getElementById('trofeu-platina');
    const trofeuOuro = document.getElementById('trofeu-ouro');
    const trofeuPrata = document.getElementById('trofeu-prata');
    const trofeuBronze = document.getElementById('trofeu-bronze');

    if (!listaAndamento || !listaConcluidos) return;

    function el(tag, classe, texto) {
        const e = document.createElement(tag);
        if (classe) e.className = classe;
        if (texto !== undefined) e.textContent = texto;
        return e;
    }

    function criarLink(curso, classeExtra) {
        const a = el('a', 'curso-item' + (classeExtra ? ' ' + classeExtra : ''));
        a.href = curso.pagina;
        a.target = '_top';
        return a;
    }

    function itemAndamento(curso, progresso) {
        const li = document.createElement('li');
        const a = criarLink(curso);
        a.append(el('span', '', curso.nome), el('span', 'curso-item-progresso', progresso + '%'));
        li.appendChild(a);
        return li;
    }

    function itemConcluido(curso) {
        const li = document.createElement('li');
        const a = criarLink(curso, 'curso-item-concluido');
        const selo = el('span', 'curso-concluido-selo');
        const icone = el('span', 'material-symbols-outlined', 'check_circle');
        icone.setAttribute('aria-hidden', 'true');
        selo.append(icone, document.createTextNode(' Concluído'));
        a.append(el('span', '', curso.nome), selo);
        li.appendChild(a);
        return li;
    }

    function itemVazio(texto) {
        const li = document.createElement('li');
        li.appendChild(el('p', 'vazio', texto));
        return li;
    }

    // ---------- Cálculo e Atualização de Nível, XP e Troféus ----------
    /**
     * Calcula o nível e a porcentagem da barra:
     * - Inicia em Level 0.
     * - Sobe para Level 1 ao atingir 500 pontos.
     * - A cada novo nível, dobra a pontuação necessária (500, 1000, 2000, 4000...).
     */
    function calcularNivelEProgresso(xpTotal) {
        let xpRestante = Math.max(0, parseInt(xpTotal, 10) || 0);
        let nivel = 0;
        let pontosNecessarios = 500; // Pontos para o Nível 1

        while (xpRestante >= pontosNecessarios) {
            xpRestante -= pontosNecessarios;
            nivel++;
            pontosNecessarios *= 2; // Dobra para o próximo nível
        }

        const percentual = Math.min(100, Math.floor((xpRestante / pontosNecessarios) * 100));

        return {
            nivel,
            xpNoNivel: xpRestante,
            xpNecessario: pontosNecessarios,
            percentual
        };
    }

    function atualizarGamificacao() {
        let xp = 0;
        try {
            const xpSalvo = localStorage.getItem('galea_usuario_xp');
            if (xpSalvo !== null) xp = parseInt(xpSalvo, 10) || 0;
        } catch (e) {}

        // Conta lições concluídas em todos os cursos gravados
        let totalAulasConcluidas = 0;
        let totalBronze = 0;
        let totalPrata = 0;
        let xpCalculadoMinimo = 0;

        try {
            const gravado = JSON.parse(localStorage.getItem('galea_aulas_concluidas') || '{}');
            for (const idCurso in gravado) {
                if (Array.isArray(gravado[idCurso])) {
                    gravado[idCurso].forEach(aulaIndex => {
                        totalAulasConcluidas++;
                        const numAula = Number(aulaIndex) + 1;
                        const resto = numAula % 3;
                        if (resto === 0) {
                            // Aula gamificada -> Troféu de Prata e 30 XP (não ganha bronze)
                            totalPrata++;
                            xpCalculadoMinimo += 30;
                        } else if (resto === 2) {
                            // Aula de vídeo -> Troféu de Bronze e 20 XP
                            totalBronze++;
                            xpCalculadoMinimo += 20;
                        } else {
                            // Aula de texto -> Troféu de Bronze e 10 XP
                            totalBronze++;
                            xpCalculadoMinimo += 10;
                        }
                    });
                }
            }
        } catch (e) {}

        // Se o usuário concluiu lições, garante que o XP seja ao menos correspondente às lições feitas
        if (xpCalculadoMinimo > xp) {
            xp = xpCalculadoMinimo;
            try { localStorage.setItem('galea_usuario_xp', String(xp)); } catch (e) {}
        }

        // Cursos com 50% ou mais (metade) e 100% (concluídos)
        const meus = typeof GaleaCursos !== 'undefined' ? GaleaCursos.meus() : [];
        let totalOuro = 0;
        let totalPlatina = 0;

        meus.forEach(c => {
            const pct = Number(c.progresso) || 0;
            if (pct >= 50) {
                totalOuro += 1; // 1 troféu de ouro ao atingir a metade (50%)
            }
            if (pct >= 100) {
                totalOuro += 1; // +1 troféu de ouro ao atingir o fim (100%)
                totalPlatina += 1; // 1 troféu de platina ao finalizar o curso (100%)
            }
        });

        // Cálculo dinâmico do nível com base na pontuação
        const { nivel, xpNoNivel, xpNecessario, percentual } = calcularNivelEProgresso(xp);

        // Atualiza o número do Level à esquerda
        if (perfilXp) {
            perfilXp.textContent = nivel;
            perfilXp.title = `Nível ${nivel} (${xpNoNivel} / ${xpNecessario} pontos) — XP Total: ${xp} pts`;
        }

        // Atualiza o preenchimento da barra até o próximo nível
        if (perfilXpBarra) {
            perfilXpBarra.style.setProperty('--progresso', percentual + '%');
            perfilXpBarra.setAttribute('aria-valuenow', percentual);
            perfilXpBarra.setAttribute('aria-label', `Nível ${nivel} — Progresso: ${percentual}% (${xpNoNivel}/${xpNecessario} pontos)`);
            perfilXpBarra.title = `${xpNoNivel} / ${xpNecessario} pontos (${percentual}%)`;
        }

        // Atualiza a porcentagem exibida à direita da barra
        if (perfilXpPct) {
            perfilXpPct.textContent = percentual + '%';
        }

        // Sistema de Troféus Galea:
        // Bronze: Aulas gerais (texto e vídeo dão troféus de bronze)
        const bronze = totalBronze;
        // Prata: Aulas gamificadas dão troféus de prata (não bronze!)
        const prata = totalPrata;
        // Ouro: Ao chegar na metade dos cursos e no fim
        const ouro = totalOuro;
        // Platina: Ao finalizar o curso (100%)
        const platina = totalPlatina;

        if (trofeuBronze) {
            trofeuBronze.textContent = bronze;
            if (trofeuBronze.parentElement) {
                trofeuBronze.parentElement.setAttribute('title', `${bronze} Troféus de Bronze (aulas de texto e vídeo)`);
            }
        }
        if (trofeuPrata) {
            trofeuPrata.textContent = prata;
            if (trofeuPrata.parentElement) {
                trofeuPrata.parentElement.setAttribute('title', `${prata} Troféus de Prata (aulas gamificadas)`);
            }
        }
        if (trofeuOuro) {
            trofeuOuro.textContent = ouro;
            if (trofeuOuro.parentElement) {
                trofeuOuro.parentElement.setAttribute('title', `${ouro} Troféus de Ouro (metade e fim de cada curso)`);
            }
        }
        if (trofeuPlatina) {
            trofeuPlatina.textContent = platina;
            if (trofeuPlatina.parentElement) {
                trofeuPlatina.parentElement.setAttribute('title', `${platina} Troféu(s) de Platina (conclusão de 100% do curso)`);
            }
        }
    }

    // Sincroniza com a API em segundo plano caso autenticado
    async function sincronizarComServidor() {
        try {
            const resp = await fetch('/api/progresso', { credentials: 'include' });
            if (resp.ok) {
                const dados = await resp.json();
                if (dados.xp_total !== undefined) {
                    try { localStorage.setItem('galea_usuario_xp', String(dados.xp_total)); } catch (e) {}
                }
                if (dados.aulas_concluidas && typeof dados.aulas_concluidas === 'object') {
                    try { localStorage.setItem('galea_aulas_concluidas', JSON.stringify(dados.aulas_concluidas)); } catch (e) {}
                }
                atualizarGamificacao();
                renderizarCursos();
            }
        } catch (e) {
            // Operando em modo offline/cache local
        }
    }

    // ---------- Renderização das Listas de Cursos ----------
    function renderizarCursos() {
        if (typeof GaleaCursos === 'undefined') return;

        const meus = GaleaCursos.meus()
            .map(item => ({ curso: GaleaCursos.buscar(item.id), progresso: item.progresso }))
            .filter(item => item.curso);

        const andamento = meus.filter(item => item.progresso < 100);
        const concluidos = meus.filter(item => item.progresso >= 100);

        qtdAndamento.textContent = andamento.length;
        qtdConcluidos.textContent = concluidos.length;

        listaAndamento.replaceChildren(...(andamento.length
            ? andamento.map(item => itemAndamento(item.curso, item.progresso))
            : [itemVazio('Você ainda não adicionou nenhum curso. Visite a aba Descobrir para começar sua jornada!')]));

        listaConcluidos.replaceChildren(...(concluidos.length
            ? concluidos.map(item => itemConcluido(item.curso))
            : [itemVazio('Nenhum curso concluído ainda.')]));
    }

    function renderizarTudo() {
        atualizarGamificacao();
        renderizarCursos();
    }

    if (typeof GaleaCursos !== 'undefined') {
        GaleaCursos.aoMudar(renderizarTudo);
    }

    renderizarTudo();
    setTimeout(sincronizarComServidor, 80);

    // Reatividade: atualiza se o usuário terminar aulas na trilha em outra aba/iframe
    window.addEventListener('storage', (e) => {
        if (e.key === 'galea_usuario_xp' || e.key === 'galea_aulas_concluidas' || e.key === 'galea_meus_cursos') {
            renderizarTudo();
        }
    });

    window.addEventListener('focus', renderizarTudo);

    document.documentElement.dataset.cursosOk = '1';
})();
