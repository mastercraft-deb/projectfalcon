/* =====================================================
   Descobrir (pages/search.html)

   - Mostra os cursos do catálogo.
   - Pesquisa rápida por nome e palavras-chave.
   - Ao clicar em qualquer curso, direciona para a tela do curso
     (pages/courses/*.html), onde são exibidos os detalhes, lições,
     XP total e tempo estimado.
   - O curso só é adicionado a "Meus cursos" quando o aluno iniciar
     e concluir sua primeira lição na trilha.
   ===================================================== */

(() => {
    'use strict';

    if (!window.GaleaCursos) {
        const msg = document.getElementById('busca-vazio');
        if (msg) {
            msg.textContent = 'Não foi possível carregar os cursos. Confira se o arquivo cursos.js está na pasta script/ do projeto.';
            msg.hidden = false;
        }
        return;
    }

    const grade = document.getElementById('busca-grade');
    const campo = document.getElementById('busca-campo');
    const formulario = document.getElementById('busca-form');
    const resumo = document.getElementById('busca-resumo');
    const vazio = document.getElementById('busca-vazio');

    function normalizar(texto) {
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
    }

    function combina(curso, termo) {
        if (!termo) return true;
        const textos = [curso.nome, ...(curso.palavras || [])].map(normalizar);
        return textos.some(t => t.includes(termo));
    }

    function icone(nome) {
        const i = document.createElement('span');
        i.className = 'material-symbols-outlined';
        i.setAttribute('aria-hidden', 'true');
        i.textContent = nome;
        return i;
    }

    // ---------- Montar o cartão do curso ----------
    function criarCartao(curso) {
        const progresso = GaleaCursos.progressoDe(curso.id);
        const noMeus = progresso !== null && progresso > 0;
        const concluido = noMeus && progresso >= 100;

        const li = document.createElement('li');
        li.className = 'curso' + (noMeus ? ' nos-meus' : '');
        li.dataset.id = curso.id;

        // O cartão inteiro direciona diretamente para a tela do curso (target _top)
        const link = document.createElement('a');
        link.className = 'curso-link';
        link.href = curso.pagina;
        link.target = '_top';
        link.setAttribute('aria-label', `${curso.nome} – Abrir tela do curso para ver detalhes, lições, XP e tempo`);

        const img = document.createElement('img');
        img.className = 'curso-img';
        img.src = GaleaCursos.imagemDe(curso);
        img.alt = '';
        img.loading = 'lazy';
        link.appendChild(img);

        // Indicador de ação ao passar o mouse ou focar
        const cta = document.createElement('span');
        cta.className = 'curso-cta';
        cta.appendChild(icone('play_circle'));
        cta.appendChild(document.createTextNode('Ver curso'));
        link.appendChild(cta);

        const nome = document.createElement('span');
        nome.className = 'curso-nome';
        nome.textContent = curso.nome;
        link.appendChild(nome);

        // Selo de status se já estiver em andamento ou concluído
        if (noMeus) {
            const selo = document.createElement('span');
            selo.className = 'curso-selo';
            selo.appendChild(icone(concluido ? 'check_circle' : 'bookmark_added'));
            selo.appendChild(document.createTextNode(concluido ? 'Concluído' : `${progresso}% concluído`));
            link.appendChild(selo);
        }

        li.appendChild(link);
        return li;
    }

    // ---------- Desenhar a grade ----------
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

    campo.addEventListener('input', renderizar);
    formulario.addEventListener('submit', evento => evento.preventDefault());

    // Se o progresso de algum curso mudar, atualiza os selos
    GaleaCursos.aoMudar(renderizar);

    renderizar();
})();
