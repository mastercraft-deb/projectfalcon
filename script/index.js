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
    const INTERVALO = 5000; // 5 segundos entre uma troca e outra

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


/* =====================================================
   Vídeo de fundo da seção 1 (index.html)

   O vídeo é decorativo: sem som, em loop e com botão de pausa.

   Ele começa sozinho, MAS:
   - se o sistema pede menos movimento (ou economia de dados), ele
     NÃO começa sozinho: aparece o quadro de reserva (o "poster") e
     o botão vira "Reproduzir", para a pessoa escolher assistir;
   - ele pausa quando o hero sai da tela e quando a aba fica em segundo plano.
   ===================================================== */

(() => {
    // Para TESTAR no Windows com "efeitos de animação" desligados: coloque false.
    // Em produção, deixe true por acessibilidade (o mesmo vale para a pilha de imagens acima).
    const RESPEITAR_MENOS_MOVIMENTO = true;

    const hero = document.querySelector('.hero');
    const video = hero && hero.querySelector('.hero-video');
    const botao = hero && hero.querySelector('.video-pausa');
    if (!video || !botao) return;

    const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)');
    const poupaDados = Boolean(navigator.connection && navigator.connection.saveData);

    // O vídeo deve começar sozinho neste momento?
    const comecaSozinho = () => !(RESPEITAR_MENOS_MOVIMENTO && menosMovimento.matches) && !poupaDados;

    let querTocar = comecaSozinho(); // a "vontade" atual: do sistema no início e, depois, da pessoa
    let naTela = true;

    video.muted = true; // alguns navegadores só liberam o autoplay se isso estiver ligado por script

    if (!querTocar) {
        // não baixa nem toca até a pessoa pedir
        video.removeAttribute('autoplay');
        video.preload = 'none';
        video.pause();
    }

    // Liga ou desliga o vídeo olhando todas as condições de uma vez
    function atualizar() {
        const deveTocar = querTocar && naTela && !document.hidden;

        if (deveTocar) {
            // o navegador pode bloquear o autoplay (ex.: economia de bateria):
            // nesse caso o quadro de reserva continua aparecendo e o botão mostra "Reproduzir"
            const promessa = video.play();
            if (promessa) promessa.catch(() => {});
        } else {
            video.pause();
        }
    }

    // O ícone do botão acompanha o que o vídeo está realmente fazendo
    function mostrarEstado() {
        const tocando = !video.paused;
        botao.querySelector('.material-symbols-outlined').textContent = tocando ? 'pause' : 'play_arrow';
        botao.setAttribute('aria-label', tocando ? 'Pausar o vídeo de fundo' : 'Reproduzir o vídeo de fundo');
    }
    video.addEventListener('play', mostrarEstado);
    video.addEventListener('pause', mostrarEstado);

    botao.addEventListener('click', () => {
        querTocar = video.paused; // estava parado: o clique pede para tocar; estava tocando: pede para parar
        if (querTocar) video.preload = 'auto';
        atualizar();
    });

    new IntersectionObserver(entradas => {
        naTela = entradas[0].isIntersecting;
        atualizar();
    }, { threshold: 0.15 }).observe(hero);

    document.addEventListener('visibilitychange', atualizar);

    // Se a pessoa mudar a configuração do sistema com a página aberta
    menosMovimento.addEventListener('change', () => {
        querTocar = comecaSozinho();
        atualizar();
    });

    botao.hidden = false;
    mostrarEstado();
})();
