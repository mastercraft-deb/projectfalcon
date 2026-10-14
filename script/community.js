/* =====================================================
   Comunidade (pages/community.html)

   O que faz: mostra as mensagens (foto + nick), deixa escrever,
   responder uma mensagem e apagar as suas (com confirmação).

   IMPORTANTE: por enquanto as mensagens ficam salvas só NESTE navegador
   (localStorage), então os outros alunos ainda não veem o que você escreve.
   As mensagens dos "outros membros" abaixo são EXEMPLOS. Quando houver
   banco de dados, os pontos a trocar por chamadas ao PHP são:
   carregar() / guardar() e os trechos de enviar e apagar.
   ===================================================== */

(() => {
    'use strict';

    const CHAVE = 'galea_comunidade_v1';
    const CHAVE_NOME = 'galea_nome_perfil';   // mesmas chaves usadas pela página de perfil
    const CHAVE_FOTO = 'galea_foto_perfil';
    const NOME_PADRAO = 'Jack Mic Ael Son';
    const FOTO_PADRAO = '../images/boiola.jpg';
    const MAX_MENSAGENS = 200;                // guarda só as últimas, para não encher o armazenamento
    const MAX_CITACAO = 90;                   // tamanho do trecho mostrado numa resposta

    // Membros de exemplo (sem foto: mostram a inicial numa bolinha colorida)
    const AUTORES_EXEMPLO = {
        ana:    { nome: 'Ana Beatriz',  cor: '#7678ED' },
        rafael: { nome: 'Rafael Souza', cor: '#F18701' },
        bia:    { nome: 'Bia Lima',     cor: '#d6456f' }
    };

    // ---------- elementos da página ----------
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
    let mensagens = carregar();
    let respondendoId = null;    // id da mensagem que está sendo respondida
    let confirmandoId = null;    // id da mensagem esperando "Sim, apagar"
    let novaId = null;           // id da mensagem recém-enviada (só ela faz a animação de entrada)

    // ---------- perfil (nick e foto de quem está logado) ----------
    function lerPerfil() {
        let nome = NOME_PADRAO;
        let foto = FOTO_PADRAO;
        try {
            const nomeSalvo = localStorage.getItem(CHAVE_NOME);
            if (nomeSalvo) nome = nomeSalvo;
            const fotoSalva = localStorage.getItem(CHAVE_FOTO);
            if (fotoSalva && fotoSalva.startsWith('data:image/')) foto = fotoSalva;
        } catch (e) { /* sem armazenamento: usa os padrões */ }
        return { nome, foto };
    }

    // ---------- guardar e carregar ----------
    function mensagensDeExemplo() {
        const agora = Date.now();
        const minuto = 60 * 1000;
        return [
            { id: 'm1', autor: 'ana', quando: agora - 180 * minuto, respostaA: null,
              texto: 'Alguém já terminou a trilha de Física? Fiquei travada no módulo 3.' },
            { id: 'm2', autor: 'rafael', quando: agora - 160 * minuto, respostaA: 'm1',
              texto: 'Eu terminei! O segredo é fazer uma lição curta por dia, o XP vem rápido.' },
            { id: 'm3', autor: 'bia', quando: agora - 50 * minuto, respostaA: null,
              texto: 'Bom dia, turma! Qual curso vocês recomendam para quem está começando em programação?' }
        ];
    }

    function mensagemValida(m) {
        return m && typeof m.id === 'string' && typeof m.autor === 'string'
            && typeof m.texto === 'string' && typeof m.quando === 'number';
    }

    function carregar() {
        try {
            const bruto = localStorage.getItem(CHAVE);
            if (bruto) {
                const dados = JSON.parse(bruto);
                if (Array.isArray(dados)) return dados.filter(mensagemValida);
            }
        } catch (e) { /* dados corrompidos: recomeça com os exemplos */ }
        return mensagensDeExemplo();
    }

    function guardar() {
        try { localStorage.setItem(CHAVE, JSON.stringify(mensagens)); } catch (e) { /* ignora */ }
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

    function criarBotao(acao, rotulo, icone, extra, rotuloAcessivel) {
        const b = el('button', 'acao' + (extra ? ' ' + extra : ''));
        b.type = 'button';
        b.dataset.acao = acao;
        if (icone) {
            const i = el('span', 'material-symbols-outlined', icone);
            i.setAttribute('aria-hidden', 'true');
            b.appendChild(i);
        }
        b.appendChild(document.createTextNode(rotulo));
        if (rotuloAcessivel) b.setAttribute('aria-label', rotuloAcessivel);
        return b;
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

        // se for uma resposta: mostra um trecho da mensagem original
        if (msg.respostaA) {
            const original = mensagens.find(m => m.id === msg.respostaA);
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

        if (mensagens.length === 0) {
            const vazio = el('li', 'mensagens-vazio', 'Ainda não há mensagens. Seja o primeiro a escrever!');
            lista.appendChild(vazio);
        } else {
            mensagens.forEach(msg => lista.appendChild(criarMensagem(msg)));
        }
        lista.scrollTop = posicao;
        novaId = null;
    }

    function rolarParaOFim() {
        lista.scrollTop = lista.scrollHeight;
    }

    // ---------- responder ----------
    function atualizarBarraResposta() {
        const alvo = mensagens.find(m => m.id === respondendoId);
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
            autor: 'eu',
            texto,
            quando: Date.now(),
            respostaA: respondendoId
        });
        if (mensagens.length > MAX_MENSAGENS) mensagens.splice(0, mensagens.length - MAX_MENSAGENS);

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
    avatarCompositor.src = lerPerfil().foto;
    renderizar();
    rolarParaOFim();
})();