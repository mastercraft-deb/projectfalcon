/* =====================================================
   Catálogo e Meus Cursos (GaleaCursos)

   - Catálogo centralizado e sincronizado com a API REST (/api/cursos e /api/progresso).
   - Utiliza fetch autenticado com credentials: 'include'.
   - Fallback automático para localStorage/dados locais caso a API esteja inacessível.
   ===================================================== */

window.GaleaCursos = (() => {
    'use strict';

    const CHAVE = 'galea_meus_cursos';

    let CATALOGO = [
        { id: 'quimica', nome: 'Química', pagina: 'courses/quimica.html',
          imagem: 'images/others/img-cursos/quimica.jpg',
          descricao: 'Descubra os fundamentos da matéria, átomos, reações químicas e misturas.',
          palavras: ['quimica', 'atomos', 'elementos', 'reacoes', 'materia'] },
        { id: 'fisica', nome: 'Física', pagina: 'courses/fisica.html',
          imagem: 'images/others/img-cursos/isaac-newton.jpg',
          descricao: 'Uma introdução aos princípios fundamentais da física: mecânica, movimento, forças e energia.',
          palavras: ['fisica', 'newton', 'movimento', 'forca', 'energia', 'mecanica'] },
        { id: 'python', nome: 'Python', pagina: 'courses/python.html',
          imagem: 'images/others/img-cursos/python.jpg',
          descricao: 'Aprenda a programar do zero: variáveis, condições, laços e funções.',
          palavras: ['programacao', 'codigo', 'linguagem'] },
        { id: 'web', nome: 'Programação web', pagina: 'courses/web.html',
          imagem: 'images/others/img-cursos/dev-web.png',
          descricao: 'HTML, CSS e JavaScript para criar suas primeiras páginas.',
          palavras: ['html', 'css', 'javascript', 'site', 'desenvolvimento'] },
        { id: 'ingles', nome: 'Inglês', pagina: 'courses/ingles.html',
          imagem: 'images/others/img-cursos/ingles.jpg',
          descricao: 'Aprenda inglês do zero: vocabulário do dia a dia, pronúncia, saudações e frases essenciais.',
          palavras: ['ingles', 'english', 'idiomas', 'vocabulario', 'lingua'] },
        { id: 'matematica', nome: 'Matemática', pagina: 'courses/matematica.html',
          imagem: 'images/others/img-cursos/matematica.jpg',
          descricao: 'Da aritmética à álgebra e à geometria, com exercícios curtos e desafios.',
          palavras: ['algebra', 'geometria', 'calculo', 'numeros', 'contas'] }
    ];

    // Para uma conta nova: lista vazia de cursos (o usuário procura e adiciona)
    const SEMENTE = [];

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

    function lerLocal() {
        try {
            const bruto = localStorage.getItem(CHAVE);
            if (bruto) return limpar(JSON.parse(bruto));
        } catch (e) {}
        return null;
    }

    function gravarLocal() {
        try { localStorage.setItem(CHAVE, JSON.stringify(lista)); } catch (e) {}
    }

    const doNavegador = lerLocal();
    let lista = doNavegador || SEMENTE.map(item => ({ ...item }));

    const temHome = window.parent !== window;

    function falarComHome(mensagem) {
        if (temHome) window.parent.postMessage(mensagem, '*');
    }

    function notificar() {
        ouvintes.forEach(funcao => funcao());
    }

    if (temHome) {
        window.addEventListener('message', evento => {
            if (evento.source !== window.parent) return;
            const dados = evento.data;
            if (!dados || dados.tipo !== 'meus-cursos') return;

            const recebida = limpar(dados.lista);
            if (recebida) {
                const mudou = JSON.stringify(recebida) !== JSON.stringify(lista);
                lista = recebida;
                gravarLocal();
                if (mudou) notificar();
            } else if (doNavegador) {
                falarComHome({ tipo: 'meus-cursos-atualizados', lista });
            }
        });
        falarComHome({ tipo: 'pedir-meus-cursos' });
    }

    function definir(nova, evento) {
        lista = nova;
        gravarLocal();
        falarComHome({ tipo: 'meus-cursos-atualizados', lista, evento });
        notificar();
    }

    // ---------- Sincronização via API REST (Fase 3) ----------
    async function sincronizarComAPI() {
        try {
            // Sincroniza o catálogo se disponível
            const respCursos = await fetch('/api/cursos', { credentials: 'include' });
            if (respCursos.ok) {
                const remotos = await respCursos.json();
                if (Array.isArray(remotos) && remotos.length > 0) {
                    CATALOGO = remotos.map(r => {
                        const local = CATALOGO.find(c => c.id === (r.slug || r.id)) || {};
                        return { ...local, ...r, id: r.slug || r.id };
                    });
                }
            }

            // Sincroniza o progresso se o usuário estiver autenticado
            const respProgresso = await fetch('/api/progresso', { credentials: 'include' });
            if (respProgresso.ok) {
                const dadosProg = await respProgresso.json();
                if (Array.isArray(dadosProg.cursos)) {
                    const mapaProgresso = new Map(dadosProg.cursos.map(c => [c.id, c.progresso]));
                    const listaMesclada = lista.map(c => ({
                        ...c,
                        progresso: mapaProgresso.has(c.id) ? Math.max(c.progresso, mapaProgresso.get(c.id)) : c.progresso
                    }));

                    for (const c of dadosProg.cursos) {
                        if ((c.concluidas_qtd > 0 || c.progresso > 0) && !listaMesclada.some(item => item.id === c.id)) {
                            listaMesclada.push({ id: c.id, progresso: c.progresso });
                        }
                    }

                    if (JSON.stringify(listaMesclada) !== JSON.stringify(lista)) {
                        definir(listaMesclada);
                    }
                }
            }
        } catch (e) {
            console.warn('[Galea API] Servidor offline ou inacessível. Operando em modo cache local.');
        }
    }

    // Dispara sincronização em segundo plano após o carregamento inicial
    if (typeof window !== 'undefined' && typeof fetch === 'function') {
        setTimeout(sincronizarComAPI, 100);
    }

    return {
        get catalogo() {
            return CATALOGO;
        },

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

        atualizarProgresso(id, novoProgresso) {
            const limpo = Math.max(0, Math.min(100, Math.round(Number(novoProgresso) || 0)));
            const item = lista.find(i => i.id === id);
            if (!item) {
                definir([...lista, { id, progresso: limpo }]);
                return true;
            }
            if (item.progresso === limpo) return false;
            definir(lista.map(i => i.id === id ? { ...i, progresso: limpo } : i));
            return true;
        },

        adicionar(id) {
            const curso = this.buscar(id);
            if (!curso || this.estaNosMeus(id)) return false;
            definir([...lista, { id, progresso: curso.progressoInicial || 0 }], { acao: 'adicionado', id, nome: curso.nome });
            return true;
        },

        remover(id) {
            if (!this.estaNosMeus(id)) return false;
            definir(lista.filter(i => i.id !== id), { acao: 'removido', id, nome: (this.buscar(id) || {}).nome || id });
            return true;
        },

        restaurarExemplo() {
            definir(SEMENTE.map(item => ({ ...item })));
        },

        aoMudar(funcao) {
            ouvintes.add(funcao);
        },

        imagemDe(curso) {
            return /^https?:/.test(curso.imagem) ? curso.imagem : '../' + curso.imagem;
        }
    };
})();
