/* =====================================================
   Galea Gamificação Engine
   Gerencia desafios interativos nas aulas:
   - Grid 3x3 de Chips (conforme visual de referência)
   - Caça ao Bug / Identifique o erro
   - Preenchimento de Lacunas (Code/Formula Fill)
   - Ordenação de passos lógicos

   Recursos Avançados:
   - Embaralhamento aleatório (respostas mudam de lugar)
   - Sem entrega imediata do gabarito (reavaliação construtiva)
   - Interface expandida e imersiva
   - 100% tolerante a variações de campos (linhasCodigo, passosEmbaralhados, etc.)
   ===================================================== */

window.GaleaGamificacao = (() => {
    'use strict';

    function embaralhar(array) {
        if (!Array.isArray(array)) return [];
        const copia = [...array];
        for (let i = copia.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copia[i], copia[j]] = [copia[j], copia[i]];
        }
        return copia;
    }

    function escaparHTML(texto) {
        if (texto === null || texto === undefined) return '';
        const mapa = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
        return String(texto).replace(/[&<>"']/g, m => mapa[m]);
    }

    function montar(containerPai, config, callbackConclusao) {
        if (!containerPai || !config || !Array.isArray(config.etapas) || config.etapas.length === 0) {
            return;
        }

        let etapaAtualIndice = 0;
        const totalEtapas = config.etapas.length;

        // Container principal do desafio
        const container = document.createElement('div');
        container.className = 'desafio-gamificado';
        containerPai.appendChild(container);

        function renderizarEtapa() {
            container.replaceChildren();

            const etapa = config.etapas[etapaAtualIndice];
            const porcentagemProgresso = totalEtapas > 1 
                ? Math.round((etapaAtualIndice / totalEtapas) * 100)
                : 25;

            // 1. Barra de progresso no topo (como na imagem de referência)
            const header = document.createElement('div');
            header.className = 'desafio-header';

            const trilhaBarra = document.createElement('div');
            trilhaBarra.className = 'desafio-progresso-trilha';
            const fillBarra = document.createElement('div');
            fillBarra.className = 'desafio-progresso-fill';
            fillBarra.style.width = `${Math.max(6, Math.min(100, porcentagemProgresso))}%`;
            fillBarra.animarSucesso = () => {
                const pct = Math.min(100, Math.round(((etapaAtualIndice + 1) / totalEtapas) * 100));
                fillBarra.style.width = `${pct}%`;
            };
            trilhaBarra.appendChild(fillBarra);

            const indicador = document.createElement('span');
            indicador.className = 'desafio-etapa-indicador';
            indicador.textContent = totalEtapas > 1 
                ? `Fase ${etapaAtualIndice + 1} de ${totalEtapas}` 
                : 'Desafio Prático de Fixação';

            header.append(trilhaBarra, indicador);
            container.appendChild(header);

            // 2. Enunciado do desafio
            const enunciado = document.createElement('div');
            enunciado.className = 'desafio-enunciado';

            const textoEnunciado = document.createElement('div');
            textoEnunciado.className = 'desafio-enunciado-texto';
            textoEnunciado.textContent = etapa.enunciado || 'Resolva o desafio prático de fixação:';
            enunciado.appendChild(textoEnunciado);

            if (etapa.dica) {
                const dicaContainer = document.createElement('div');
                dicaContainer.className = 'desafio-dica-container';

                const btnDica = document.createElement('button');
                btnDica.type = 'button';
                btnDica.className = 'desafio-dica-toggle';
                btnDica.setAttribute('aria-expanded', 'false');
                btnDica.setAttribute('title', 'Clique para ver a dica');
                btnDica.innerHTML = `
                    <span class="material-symbols-outlined dica-icone" aria-hidden="true">lightbulb</span>
                    <span class="dica-btn-texto">Ver dica</span>
                `;

                const dicaConteudo = document.createElement('div');
                dicaConteudo.className = 'desafio-dica-conteudo';
                dicaConteudo.hidden = true;
                dicaConteudo.innerHTML = `
                    <span class="material-symbols-outlined dica-conteudo-icone" aria-hidden="true">lightbulb</span>
                    <span class="dica-conteudo-texto">${escaparHTML(etapa.dica)}</span>
                `;

                btnDica.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const aberta = !dicaConteudo.hidden;
                    if (aberta) {
                        dicaConteudo.hidden = true;
                        btnDica.classList.remove('ativa');
                        btnDica.setAttribute('aria-expanded', 'false');
                        btnDica.querySelector('.dica-btn-texto').textContent = 'Ver dica';
                        btnDica.setAttribute('title', 'Clique para ver a dica');
                    } else {
                        dicaConteudo.hidden = false;
                        btnDica.classList.add('ativa');
                        btnDica.setAttribute('aria-expanded', 'true');
                        btnDica.querySelector('.dica-btn-texto').textContent = 'Ocultar dica';
                        btnDica.setAttribute('title', 'Clique para ocultar a dica');
                    }
                });

                dicaContainer.append(btnDica, dicaConteudo);
                enunciado.appendChild(dicaContainer);
            }
            container.appendChild(enunciado);

            // 3. Renderização conforme o tipo da mecânica
            const tipo = etapa.tipo || 'grid-chips';

            try {
                if (tipo === 'grid-chips') {
                    renderizarGridChips(container, etapa, fillBarra, avancarOuFinalizar);
                } else if (tipo === 'caca-bug') {
                    renderizarCacaBug(container, etapa, fillBarra, avancarOuFinalizar);
                } else if (tipo === 'lacunas') {
                    renderizarLacunas(container, etapa, fillBarra, avancarOuFinalizar);
                } else if (tipo === 'ordene') {
                    renderizarOrdene(container, etapa, fillBarra, avancarOuFinalizar);
                } else {
                    renderizarGridChips(container, etapa, fillBarra, avancarOuFinalizar);
                }
            } catch (err) {
                console.error('[GaleaGamificacao] Erro ao renderizar etapa:', err);
                // Fallback gracioso para nunca travar a aula
                exibirVitoriaFinal(container, callbackConclusao);
            }
        }

        function avancarOuFinalizar() {
            etapaAtualIndice++;
            if (etapaAtualIndice < totalEtapas) {
                renderizarEtapa();
            } else {
                exibirVitoriaFinal(container, callbackConclusao);
            }
        }

        renderizarEtapa();
    }

    // =====================================================
    // MECÂNICA 1: GRID DE CHIPS 3x3 EXPANDIDO
    // As opções mudam de lugar aleatoriamente e o gabarito não é entregue de cara!
    // =====================================================
    function renderizarGridChips(container, etapa, fillBarra, callbackAvancar) {
        const opcoesBase = Array.isArray(etapa.opcoes) ? etapa.opcoes : [];
        let opcoesEmbaralhadas = embaralhar(opcoesBase);

        const grid = document.createElement('div');
        grid.className = 'desafio-grid-chips';
        container.appendChild(grid);

        const boxAcoes = document.createElement('div');
        boxAcoes.className = 'desafio-acoes';
        const btnVerificar = document.createElement('button');
        btnVerificar.type = 'button';
        btnVerificar.className = 'desafio-btn-verificar';
        btnVerificar.innerHTML = `<span class="material-symbols-outlined">check</span> Verificar resposta`;
        btnVerificar.disabled = true;
        boxAcoes.appendChild(btnVerificar);
        container.appendChild(boxAcoes);

        let selecionados = new Set();
        let botoes = [];

        function desenharBotoes() {
            grid.replaceChildren();
            selecionados.clear();
            botoes = [];
            btnVerificar.disabled = true;

            opcoesEmbaralhadas.forEach((opcao, idx) => {
                const chip = document.createElement('button');
                chip.type = 'button';
                chip.className = 'desafio-chip';
                chip.textContent = typeof opcao === 'string' ? opcao : (opcao.texto || '');
                chip.dataset.correto = (typeof opcao === 'object' && opcao.correta) ? 'true' : 'false';

                chip.addEventListener('click', () => {
                    if (chip.disabled) return;
                    if (selecionados.has(idx)) {
                        selecionados.delete(idx);
                        chip.classList.remove('selecionado');
                    } else {
                        selecionados.add(idx);
                        chip.classList.add('selecionado');
                    }
                    btnVerificar.disabled = selecionados.size === 0;
                });

                botoes.push(chip);
                grid.appendChild(chip);
            });
        }

        desenharBotoes();

        btnVerificar.addEventListener('click', () => {
            botoes.forEach(b => b.disabled = true);
            boxAcoes.style.display = 'none';

            let acertouTudo = true;
            let marcouIncorretas = false;
            let totalCorretas = opcoesEmbaralhadas.filter(o => typeof o === 'object' && o.correta).length;
            if (totalCorretas === 0) totalCorretas = 1;
            let corretasMarcadas = 0;

            botoes.forEach((chip, idx) => {
                const ehCorreta = chip.dataset.correto === 'true';
                const foiMarcada = selecionados.has(idx);

                if (foiMarcada && ehCorreta) {
                    chip.classList.add('correto');
                    corretasMarcadas++;
                } else if (foiMarcada && !ehCorreta) {
                    chip.classList.add('incorreto');
                    marcouIncorretas = true;
                    acertouTudo = false;
                } else if (!foiMarcada && ehCorreta) {
                    acertouTudo = false;
                }
            });

            if (acertouTudo && corretasMarcadas === totalCorretas) {
                if (fillBarra) {
                    if (typeof fillBarra.animarSucesso === 'function') fillBarra.animarSucesso();
                    else fillBarra.style.width = '100%';
                }
                exibirBannerFeedback(container, true, etapa.explicacao || 'Resposta correta! Parabéns!', callbackAvancar);
            } else {
                let msgFeedback = marcouIncorretas 
                    ? 'Algumas opções selecionadas não atendem ao conceito da aula. Analise com calma e tente novamente!'
                    : `Você encontrou ${corretasMarcadas} de ${totalCorretas} opções corretas, mas ainda faltam outras! Procure atentamente.`;

                exibirBannerFeedback(container, false, msgFeedback, () => {
                    opcoesEmbaralhadas = embaralhar(opcoesBase);
                    desenharBotoes();
                    boxAcoes.style.display = 'flex';
                });
            }
        });
    }

    // =====================================================
    // MECÂNICA 2: CAÇA AO BUG (Bug Hunter)
    // Tolerante a linhasCodigo (strings) ou linhas (objetos)
    // =====================================================
    function renderizarCacaBug(container, etapa, fillBarra, callbackAvancar) {
        const rawLinhas = etapa.linhasCodigo || etapa.linhas || [];
        const box = document.createElement('div');
        box.className = 'desafio-caca-bug-container';
        container.appendChild(box);

        let linhaSelecionada = null;
        let linhas = [];

        const boxAcoes = document.createElement('div');
        boxAcoes.className = 'desafio-acoes';
        const btnVerificar = document.createElement('button');
        btnVerificar.type = 'button';
        btnVerificar.className = 'desafio-btn-verificar';
        btnVerificar.innerHTML = `<span class="material-symbols-outlined">bug_report</span> Localizar Bug`;
        btnVerificar.disabled = true;
        boxAcoes.appendChild(btnVerificar);

        rawLinhas.forEach((item, idx) => {
            const linhaEl = document.createElement('div');
            linhaEl.className = 'desafio-linha-codigo';

            let codigoTexto = '';
            let numLinha = idx + 1;

            if (typeof item === 'string') {
                const matchNum = item.match(/^(\d+)[\.\)]\s*(.*)$/);
                if (matchNum) {
                    numLinha = parseInt(matchNum[1], 10);
                    codigoTexto = matchNum[2];
                } else {
                    codigoTexto = item;
                }
            } else if (item && typeof item === 'object') {
                codigoTexto = item.codigo || item.texto || String(item);
                if (item.num) numLinha = item.num;
            }

            linhaEl.innerHTML = `
                <span class="desafio-num-linha">${numLinha}</span>
                <code>${escaparHTML(codigoTexto)}</code>
            `;

            linhaEl.addEventListener('click', () => {
                if (linhaEl.classList.contains('travado')) return;
                linhas.forEach(l => l.classList.remove('selecionado'));
                linhaEl.classList.add('selecionado');
                linhaSelecionada = idx;
                btnVerificar.disabled = false;
            });

            linhas.push(linhaEl);
            box.appendChild(linhaEl);
        });

        container.appendChild(boxAcoes);

        // Suporta linhaBug 0-based ou 1-based
        const alvoBug = typeof etapa.linhaBug === 'number' ? etapa.linhaBug : 0;

        btnVerificar.addEventListener('click', () => {
            linhas.forEach(l => l.classList.add('travado'));
            boxAcoes.style.display = 'none';

            // Aceita tanto se o autor definiu 0-based quanto 1-based
            const acertou = (linhaSelecionada === alvoBug) || (linhaSelecionada + 1 === alvoBug);

            if (acertou) {
                if (linhas[linhaSelecionada]) linhas[linhaSelecionada].classList.add('correto');
                if (fillBarra) {
                    if (typeof fillBarra.animarSucesso === 'function') fillBarra.animarSucesso();
                    else fillBarra.style.width = '100%';
                }
                exibirBannerFeedback(container, true, etapa.explicacao || 'Bug localizado com precisão!', callbackAvancar);
            } else {
                if (linhas[linhaSelecionada]) linhas[linhaSelecionada].classList.add('incorreto');
                exibirBannerFeedback(container, false, 'A linha marcada possui sintaxe e lógica válidas. Procure em outra linha onde a regra ensinada na aula foi violada!', () => {
                    linhas.forEach(l => {
                        l.classList.remove('travado', 'selecionado', 'incorreto', 'correto');
                    });
                    linhaSelecionada = null;
                    btnVerificar.disabled = true;
                    boxAcoes.style.display = 'flex';
                });
            }
        });
    }

    // =====================================================
    // MECÂNICA 3: PREENCHA A LACUNA (Code / Formula Fill)
    // Tolerante a template com {lacuna} ou linhasCodigo com {resposta}
    // =====================================================
    function renderizarLacunas(container, etapa, fillBarra, callbackAvancar) {
        const box = document.createElement('div');
        box.className = 'desafio-lacunas-box';

        let textoTemplate = '';
        let respostaEsperada = '';
        let bancoOpcoes = [];

        if (etapa.template) {
            textoTemplate = etapa.template;
            respostaEsperada = etapa.respostaCorreta || (Array.isArray(etapa.respostasCorretas) ? etapa.respostasCorretas[0] : '');
            bancoOpcoes = Array.isArray(etapa.opcoes) ? [...etapa.opcoes] : [];
        } else if (Array.isArray(etapa.linhasCodigo)) {
            const rawLinhas = etapa.linhasCodigo.join('\n');
            const matchSlot = rawLinhas.match(/\{([a-zA-Z0-9_\-]+)\}/);
            if (matchSlot) {
                respostaEsperada = matchSlot[1];
                textoTemplate = rawLinhas.replace(/\{([a-zA-Z0-9_\-]+)\}/, '{lacuna}');
            } else {
                textoTemplate = rawLinhas;
                respostaEsperada = Array.isArray(etapa.respostasCorretas) ? etapa.respostasCorretas[0] : '';
            }
        }

        if (Array.isArray(etapa.respostasCorretas) && etapa.respostasCorretas.length > 0 && !respostaEsperada) {
            respostaEsperada = etapa.respostasCorretas[0];
        }

        // Se faltarem opções no banco, gera opções distratoras contextuais
        if (bancoOpcoes.length === 0) {
            const distratoresComuns = ['get', 'pop', 'try', 'except', 'def', 'class', 'function', 'return', 'import', 'fundamento', 'pratica', 'lambda'];
            bancoOpcoes = [respostaEsperada];
            distratoresComuns.forEach(d => {
                if (d !== respostaEsperada && bancoOpcoes.length < 5) {
                    bancoOpcoes.push(d);
                }
            });
        }

        if (!textoTemplate.includes('{lacuna}')) {
            textoTemplate = textoTemplate + ' -> <span class="desafio-lacuna-slot">?</span>';
        } else {
            textoTemplate = textoTemplate.replace('{lacuna}', '<span class="desafio-lacuna-slot">?</span>');
        }

        box.innerHTML = textoTemplate;
        container.appendChild(box);

        const slot = box.querySelector('.desafio-lacuna-slot');
        let opcaoEscolhida = null;

        const banco = document.createElement('div');
        banco.className = 'desafio-opcoes-banco';
        container.appendChild(banco);

        const boxAcoes = document.createElement('div');
        boxAcoes.className = 'desafio-acoes';
        const btnVerificar = document.createElement('button');
        btnVerificar.type = 'button';
        btnVerificar.className = 'desafio-btn-verificar';
        btnVerificar.innerHTML = `<span class="material-symbols-outlined">send</span> Encaixar bloco`;
        btnVerificar.disabled = true;
        boxAcoes.appendChild(btnVerificar);
        container.appendChild(boxAcoes);

        let botoesOpcao = [];

        function desenharBanco() {
            banco.replaceChildren();
            botoesOpcao = [];
            opcaoEscolhida = null;
            if (slot) {
                slot.textContent = '?';
                slot.style.background = 'rgba(0, 0, 0, 0.55)';
                slot.style.borderColor = '#818cf8';
            }
            btnVerificar.disabled = true;

            const opcoesEmbaralhadas = embaralhar(bancoOpcoes);
            opcoesEmbaralhadas.forEach(op => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'desafio-chip';
                btn.textContent = op;

                btn.addEventListener('click', () => {
                    botoesOpcao.forEach(b => b.classList.remove('selecionado'));
                    btn.classList.add('selecionado');
                    opcaoEscolhida = op;
                    if (slot) slot.textContent = op;
                    btnVerificar.disabled = false;
                });

                botoesOpcao.push(btn);
                banco.appendChild(btn);
            });
        }

        desenharBanco();

        btnVerificar.addEventListener('click', () => {
            boxAcoes.style.display = 'none';

            let acertou = (opcaoEscolhida === respostaEsperada);
            if (Array.isArray(etapa.respostasCorretas)) {
                acertou = acertou || etapa.respostasCorretas.includes(opcaoEscolhida);
            }

            if (acertou) {
                if (slot) {
                    slot.style.background = '#16a34a';
                    slot.style.borderColor = '#22c55e';
                }
                if (fillBarra) {
                    if (typeof fillBarra.animarSucesso === 'function') fillBarra.animarSucesso();
                    else fillBarra.style.width = '100%';
                }
                exibirBannerFeedback(container, true, etapa.explicacao || 'Bloco encaixado perfeitamente!', callbackAvancar);
            } else {
                if (slot) {
                    slot.style.background = '#b91c1c';
                    slot.style.borderColor = '#ef4444';
                }
                exibirBannerFeedback(container, false, 'Esse bloco não completa a lógica corretamente. Releia o conceito ensinado na aula e tente outro bloco!', () => {
                    desenharBanco();
                    boxAcoes.style.display = 'flex';
                });
            }
        });
    }

    // =====================================================
    // MECÂNICA 4: ORDENAÇÃO DE PASSOS (Step Sorter)
    // Tolerante a itens, passosEmbaralhados ou ordemCorreta
    // =====================================================
    function renderizarOrdene(container, etapa, fillBarra, callbackAvancar) {
        const box = document.createElement('div');
        box.className = 'desafio-ordem-container';

        const baseItens = etapa.itens || etapa.passosEmbaralhados || etapa.passos || (Array.isArray(etapa.ordemCorreta) ? etapa.ordemCorreta : []);
        let itensAtuais = embaralhar(baseItens);
        const ordemEsperada = Array.isArray(etapa.ordemCorreta) ? etapa.ordemCorreta : baseItens;

        function montarItens() {
            box.replaceChildren();
            itensAtuais.forEach((itemTexto, idx) => {
                const el = document.createElement('div');
                el.className = 'desafio-item-ordem';
                el.innerHTML = `
                    <span class="material-symbols-outlined">swap_vert</span>
                    <strong style="color: #c084fc; margin-right: 6px;">${idx + 1}º</strong>
                    <span>${escaparHTML(itemTexto)}</span>
                    <div style="margin-left: auto; display: flex; gap: 6px;">
                        <button type="button" class="btn-subir" style="background:#221345;border:1px solid #7c3aed;border-radius:6px;color:#fff;padding:6px 12px;cursor:pointer;font-size:14px;" ${idx === 0 ? 'disabled' : ''}>▲</button>
                        <button type="button" class="btn-descer" style="background:#221345;border:1px solid #7c3aed;border-radius:6px;color:#fff;padding:6px 12px;cursor:pointer;font-size:14px;" ${idx === itensAtuais.length - 1 ? 'disabled' : ''}>▼</button>
                    </div>
                `;

                const btnSubir = el.querySelector('.btn-subir');
                const btnDescer = el.querySelector('.btn-descer');

                btnSubir.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (idx > 0) {
                        const temp = itensAtuais[idx];
                        itensAtuais[idx] = itensAtuais[idx - 1];
                        itensAtuais[idx - 1] = temp;
                        montarItens();
                    }
                });

                btnDescer.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (idx < itensAtuais.length - 1) {
                        const temp = itensAtuais[idx];
                        itensAtuais[idx] = itensAtuais[idx + 1];
                        itensAtuais[idx + 1] = temp;
                        montarItens();
                    }
                });

                box.appendChild(el);
            });
        }

        montarItens();
        container.appendChild(box);

        const boxAcoes = document.createElement('div');
        boxAcoes.className = 'desafio-acoes';
        const btnVerificar = document.createElement('button');
        btnVerificar.type = 'button';
        btnVerificar.className = 'desafio-btn-verificar';
        btnVerificar.innerHTML = `<span class="material-symbols-outlined">sort</span> Confirmar sequência`;
        boxAcoes.appendChild(btnVerificar);
        container.appendChild(boxAcoes);

        btnVerificar.addEventListener('click', () => {
            boxAcoes.style.display = 'none';

            const acertou = itensAtuais.every((texto, i) => {
                const limpoAtual = String(texto).trim();
                const limpoEsperado = String(ordemEsperada[i] || '').trim();
                return limpoAtual === limpoEsperado;
            });

            if (acertou) {
                if (fillBarra) {
                    if (typeof fillBarra.animarSucesso === 'function') fillBarra.animarSucesso();
                    else fillBarra.style.width = '100%';
                }
                exibirBannerFeedback(container, true, etapa.explicacao || 'Sequência lógica perfeita!', callbackAvancar);
            } else {
                exibirBannerFeedback(container, false, 'A sequência de etapas ainda não está na ordem lógica correta. Revise o passo a passo da aula e tente reorganizar!', () => {
                    boxAcoes.style.display = 'flex';
                });
            }
        });
    }

    // =====================================================
    // BANNER INFERIOR DE FEEDBACK (Frame 5)
    // =====================================================
    function exibirBannerFeedback(container, acertou, explicacao, onAvancar) {
        const existente = container.querySelector('.desafio-banner-feedback');
        if (existente) existente.remove();

        const banner = document.createElement('div');
        banner.className = `desafio-banner-feedback ${acertou ? '' : 'feedback-erro'}`;

        banner.innerHTML = `
            <div class="desafio-feedback-corpo">
                <div class="desafio-feedback-icone">
                    <span class="material-symbols-outlined">${acertou ? 'check' : 'priority_high'}</span>
                </div>
                <div class="desafio-feedback-info">
                    <span class="desafio-feedback-titulo">${acertou ? 'CORRETO' : 'QUASE LÁ!'}</span>
                    <p class="desafio-feedback-texto">${escaparHTML(explicacao)}</p>
                </div>
            </div>
            <button type="button" class="desafio-btn-proximo">
                ${acertou ? 'PRÓXIMO' : 'TENTAR NOVAMENTE'}
            </button>
        `;

        const btnProximo = banner.querySelector('.desafio-btn-proximo');
        btnProximo.addEventListener('click', (e) => {
            e.stopPropagation();
            banner.remove();
            if (typeof onAvancar === 'function') {
                onAvancar();
            }
        });

        container.appendChild(banner);
        btnProximo.focus();
    }

    // =====================================================
    // VITÓRIA FINAL DO DESAFIO
    // =====================================================
    function exibirVitoriaFinal(container, callbackConclusao) {
        container.replaceChildren();

        const vitoriaBox = document.createElement('div');
        vitoriaBox.style.textAlign = 'center';
        vitoriaBox.style.padding = '3rem 1.5rem';

        vitoriaBox.innerHTML = `
            <div style="width: 80px; height: 80px; margin: 0 auto 1.5rem; border-radius: 50%; background: linear-gradient(135deg, #f59e0b, #ea580c); display: grid; place-items: center; box-shadow: 0 0 35px rgba(245, 158, 11, 0.7); animation: pulsar-sucesso 1.5s infinite alternate;">
                <span class="material-symbols-outlined" style="font-size: 46px; color: #fff;">military_tech</span>
            </div>
            <h3 style="font-size: 1.8rem; margin: 0 0 0.8rem; color: #fff; font-weight: 800; letter-spacing: 0.04em;">DESAFIO CONCLUÍDO COM SUCESSO!</h3>
            <p style="font-size: 1.05rem; color: #cbd5e1; max-width: 540px; margin: 0 auto 2rem; line-height: 1.6;">
                Você concluiu o resumo prático e fixou os conceitos com maestria! Clique abaixo para registrar seu XP e retornar à trilha.
            </p>
            <div style="margin-bottom: 2rem;">
                <span style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 24px; background: rgba(34, 197, 94, 0.18); border: 1.5px solid #22c55e; border-radius: 999px; color: #86efac; font-weight: 800; font-size: 1.05rem;">
                    <span class="material-symbols-outlined" style="font-size: 24px;">stars</span>
                    +30 XP Garantidos!
                </span>
            </div>
            <div>
                <button type="button" class="btn-concluir-gamificacao" id="btn-concluir-gamificacao" style="display: inline-flex; align-items: center; gap: 10px; padding: 14px 32px; background: linear-gradient(90deg, #ea580c, #f97316); border: none; border-radius: 14px; color: #ffffff; font-size: 1.1rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer; box-shadow: 0 6px 25px rgba(234, 88, 12, 0.6); transition: all 0.2s ease;">
                    <span class="material-symbols-outlined" style="font-size: 24px;">arrow_back</span>
                    Concluir e Voltar para a Trilha
                </button>
            </div>
        `;

        container.appendChild(vitoriaBox);

        const btnFinalizar = vitoriaBox.querySelector('#btn-concluir-gamificacao');
        btnFinalizar.addEventListener('click', (e) => {
            e.stopPropagation();
            if (typeof callbackConclusao === 'function') {
                callbackConclusao();
            }
        });
        btnFinalizar.focus();
    }

    return {
        montar
    };
})();
