/* =====================================================
   Home (home.html)

   - Marca o item ativo do menu lateral e abre a página pedida pelo endereço
     (home.html#perfil, home.html#trilha).
   - A foto de perfil do canto abre a página de perfil.
   - Guarda o nome e a foto do perfil e entrega para as páginas do iframe
     (ex.: comunidade), que pedem por mensagem.
   - Esconde a foto do canto enquanto uma janela com a foto está aberta.
   - Guarda a lista "Meus cursos" e entrega para as páginas do iframe.

   Precisa ser carregado DEPOIS do script/script.js, que define alterarLink().
   ===================================================== */

(() => {
    // Páginas que a home abre direto pelo endereço (home.html#perfil, home.html#trilha).
    // "menu" é o item do menu lateral que fica marcado quando a página abre.
    const rotas = {
        perfil: { url: 'pages/account.html', menu: 'perfil' },
        trilha: { url: 'pages/trilha.html',  menu: 'cursos' }
    };
    const menu = document.querySelector('.menu');

    function marcarMenu(nome) {
        menu.querySelectorAll('.botoes').forEach(botao => {
            const ativo = botao.dataset.menu === nome;
            botao.classList.toggle('ativo', ativo);
            if (ativo) botao.setAttribute('aria-current', 'page');
            else botao.removeAttribute('aria-current');
        });
    }

    // clicar num item do menu marca esse item
    menu.addEventListener('click', evento => {
        const botao = evento.target.closest('.botoes');
        if (botao) marcarMenu(botao.dataset.menu);
    });

    // a foto de perfil no canto abre o perfil e marca "Perfil" no menu
    document.getElementById('perfil-rapido').addEventListener('click', () => {
        alterarLink('pages/account.html');
        marcarMenu('perfil');
    });

    // Quando a foto do perfil é ampliada (dentro do iframe), esconde a foto pequena
    // do canto para ela não aparecer duas vezes. A página do iframe avisa por mensagem.
    const fotoCanto = document.getElementById('perfil-rapido');
    const quadro = document.getElementById('teste001');

    const imagemCanto = fotoCanto.querySelector('img');

    // Perfil (nome e foto) guardado aqui na home. As páginas dentro do iframe (perfil,
    // comunidade...) são documentos separados e, dependendo de como o projeto é aberto,
    // podem NÃO compartilhar o armazenamento do navegador. A home, porém, é a mesma durante
    // toda a visita: ela recebe as mudanças do perfil e entrega para quem pedir.
    const perfil = { nome: null, foto: null };
    const nomeValido = v => typeof v === 'string' && v.trim() !== '' && v.length <= 40;
    const fotoValida = v => typeof v === 'string' && v.startsWith('data:image/');

    function guardarPerfil() {
        try {
            if (perfil.nome) localStorage.setItem('galea_nome_perfil', perfil.nome);
            if (perfil.foto) localStorage.setItem('galea_foto_perfil', perfil.foto);
        } catch (e) { /* sem armazenamento: o perfil fica só em memória */ }
    }

    // ao abrir a home, recupera o perfil que já tinha sido salvo (se houver)
    try {
        const nomeSalvo = localStorage.getItem('galea_nome_perfil');
        const fotoSalva = localStorage.getItem('galea_foto_perfil');
        if (nomeValido(nomeSalvo)) perfil.nome = nomeSalvo.trim();
        if (fotoValida(fotoSalva)) perfil.foto = fotoSalva;
    } catch (e) { /* sem armazenamento: mantém os padrões */ }
    if (perfil.foto) imagemCanto.src = perfil.foto;

    // Lista "Meus cursos" (usada por Descobrir, Meus cursos e Perfil). Mesma ideia do perfil:
    // a home guarda e entrega para quem pedir. null = ninguém informou ainda.
    const CHAVE_CURSOS = 'galea_meus_cursos';
    function cursosValidos(lista) {
        if (!Array.isArray(lista) || lista.length > 100) return null;
        return lista
            .filter(c => c && typeof c.id === 'string' && c.id.length <= 40)
            .map(c => ({ id: c.id, progresso: Math.max(0, Math.min(100, Number(c.progresso) || 0)) }));
    }
    let meusCursos = null;
    try {
        const bruto = localStorage.getItem(CHAVE_CURSOS);
        if (bruto) meusCursos = cursosValidos(JSON.parse(bruto));
    } catch (e) { /* sem armazenamento ou dados corrompidos */ }

    window.addEventListener('message', evento => {
        if (evento.source !== quadro.contentWindow) return; // só aceita mensagem do iframe
        const dados = evento.data;
        if (!dados) return;

        // esconde/mostra a foto do canto (enquanto há uma janela de foto aberta)
        if (dados.tipo === 'foto-canto') {
            fotoCanto.hidden = Boolean(dados.escondida);
        }

        // a página de perfil informou o nome/foto atuais (ao abrir ou ao confirmar a edição)
        if (dados.tipo === 'perfil-atualizado') {
            if (nomeValido(dados.nome)) perfil.nome = dados.nome.trim();
            if (fotoValida(dados.foto)) {
                perfil.foto = dados.foto;
                imagemCanto.src = dados.foto;
            }
            guardarPerfil();
        }

        // a lista de cursos mudou (adicionou ou removeu na pesquisa)
        if (dados.tipo === 'meus-cursos-atualizados') {
            const nova = cursosValidos(dados.lista);
            if (nova) {
                meusCursos = nova;
                try { localStorage.setItem(CHAVE_CURSOS, JSON.stringify(nova)); } catch (e) { /* ignora */ }
            }
        }

        // uma página pediu a lista de cursos atual
        if (dados.tipo === 'pedir-meus-cursos') {
            quadro.contentWindow.postMessage({ tipo: 'meus-cursos', lista: meusCursos }, '*');
        }

        // uma página (ex.: comunidade) pediu o perfil atual
        if (dados.tipo === 'pedir-perfil') {
            quadro.contentWindow.postMessage(
                { tipo: 'perfil', nome: perfil.nome, foto: perfil.foto }, '*');
        }
    });

    // trocou de página dentro do iframe: a foto do canto volta ao normal
    quadro.addEventListener('load', () => { fotoCanto.hidden = false; });

    // ao abrir: a página pedida no endereço ou, por padrão, "Meus cursos"
    const rota = rotas[location.hash.slice(1)];
    if (rota) alterarLink(rota.url);
    marcarMenu(rota ? rota.menu : 'cursos');
})();
