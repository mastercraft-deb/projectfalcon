/* =====================================================
   Home (home.html)

   - Marca o item ativo do menu lateral e abre a página pedida pelo endereço
     (home.html#perfil, #trilha-python, #comunidade-python...).
   - Recolhe e expande o menu lateral (botão na divisa amarela); lembra a escolha.
   - Botão Sair (rodapé do menu): pede confirmação e volta para o login.
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

    // ---------- menu lateral recolhível ----------
    // Recolhido = só ícones. O nome de cada item vira dica (title) ao passar o mouse.
    const CHAVE_MENU = 'galea_menu_recolhido';
    const botaoMenu = document.getElementById('menu-alternar');
    const iconeMenu = botaoMenu.querySelector('.material-symbols-outlined');

    function aplicarMenu(recolhido) {
        document.body.classList.toggle('lateral-recolhida', recolhido);
        const rotulo = recolhido ? 'Expandir menu lateral' : 'Recolher menu lateral';
        botaoMenu.setAttribute('aria-expanded', String(!recolhido));
        botaoMenu.setAttribute('aria-label', rotulo);
        botaoMenu.title = rotulo;
        iconeMenu.textContent = recolhido ? 'chevron_right' : 'chevron_left';
        document.querySelectorAll('.lateral .botoes').forEach(botao => {
            if (recolhido) botao.title = botao.querySelector('.menu-texto').textContent;
            else botao.removeAttribute('title');
        });
    }

    let menuRecolhido = false;
    try { menuRecolhido = localStorage.getItem(CHAVE_MENU) === '1'; } catch (e) { /* sem armazenamento */ }
    aplicarMenu(menuRecolhido);

    botaoMenu.addEventListener('click', () => {
        menuRecolhido = !menuRecolhido;
        aplicarMenu(menuRecolhido);
        try { localStorage.setItem(CHAVE_MENU, menuRecolhido ? '1' : '0'); } catch (e) { /* ignora */ }
    });

    // ---------- Sair da conta ----------
    const dialogoSair = document.getElementById('sair-dialogo');
    document.getElementById('botao-sair').addEventListener('click', () => dialogoSair.showModal());
    document.getElementById('sair-cancelar').addEventListener('click', () => dialogoSair.close());
    dialogoSair.addEventListener('click', evento => {
        if (evento.target === dialogoSair) dialogoSair.close();   // clique no fundo escuro
    });
    document.getElementById('sair-confirmar').addEventListener('click', () => {
        // Ainda não existe sessão real (login com PHP). Por enquanto só volta para a tela de login.
        // Quando houver login no servidor, é aqui que entra o pedido de logout (ex.: fetch('logout.php')
        // para encerrar a sessão) antes de redirecionar.
        window.location.href = 'login.html';
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

        // a trilha de um curso pediu para abrir o chat daquele curso na Comunidade
        if (dados.tipo === 'abrir-chat' && typeof dados.chat === 'string' && /^[a-z0-9_-]{1,40}$/.test(dados.chat)) {
            alterarLink('pages/community.html?chat=' + dados.chat);
            marcarMenu('comunidade');
        }

        // uma página (ex.: comunidade) pediu o perfil atual
        if (dados.tipo === 'pedir-perfil') {
            quadro.contentWindow.postMessage(
                { tipo: 'perfil', nome: perfil.nome, foto: perfil.foto }, '*');
        }
    });

    // trocou de página dentro do iframe: a foto do canto volta ao normal
    quadro.addEventListener('load', () => { fotoCanto.hidden = false; });

    // Rota pelo endereço: home.html#perfil, #trilha, #trilha-python (trilha de um curso),
    // #comunidade e #comunidade-python (chat de um curso)
    function rotaDoEndereco() {
        const hash = location.hash.slice(1);
        if (rotas[hash]) return rotas[hash];
        let achou = hash.match(/^trilha-([a-z0-9_-]{1,40})$/);
        if (achou) return { url: 'pages/trilha.html?curso=' + achou[1], menu: 'cursos' };
        if (hash === 'comunidade') return { url: 'pages/community.html', menu: 'comunidade' };
        achou = hash.match(/^comunidade-([a-z0-9_-]{1,40})$/);
        if (achou) return { url: 'pages/community.html?chat=' + achou[1], menu: 'comunidade' };
        return null;
    }

    // ao abrir: a página pedida no endereço ou, por padrão, "Meus cursos"
    const rota = rotaDoEndereco();
    if (rota) alterarLink(rota.url);
    marcarMenu(rota ? rota.menu : 'cursos');

    // se só o final do endereço mudar (ex.: botões voltar/avançar do navegador), abre a página pedida
    window.addEventListener('hashchange', () => {
        const nova = rotaDoEndereco();
        if (nova) {
            alterarLink(nova.url);
            marcarMenu(nova.menu);
        }
    });
})();
