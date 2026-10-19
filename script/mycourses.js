/* =====================================================
   Carrossel de Meus cursos (pages/mycourses.html)

   Este script NÃO move nada: ele só decide qual curso está
   selecionado e escreve, em cada cartão, o número da "vaga"
   (data-slot). O CSS (style/mycourses.css) cuida de posição,
   tamanho e animação.

       slot = posição do cartão - posição do selecionado
       0 = grande | 1, 2, 3 = menores | 4+ = escondido à direita
       -1 (ou menos) = já passou, escondido à esquerda

   Os cartões vêm da lista "Meus cursos" (script/cursos.js): quem
   adiciona cursos é a página Descobrir.

   Seta direita -> o próximo curso vira o selecionado.
   Seta esquerda -> o contrário. Os cartões menores também
   podem ser clicados, e as setas do teclado funcionam.
   ===================================================== */

(() => {
    const lista = document.querySelector('.carrossel-lista');
    if (!lista) return;

    // Se o cursos.js não carregou (faltando ou na pasta errada), avisa na tela em vez de ficar em branco
    if (!window.GaleaCursos) {
        const msg = document.querySelector('#carrossel-vazio');
        msg.textContent = 'Não foi possível carregar os cursos. Confira se o arquivo cursos.js está na pasta script/ do projeto.';
        msg.hidden = false;
        return;
    }

    let cartoes = [];
    const botaoAnterior = document.querySelector('.seta-ant');
    const botaoProximo = document.querySelector('.seta-prox');
    const aviso = document.querySelector('#carrossel-aviso');
    const vazio = document.querySelector('#carrossel-vazio'); 

    const ULTIMA_VAGA = 4; // vagas acima disso (e abaixo de -1) ficam agrupadas
    let atual = 0;         // índice do curso selecionado

    function limitar(valor, minimo, maximo) {
        return Math.max(minimo, Math.min(valor, maximo));
    }

    // ---------- montar os cartões a partir da lista "Meus cursos" ----------
    function criarCartao(curso, i) {
        const li = document.createElement('li');
        li.className = 'cartao';
        li.dataset.slot = i;
        li.style.setProperty('--i', i);

        const link = document.createElement('a');
        link.className = 'cartao-link';
        link.href = curso.pagina;
        link.target = '_top';   // a tela do curso ocupa a janela inteira, saindo do iframe da home

        const img = document.createElement('img');
        img.className = 'cartao-img';
        img.src = GaleaCursos.imagemDe(curso);
        img.alt = '';

        const texto = document.createElement('div');
        texto.className = 'cartao-texto';
        const titulo = document.createElement('h2');
        titulo.textContent = curso.nome;
        const descricao = document.createElement('p');
        descricao.textContent = curso.descricao;
        texto.append(titulo, descricao);

        link.append(img, texto);
        li.appendChild(link);
        return li;
    }

    let assinatura = null;   // identifica a lista atual: só refaz os cartões se ela mudar

    function montar() {
        const cursos = GaleaCursos.meus()
            .map(item => GaleaCursos.buscar(item.id))
            .filter(Boolean);

        const nova = cursos.map(c => c.id).join(',');
        if (nova === assinatura) return;
        assinatura = nova;

        lista.replaceChildren(...cursos.map(criarCartao));
        cartoes = [...lista.querySelectorAll('.cartao')];
        atual = limitar(atual, 0, Math.max(0, cartoes.length - 1));

        const semCursos = cartoes.length === 0;
        vazio.hidden = !semCursos;
        botaoAnterior.style.display = semCursos ? 'none' : '';
        botaoProximo.style.display = semCursos ? 'none' : '';
        renderizar(false);
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

        if (anunciar && cartoes.length > 0) {
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

    GaleaCursos.aoMudar(montar);   // a home pode responder depois com uma lista diferente
    montar();
})();
