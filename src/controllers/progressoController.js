import pool from '../db/connection.js';
import { CATALOGO_CURSOS } from './cursosController.js';

// Fallback de progresso em memória por usuário caso o MariaDB ainda esteja na Fase 4
// Estrutura: Map<usuarioId, { xp: number, concluidas: Map<cursoId, Set<aulaOrdem>> }>
const fallbackProgresso = new Map();

export function obterAulasConcluidasFallback(usuarioId, cursoId) {
    if (!fallbackProgresso.has(usuarioId)) return new Set();
    const mem = fallbackProgresso.get(usuarioId);
    if (!mem.concluidas || !mem.concluidas.has(cursoId)) return new Set();
    return new Set(mem.concluidas.get(cursoId));
}

function obterProgressoUsuarioMemoria(usuarioId) {
    if (!fallbackProgresso.has(usuarioId)) {
        fallbackProgresso.set(usuarioId, {
            xp: 0,
            concluidas: new Map()
        });
    }
    return fallbackProgresso.get(usuarioId);
}

export async function obterProgresso(req, res, next) {
    try {
        const usuarioId = req.usuario.id;
        let xpTotal = 0;
        let aulasConcluidasPorCurso = {};

        try {
            // Busca XP do usuário no banco
            const [users] = await pool.execute('SELECT xp_total FROM usuarios WHERE id = ?', [usuarioId]);
            if (users.length > 0) {
                xpTotal = users[0].xp_total;
            }

            // Busca todas as aulas concluídas pelo usuário
            const [linhas] = await pool.execute(
                'SELECT curso_slug, aula_ordem, concluida_em FROM progresso WHERE usuario_id = ?',
                [usuarioId]
            );

            linhas.forEach(item => {
                if (!aulasConcluidasPorCurso[item.curso_slug]) {
                    aulasConcluidasPorCurso[item.curso_slug] = [];
                }
                aulasConcluidasPorCurso[item.curso_slug].push(item.aula_ordem);
            });
        } catch (dbErr) {
            // Fallback em memória
            const mem = obterProgressoUsuarioMemoria(usuarioId);
            xpTotal = mem.xp;
            for (const [cursoId, setAulas] of mem.concluidas.entries()) {
                aulasConcluidasPorCurso[cursoId] = Array.from(setAulas);
            }
        }

        // Calcula estatísticas por curso
        const cursosResumo = CATALOGO_CURSOS.map(c => {
            const concluidas = aulasConcluidasPorCurso[c.id] || [];
            const pct = Math.min(100, Math.round((concluidas.length / c.aulas.length) * 100));
            return {
                id: c.id,
                nome: c.nome,
                total_aulas: c.aulas.length,
                concluidas_qtd: concluidas.length,
                progresso: pct,
                concluido: pct >= 100
            };
        });

        return res.status(200).json({
            usuario_id: usuarioId,
            xp_total: xpTotal,
            aulas_concluidas: aulasConcluidasPorCurso,
            cursos: cursosResumo
        });
    } catch (err) {
        next(err);
    }
}

export async function concluirAula(req, res, next) {
    try {
        const usuarioId = req.usuario.id;
        const { curso_id, aula_ordem } = req.body;

        if (!curso_id || typeof curso_id !== 'string') {
            return res.status(400).json({ erro: 'O campo curso_id é obrigatório.' });
        }

        if (aula_ordem === undefined || aula_ordem === null || isNaN(Number(aula_ordem))) {
            return res.status(400).json({ erro: 'O campo aula_ordem deve ser um número válido.' });
        }

        const ordemNum = Number(aula_ordem);
        const curso = CATALOGO_CURSOS.find(c => c.id === curso_id);
        if (!curso) {
            return res.status(404).json({ erro: 'Curso não encontrado.' });
        }

        if (ordemNum < 0 || ordemNum >= curso.aulas.length) {
            return res.status(400).json({ erro: 'Índice de aula fora dos limites do curso.' });
        }

        const XP_RECOMPENSA = 10;
        let primeiraVez = false;
        let novoXp = 0;

        try {
            // Tenta verificar se já existe no MariaDB
            const [existe] = await pool.execute(
                'SELECT id FROM progresso WHERE usuario_id = ? AND curso_slug = ? AND aula_ordem = ?',
                [usuarioId, curso_id, ordemNum]
            );

            if (existe.length > 0) {
                // Já concluída: idempotência (não soma XP)
                const [u] = await pool.execute('SELECT xp_total FROM usuarios WHERE id = ?', [usuarioId]);
                novoXp = u.length > 0 ? u[0].xp_total : 0;
                primeiraVez = false;
            } else {
                // Registra conclusão
                await pool.execute(
                    'INSERT INTO progresso (usuario_id, curso_slug, aula_ordem, concluida_em) VALUES (?, ?, ?, NOW())',
                    [usuarioId, curso_id, ordemNum]
                );

                // Incrementa XP do usuário
                await pool.execute(
                    'UPDATE usuarios SET xp_total = xp_total + ? WHERE id = ?',
                    [XP_RECOMPENSA, usuarioId]
                );

                const [u] = await pool.execute('SELECT xp_total FROM usuarios WHERE id = ?', [usuarioId]);
                novoXp = u.length > 0 ? u[0].xp_total : XP_RECOMPENSA;
                primeiraVez = true;
            }
        } catch (dbErr) {
            // Fallback em memória
            const mem = obterProgressoUsuarioMemoria(usuarioId);
            if (!mem.concluidas.has(curso_id)) {
                mem.concluidas.set(curso_id, new Set());
            }
            const setAulas = mem.concluidas.get(curso_id);

            if (!setAulas.has(ordemNum)) {
                setAulas.add(ordemNum);
                mem.xp += XP_RECOMPENSA;
                primeiraVez = true;
            } else {
                primeiraVez = false;
            }
            novoXp = mem.xp;
        }

        return res.status(200).json({
            sucesso: true,
            primeiraVez,
            xp_ganha: primeiraVez ? XP_RECOMPENSA : 0,
            novo_xp: novoXp,
            curso_id,
            aula_ordem: ordemNum,
            mensagem: primeiraVez ? 'Aula concluída com sucesso! +10 XP' : 'Aula revisada com sucesso.'
        });
    } catch (err) {
        next(err);
    }
}
