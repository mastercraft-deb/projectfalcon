/* =====================================================
   Preferências do usuário (tela Configurações) — valem para o site inteiro

   Cada página carrega este arquivo no <head>. Ele lê as preferências e liga
   atributos no <html>, que o style.css usa:
     data-texto="grande | muito-grande"   -> tamanho do texto
     data-contraste="alto"                 -> fundo mais escuro e textos mais claros
     data-movimento="reduzido"             -> animações e transições quase instantâneas
     data-foco="forte"                     -> contorno de foco bem visível (teclado)
     data-espaco="amplo"                   -> mais espaço entre letras e palavras
     data-modo-foco="ligado"               -> esconde o sino e a foto do canto (menos distrações)

   Como as páginas ficam dentro do iframe da home, as preferências são guardadas
   no navegador e também na própria home (que entrega a versão mais recente a quem pedir),
   do mesmo jeito que o perfil e a lista "Meus cursos".

   Uso:  GaleaPreferencias.ler()               -> objeto com todas as preferências
         GaleaPreferencias.definir(chave, valor)
         GaleaPreferencias.restaurar()         -> volta ao padrão
         GaleaPreferencias.aoMudar(funcao)
   ===================================================== */

window.GaleaPreferencias = (() => {
    'use strict';

    const CHAVE = 'galea_preferencias';
    const PADRAO = Object.freeze({
        texto: 'normal',        // normal | grande | muito-grande
        contraste: false,
        movimento: false,       // true = reduzir animações
        foco: false,            // true = contorno de foco forte
        espaco: false,          // true = espaçamento amplo entre letras e palavras
        modoFoco: false,        // true = esconder sino e foto do canto
        pausa: 0                // lembrete de pausa, em minutos (0 = desligado)
    });
    const TEXTOS = ['normal', 'grande', 'muito-grande'];
    const PAUSAS = [0, 15, 25, 45];
    const LIGAS = ['contraste', 'movimento', 'foco', 'espaco', 'modoFoco'];

    // aceita só valores conhecidos (o resto volta ao padrão)
    function validar(obj) {
        const r = { ...PADRAO };
        if (obj && typeof obj === 'object') {
            if (TEXTOS.includes(obj.texto)) r.texto = obj.texto;
            LIGAS.forEach(k => { if (typeof obj[k] === 'boolean') r[k] = obj[k]; });
            if (PAUSAS.includes(obj.pausa)) r.pausa = obj.pausa;
        }
        return r;
    }

    function lerLocal() {
        try {
            const bruto = localStorage.getItem(CHAVE);
            if (bruto) return JSON.parse(bruto);
        } catch (e) { /* dados corrompidos ou sem armazenamento */ }
        return null;
    }

    function gravarLocal() {
        try { localStorage.setItem(CHAVE, JSON.stringify(prefs)); } catch (e) { /* ignora */ }
    }

    const doNavegador = lerLocal();
    let prefs = validar(doNavegador);
    const ouvintes = new Set();

    // liga/desliga os atributos no <html>
    function aplicar() {
        const h = document.documentElement;
        const atributo = (nome, valor) => (valor ? h.setAttribute(nome, valor) : h.removeAttribute(nome));
        atributo('data-texto', prefs.texto === 'normal' ? '' : prefs.texto);
        atributo('data-contraste', prefs.contraste ? 'alto' : '');
        atributo('data-movimento', prefs.movimento ? 'reduzido' : '');
        atributo('data-foco', prefs.foco ? 'forte' : '');
        atributo('data-espaco', prefs.espaco ? 'amplo' : '');
        atributo('data-modo-foco', prefs.modoFoco ? 'ligado' : '');
    }
    aplicar();   // já na primeira passada, para a página não "piscar" com o visual antigo

    function notificar() {
        ouvintes.forEach(funcao => funcao());
    }

    // ---------- conversa com a home (a página que contém o iframe) ----------
    const temHome = window.parent !== window;

    function falarComHome(mensagem) {
        if (temHome) window.parent.postMessage(mensagem, '*');
    }

    if (temHome) {
        window.addEventListener('message', evento => {
            if (evento.source !== window.parent) return;   // só aceita resposta da home
            const dados = evento.data;
            if (!dados || dados.tipo !== 'preferencias') return;

            if (dados.prefs) {
                const recebida = validar(dados.prefs);
                if (JSON.stringify(recebida) !== JSON.stringify(prefs)) {
                    prefs = recebida;
                    gravarLocal();
                    aplicar();
                    notificar();
                }
            } else if (doNavegador) {
                // a home ainda não conhece nenhuma preferência: entrega a que está salva aqui
                falarComHome({ tipo: 'preferencias-atualizadas', prefs });
            }
        });
        falarComHome({ tipo: 'pedir-preferencias' });
    }

    // ---------- alterações ----------
    function trocar(nova) {
        prefs = validar(nova);
        gravarLocal();
        aplicar();
        falarComHome({ tipo: 'preferencias-atualizadas', prefs });
        notificar();
    }

    return {
        padrao: PADRAO,

        ler() {
            return { ...prefs };
        },

        definir(chave, valor) {
            if (!(chave in PADRAO)) return false;
            trocar({ ...prefs, [chave]: valor });
            return true;
        },

        restaurar() {
            trocar({ ...PADRAO });
        },

        // usado pela home ao receber as preferências de uma página: aplica e guarda, sem responder de volta
        importar(novas) {
            const recebida = validar(novas);
            if (JSON.stringify(recebida) === JSON.stringify(prefs)) return;
            prefs = recebida;
            gravarLocal();
            aplicar();
            notificar();
        },

        aoMudar(funcao) {
            ouvintes.add(funcao);
        }
    };
})();
