/* =====================================================
   Perfil (pages/account.html): listas de cursos

   Monta "Cursos em andamento" e "Cursos concluídos" a partir da lista
   "Meus cursos" (script/cursos.js), a mesma usada pela página Descobrir
   e pelo carrossel de Meus cursos. Quando você adiciona um curso na
   pesquisa, ele aparece aqui.

   Curso com progresso menor que 100% = em andamento; 100% = concluído.
   Precisa do script/cursos.js carregado antes.
   ===================================================== */

(() => {
    'use strict';

    const listaAndamento = document.getElementById('perfil-lista-cursos');
    const listaConcluidos = document.getElementById('perfil-lista-concluidos');
    const qtdAndamento = document.getElementById('perfil-qtd-cursos');
    const qtdConcluidos = document.getElementById('perfil-qtd-concluidos');
    if (!listaAndamento || !listaConcluidos) return;

    function el(tag, classe, texto) {
        const e = document.createElement(tag);
        if (classe) e.className = classe;
        if (texto !== undefined) e.textContent = texto;
        return e;
    }

    // <a class="curso-item"> abrindo a página do curso (target _top: sai do iframe da home)
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

    function renderizar() {
        const meus = GaleaCursos.meus()
            .map(item => ({ curso: GaleaCursos.buscar(item.id), progresso: item.progresso }))
            .filter(item => item.curso);

        const andamento = meus.filter(item => item.progresso < 100);
        const concluidos = meus.filter(item => item.progresso >= 100);

        qtdAndamento.textContent = andamento.length;
        qtdConcluidos.textContent = concluidos.length;

        listaAndamento.replaceChildren(...(andamento.length
            ? andamento.map(item => itemAndamento(item.curso, item.progresso))
            : [itemVazio('Você ainda não está fazendo nenhum curso. Abra Descobrir para adicionar.')]));

        listaConcluidos.replaceChildren(...(concluidos.length
            ? concluidos.map(item => itemConcluido(item.curso))
            : [itemVazio('Nenhum curso concluído ainda.')]));
    }

    GaleaCursos.aoMudar(renderizar);   // a home pode responder depois com uma lista diferente
    renderizar();
    document.documentElement.dataset.cursosOk = '1';   // marca: tudo carregou (conferido no account.html)
})();
