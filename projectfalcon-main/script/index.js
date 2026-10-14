/* =====================================================
   Troca automática das imagens da pilha (index.html, seção "sobre")

   Como funciona: cada imagem tem data-pos (0 = frente, 1 = meio, 2 = fundo...).
   A cada intervalo, TODAS as imagens avançam uma posição e a que estava na
   frente vai para o fim da fila. O CSS (style/index.css) cuida da animação:
   quando o data-pos muda, o navegador faz a transição sozinho.

   A troca PARA se:
   - a pilha não está na tela;
   - o mouse está em cima ou o teclado está dentro dela;
   - a aba do navegador está em segundo plano;
   - a pessoa apertou o botão de pausa;
   - o sistema pede para reduzir movimento (se RESPEITAR_MENOS_MOVIMENTO = true).
   ===================================================== */

(() => {
    const INTERVALO = 4000; // 4 segundos entre uma troca e outra

    // Para TESTAR: coloque false. Se a troca passar a funcionar, o problema era
    // a configuração "reduzir animações" do seu sistema (comum no Windows).
    // Em produção, deixe true por acessibilidade.
    const RESPEITAR_MENOS_MOVIMENTO = true;

    const pilha = document.querySelector('.pilha');
    const botao = document.querySelector('.pilha-pausa');
    if (!pilha) return;

    const bloco = pilha.parentElement;
    const imagens = [...pilha.querySelectorAll('.pilha-img')];
    if (imagens.length < 2) return;

    const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reduzir = () => RESPEITAR_MENOS_MOVIMENTO && menosMovimento.matches;

    // Estado: tudo que pode pausar a troca fica registrado aqui
    let timer = null;
    let naTela = true; // começa true: se o observador falhar, a troca ainda roda
    let mouseEmCima = false;
    let focoDentro = false;
    let pausadoPeloUsuario = false;

    function avancar() {
        imagens.forEach(img => {
            const pos = Number(img.dataset.pos);
            // a da frente (0) vai para o fim; as outras sobem uma posição
            img.dataset.pos = (pos - 1 + imagens.length) % imagens.length;
        });
    }

    // Olha o estado e liga ou desliga o relógio
    function atualizar() {
        const deveRodar = naTela
            && !mouseEmCima
            && !focoDentro
            && !pausadoPeloUsuario
            && !reduzir()
            && !document.hidden;

        if (deveRodar && !timer) {
            timer = setInterval(avancar, INTERVALO);
        } else if (!deveRodar && timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    // Só roda quando a pilha está visível. Threshold 0 = basta um pedacinho
    // aparecer (0.4 exigia 40% e podia nunca ser atingido em telas pequenas).
    if ('IntersectionObserver' in window) {
        naTela = false;
        new IntersectionObserver(entradas => {
            naTela = entradas[0].isIntersecting;
            atualizar();
        }, { threshold: 0 }).observe(pilha);
    }

    // Mouse em cima pausa (só mouse; em toque o "enter" ficaria preso)
    bloco.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { mouseEmCima = true; atualizar(); } });
    bloco.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') { mouseEmCima = false; atualizar(); } });

    // Teclado dentro do bloco também pausa
    bloco.addEventListener('focusin',  () => { focoDentro = true;  atualizar(); });
    bloco.addEventListener('focusout', () => { focoDentro = false; atualizar(); });

    document.addEventListener('visibilitychange', atualizar);

    // Botão de pausa / retomar
    if (botao) {
        botao.addEventListener('click', () => {
            pausadoPeloUsuario = !pausadoPeloUsuario;
            botao.querySelector('.material-symbols-outlined').textContent =
                pausadoPeloUsuario ? 'play_arrow' : 'pause';
            botao.setAttribute('aria-label',
                pausadoPeloUsuario ? 'Retomar a troca de imagens' : 'Pausar a troca de imagens');
            atualizar();
        });
    }

    // O botão só aparece quando existe troca automática
    function ajustarBotao() {
        if (botao) botao.hidden = reduzir();
        atualizar();
    }
    menosMovimento.addEventListener('change', ajustarBotao);
    ajustarBotao();
})();