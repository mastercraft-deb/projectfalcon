/* =====================================================
   Trilha do curso (pages/trilha.html)

   - Descobre o curso pelo endereço (trilha.html?curso=python).
   - Monta o mapa com UMA aula por círculo, na quantidade que o curso tem
     (script/trilhas.js), usando as cores do curso.
   - Quantas aulas estão concluídas vem do progresso do curso em "Meus cursos"
     (script/cursos.js): 45% de 24 aulas = 11 aulas concluídas.
   - O cartão da direita leva direto ao chat deste curso na Comunidade
     (e só libera o chat se o curso estiver em Meus cursos).

   Precisa do cursos.js e do trilhas.js carregados antes.
   ===================================================== */

(() => {
    'use strict';

    const CURSO_PADRAO = 'fisica';

    const layout = document.getElementById('trilha-layout');
    const lista = document.getElementById('trilha');
    const voltar = document.getElementById('trilha-voltar');
    const titulo = document.getElementById('trilha-curso');
    const concluidosEl = document.getElementById('trilha-concluidos');
    const totalEl = document.getElementById('trilha-total');
    const barra = document.getElementById('trilha-barra');
    const chatTitulo = document.getElementById('trilha-chat-titulo');
    const chatTexto = document.getElementById('trilha-chat-texto');
    const chatBotao = document.getElementById('trilha-chat-botao');
    const aviso = document.getElementById('trilha-aviso');

    // Se algum dos scripts de dados não carregou, avisa na tela em vez de ficar em branco
    if (!window.GaleaCursos || !window.GaleaTrilhas) {
        lista.innerHTML = '<li><p>Não foi possível carregar a trilha. Confira se cursos.js e trilhas.js estão na pasta script/ do projeto.</p></li>';
        return;
    }

    // ---------- qual curso? ----------
    const pedido = new URLSearchParams(location.search).get('curso');
    const cursoId = pedido && GaleaTrilhas.de(pedido) && GaleaCursos.buscar(pedido) ? pedido : CURSO_PADRAO;
    const curso = GaleaCursos.buscar(cursoId);
    const trilha = GaleaTrilhas.de(cursoId);

    // cores do curso: o CSS usa estas variáveis nos círculos, no cartão da aula atual e na barra
    layout.style.setProperty('--tema-claro', trilha.tema.claro);
    layout.style.setProperty('--tema-bloqueado', trilha.tema.bloqueado);

    document.title = trilha.titulo + ' - Galea';
    titulo.textContent = trilha.titulo;
    voltar.href = curso.pagina;               // "Sobre o curso" volta para a página deste curso
    chatTitulo.textContent = 'Chat de ' + curso.nome;

    // ---------- montar o mapa ----------
    function icone(nome) {
        const i = document.createElement('span');
        i.className = 'material-symbols-outlined';
        i.setAttribute('aria-hidden', 'true');
        i.textContent = nome;
        return i;
    }

    function criarAula(titulo, indice, estado) {
        const li = document.createElement('li');
        li.className = 'modulo modulo-' + estado;
        li.style.setProperty('--i', Math.min(indice, 12));   // atraso da animação (limitado nas trilhas longas)

        const botao = document.createElement('button');
        botao.type = 'button';
        botao.className = 'modulo-botao';
        if (estado === 'bloqueado') botao.setAttribute('aria-disabled', 'true');

        const no = document.createElement('span');
        no.className = 'modulo-no';
        no.appendChild(icone(estado === 'concluido' ? 'check' : estado === 'atual' ? 'star' : 'lock'));

        const rotulo = document.createElement('span');
        rotulo.className = 'modulo-rotulo';
        rotulo.textContent = (indice + 1) + ' – ' + titulo;

        const leitor = document.createElement('span');
        leitor.className = 'sr-only';
        leitor.textContent = estado === 'concluido' ? '(aula concluída)'
            : estado === 'atual' ? '(aula atual)'
            : '(bloqueada: conclua a aula anterior)';

        botao.append(no, rotulo, leitor);
        li.appendChild(botao);
        return li;
    }

    let primeiraVez = true;

    function renderizar() {
        const total = trilha.aulas.length;
        const progresso = GaleaCursos.progressoDe(cursoId);          // null = curso fora de Meus cursos
        const pct = progresso === null ? 0 : progresso;
        const concluidas = Math.min(total, Math.round(pct / 100 * total));

        lista.replaceChildren(...trilha.aulas.map((nome, i) =>
            criarAula(nome, i, i < concluidas ? 'concluido' : i === concluidas ? 'atual' : 'bloqueado')));

        concluidosEl.textContent = concluidas;
        totalEl.textContent = total;
        const porcentagem = Math.round(concluidas / total * 100);
        barra.style.setProperty('--progresso', porcentagem + '%');
        barra.setAttribute('aria-valuenow', porcentagem);

        atualizarChat(progresso !== null);

        // ao abrir, centraliza a aula atual na tela (útil quando o aluno já está lá no meio do mapa).
        // Usa window.scrollTo (e não scrollIntoView) para rolar só esta página, sem mexer na home.
        if (primeiraVez) {
            primeiraVez = false;
            const alvo = lista.querySelector('.modulo-atual') || lista.lastElementChild;
            if (alvo) {
                const topo = alvo.getBoundingClientRect().top + window.scrollY;
                window.scrollTo(0, Math.max(0, topo - window.innerHeight / 2));
            }
        }
    }

    // ---------- cartão do chat (lado direito) ----------
    function atualizarChat(noMeusCursos) {
        if (noMeusCursos) {
            chatTexto.textContent = 'Converse com quem também está fazendo ' + curso.nome + ': tire dúvidas e responda às mensagens da turma.';
            chatBotao.replaceChildren(icone('forum'), document.createTextNode('Abrir o chat'));
            chatBotao.dataset.acao = 'abrir';
        } else {
            chatTexto.textContent = 'O chat deste curso fica disponível quando você adiciona ' + curso.nome + ' a Meus cursos.';
            chatBotao.replaceChildren(icone('add_circle'), document.createTextNode('Adicionar a meus cursos'));
            chatBotao.dataset.acao = 'adicionar';
        }
    }

    chatBotao.addEventListener('click', () => {
        if (chatBotao.dataset.acao === 'adicionar') {
            if (GaleaCursos.adicionar(cursoId)) {
                // o GaleaCursos avisa a mudança (aoMudar) e a trilha inteira se redesenha
                aviso.textContent = curso.nome + ' foi adicionado a Meus cursos. O chat do curso já está disponível.';
                chatBotao.focus();
            }
            return;
        }
        abrirChat();
    });

    // Abre a Comunidade já no chat deste curso. Dentro da home: pede à home para trocar a página
    // do iframe (o menu lateral continua). Aberta sozinha: vai para a home já no chat.
    function abrirChat() {
        if (window.parent !== window) {
            window.parent.postMessage({ tipo: 'abrir-chat', chat: cursoId }, '*');
        } else {
            location.href = '../home.html#comunidade-' + cursoId;
        }
    }

    GaleaCursos.aoMudar(renderizar);   // a home pode responder depois com uma lista diferente
    renderizar();
})();
