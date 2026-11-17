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
   - Guarda a lista "Meus cursos" e as preferências (Configurações) e entrega para as páginas do iframe.
   - Lembrete de pausa (Configurações > Foco e pausas).
   - Atende pedidos das páginas: abrir o perfil, abrir o "Sair da conta", abrir o chat de um curso.

   Precisa ser carregado DEPOIS do script/script.js, que define alterarLink().
   ===================================================== */

(() => {
    // Páginas que a home abre direto pelo endereço (home.html#perfil, home.html#trilha).
    // "menu" é o item do menu lateral que fica marcado quando a página abre.
    const rotas = {
        perfil:  { url: 'pages/account.html',    menu: 'perfil' },
        trilha:  { url: 'pages/trilha.html',     menu: 'cursos' },
        codelab: { url: 'pages/playground.html', menu: 'codelab' }
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

    // ---------- Fundo exclusivo da aba Configurações ----------
    // Liga/desliga a classe .fundo-config-ativo no <body> conforme a página aberta no iframe.
    // Observa o atributo src (muda no clique do menu) para o fundo trocar sem "piscar".
    const quadroFundo = document.getElementById('teste001');
    function atualizarFundoConfig() {
        const src = quadroFundo.getAttribute('src') || '';
        const emConfig = /(^|\/)settings\.html(\?|#|$)/.test(src);
        document.body.classList.toggle('fundo-config-ativo', emConfig);
    }
    new MutationObserver(atualizarFundoConfig).observe(quadroFundo, { attributes: true, attributeFilter: ['src'] });
    quadroFundo.addEventListener('load', atualizarFundoConfig);
    atualizarFundoConfig();

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

    // ---------- Lembrete de pausa (Configurações > Foco e pausas) ----------
    // Conta só o tempo com a aba aberta e avisa de forma gentil, sem tirar o foco de onde você está.
    const avisoPausa = document.getElementById('aviso-pausa');
    const textoPausa = document.getElementById('aviso-pausa-texto');
    let relogioPausa = null;
    let minutosDaPausa = -1;     // para só reiniciar a contagem quando a opção mudar
    let segundosAtivos = 0;

    function configurarPausa() {
        const minutos = GaleaPreferencias.ler().pausa;
        if (minutos === minutosDaPausa) return;
        minutosDaPausa = minutos;
        clearInterval(relogioPausa);
        relogioPausa = null;
        segundosAtivos = 0;
        avisoPausa.hidden = true;
        if (!minutos) return;

        relogioPausa = setInterval(() => {
            if (document.visibilityState !== 'visible') return;
            segundosAtivos += 15;
            if (segundosAtivos >= minutos * 60) {
                segundosAtivos = 0;
                textoPausa.textContent = 'Você está estudando há ' + minutos + ' minutos. Que tal uma pausa de 5 minutos? ' +
                    'Levante, beba água, respire fundo e volte quando quiser.';
                avisoPausa.hidden = false;
            }
        }, 15000);
    }

    document.getElementById('aviso-pausa-ok').addEventListener('click', () => { avisoPausa.hidden = true; });
    GaleaPreferencias.aoMudar(configurarPausa);
    configurarPausa();

    // ---------- Sair da conta ----------
    const dialogoSair = document.getElementById('sair-dialogo');
    document.getElementById('botao-sair').addEventListener('click', () => dialogoSair.showModal());
    document.getElementById('sair-cancelar').addEventListener('click', () => dialogoSair.close());
    dialogoSair.addEventListener('click', evento => {
        if (evento.target === dialogoSair) dialogoSair.close();   // clique no fundo escuro
    });
    document.getElementById('sair-confirmar').addEventListener('click', async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
        } catch (e) {}
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

    // ---------- Notificações (sino do topo) ----------
    // Guarda as últimas notificações (curso adicionado/removido...) e mostra um aviso rápido.
    const CHAVE_NOTIF = 'galea_notificacoes';
    const MAX_NOTIF = 30;
    const sino = document.getElementById('sino');
    const sinoContador = document.getElementById('sino-contador');
    const sinoPainel = document.getElementById('sino-painel');
    const sinoLista = document.getElementById('sino-lista');
    const sinoVazio = document.getElementById('sino-vazio');
    const avisoRapido = document.getElementById('aviso-rapido');
    const avisoRapidoTexto = document.getElementById('aviso-rapido-texto');
    const avisoRapidoIcone = document.getElementById('aviso-rapido-icone');
    let temporizadorAviso = null;
    let notificacoes = [];

    try {
        const salvas = JSON.parse(localStorage.getItem(CHAVE_NOTIF) || '[]');
        if (Array.isArray(salvas)) {
            notificacoes = salvas.filter(n => n && typeof n.texto === 'string' && n.texto.length <= 200
                && typeof n.quando === 'number').slice(0, MAX_NOTIF)
                .map(n => ({ texto: n.texto, icone: n.icone === 'remove_circle' ? 'remove_circle' : 'add_circle',
                             quando: n.quando, lida: Boolean(n.lida) }));
        }
    } catch (e) { /* sem armazenamento ou dados corrompidos */ }

    function guardarNotificacoes() {
        try { localStorage.setItem(CHAVE_NOTIF, JSON.stringify(notificacoes)); } catch (e) { /* ignora */ }
    }

    function tempoDecorrido(ms) {
        const min = Math.floor((Date.now() - ms) / 60000);
        if (min < 1) return 'agora mesmo';
        if (min < 60) return 'há ' + min + (min === 1 ? ' minuto' : ' minutos');
        const h = Math.floor(min / 60);
        if (h < 24) return 'há ' + h + (h === 1 ? ' hora' : ' horas');
        const d = Math.floor(h / 24);
        return 'há ' + d + (d === 1 ? ' dia' : ' dias');
    }

    function desenharNotificacoes() {
        const naoLidas = notificacoes.filter(n => !n.lida).length;
        sinoContador.hidden = naoLidas === 0;
        sinoContador.textContent = naoLidas > 9 ? '9+' : String(naoLidas);
        sino.setAttribute('aria-label', naoLidas
            ? 'Notificações (' + naoLidas + (naoLidas === 1 ? ' não lida)' : ' não lidas)')
            : 'Notificações');

        sinoVazio.hidden = notificacoes.length > 0;
        sinoLista.replaceChildren(...notificacoes.map(n => {
            const item = document.createElement('li');
            item.className = 'sino-item' + (n.lida ? '' : ' nova');
            const icone = document.createElement('span');
            icone.className = 'material-symbols-outlined';
            icone.setAttribute('aria-hidden', 'true');
            icone.textContent = n.icone;
            const corpo = document.createElement('div');
            const texto = document.createElement('p');
            texto.textContent = n.texto;
            const hora = document.createElement('time');
            hora.textContent = tempoDecorrido(n.quando);
            corpo.append(texto, hora);
            item.append(icone, corpo);
            return item;
        }));
    }

    function mostrarAvisoRapido(texto, icone) {
        avisoRapidoTexto.textContent = texto;
        avisoRapidoIcone.textContent = icone;
        avisoRapido.hidden = false;
        clearTimeout(temporizadorAviso);
        temporizadorAviso = setTimeout(() => { avisoRapido.hidden = true; }, 3500);
    }

    function novaNotificacao(texto, icone) {
        const aberto = !sinoPainel.hidden;
        notificacoes.unshift({ texto, icone, quando: Date.now(), lida: aberto });
        notificacoes = notificacoes.slice(0, MAX_NOTIF);
        guardarNotificacoes();
        desenharNotificacoes();
        mostrarAvisoRapido(texto, icone);
    }

    function abrirSino() {
        sinoPainel.hidden = false;
        sino.setAttribute('aria-expanded', 'true');
        notificacoes.forEach(n => { n.lida = true; });   // abrir o painel = leu
        guardarNotificacoes();
        // mantém o destaque das novas só nesta abertura
        desenharNotificacoes();
    }

    function fecharSino(devolverFoco) {
        if (sinoPainel.hidden) return;
        sinoPainel.hidden = true;
        sino.setAttribute('aria-expanded', 'false');
        if (devolverFoco) sino.focus();
    }

    sino.addEventListener('click', () => {
        if (sinoPainel.hidden) {
            desenharNotificacoes();           // atualiza os "há X minutos" e marca as novas
            abrirSino();
        } else {
            fecharSino(false);
        }
    });
    document.getElementById('sino-limpar').addEventListener('click', () => {
        notificacoes = [];
        guardarNotificacoes();
        desenharNotificacoes();
        sino.focus();
    });
    document.addEventListener('click', evento => {
        if (!evento.target.closest('.sino-area')) fecharSino(false);
    });
    document.addEventListener('keydown', evento => {
        if (evento.key === 'Escape') fecharSino(true);
    });
    // clicar dentro do iframe não chega neste documento: a janela perde o foco, então fecha
    window.addEventListener('blur', () => fecharSino(false));
    desenharNotificacoes();

    // Mensagens da Comunidade (versão oficial). null = ninguém informou ainda; [] = apagadas.
    const CHAVE_COMUNIDADE = 'galea_comunidade_v1';
    const CHAVE_CHAT_COMUNIDADE = 'galea_comunidade_chat';
    function comunidadeValida(lista) {
        if (!Array.isArray(lista) || lista.length > 3000) return null;
        return lista.filter(m => m && typeof m.id === 'string' && m.id.length <= 60
            && typeof m.autor === 'string' && typeof m.texto === 'string' && m.texto.length <= 1000
            && typeof m.quando === 'number');
    }
    let comunidade = null;
    try {
        const bruto = localStorage.getItem(CHAVE_COMUNIDADE);
        if (bruto) comunidade = comunidadeValida(JSON.parse(bruto));
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
            // o usuário adicionou/removeu um curso: avisa (sino + aviso rápido)
            const ev = dados.evento;
            if (nova && ev && /^[a-z0-9_-]{1,40}$/.test(ev.id) && typeof ev.nome === 'string'
                && ev.nome.length > 0 && ev.nome.length <= 60) {
                if (ev.acao === 'adicionado') {
                    novaNotificacao('Você adicionou o curso ' + ev.nome + ' a Meus cursos.', 'add_circle');
                } else if (ev.acao === 'removido') {
                    novaNotificacao('Você removeu o curso ' + ev.nome + ' de Meus cursos.', 'remove_circle');
                }
            }
        }

        // uma página mudou as preferências (tela Configurações): aplica aqui na home e guarda
        if (dados.tipo === 'preferencias-atualizadas' && dados.prefs) {
            GaleaPreferencias.importar(dados.prefs);
        }

        // uma página pediu a emissão de uma notificação (sino + aviso rápido)
        if (dados.tipo === 'nova-notificacao' && typeof dados.texto === 'string' && dados.texto.length > 0) {
            novaNotificacao(dados.texto, dados.icone || 'stars');
        }

        // uma página pediu as preferências atuais
        if (dados.tipo === 'pedir-preferencias') {
            quadro.contentWindow.postMessage({ tipo: 'preferencias', prefs: GaleaPreferencias.ler() }, '*');
        }

        // a tela Configurações pediu para abrir o perfil ou a confirmação de sair
        if (dados.tipo === 'abrir-pagina' && dados.pagina === 'perfil') {
            alterarLink('pages/account.html');
            marcarMenu('perfil');
        }
        if (dados.tipo === 'abrir-sair') {
            dialogoSair.showModal();
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

        // a Comunidade mudou as mensagens: a home guarda a versão mais recente
        if (dados.tipo === 'comunidade-atualizada') {
            const nova = comunidadeValida(dados.mensagens);
            if (nova) {
                comunidade = nova;
                try { localStorage.setItem(CHAVE_COMUNIDADE, JSON.stringify(nova)); } catch (e) { /* ignora */ }
            }
        }

        // a Comunidade pediu as mensagens atuais
        if (dados.tipo === 'pedir-comunidade') {
            quadro.contentWindow.postMessage({ tipo: 'comunidade', mensagens: comunidade }, '*');
        }

        // a tela Configurações pediu para apagar as mensagens escritas pelo usuário
        if (dados.tipo === 'apagar-comunidade') {
            comunidade = [];
            try {
                localStorage.setItem(CHAVE_COMUNIDADE, '[]');
                localStorage.removeItem(CHAVE_CHAT_COMUNIDADE);
            } catch (e) { /* ignora */ }
        }

        // uma página (ex.: comunidade) pediu o perfil atual
        if (dados.tipo === 'pedir-perfil') {
            quadro.contentWindow.postMessage(
                { tipo: 'perfil', nome: perfil.nome, foto: perfil.foto }, '*');
        }
    });

    // ---------- Sincronização de sessão via API (Fase 3) ----------
    // Ao abrir a home, verifica se o usuário está autenticado e sincroniza nome/foto.
    // Se não estiver autenticado (401) ou a API estiver offline, continua com o cache local.
    (async () => {
        try {
            const resp = await fetch('/api/auth/me', { credentials: 'include' });
            if (resp.ok) {
                const dados = await resp.json();
                const u = dados.usuario;
                if (u) {
                    if (nomeValido(u.nome)) {
                        perfil.nome = u.nome.trim();
                        guardarPerfil();
                    }
                    // Foto: a API ainda não serve foto binária; o localStorage continua como fonte
                    // da imagem local (será integrado na Fase 4 com campo foto na tabela usuarios)
                }
            }
            // 401 = não autenticado: segue sem redirecionar (login é opcional para ver cursos)
        } catch (e) {
            // API offline: segue com dados locais
            console.warn('[Galea] Não foi possível verificar a sessão com o servidor.', e);
        }
    })();

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
