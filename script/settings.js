/* =====================================================
   Configurações (pages/settings.html)

   - Lista de categorias à esquerda (↑ ↓ Home End trocam de categoria) e as opções à direita.
   - As opções de Aparência e Foco usam script/preferencias.js e valem para o site inteiro.
   - Conta: mostra o perfil, abre o perfil e o "Sair da conta" (pedindo isso à home).
   - Dados deste navegador: ações com confirmação.

   Precisa do preferencias.js (no <head>) e do cursos.js carregados antes.
   ===================================================== */

(() => {
    'use strict';

    const CHAVE_NOME = 'galea_nome_perfil';       // mesmas chaves usadas pela página de perfil
    const CHAVE_FOTO = 'galea_foto_perfil';
    const NOME_PADRAO = 'Jack Mic Ael Son';
    const FOTO_PADRAO = '../images/boiola.jpg';

    const lista = document.querySelector('.config-lista');
    const abas = [...document.querySelectorAll('.config-item')];
    const aviso = document.getElementById('config-aviso');
    const temHome = window.parent !== window;

    // ---------- categorias ----------
    function selecionar(aba, focar) {
        abas.forEach(outra => {
            const ativa = outra === aba;
            outra.setAttribute('aria-selected', String(ativa));
            outra.tabIndex = ativa ? 0 : -1;
            document.getElementById(outra.getAttribute('aria-controls')).hidden = !ativa;
        });
        if (focar) aba.focus();
    }

    lista.addEventListener('click', evento => {
        const aba = evento.target.closest('.config-item');
        if (aba) selecionar(aba, false);
    });

    lista.addEventListener('keydown', evento => {
        const posicao = abas.findIndex(a => a.getAttribute('aria-selected') === 'true');
        let nova = -1;
        if (evento.key === 'ArrowDown') nova = (posicao + 1) % abas.length;
        else if (evento.key === 'ArrowUp') nova = (posicao - 1 + abas.length) % abas.length;
        else if (evento.key === 'Home') nova = 0;
        else if (evento.key === 'End') nova = abas.length - 1;
        if (nova < 0) return;
        evento.preventDefault();
        selecionar(abas[nova], true);
    });

    // ---------- preferências (chaves e opções) ----------
    function sincronizar() {
        const prefs = GaleaPreferencias.ler();
        document.querySelectorAll('[data-pref]').forEach(controle => {
            const valor = prefs[controle.dataset.pref];
            const ligado = controle.dataset.valor === undefined
                ? Boolean(valor)                                  // chave liga/desliga
                : String(valor) === controle.dataset.valor;       // opção entre várias
            controle.setAttribute('aria-checked', String(ligado));
        });
    }

    document.addEventListener('click', evento => {
        const controle = evento.target.closest('[data-pref]');
        if (!controle) return;
        const chave = controle.dataset.pref;

        if (controle.dataset.valor === undefined) {
            GaleaPreferencias.definir(chave, !GaleaPreferencias.ler()[chave]);
        } else {
            const bruto = controle.dataset.valor;
            GaleaPreferencias.definir(chave, chave === 'pausa' ? Number(bruto) : bruto);
        }
    });

    GaleaPreferencias.aoMudar(sincronizar);
    sincronizar();

    // ---------- conta ----------
    const contaFoto = document.getElementById('conta-foto');
    const contaNome = document.getElementById('conta-nome');
    let perfilDaHome = { nome: null, foto: null };

    function mostrarPerfil() {
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
        contaNome.textContent = nome;
        contaFoto.src = foto;
    }
    mostrarPerfil();

    if (temHome) {
        window.addEventListener('message', evento => {
            if (evento.source !== window.parent) return;   // só aceita resposta da home
            const dados = evento.data;
            if (!dados || dados.tipo !== 'perfil') return;
            if (typeof dados.nome === 'string' && dados.nome.trim()) perfilDaHome.nome = dados.nome.trim().slice(0, 40);
            if (typeof dados.foto === 'string' && dados.foto.startsWith('data:image/')) perfilDaHome.foto = dados.foto;
            mostrarPerfil();
        });
        window.parent.postMessage({ tipo: 'pedir-perfil' }, '*');
    }

    // Dentro da home: pede para ela trocar de página ou abrir a confirmação de sair.
    // Aberta sozinha: navega direto.
    document.getElementById('acao-perfil').addEventListener('click', () => {
        if (temHome) window.parent.postMessage({ tipo: 'abrir-pagina', pagina: 'perfil' }, '*');
        else location.href = 'account.html';
    });

    document.getElementById('acao-sair').addEventListener('click', () => {
        if (temHome) window.parent.postMessage({ tipo: 'abrir-sair' }, '*');
        else location.href = '../login.html';
    });

    // ---------- dados deste navegador (com confirmação) ----------
    const dialogo = document.getElementById('config-dialogo');
    const dialogoTitulo = document.getElementById('dialogo-titulo');
    const dialogoTexto = document.getElementById('dialogo-texto');
    const dialogoConfirmar = document.getElementById('dialogo-confirmar');
    const status = document.getElementById('dados-status');
    let aoConfirmar = null;

    const ACOES = {
        preferencias: {
            titulo: 'Restaurar configurações padrão?',
            texto: 'Todas as opções desta tela voltam ao padrão.',
            botao: 'Restaurar',
            fazer() { GaleaPreferencias.restaurar(); return 'Configurações restauradas.'; }
        },
        cursos: {
            titulo: 'Restaurar os cursos de exemplo?',
            texto: 'A lista de Meus cursos e o progresso voltam para o exemplo inicial.',
            botao: 'Restaurar',
            fazer() {
                if (!window.GaleaCursos) return 'Não foi possível restaurar: cursos.js não carregou.';
                GaleaCursos.restaurarExemplo();
                return 'Cursos de exemplo restaurados.';
            }
        },
        mensagens: {
            titulo: 'Apagar suas mensagens da comunidade?',
            texto: 'Tudo o que você escreveu nos chats será removido. Essa ação não pode ser desfeita.',
            botao: 'Apagar',
            fazer() {
                try {
                    localStorage.removeItem('galea_comunidade_v1');
                    localStorage.removeItem('galea_comunidade_chat');
                } catch (e) { return 'Não foi possível apagar neste navegador.'; }
                return 'Mensagens da comunidade apagadas.';
            }
        }
    };

    document.querySelectorAll('[data-dados]').forEach(botao => {
        botao.addEventListener('click', () => {
            const acao = ACOES[botao.dataset.dados];
            dialogoTitulo.textContent = acao.titulo;
            dialogoTexto.textContent = acao.texto;
            dialogoConfirmar.textContent = acao.botao;
            aoConfirmar = () => {
                status.textContent = acao.fazer();
                aviso.textContent = status.textContent;
            };
            dialogo.showModal();
        });
    });

    document.getElementById('dialogo-cancelar').addEventListener('click', () => dialogo.close());
    dialogoConfirmar.addEventListener('click', () => {
        dialogo.close();
        if (aoConfirmar) aoConfirmar();
    });
    dialogo.addEventListener('click', evento => {
        if (evento.target === dialogo) dialogo.close();   // clique no fundo escuro
    });
})();
