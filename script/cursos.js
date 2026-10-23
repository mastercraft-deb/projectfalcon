/* =====================================================
   É o catalogo de meus cursos que pode ser usado para varias paginas search, mycourses e account

   Uma fonte só: o catálogo abaixo e a lista de cursos do usuário.
   - Descobrir (search.html): mostra o catálogo e adiciona/remove da lista.
   - Meus cursos (mycourses.html): carrossel com a lista do usuário.
   - Perfil (account.html): "Cursos em andamento" e "Cursos concluídos".

   Como a lista é compartilhada entre páginas diferentes (cada uma é um
   documento separado dentro do iframe da home), ela é guardada em dois lugares:
   no armazenamento do navegador e na própria home (que entrega a lista quando
   a página pede). Assim funciona mesmo que o navegador não compartilhe o
   armazenamento entre as páginas.

   Quando houver banco de dados: troque lerLocal()/gravarLocal() por chamadas ao PHP.

   Uso:  GaleaCursos.catalogo            -> todos os cursos
         GaleaCursos.meus()              -> [{ id, progresso }]
         GaleaCursos.adicionar(id) / remover(id) / estaNosMeus(id)
         GaleaCursos.aoMudar(funcao)     -> avisa quando a lista mudar
   ===================================================== */

window.GaleaCursos = (() => {
    'use strict';

    const CHAVE = 'galea_meus_cursos';

    // Cursos de exemplo: depois vai vir do banco de dados.
    //   imagem: caminho a partir da raiz do projeto (ou endereço https://)
    //   pagina: caminho a partir da pasta pages/
    //   palavras: termos extras que a pesquisa também reconhece
    //   progressoInicial: progresso ao adicionar o curso (padrão 0; 100 = já vem concluído)
    const CATALOGO = [
        { id: 'eletrica', nome: 'Elétrica', pagina: 'courses/eletrica.html',
          imagem: 'https://www.meer.com/attachments/f5a5d221264e9fb9ea60ff5a8e4813b10d0aee06/store/fill/860/645/e13059b688401aa2d7345800e6e5e932731e3f1550b7ca7e85943f6a5120/A-glow-of-nitrogen-fills-the-atmosphere-as-Nikola-Tesla-is-photographed-sitting-in-front-of-his.jpg',
          descricao: 'Dos conceitos básicos de carga, tensão e corrente até circuitos simples.',
          palavras: ['eletricidade', 'circuitos', 'tesla', 'corrente'] },
        { id: 'fisica', nome: 'Física', pagina: 'courses/fisica.html',
          imagem: 'images/others/img-cursos/isaac-newton.jpg',
          descricao: 'Uma introdução à física quântica, dos primeiros experimentos aos conceitos que mudaram a ciência.',
          palavras: ['quantica', 'newton', 'ciencia', 'mecanica'] },
        { id: 'python', nome: 'Python', pagina: 'courses/python.html',
          imagem: 'images/others/img-cursos/python.jpg',
          descricao: 'Aprenda a programar do zero: variáveis, condições, laços e funções.',
          palavras: ['programacao', 'codigo', 'linguagem'] },
        { id: 'web', nome: 'Programação web', pagina: 'courses/web.html',
          imagem: 'images/others/img-cursos/dev-web.png',
          descricao: 'HTML, CSS e JavaScript para criar suas primeiras páginas.',
          palavras: ['html', 'css', 'javascript', 'site', 'desenvolvimento'] },
        { id: 'musica', nome: 'Teoria musical', pagina: 'courses/musica.html',
          imagem: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F1e%2FWolfgang-amadeus-mozart_1.jpg&f=1&nofb=1&ipt=4e1a19be9c6f473998fbc19dc8c53d5d4f5d78e1e437073d6445b6e81bb83649',
          descricao: 'Notas, escalas, ritmos e acordes explicados de forma simples.',
          palavras: ['musica', 'notas', 'escalas', 'acordes', 'ritmo'] },
        { id: 'matematica', nome: 'Matemática', pagina: 'courses/matematica.html',
          imagem: 'images/others/img-cursos/matematica.svg',
          descricao: 'Da aritmética à álgebra e à geometria, com exercícios curtos e desafios.',
          palavras: ['algebra', 'geometria', 'calculo', 'numeros', 'contas'],
          progressoInicial: 100 }   // exemplo: você já concluiu Matemática, então ele entra como concluído
    ];

    // Estado inicial (igual ao exemplo que o perfil já mostrava). progresso 100 = concluído.
    const SEMENTE = [
        { id: 'fisica', progresso: 45 },
        { id: 'python', progresso: 20 },
        { id: 'web', progresso: 8 },
        { id: 'matematica', progresso: 100 }
    ];

    const ouvintes = new Set();

    // ---------- validação ----------
    function limpar(dados) {
        if (!Array.isArray(dados)) return null;
        const vistos = new Set();
        const resultado = [];
        for (const item of dados) {
            if (!item || typeof item.id !== 'string') continue;
            if (!CATALOGO.some(c => c.id === item.id) || vistos.has(item.id)) continue;
            const progresso = Math.max(0, Math.min(100, Number(item.progresso) || 0));
            vistos.add(item.id);
            resultado.push({ id: item.id, progresso });
        }
        return resultado;
    }

    // ---------- armazenamento do navegador ----------
    function lerLocal() {
        try {
            const bruto = localStorage.getItem(CHAVE);
            if (bruto) return limpar(JSON.parse(bruto));
        } catch (e) { /* dados corrompidos ou sem armazenamento */ }
        return null;
    }

    function gravarLocal() {
        try { localStorage.setItem(CHAVE, JSON.stringify(lista)); } catch (e) { /* ignora */ }
    }

    const doNavegador = lerLocal();
    let lista = doNavegador || SEMENTE.map(item => ({ ...item }));

    // ---------- conversa com a home (a página que contém o iframe) ----------
    const temHome = window.parent !== window;

    function falarComHome(mensagem) {
        if (temHome) window.parent.postMessage(mensagem, '*');
    }

    function notificar() {
        ouvintes.forEach(funcao => funcao());
    }

    if (temHome) {
        window.addEventListener('message', evento => {
            if (evento.source !== window.parent) return;   // só aceita resposta da home
            const dados = evento.data;
            if (!dados || dados.tipo !== 'meus-cursos') return;

            const recebida = limpar(dados.lista);
            if (recebida) {
                const mudou = JSON.stringify(recebida) !== JSON.stringify(lista);
                lista = recebida;                           // a home sabe a versão mais recente
                gravarLocal();
                if (mudou) notificar();
            } else if (doNavegador) {
                // a home ainda não conhece nenhuma lista: entrega a que está salva aqui
                falarComHome({ tipo: 'meus-cursos-atualizados', lista });
            }
        });
        falarComHome({ tipo: 'pedir-meus-cursos' });
    }

    // ---------- alterações ----------
    function definir(nova) {
        lista = nova;
        gravarLocal();
        falarComHome({ tipo: 'meus-cursos-atualizados', lista });
        notificar();
    }

    return {
        catalogo: CATALOGO,

        buscar(id) {
            return CATALOGO.find(curso => curso.id === id) || null;
        },

        meus() {
            return lista.map(item => ({ ...item }));
        },

        estaNosMeus(id) {
            return lista.some(item => item.id === id);
        },

        progressoDe(id) {
            const item = lista.find(i => i.id === id);
            return item ? item.progresso : null;
        },

        adicionar(id) {
            const curso = this.buscar(id);
            if (!curso || this.estaNosMeus(id)) return false;
            definir([...lista, { id, progresso: curso.progressoInicial || 0 }]);
            return true;
        },

        // Qualquer curso pode ser removido, inclusive os concluídos
        remover(id) {
            if (!this.estaNosMeus(id)) return false;
            definir(lista.filter(i => i.id !== id));
            return true;
        },

        aoMudar(funcao) {
            ouvintes.add(funcao);
        },

        // endereço da imagem a partir de uma página dentro de pages/
        imagemDe(curso) {
            return /^https?:/.test(curso.imagem) ? curso.imagem : '../' + curso.imagem;
        }
    };
})();
