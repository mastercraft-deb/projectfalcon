/* =====================================================
   Comunidade (pages/community.html)

   Chats:
   - "Geral": sempre disponível, para todos.
   - Um chat por curso: só aparece se o curso estiver em "Meus cursos"
     (lista do script/cursos.js, a mesma da pesquisa e do perfil).
     Se o curso for removido de Meus cursos, o chat some da comunidade.
     (As mensagens continuam guardadas: se você adicionar o curso de
     novo, o chat volta com o histórico.)

   Em cada chat dá para escrever, responder uma mensagem e apagar as suas
   (com confirmação). Nick e foto vêm do perfil.

   IMPORTANTE: por enquanto as mensagens ficam salvas só NESTE navegador
   (localStorage), então os outros alunos ainda não veem o que você escreve.
   As mensagens dos "outros membros" são EXEMPLOS. Quando houver banco de
   dados, os pontos a trocar por chamadas ao PHP são:
   carregar() / guardar() e os trechos de enviar e apagar.
   Cada mensagem tem o campo "chat" ('geral' ou o id do curso).

   Precisa do script/cursos.js carregado antes.
   ===================================================== */

(() => {
    'use strict';

    const CHAVE = 'galea_comunidade_v1';
    const CHAVE_CHAT = 'galea_comunidade_chat';   // último chat aberto
    const CHAVE_NOME = 'galea_nome_perfil';       // mesmas chaves usadas pela página de perfil
    const CHAVE_FOTO = 'galea_foto_perfil';
    const NOME_PADRAO = 'Jack Mic Ael Son';
    const FOTO_PADRAO = '../images/boiola.jpg';
    const CHAT_GERAL = 'geral';
    const MAX_POR_CHAT = 200;                     // guarda só as últimas de cada chat
    const MAX_CITACAO = 90;                       // tamanho do trecho mostrado numa resposta

    // Membros de exemplo (sem foto: mostram a inicial numa bolinha colorida)
    const AUTORES_EXEMPLO = {
        ana:    { nome: 'Ana Beatriz',  cor: '#7678ED' },
        rafael: { nome: 'Rafael Souza', cor: '#F18701' },
        bia:    { nome: 'Bia Lima',     cor: '#d6456f' }
    };

    // ---------- elementos da página ----------
    const abas = document.getElementById('chats');
    const descricao = document.getElementById('chat-descricao');
    const painel = document.getElementById('painel');
    const lista = document.getElementById('mensagens');
    const formulario = document.getElementById('compositor');
    const campoTexto = document.getElementById('texto');
    const barraResposta = document.getElementById('compositor-resposta');
    const respostaNome = document.getElementById('resposta-nome');
    const respostaResumo = document.getElementById('resposta-resumo');
    const respostaCancelar = document.getElementById('resposta-cancelar');
    const avatarCompositor = document.getElementById('compositor-avatar');
    const aviso = document.getElementById('aviso');
    const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)');

    // ---------- estado ----------
    let mensagens = carregar();          // todas as mensagens de todos os chats
    let chatPreferido = lerChatSalvo();  // o chat que a pessoa escolheu por último
    {
        // community.html?chat=python abre direto no chat daquele curso (ex.: botão da trilha)
        const pedido = new URLSearchParams(location.search).get('chat');
        if (pedido && /^[a-z0-9_-]{1,40}$/.test(pedido)) {
            chatPreferido = pedido;
            salvarChat(pedido);
        }
    }
    let chatAtual = CHAT_GERAL;          // o chat aberto agora (cai para "Geral" se o curso saiu de Meus cursos)
    let respondendoId = null;            // id da mensagem que está sendo respondida
    let confirmandoId = null;            // id da mensagem esperando "Sim, apagar"
    let novaId = null;                   // id da mensagem recém-enviada (só ela faz a animação de entrada)

    // ---------- chats disponíveis ----------
    // "Geral" + um chat para cada curso que está em Meus cursos
    function chatsDisponiveis() {
        const chats = [{ id: CHAT_GERAL, nome: 'Geral', geral: true }];
        if (window.GaleaCursos) {
            GaleaCursos.meus().forEach(item => {
                const curso = GaleaCursos.buscar(item.id);
                if (curso) chats.push({ id: curso.id, nome: curso.nome, geral: false });
            });
        }
        return chats;
    }

    function nomeDoChat(id) {
        if (id === CHAT_GERAL) return 'Geral';
        const curso = window.GaleaCursos ? GaleaCursos.buscar(id) : null;
        return curso ? curso.nome : id;
    }

    // o chat preferido, se ele ainda existir; senão o Geral
    function resolverChat() {
        return chatsDisponiveis().some(c => c.id === chatPreferido) ? chatPreferido : CHAT_GERAL;
    }

    function lerChatSalvo() {
        try { return localStorage.getItem(CHAVE_CHAT) || CHAT_GERAL; } catch (e) { return CHAT_GERAL; }
    }

    function salvarChat(id) {
        try { localStorage.setItem(CHAVE_CHAT, id); } catch (e) { /* ignora */ }
    }

    // ---------- perfil (nick e foto de quem está logado) ----------
    // Prioridade: o que a home entregar (perfilDaHome) > o que estiver salvo no navegador > padrão.
    // A home é consultada porque esta página pode não compartilhar o armazenamento com a do perfil.
    let perfilDaHome = { nome: null, foto: null };

    function lerPerfil() {
        let nome = NOME_PADRAO;
        let foto = FOTO_PADRAO;
        try {
            const nomeSalvo = localStorage.getItem(CHAVE_NOME);
            if (nomeSalvo) nome = nomeSalvo;
            const fotoSalva = localStorage.getItem(CHAVE_FOTO);
            if (fotoSalva && fotoSalva.startsWith('data:image/')) foto = fotoSalva;
        } catch (e) { /* sem armazenamento: usa os padrões */ }
        if (perfilDaHome.nome) nome = perfilDaHome.nome;
        if (perfilDaHome.foto) foto = perfilDaHome.foto;
        return { nome, foto };
    }

    // ---------- guardar e carregar ----------
    function mensagensDeExemplo() {
        const agora = Date.now();
        const min = 60 * 1000;
        return [
            // chat geral
            { id: 'm3', chat: 'geral', autor: 'bia', quando: agora - 50 * min, respostaA: null,
              texto: 'Bom dia, turma! Qual curso vocês recomendam para quem está começando em programação?' },
            { id: 'g1', chat: 'geral', autor: 'rafael', quando: agora - 35 * min, respostaA: 'm3',
              texto: 'Python! As lições são curtas e dá para ver resultado logo no começo.' },
            // chats dos cursos
            { id: 'm1', chat: 'fisica', autor: 'ana', quando: agora - 180 * min, respostaA: null,
              texto: 'Alguém já terminou a trilha de Física? Fiquei travada no módulo 3.' },
            { id: 'm2', chat: 'fisica', autor: 'rafael', quando: agora - 160 * min, respostaA: 'm1',
              texto: 'Eu terminei! O segredo é fazer uma lição curta por dia, o XP vem rápido.' },
            { id: 'p1', chat: 'python', autor: 'bia', quando: agora - 120 * min, respostaA: null,
              texto: 'Qual editor vocês usam para praticar Python?' },
            { id: 'p2', chat: 'python', autor: 'rafael', quando: agora - 100 * min, respostaA: 'p1',
              texto: 'Eu uso o VS Code, mas o IDLE já resolve bem no começo.' },
            { id: 'w1', chat: 'web', autor: 'ana', quando: agora - 90 * min, respostaA: null,
              texto: 'Dica: aperte F12 no navegador para ver o HTML e o CSS de qualquer site.' },
            { id: 'e1', chat: 'eletrica', autor: 'rafael', quando: agora - 75 * min, respostaA: null,
              texto: 'Lembrete: tensão é em volts e corrente é em ampères. Quem confunde os dois?' },
            { id: 'u1', chat: 'musica', autor: 'bia', quando: agora - 60 * min, respostaA: null,
              texto: 'Alguém aqui treina leitura de partitura todo dia?' },
            { id: 't1', chat: 'matematica', autor: 'ana', quando: agora - 45 * min, respostaA: null,
              texto: 'Quem já concluiu o curso pode ajudar a turma com as dúvidas de álgebra?' }
        ];
    }

    function mensagemValida(m) {
        return m && typeof m.id === 'string' && typeof m.autor === 'string'
            && typeof m.texto === 'string' && typeof m.quando === 'number';
    }

    function carregar() {
        let guardadas = [];
        try {
            const bruto = localStorage.getItem(CHAVE);
            if (bruto) {
                const dados = JSON.parse(bruto);
                if (Array.isArray(dados)) guardadas = dados.filter(mensagemValida);
            }
        } catch (e) { /* dados corrompidos: recomeça com os exemplos */ }

        // Mensagens de antes dos chats (sem o campo "chat"): os exemplos m1/m2 eram sobre Física;
        // o resto (incluindo as suas) vai para o chat Geral.
        guardadas.forEach(m => {
            if (typeof m.chat !== 'string' || !m.chat) {
                m.chat = (m.id === 'm1' || m.id === 'm2') ? 'fisica' : CHAT_GERAL;
            }
        });

        // garante que as mensagens de exemplo de cada chat existam
        const ids = new Set(guardadas.map(m => m.id));
        mensagensDeExemplo().forEach(exemplo => {
            if (!ids.has(exemplo.id)) guardadas.push(exemplo);
        });

        return guardadas.sort((a, b) => a.quando - b.quando);
    }

    function guardar() {
        try { localStorage.setItem(CHAVE, JSON.stringify(mensagens)); } catch (e) { /* ignora */ }
    }

    // mantém só as últimas MAX_POR_CHAT mensagens de um chat
    function limitarChat(chat) {
        const doChat = mensagens.filter(m => m.chat === chat);
        const excesso = doChat.length - MAX_POR_CHAT;
        if (excesso > 0) {
            const remover = new Set(doChat.slice(0, excesso).map(m => m.id));
            mensagens = mensagens.filter(m => !remover.has(m.id));
        }
    }

    // ---------- utilidades ----------
    // Cria um elemento com texto puro (textContent): o que o usuário digita nunca vira HTML
    function el(tag, classe, texto) {
        const e = document.createElement(tag);
        if (classe) e.className = classe;
        if (texto !== undefined) e.textContent = texto;
        return e;
    }

    function resumir(texto) {
        const limpo = texto.replace(/\s+/g, ' ').trim();
        return limpo.length > MAX_CITACAO ? limpo.slice(0, MAX_CITACAO) + '…' : limpo;
    }

    function formatarHora(ms) {
        const data = new Date(ms);
        const hora = data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        if (data.toDateString() === new Date().toDateString()) return 'hoje, ' + hora;
        const dia = data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
        return dia + ' ' + hora;
    }

    function novoId() {
        return 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    }

    function anunciar(texto) {
        aviso.textContent = '';
        aviso.textContent = texto;
    }

    // Quem escreveu a mensagem: "eu" usa o perfil atual; os demais vêm dos exemplos
    function dadosDoAutor(msg) {
        if (msg.autor === 'eu') {
            const perfil = lerPerfil();
            return { nome: perfil.nome, foto: perfil.foto, eu: true };
        }
        const exemplo = AUTORES_EXEMPLO[msg.autor] || { nome: 'Membro', cor: '#555' };
        return { nome: exemplo.nome, cor: exemplo.cor, eu: false };
    }

    function criarAvatar(dados) {
        if (dados.foto) {
            const img = el('img', 'avatar');
            img.src = dados.foto;
            img.alt = '';
            return img;
        }
        const bolinha = el('span', 'avatar', dados.nome.charAt(0).toUpperCase());
        bolinha.style.backgroundColor = dados.cor;
        bolinha.setAttribute('aria-hidden', 'true');
        return bolinha;
    }

    function criarIcone(nome) {
        const i = el('span', 'material-symbols-outlined', nome);
        i.setAttribute('aria-hidden', 'true');
        return i;
    }

    function criarBotao(acao, rotulo, icone, extra, rotuloAcessivel) {
        const b = el('button', 'acao' + (extra ? ' ' + extra : ''));
        b.type = 'button';
        b.dataset.acao = acao;
        if (icone) b.appendChild(criarIcone(icone));
        b.appendChild(document.createTextNode(rotulo));
        if (rotuloAcessivel) b.setAttribute('aria-label', rotuloAcessivel);
        return b;
    }

    // ---------- abas (um chat por curso) ----------
    function renderizarAbas() {
        const chats = chatsDisponiveis();
        abas.replaceChildren(...chats.map(chat => {
            const ativa = chat.id === chatAtual;
            const aba = el('button', 'aba');
            aba.type = 'button';
            aba.id = 'aba-' + chat.id;
            aba.dataset.chat = chat.id;
            aba.setAttribute('role', 'tab');
            aba.setAttribute('aria-selected', String(ativa));
            aba.tabIndex = ativa ? 0 : -1;
            if (chat.geral) aba.appendChild(criarIcone('public'));
            aba.appendChild(document.createTextNode(chat.nome));
            return aba;
        }));
        painel.setAttribute('aria-labelledby', 'aba-' + chatAtual);
    }

    // texto de apoio e dica do campo de escrever, conforme o chat aberto
    function atualizarCabecalhoDoChat() {
        const nome = nomeDoChat(chatAtual);
        if (chatAtual === CHAT_GERAL) {
            descricao.textContent = 'Chat geral: conversa aberta para todos os alunos da Galea.';
            campoTexto.placeholder = 'Mensagem para o chat geral… (Enter envia)';
        } else {
            descricao.textContent = `Chat de ${nome}: só para quem tem este curso em Meus cursos.`;
            campoTexto.placeholder = `Mensagem para o chat de ${nome}… (Enter envia)`;
        }
        lista.setAttribute('aria-label', 'Mensagens do chat ' + nome);
    }

    function abrirChat(id, { focarAba = false } = {}) {
        if (id === chatAtual) return;
        chatPreferido = id;
        salvarChat(id);
        chatAtual = resolverChat();
        respondendoId = null;
        confirmandoId = null;
        atualizarBarraResposta();
        renderizarAbas();
        atualizarCabecalhoDoChat();
        renderizar();
        rolarParaOFim();
        if (focarAba) abas.querySelector('[aria-selected="true"]').focus();
        anunciar('Chat ' + nomeDoChat(chatAtual) + ' aberto.');
    }

    abas.addEventListener('click', evento => {
        const aba = evento.target.closest('[data-chat]');
        if (aba) abrirChat(aba.dataset.chat);
    });

    // setas, Home e End trocam de chat (padrão de abas acessível)
    abas.addEventListener('keydown', evento => {
        const todas = [...abas.querySelectorAll('[role="tab"]')];
        const posicao = todas.findIndex(a => a.dataset.chat === chatAtual);
        let nova = -1;
        if (evento.key === 'ArrowRight') nova = (posicao + 1) % todas.length;
        else if (evento.key === 'ArrowLeft') nova = (posicao - 1 + todas.length) % todas.length;
        else if (evento.key === 'Home') nova = 0;
        else if (evento.key === 'End') nova = todas.length - 1;
        if (nova < 0) return;
        evento.preventDefault();
        abrirChat(todas[nova].dataset.chat, { focarAba: true });
    });

    // A lista "Meus cursos" mudou (ex.: a home respondeu depois): atualiza as abas.
    // Se o curso do chat aberto saiu da lista, volta para o Geral.
    function aposMudarCursos() {
        const antes = chatAtual;
        const nomeAntes = nomeDoChat(antes);
        chatAtual = resolverChat();
        if (chatAtual !== antes) {
            respondendoId = null;
            confirmandoId = null;
            atualizarBarraResposta();
            anunciar(`O chat de ${nomeAntes} saiu da comunidade porque o curso não está mais em Meus cursos.`);
        }
        renderizarAbas();
        atualizarCabecalhoDoChat();
        renderizar();
        if (chatAtual !== antes) rolarParaOFim();
    }

    // ---------- montar uma mensagem ----------
    function criarMensagem(msg) {
        const dados = dadosDoAutor(msg);
        const li = el('li', 'mensagem' + (dados.eu ? ' minha' : '') + (msg.id === novaId ? ' nova' : ''));
        li.id = 'msg-' + msg.id;
        li.dataset.id = msg.id;
        li.tabIndex = -1;

        li.appendChild(criarAvatar(dados));
        const corpo = el('div', 'mensagem-corpo');

        // nick, selo "Você" e hora
        const cabecalho = el('div', 'mensagem-cabecalho');
        cabecalho.appendChild(el('strong', 'mensagem-nick', dados.nome));
        if (dados.eu) cabecalho.appendChild(el('span', 'selo-voce', 'Você'));
        const hora = el('time', 'mensagem-hora', formatarHora(msg.quando));
        hora.dateTime = new Date(msg.quando).toISOString();
        cabecalho.appendChild(hora);
        corpo.appendChild(cabecalho);

        // se for uma resposta: mostra um trecho da mensagem original (do mesmo chat)
        if (msg.respostaA) {
            const original = mensagens.find(m => m.id === msg.respostaA && m.chat === msg.chat);
            if (original) {
                const nomeOriginal = dadosDoAutor(original).nome;
                const citacao = el('button', 'citacao');
                citacao.type = 'button';
                citacao.dataset.acao = 'ir';
                citacao.dataset.alvo = original.id;
                citacao.setAttribute('aria-label', 'Ir para a mensagem de ' + nomeOriginal);
                citacao.appendChild(el('span', 'citacao-nome', 'Respondendo a ' + nomeOriginal));
                citacao.appendChild(el('span', 'citacao-texto', resumir(original.texto)));
                corpo.appendChild(citacao);
            } else {
                corpo.appendChild(el('div', 'citacao citacao-apagada', 'Respondendo a uma mensagem apagada'));
            }
        }

        corpo.appendChild(el('p', 'mensagem-texto', msg.texto));

        // botões: Responder (todas) e Apagar (só as suas, com confirmação)
        const acoes = el('div', 'mensagem-acoes');
        if (confirmandoId === msg.id && dados.eu) {
            acoes.appendChild(el('span', 'confirmacao-texto', 'Apagar esta mensagem?'));
            acoes.appendChild(criarBotao('apagar-sim', 'Sim, apagar', null, 'confirmar'));
            acoes.appendChild(criarBotao('apagar-nao', 'Cancelar'));
        } else {
            acoes.appendChild(criarBotao('responder', 'Responder', 'reply', '', 'Responder a ' + dados.nome));
            if (dados.eu) {
                acoes.appendChild(criarBotao('apagar', 'Apagar', 'delete', 'perigo', 'Apagar minha mensagem'));
            }
        }
        corpo.appendChild(acoes);

        li.appendChild(corpo);
        return li;
    }

    function renderizar() {
        const posicao = lista.scrollTop;   // mantém a rolagem onde estava
        lista.replaceChildren();

        const doChat = mensagens.filter(m => m.chat === chatAtual);
        if (doChat.length === 0) {
            const nome = nomeDoChat(chatAtual);
            const texto = chatAtual === CHAT_GERAL
                ? 'Ainda não há mensagens no chat geral. Seja o primeiro a escrever!'
                : `Ainda não há mensagens no chat de ${nome}. Seja o primeiro a escrever!`;
            lista.appendChild(el('li', 'mensagens-vazio', texto));
        } else {
            doChat.forEach(msg => lista.appendChild(criarMensagem(msg)));
        }
        lista.scrollTop = posicao;
        novaId = null;
    }

    function rolarParaOFim() {
        lista.scrollTop = lista.scrollHeight;
    }

    // ---------- responder ----------
    function atualizarBarraResposta() {
        const alvo = mensagens.find(m => m.id === respondendoId && m.chat === chatAtual);
        if (!alvo) {
            respondendoId = null;
            barraResposta.hidden = true;
            return;
        }
        respostaNome.textContent = dadosDoAutor(alvo).nome;
        respostaResumo.textContent = resumir(alvo.texto);
        barraResposta.hidden = false;
    }

    function cancelarResposta() {
        respondendoId = null;
        atualizarBarraResposta();
    }

    // pula até a mensagem original e dá uma piscada nela
    function irPara(id) {
        const alvo = document.getElementById('msg-' + id);
        if (!alvo) return;
        alvo.scrollIntoView({ block: 'center', behavior: menosMovimento.matches ? 'auto' : 'smooth' });
        alvo.focus({ preventScroll: true });
        alvo.classList.remove('destacada');
        void alvo.offsetWidth;              // reinicia a animação se já estava piscando
        alvo.classList.add('destacada');
        setTimeout(() => alvo.classList.remove('destacada'), 1400);
    }

    // ---------- cliques nos botões das mensagens ----------
    lista.addEventListener('click', evento => {
        const botao = evento.target.closest('[data-acao]');
        if (!botao) return;
        const li = botao.closest('.mensagem');
        const id = li ? li.dataset.id : null;
        const msg = mensagens.find(m => m.id === id);

        switch (botao.dataset.acao) {
            case 'responder':
                if (!msg) return;
                respondendoId = msg.id;
                atualizarBarraResposta();
                campoTexto.focus();
                break;

            case 'ir':
                irPara(botao.dataset.alvo);
                break;

            case 'apagar':            // 1º passo: pede a confirmação
                if (!msg || msg.autor !== 'eu') return;
                confirmandoId = msg.id;
                renderizar();
                document.querySelector('#msg-' + msg.id + ' [data-acao="apagar-sim"]').focus();
                break;

            case 'apagar-nao':
                confirmandoId = null;
                renderizar();
                if (msg) document.querySelector('#msg-' + msg.id + ' [data-acao="apagar"]').focus();
                break;

            case 'apagar-sim':        // 2º passo: apaga de verdade (só mensagens suas)
                if (!msg || msg.autor !== 'eu') return;
                mensagens = mensagens.filter(m => m.id !== msg.id);
                confirmandoId = null;
                if (respondendoId === msg.id) respondendoId = null;
                guardar();
                renderizar();
                atualizarBarraResposta();
                anunciar('Mensagem apagada.');
                campoTexto.focus();
                break;
        }
    });

    respostaCancelar.addEventListener('click', () => {
        cancelarResposta();
        campoTexto.focus();
    });

    // ---------- escrever e enviar ----------
    function ajustarAltura() {
        campoTexto.style.height = 'auto';
        campoTexto.style.height = Math.min(campoTexto.scrollHeight, 120) + 'px';
    }

    campoTexto.addEventListener('input', ajustarAltura);

    campoTexto.addEventListener('keydown', evento => {
        // Enter envia; Shift+Enter quebra a linha (não envia no meio de uma composição, ex.: acento)
        if (evento.key === 'Enter' && !evento.shiftKey && !evento.isComposing) {
            evento.preventDefault();
            formulario.requestSubmit();
        }
        if (evento.key === 'Escape' && respondendoId) {
            evento.preventDefault();
            cancelarResposta();
        }
    });

    formulario.addEventListener('submit', evento => {
        evento.preventDefault();
        const texto = campoTexto.value.trim().slice(0, 500);
        if (!texto) return;

        const id = novoId();
        novaId = id;
        mensagens.push({
            id,
            chat: chatAtual,            // a mensagem pertence ao chat que está aberto
            autor: 'eu',
            texto,
            quando: Date.now(),
            respostaA: respondendoId
        });
        limitarChat(chatAtual);

        respondendoId = null;
        confirmandoId = null;
        guardar();
        renderizar();
        atualizarBarraResposta();
        rolarParaOFim();

        campoTexto.value = '';
        ajustarAltura();
        campoTexto.focus();
        anunciar('Mensagem enviada.');
    });

    // ---------- início ----------
    chatAtual = resolverChat();
    guardar();                          // grava os exemplos na primeira vez
    avatarCompositor.src = lerPerfil().foto;
    renderizarAbas();
    atualizarCabecalhoDoChat();
    renderizar();
    rolarParaOFim();

    // a lista "Meus cursos" pode mudar depois (a home responde com a versão mais recente)
    if (window.GaleaCursos) GaleaCursos.aoMudar(aposMudarCursos);

    // Pede à home (a página que contém este iframe) o nome e a foto atuais do perfil.
    // Quando ela responder, atualiza todas as mensagens suas e o avatar da caixa de escrever.
    if (window.parent !== window) {
        window.addEventListener('message', evento => {
            if (evento.source !== window.parent) return;   // só aceita resposta da home
            const dados = evento.data;
            if (!dados || dados.tipo !== 'perfil') return;

            if (typeof dados.nome === 'string' && dados.nome.trim()) {
                perfilDaHome.nome = dados.nome.trim().slice(0, 40);
            }
            if (typeof dados.foto === 'string' && dados.foto.startsWith('data:image/')) {
                perfilDaHome.foto = dados.foto;
            }
            avatarCompositor.src = lerPerfil().foto;
            renderizar();
        });
        window.parent.postMessage({ tipo: 'pedir-perfil' }, '*');
    }
})();
