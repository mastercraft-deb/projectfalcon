/* =====================================================
   Carrossel de Meus cursos (pages/mycourses.html)

   Este script NÃO move nada: ele só decide qual curso está
   selecionado e escreve, em cada cartão, o número da "vaga"
   (data-slot). O CSS (style/mycourses.css) cuida de posição,
   tamanho e animação.

       slot = posição do cartão - posição do selecionado
       0 = grande | 1, 2, 3 = menores | 4+ = escondido à direita
       -1 (ou menos) = já passou, escondido à esquerda

   Seta direita -> o próximo curso vira o selecionado.
   Seta esquerda -> o contrário. Os cartões menores também
   podem ser clicados, e as setas do teclado funcionam.
   ===================================================== */

(() => {
    const lista = document.querySelector('.carrossel-lista');
    if (!lista) return;

    const cartoes = [...lista.querySelectorAll('.cartao')];
    const botaoAnterior = document.querySelector('.seta-ant');
    const botaoProximo = document.querySelector('.seta-prox');
    const aviso = document.querySelector('#carrossel-aviso');

    const ULTIMA_VAGA = 4; // vagas acima disso (e abaixo de -1) ficam agrupadas
    let atual = 0;         // índice do curso selecionado

    function limitar(valor, minimo, maximo) {
        return Math.max(minimo, Math.min(valor, maximo));
    }

    function renderizar(anunciar) {
        cartoes.forEach((cartao, i) => {
            const selecionado = i === atual;

            // a conta principal do carrossel
            cartao.dataset.slot = limitar(i - atual, -1, ULTIMA_VAGA);

            // só o cartão selecionado entra na ordem do Tab e é lido por leitores de tela
            cartao.setAttribute('aria-hidden', selecionado ? 'false' : 'true');
            cartao.querySelector('.cartao-link').tabIndex = selecionado ? 0 : -1;
        });

        botaoAnterior.setAttribute('aria-disabled', String(atual === 0));
        botaoProximo.setAttribute('aria-disabled', String(atual === cartoes.length - 1));

        if (anunciar) {
            const titulo = cartoes[atual].querySelector('h2').textContent;
            aviso.textContent = `Curso ${atual + 1} de ${cartoes.length}: ${titulo}`;
        }
    }

    function irPara(indice) {
        const novo = limitar(indice, 0, cartoes.length - 1);
        if (novo === atual) return;
        atual = novo;
        renderizar(true);
    }

    botaoAnterior.addEventListener('click', () => irPara(atual - 1));
    botaoProximo.addEventListener('click', () => irPara(atual + 1));

    // Clicar num cartão menor traz esse curso para a frente (em vez de abrir o link).
    // O cartão grande continua abrindo o curso normalmente.
    lista.addEventListener('click', evento => {
        const cartao = evento.target.closest('.cartao');
        if (!cartao) return;
        const indice = cartoes.indexOf(cartao);
        if (indice !== atual) {
            evento.preventDefault();
            irPara(indice);
        }
    });

    // Setas do teclado
    document.addEventListener('keydown', evento => {
        if (evento.altKey || evento.ctrlKey || evento.metaKey || evento.shiftKey) return;
        if (evento.key === 'ArrowLeft')  irPara(atual - 1);
        if (evento.key === 'ArrowRight') irPara(atual + 1);
    });

    renderizar(false);
})();
