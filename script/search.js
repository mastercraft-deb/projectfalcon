/* =====================================================
   Descobrir (pages/search.html)

   - Antes de pesquisar: mostra TODOS os cursos do catálogo.
   - Ao digitar: mostra só os cursos que combinam com o texto
     (nome ou palavras-chave; acentos e maiúsculas não importam).
   - Ao passar o mouse num curso aparece o botão "Adicionar a meus cursos".
     Isso atualiza a lista compartilhada (script/cursos.js), que alimenta o
     carrossel de Meus cursos e a lista de cursos do perfil.

   Precisa do script/cursos.js carregado antes.
   ===================================================== */

(() => {
    'use strict';

    // Se o cursos.js não carregou (faltando ou na pasta errada), avisa na tela em vez de ficar em branco
    if (!window.GaleaCursos) {
        const msg = document.getElementById('busca-vazio');
        msg.textContent = 'Não foi possível carregar os cursos. Confira se o arquivo cursos.js está na pasta script/ do projeto.';
        msg.hidden = false;
        return;
    }

    const grade = document.getElementById('busca-grade');
    const campo = document.getElementById('busca-campo');
    const formulario = document.getElementById('busca-form');
    const resumo = document.getElementById('busca-resumo');
    const vazio = document.getElementById('busca-vazio');
    const aviso = document.getElementById('busca-aviso');
    let temporizadorAviso = null;

    // minúsculas e sem acentos: "Física" = "fisica" = "FISICA"
    function normalizar(texto) {
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
    }

    function combina(curso, termo) {
        if (!termo) return true;
        const textos = [curso.nome, ...curso.palavras].map(normalizar);
        return textos.some(t => t.includes(termo));
    }

    function icone(nome) {
        const i = document.createElement('span');
        i.className = 'material-symbols-outlined';
        i.setAttribute('aria-hidden', 'true');
        i.textContent = nome;
        return i;
    }

    // ---------- montar um cartão ----------
    function criarCartao(curso) {
        const progresso = GaleaCursos.progressoDe(curso.id);   // null = não está nos meus cursos
        const noMeus = progresso !== null;
        const concluido = noMeus && progresso >= 100;

        const li = document.createElement('li');
        li.className = 'curso' + (noMeus ? ' nos-meus' : '');   // borda azul = já está nos meus cursos
        li.dataset.id = curso.id;

        // o cartão todo abre a página do curso (target _top: sai do iframe, como no carrossel)
        const link = document.createElement('a');
        link.className = 'curso-link';
        link.href = curso.pagina;
        link.target = '_top';

        const img = document.createElement('img');
        img.className = 'curso-img';
        img.src = GaleaCursos.imagemDe(curso);
        img.alt = '';
        img.loading = 'lazy';
        link.appendChild(img);

        const nome = document.createElement('span');
        nome.className = 'curso-nome';
        nome.textContent = curso.nome;
        link.appendChild(nome);
        li.appendChild(link);

        // selo sempre visível
        if (noMeus) {
            const selo = document.createElement('span');
            selo.className = 'curso-selo';
            selo.appendChild(icone(concluido ? 'check_circle' : 'bookmark_added'));
            selo.appendChild(document.createTextNode(concluido ? 'Concluído' : 'Nos seus cursos'));
            li.appendChild(selo);
        }

        // botão (fica fora do <a>: um botão dentro de um link não é válido em HTML).
        // Vale para todos os cursos: os que você já tem mostram "Remover", mesmo os concluídos.
        {
            const botao = document.createElement('button');
            botao.type = 'button';
            botao.dataset.acao = noMeus ? 'remover' : 'adicionar';
            botao.className = 'curso-acao' + (noMeus ? ' remover' : '');
            botao.appendChild(icone(noMeus ? 'remove_circle' : 'add_circle'));
            botao.appendChild(document.createTextNode(noMeus ? 'Remover de meus cursos' : 'Adicionar a meus cursos'));
            botao.setAttribute('aria-label',
                (noMeus ? 'Remover ' : 'Adicionar ') + curso.nome + (noMeus ? ' de ' : ' a ') + 'Meus cursos');
            li.appendChild(botao);
        }
        return li;
    }

    // ---------- desenhar a grade (todos ou só os que combinam com a pesquisa) ----------
    function renderizar() {
        const termo = normalizar(campo.value);
        const resultado = GaleaCursos.catalogo.filter(curso => combina(curso, termo));

        grade.replaceChildren(...resultado.map(criarCartao));
        vazio.hidden = resultado.length > 0;

        if (!termo) {
            resumo.textContent = `${resultado.length} cursos disponíveis`;
        } else if (resultado.length === 0) {
            resumo.textContent = '';
        } else {
            resumo.textContent = resultado.length === 1 ? '1 curso encontrado' : `${resultado.length} cursos encontrados`;
        }
    }

    function mostrarAviso(texto) {
        if (window.parent !== window) return;   // dentro da home, quem avisa é a home (sino + aviso)
        aviso.textContent = texto;
        aviso.hidden = false;
        clearTimeout(temporizadorAviso);
        temporizadorAviso = setTimeout(() => { aviso.hidden = true; }, 2800);
    }

    // ---------- adicionar / remover ----------
    grade.addEventListener('click', evento => {
        const botao = evento.target.closest('[data-acao]');
        if (!botao) return;
        const id = botao.closest('.curso').dataset.id;
        const curso = GaleaCursos.buscar(id);

        if (botao.dataset.acao === 'adicionar' && GaleaCursos.adicionar(id)) {
            mostrarAviso(`${curso.nome} foi adicionado a Meus cursos e ao seu perfil.`);
        } else if (botao.dataset.acao === 'remover' && GaleaCursos.remover(id)) {
            mostrarAviso(`${curso.nome} foi removido de Meus cursos e do seu perfil.`);
        }
        // o GaleaCursos avisa a mudança (aoMudar) e a grade se redesenha;
        // devolve o foco ao botão novo do mesmo curso, para quem usa teclado
        const novo = grade.querySelector(`.curso[data-id="${id}"] .curso-acao`);
        if (novo) novo.focus();
    });

    campo.addEventListener('input', renderizar);
    formulario.addEventListener('submit', evento => evento.preventDefault());   // Enter não recarrega

    // se a lista mudar por outro caminho (ex.: a home respondeu depois), redesenha
    GaleaCursos.aoMudar(renderizar);

    renderizar();
})();
