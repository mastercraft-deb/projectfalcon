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
   ===================================================== */

window.GaleaGamificacao = (() => {
    'use strict';

    function embaralhar(array) {
        const copia = [...array];
        for (let i = copia.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copia[i], copia[j]] = [copia[j], copia[i]];
        }
        return copia;
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
            const porcentagemProgresso = Math.round(((etapaAtualIndice) / totalEtapas) * 100) + 15;

            // 1. Barra de progresso no topo (como na imagem de referência)
            const header = document.createElement('div');
            header.className = 'desafio-header';

            const trilhaBarra = document.createElement('div');
            trilhaBarra.className = 'desafio-progresso-trilha';
            const fillBarra = document.createElement('div');
            fillBarra.className = 'desafio-progresso-fill';
            fillBarra.style.width = `${Math.min(100, porcentagemProgresso)}%`;
            trilhaBarra.appendChild(fillBarra);

            const indicador = document.createElement('span');
            indicador.className = 'desafio-etapa-indicador';
            indicador.textContent = totalEtapas > 1 
                ? `Desafio ${etapaAtualIndice + 1} de ${totalEtapas}` 
                : 'Desafio Prático de Fixação';

            header.append(trilhaBarra, indicador);
            container.appendChild(header);

            // 2. Enunciado do desafio
            const enunciado = document.createElement('div');
            enunciado.className = 'desafio-enunciado';
            enunciado.textContent = etapa.enunciado;
            if (etapa.dica) {
                const sub = document.createElement('span');
                sub.className = 'desafio-dica-contexto';
                sub.textContent = etapa.dica;
                enunciado.appendChild(sub);
            }
            container.appendChild(enunciado);

            // 3. Renderização conforme o tipo da mecânica
            const tipo = etapa.tipo || 'grid-chips';

            if (tipo === 'grid-chips') {
                renderizarGridChips(container, etapa, fillBarra, avancarOuFinalizar);
            } else if (tipo === 'caca-bug') {
                renderizarCacaBug(container, etapa, fillBarra, avancarOuFinalizar);
            } else if (tipo === 'lacunas') {
                renderizarLacunas(container, etapa, fillBarra, avancarOuFinalizar);
            } else if (tipo === 'ordene') {
                renderizarOrdene(container, etapa, fillBarra, avancarOuFinalizar);
            }
        }

        function avancarOuFinalizar() {
            etapaAtualIndice++;
            if (etapaAtualIndice < totalEtapas) {
                renderizarEtapa();
            } else {
                // Todas as etapas foram vencidas!
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
        let opcoesEmbaralhadas = embaralhar(etapa.opcoes);

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
                chip.textContent = opcao.texto;
                chip.dataset.correto = opcao.correta ? 'true' : 'false';

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
            let totalCorretas = opcoesEmbaralhadas.filter(o => o.correta).length;
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
                    // NÃO entrega a resposta logo de cara!
                    acertouTudo = false;
                }
            });

            if (acertouTudo && corretasMarcadas === totalCorretas) {
                fillBarra.style.width = '100%';
                exibirBannerFeedback(container, true, etapa.explicacao, callbackAvancar);
            } else {
                let msgFeedback = marcouIncorretas 
                    ? 'Algumas opções selecionadas não atendem ao conceito da aula. Analise com calma e tente novamente!'
                    : `Você encontrou ${corretasMarcadas} de ${totalCorretas} opções corretas, mas ainda faltam outras! Procure atentamente.`;

                exibirBannerFeedback(container, false, msgFeedback, () => {
                    // Reembaralha as respostas para mudarem de posição!
                    opcoesEmbaralhadas = embaralhar(etapa.opcoes);
                    desenharBotoes();
                    boxAcoes.style.display = 'flex';
                });
            }
        });
    }

    // =====================================================
    // MECÂNICA 2: CAÇA AO BUG (Bug Hunter)
    // Sem revelar a linha correta em caso de erro
    // =====================================================
    function renderizarCacaBug(container, etapa, fillBarra, callbackAvancar) {
        const box = document.createElement('div');
        box.className = 'desafio-caca-bug-container';
        container.appendChild(box);

        let linhaSelecionada = null;
        let linhas = [];

        etapa.linhas.forEach((linhaData, idx) => {
            const linhaEl = document.createElement('div');
            linhaEl.className = 'desafio-linha-codigo';
            linhaEl.innerHTML = `
                <span class="desafio-num-linha">${idx + 1}</span>
                <code>${escaparHTML(linhaData.codigo)}</code>
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

        const boxAcoes = document.createElement('div');
        boxAcoes.className = 'desafio-acoes';
        const btnVerificar = document.createElement('button');
        btnVerificar.type = 'button';
        btnVerificar.className = 'desafio-btn-verificar';
        btnVerificar.innerHTML = `<span class="material-symbols-outlined">bug_report</span> Localizar Bug`;
        btnVerificar.disabled = true;
        boxAcoes.appendChild(btnVerificar);
        container.appendChild(boxAcoes);

        btnVerificar.addEventListener('click', () => {
            linhas.forEach(l => l.classList.add('travado'));
            boxAcoes.style.display = 'none';

            const acertou = linhaSelecionada === etapa.linhaBug;
            if (acertou) {
                linhas[linhaSelecionada].classList.add('correto');
                fillBarra.style.width = '100%';
                exibirBannerFeedback(container, true, etapa.explicacao, callbackAvancar);
            } else {
                linhas[linhaSelecionada].classList.add('incorreto');
                // NÃO REVELA O BUG DE CARA!
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
    // As opções do banco mudam de lugar aleatoriamente
    // =====================================================
    function renderizarLacunas(container, etapa, fillBarra, callbackAvancar) {
        const box = document.createElement('div');
        box.className = 'desafio-lacunas-box';

        const htmlTexto = etapa.template.replace('{lacuna}', '<span class="desafio-lacuna-slot">?</span>');
        box.innerHTML = htmlTexto;
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
            slot.textContent = '?';
            slot.style.background = 'rgba(0, 0, 0, 0.55)';
            slot.style.borderColor = '#818cf8';
            btnVerificar.disabled = true;

            const opcoesEmbaralhadas = embaralhar(etapa.opcoes);
            opcoesEmbaralhadas.forEach(op => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'desafio-chip';
                btn.textContent = op;

                btn.addEventListener('click', () => {
                    botoesOpcao.forEach(b => b.classList.remove('selecionado'));
                    btn.classList.add('selecionado');
                    opcaoEscolhida = op;
                    slot.textContent = op;
                    btnVerificar.disabled = false;
                });

                botoesOpcao.push(btn);
                banco.appendChild(btn);
            });
        }

        desenharBanco();

        btnVerificar.addEventListener('click', () => {
            boxAcoes.style.display = 'none';
            const acertou = opcaoEscolhida === etapa.respostaCorreta;

            if (acertou) {
                slot.style.background = '#16a34a';
                slot.style.borderColor = '#22c55e';
                fillBarra.style.width = '100%';
                exibirBannerFeedback(container, true, etapa.explicacao, callbackAvancar);
            } else {
                slot.style.background = '#b91c1c';
                slot.style.borderColor = '#ef4444';
                // Não entrega a resposta de cara!
                exibirBannerFeedback(container, false, 'Esse bloco não completa a lógica corretamente. Releia a fórmula/sintaxe ensinada na aula e tente outro bloco!', () => {
                    desenharBanco();
                    boxAcoes.style.display = 'flex';
                });
            }
        });
    }

    // =====================================================
    // MECÂNICA 4: ORDENAÇÃO DE PASSOS (Step Sorter)
    // =====================================================
    function renderizarOrdene(container, etapa, fillBarra, callbackAvancar) {
        const box = document.createElement('div');
        box.className = 'desafio-ordem-container';

        // Embaralha itens no início
        let itensAtuais = embaralhar(etapa.itens);

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
                        <button type="button" class="btn-subir" style="background:#221345;border:1px solid #7c3aed;border-radius:6px;color:#fff;padding:4px 8px;cursor:pointer;" ${idx === 0 ? 'disabled' : ''}>▲</button>
                        <button type="button" class="btn-descer" style="background:#221345;border:1px solid #7c3aed;border-radius:6px;color:#fff;padding:4px 8px;cursor:pointer;" ${idx === itensAtuais.length - 1 ? 'disabled' : ''}>▼</button>
                    </div>
                `;

                el.querySelector('.btn-subir').addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (idx > 0) {
                        const temp = itensAtuais[idx];
                        itensAtuais[idx] = itensAtuais[idx - 1];
                        itensAtuais[idx - 1] = temp;
                        montarItens();
                    }
                });

                el.querySelector('.btn-descer').addEventListener('click', (e) => {
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
            const acertou = itensAtuais.every((texto, i) => texto === etapa.ordemCorreta[i]);

            if (acertou) {
                fillBarra.style.width = '100%';
                exibirBannerFeedback(container, true, etapa.explicacao, callbackAvancar);
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
        btnProximo.addEventListener('click', () => {
            banner.remove();
            onAvancar();
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
        vitoriaBox.style.padding = '2.5rem 1.5rem';

        vitoriaBox.innerHTML = `
            <div style="width: 72px; height: 72px; margin: 0 auto 1.2rem; border-radius: 50%; background: linear-gradient(135deg, #f59e0b, #ea580c); display: grid; place-items: center; box-shadow: 0 0 30px rgba(245, 158, 11, 0.6);">
                <span class="material-symbols-outlined" style="font-size: 42px; color: #fff;">military_tech</span>
            </div>
            <h3 style="font-size: 1.5rem; margin: 0 0 0.6rem; color: #fff; font-weight: 800;">DESAFIO CONCLUÍDO COM SUCESSO!</h3>
            <p style="font-size: 1rem; color: #cbd5e1; max-width: 500px; margin: 0 auto 1.8rem; line-height: 1.6;">
                Você fixou o conhecimento na prática! O botão de concluir aula logo abaixo agora está desbloqueado para registrar seus pontos de XP.
            </p>
            <div style="display: inline-flex; align-items: center; gap: 8px; padding: 8px 20px; background: rgba(34, 197, 94, 0.18); border: 1.5px solid #22c55e; border-radius: 999px; color: #86efac; font-weight: 700; font-size: 0.95rem;">
                <span class="material-symbols-outlined" style="font-size: 20px;">stars</span>
                Recompensa Pronta para Coleta
            </div>
        `;

        container.appendChild(vitoriaBox);

        if (typeof callbackConclusao === 'function') {
            callbackConclusao();
        }
    }

    function escaparHTML(texto) {
        if (!texto) return '';
        const mapa = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
        return String(texto).replace(/[&<>"']/g, m => mapa[m]);
    }

    return {
        montar
    };
})();
