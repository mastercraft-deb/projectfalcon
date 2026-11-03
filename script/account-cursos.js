/* =====================================================
   Perfil (pages/account.html): Listas de cursos, XP e Troféus

   - Monta "Cursos em andamento" e "Cursos concluídos" a partir da lista
     "Meus cursos" (script/cursos.js).
   - Para uma conta nova: inicia com 0 cursos, 0 XP e troféus zerados.
   - Atualiza em tempo real o XP total, o nível (barra de %) e os troféus
     (Bronze, Prata, Ouro, Platina) conforme as lições são concluídas.
   - Sincroniza tanto via localStorage quanto via API REST (/api/progresso).
   ===================================================== */

(() => {
    'use strict';

    const listaAndamento = document.getElementById('perfil-lista-cursos');
    const listaConcluidos = document.getElementById('perfil-lista-concluidos');
    const qtdAndamento = document.getElementById('perfil-qtd-cursos');
    const qtdConcluidos = document.getElementById('perfil-qtd-concluidos');

    // Elementos de gamificação (XP e Troféus)
    const perfilXp = document.getElementById('perfil-xp');
    const perfilXpBarra = document.getElementById('perfil-xp-barra');
    const perfilXpPct = document.getElementById('perfil-xp-percentual');
    const trofeuPlatina = document.getElementById('trofeu-platina');
    const trofeuOuro = document.getElementById('trofeu-ouro');
    const trofeuPrata = document.getElementById('trofeu-prata');
    const trofeuBronze = document.getElementById('trofeu-bronze');

    if (!listaAndamento || !listaConcluidos) return;

    function el(tag, classe, texto) {
        const e = document.createElement(tag);
        if (classe) e.className = classe;
        if (texto !== undefined) e.textContent = texto;
        return e;
    }

    function criarLink(curso, classeExtra) {
        const a = el('a', 'curso-item' + (classeExtra ? ' ' + classeExtra : ''));
        a.href = curso.pagina;
        a.target = '_top';
        return a;
    }

    function itemAndamento(curso, progresso) {
        const li = document.createElement('li');
        const a = criarLink(curso);
        a.append(el('span', '', curso.nome), el('span', 'curso-item-progresso', progresso + '%'));
        li.appendChild(a);
        return li;
    }

    function itemConcluido(curso) {
        const li = document.createElement('li');
        const a = criarLink(curso, 'curso-item-concluido');
        const selo = el('span', 'curso-concluido-selo');
        const icone = el('span', 'material-symbols-outlined', 'check_circle');
        icone.setAttribute('aria-hidden', 'true');
        selo.append(icone, document.createTextNode(' Concluído'));
        a.append(el('span', '', curso.nome), selo);
        li.appendChild(a);
        return li;
    }

    function itemVazio(texto) {
        const li = document.createElement('li');
        li.appendChild(el('p', 'vazio', texto));
        return li;
    }

    // ---------- Atualização de XP, Nível e Troféus ----------
    function atualizarGamificacao() {
        let xp = 0;
        try {
            const xpSalvo = localStorage.getItem('galea_usuario_xp');
            if (xpSalvo !== null) xp = parseInt(xpSalvo, 10) || 0;
        } catch (e) {}

        // Conta lições concluídas em todos os cursos gravados
        let totalAulasConcluidas = 0;
        try {
            const gravado = JSON.parse(localStorage.getItem('galea_aulas_concluidas') || '{}');
            for (const idCurso in gravado) {
                if (Array.isArray(gravado[idCurso])) {
                    totalAulasConcluidas += gravado[idCurso].length;
                }
            }
        } catch (e) {}

        // Se o usuário concluiu lições, garante que o XP seja ao menos correspondente
        if (totalAulasConcluidas * 10 > xp) {
            xp = totalAulasConcluidas * 10;
        }

        // Cursos 100% concluídos
        const meus = typeof GaleaCursos !== 'undefined' ? GaleaCursos.meus() : [];
        const totalCursosConcluidos = meus.filter(c => Number(c.progresso) >= 100).length;

        // Barra de progresso até o próximo nível (cada nível requer 100 XP)
        const percentualNivel = xp > 0 ? (xp % 100 === 0 ? 100 : (xp % 100)) : 0;

        if (perfilXp) perfilXp.textContent = xp;
        if (perfilXpBarra) {
            perfilXpBarra.style.setProperty('--progresso', percentualNivel + '%');
            perfilXpBarra.setAttribute('aria-valuenow', percentualNivel);
        }
        if (perfilXpPct) perfilXpPct.textContent = percentualNivel + '%';

        // Sistema de Troféus:
        // Bronze: 1 por lição concluída
        const bronze = totalAulasConcluidas;
        // Prata: 1 a cada 4 lições concluídas (conclusão de módulo)
        const prata = Math.floor(totalAulasConcluidas / 4);
        // Ouro: 1 por curso concluído (100%)
        const ouro = totalCursosConcluidos;
        // Platina: Maestria suprema (1 a cada curso concluído com folga de XP)
        const platina = (totalCursosConcluidos >= 1 && xp >= 200) ? totalCursosConcluidos : 0;

        if (trofeuBronze) trofeuBronze.textContent = bronze;
        if (trofeuPrata) trofeuPrata.textContent = prata;
        if (trofeuOuro) trofeuOuro.textContent = ouro;
        if (trofeuPlatina) trofeuPlatina.textContent = platina;
    }

    // Sincroniza com a API em segundo plano caso autenticado
    async function sincronizarComServidor() {
        try {
            const resp = await fetch('/api/progresso', { credentials: 'include' });
            if (resp.ok) {
                const dados = await resp.json();
                if (dados.xp_total !== undefined) {
                    try { localStorage.setItem('galea_usuario_xp', String(dados.xp_total)); } catch (e) {}
                }
                if (dados.aulas_concluidas && typeof dados.aulas_concluidas === 'object') {
                    try { localStorage.setItem('galea_aulas_concluidas', JSON.stringify(dados.aulas_concluidas)); } catch (e) {}
                }
                atualizarGamificacao();
                renderizarCursos();
            }
        } catch (e) {
            // Operando em modo offline/cache local
        }
    }

    // ---------- Renderização das Listas de Cursos ----------
    function renderizarCursos() {
        if (typeof GaleaCursos === 'undefined') return;

        const meus = GaleaCursos.meus()
            .map(item => ({ curso: GaleaCursos.buscar(item.id), progresso: item.progresso }))
            .filter(item => item.curso);

        const andamento = meus.filter(item => item.progresso < 100);
        const concluidos = meus.filter(item => item.progresso >= 100);

        qtdAndamento.textContent = andamento.length;
        qtdConcluidos.textContent = concluidos.length;

        listaAndamento.replaceChildren(...(andamento.length
            ? andamento.map(item => itemAndamento(item.curso, item.progresso))
            : [itemVazio('Você ainda não adicionou nenhum curso. Visite a aba Descobrir para começar sua jornada!')]));

        listaConcluidos.replaceChildren(...(concluidos.length
            ? concluidos.map(item => itemConcluido(item.curso))
            : [itemVazio('Nenhum curso concluído ainda.')]));
    }

    function renderizarTudo() {
        atualizarGamificacao();
        renderizarCursos();
    }

    if (typeof GaleaCursos !== 'undefined') {
        GaleaCursos.aoMudar(renderizarTudo);
    }

    renderizarTudo();
    setTimeout(sincronizarComServidor, 80);

    // Reatividade: atualiza se o usuário terminar aulas na trilha em outra aba/iframe
    window.addEventListener('storage', (e) => {
        if (e.key === 'galea_usuario_xp' || e.key === 'galea_aulas_concluidas' || e.key === 'galea_meus_cursos') {
            renderizarTudo();
        }
    });

    window.addEventListener('focus', renderizarTudo);

    document.documentElement.dataset.cursosOk = '1';
})();
