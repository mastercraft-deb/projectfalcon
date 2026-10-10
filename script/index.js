/* =====================================================
   Troca automática das imagens da pilha (index.html, seção "sobre")

   Como funciona: cada imagem tem data-pos (0 = frente, 1 = meio, 2 = fundo...).
   A cada intervalo, TODAS as imagens avançam uma posição e a que estava na
   frente vai para o fim da fila. O CSS (style/index.css) cuida da animação:
   quando o data-pos muda, o navegador faz a transição sozinho.

   A troca só roda quando faz sentido. Ela PARA se:
   - a pilha não está na tela (não gasta processamento à toa);
   - o mouse está em cima ou o teclado está dentro dela (dá tempo de olhar);
   - a aba do navegador está em segundo plano;
   - a pessoa apertou o botão de pausa;
   - o sistema está configurado para reduzir movimento (aí nem roda).
   ===================================================== */

(() => {
    const pilha = document.querySelector('.pilha');
    const botao = document.querySelector('.pilha-pausa');
    if (!pilha || !botao) return;

    const bloco = pilha.parentElement;
    const imagens = [...pilha.querySelectorAll('.pilha-img')];
    const INTERVALO = 4500; // milissegundos entre uma troca e outra
    const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (imagens.length < 2) return;

    // "Estado" da troca: tudo que pode pará-la fica registrado aqui
    let timer = null;
    let naTela = false;
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

    // Olha o estado e liga ou desliga o relógio. Todo evento abaixo só
    // atualiza uma variável e chama esta função.
    function atualizar() {
        const deveRodar = naTela
            && !mouseEmCima
            && !focoDentro
            && !pausadoPeloUsuario
            && !menosMovimento.matches
            && !document.hidden;

        if (deveRodar && !timer) {
            timer = setInterval(avancar, INTERVALO);
        } else if (!deveRodar && timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    // Só começa quando a pilha aparece na tela (a seção fica abaixo da dobra)
    new IntersectionObserver(entradas => {
        naTela = entradas[0].isIntersecting;
        atualizar();
    }, { threshold: 0.4 }).observe(pilha);

    // Mouse em cima pausa. Em tela de toque não vale: ali o "mouseenter" ficaria
    // preso depois de um toque e a troca nunca mais voltaria.
    bloco.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { mouseEmCima = true; atualizar(); } });
    bloco.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') { mouseEmCima = false; atualizar(); } });

    // Teclado dentro da pilha (ex.: foco no botão de pausa) também pausa
    bloco.addEventListener('focusin',  () => { focoDentro = true;  atualizar(); });
    bloco.addEventListener('focusout', () => { focoDentro = false; atualizar(); });

    document.addEventListener('visibilitychange', atualizar);

    // Botão de pausa / retomar
    botao.addEventListener('click', () => {
        pausadoPeloUsuario = !pausadoPeloUsuario;
        botao.querySelector('.material-symbols-outlined').textContent =
            pausadoPeloUsuario ? 'play_arrow' : 'pause';
        botao.setAttribute('aria-label',
            pausadoPeloUsuario ? 'Retomar a troca de imagens' : 'Pausar a troca de imagens');
        atualizar();
    });

    // O botão só aparece quando existe troca automática (some se o sistema pede menos movimento)
    function ajustarBotao() {
        botao.hidden = menosMovimento.matches;
        atualizar();
    }
    menosMovimento.addEventListener('change', ajustarBotao);
    ajustarBotao();
})();
