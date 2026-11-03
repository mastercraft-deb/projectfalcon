import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../db/connection.js';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'galea_chave_secreta_jwt_desenvolvimento_2026';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

// Armazenamento em memória para fallback caso o banco MariaDB ainda esteja sendo estruturado (Fase 4)
const fallbackUsuarios = new Map();

export async function cadastro(req, res, next) {
    try {
        const { nome, sobrenome, email, senha, tipo } = req.body;

        if (!nome || typeof nome !== 'string' || nome.trim().length === 0) {
            return res.status(400).json({ erro: 'O campo nome é obrigatório.' });
        }

        if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ erro: 'Forneça um endereço de e-mail válido.' });
        }

        if (!senha || typeof senha !== 'string' || senha.length < 6) {
            return res.status(400).json({ erro: 'A senha deve conter no mínimo 6 caracteres.' });
        }

        const nomeCompleto = sobrenome ? `${nome.trim()} ${sobrenome.trim()}` : nome.trim();
        const emailNormalizado = email.trim().toLowerCase();
        const tipoUsuario = tipo === 'professor' ? 'professor' : 'aluno';

        // Hash seguro da senha com bcrypt
        const senhaHash = await bcrypt.hash(senha, 10);
        let usuarioId = null;

        try {
            // Tenta inserir via consulta parametrizada no banco MariaDB
            const [resultado] = await pool.execute(
                'INSERT INTO usuarios (nome, email, senha_hash, tipo, xp_total) VALUES (?, ?, ?, ?, ?)',
                [nomeCompleto, emailNormalizado, senhaHash, tipoUsuario, 0]
            );
            usuarioId = resultado.insertId;
        } catch (dbErr) {
            // Se o e-mail já existe no banco
            if (dbErr.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ erro: 'Este endereço de e-mail já está cadastrado.' });
            }
            // Fallback caso a tabela usuarios ainda não exista no banco (Fase 4)
            if (fallbackUsuarios.has(emailNormalizado)) {
                return res.status(400).json({ erro: 'Este endereço de e-mail já está cadastrado.' });
            }
            usuarioId = fallbackUsuarios.size + 1;
            fallbackUsuarios.set(emailNormalizado, {
                id: usuarioId,
                nome: nomeCompleto,
                email: emailNormalizado,
                senha_hash: senhaHash,
                tipo: tipoUsuario,
                xp_total: 0
            });
        }

        const usuarioPayload = {
            id: usuarioId,
            nome: nomeCompleto,
            email: emailNormalizado,
            tipo: tipoUsuario
        };

        const token = jwt.sign(usuarioPayload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        // Cookie HTTP-Only seguro
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(201).json({
            mensagem: 'Cadastro realizado com sucesso.',
            usuario: {
                ...usuarioPayload,
                xp_total: 0
            }
        });
    } catch (err) {
        next(err);
    }
}

export async function login(req, res, next) {
    try {
        const { usuario, email, senha } = req.body;
        const identificador = (email || usuario || '').trim().toLowerCase();

        if (!identificador) {
            return res.status(400).json({ erro: 'Informe seu nome de usuário ou e-mail.' });
        }

        if (!senha || typeof senha !== 'string') {
            return res.status(400).json({ erro: 'Informe sua senha.' });
        }

        let usuarioEncontrado = null;

        try {
            // Consulta parametrizada no banco
            const [linhas] = await pool.execute(
                'SELECT id, nome, email, senha_hash, tipo, xp_total FROM usuarios WHERE email = ? OR LOWER(nome) = ? LIMIT 1',
                [identificador, identificador]
            );
            if (linhas.length > 0) {
                usuarioEncontrado = linhas[0];
            }
        } catch (dbErr) {
            // Fallback em memória
            for (const u of fallbackUsuarios.values()) {
                if (u.email === identificador || u.nome.toLowerCase() === identificador) {
                    usuarioEncontrado = u;
                    break;
                }
            }
        }

        if (!usuarioEncontrado) {
            return res.status(401).json({ erro: 'Credenciais inválidas. Verifique o usuário e a senha digitados.' });
        }

        const senhaValida = await bcrypt.compare(senha, usuarioEncontrado.senha_hash);
        if (!senhaValida) {
            return res.status(401).json({ erro: 'Credenciais inválidas. Verifique o usuário e a senha digitados.' });
        }

        const usuarioPayload = {
            id: usuarioEncontrado.id,
            nome: usuarioEncontrado.nome,
            email: usuarioEncontrado.email,
            tipo: usuarioEncontrado.tipo
        };

        const token = jwt.sign(usuarioPayload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            mensagem: 'Login realizado com sucesso.',
            usuario: {
                ...usuarioPayload,
                xp_total: usuarioEncontrado.xp_total || 0
            }
        });
    } catch (err) {
        next(err);
    }
}

export function logout(req, res) {
    res.clearCookie('token', {
        httpOnly: true,
        sameSite: 'lax'
    });
    return res.status(200).json({ mensagem: 'Logout realizado com sucesso.' });
}

export function me(req, res) {
    return res.status(200).json({ usuario: req.usuario });
}

export async function atualizarConta(req, res, next) {
    try {
        const usuarioId = req.usuario?.id;
        if (!usuarioId) {
            return res.status(401).json({ erro: 'Não autorizado. Faça login para continuar.' });
        }

        const { email, senha_atual, nova_senha } = req.body;

        if (!email && !nova_senha) {
            return res.status(400).json({ erro: 'Nenhum dado informado para atualização.' });
        }

        let usuarioAtual = null;

        // 1. Busca dados atuais do usuário (no banco ou fallback)
        try {
            const [linhas] = await pool.execute(
                'SELECT id, nome, email, senha_hash, tipo, xp_total FROM usuarios WHERE id = ? LIMIT 1',
                [usuarioId]
            );
            if (linhas.length > 0) {
                usuarioAtual = linhas[0];
            }
        } catch (dbErr) {
            for (const u of fallbackUsuarios.values()) {
                if (u.id === usuarioId) {
                    usuarioAtual = u;
                    break;
                }
            }
        }

        if (!usuarioAtual) {
            return res.status(404).json({ erro: 'Usuário não encontrado.' });
        }

        let emailFinal = usuarioAtual.email;
        let senhaHashFinal = usuarioAtual.senha_hash;
        const alteracoes = [];

        // 2. Se solicitou alterar e-mail
        if (email !== undefined && email !== null && String(email).trim().length > 0) {
            const emailLimpo = String(email).trim().toLowerCase();
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLimpo)) {
                return res.status(400).json({ erro: 'Forneça um endereço de e-mail válido.' });
            }
            if (emailLimpo !== usuarioAtual.email) {
                try {
                    const [existe] = await pool.execute(
                        'SELECT id FROM usuarios WHERE email = ? AND id != ? LIMIT 1',
                        [emailLimpo, usuarioId]
                    );
                    if (existe.length > 0) {
                        return res.status(400).json({ erro: 'Este endereço de e-mail já está em uso.' });
                    }
                } catch (dbErr) {
                    for (const [chaveEmail, u] of fallbackUsuarios.entries()) {
                        if (chaveEmail === emailLimpo && u.id !== usuarioId) {
                            return res.status(400).json({ erro: 'Este endereço de e-mail já está em uso.' });
                        }
                    }
                }
                emailFinal = emailLimpo;
                alteracoes.push('e-mail');
            }
        }

        // 3. Se solicitou alterar senha
        if (nova_senha !== undefined && nova_senha !== null && String(nova_senha).length > 0) {
            if (!senha_atual || typeof senha_atual !== 'string') {
                return res.status(400).json({ erro: 'Para alterar a senha, informe sua senha atual.' });
            }
            const senhaValida = await bcrypt.compare(senha_atual, usuarioAtual.senha_hash);
            if (!senhaValida) {
                return res.status(400).json({ erro: 'A senha atual digitada está incorreta.' });
            }
            if (String(nova_senha).length < 6) {
                return res.status(400).json({ erro: 'A nova senha deve conter no mínimo 6 caracteres.' });
            }
            senhaHashFinal = await bcrypt.hash(String(nova_senha), 10);
            alteracoes.push('senha');
        }

        if (alteracoes.length === 0) {
            return res.status(200).json({
                mensagem: 'Nenhuma alteração necessária.',
                usuario: {
                    id: usuarioAtual.id,
                    nome: usuarioAtual.nome,
                    email: usuarioAtual.email,
                    tipo: usuarioAtual.tipo
                }
            });
        }

        // 4. Salva no banco ou fallback
        try {
            await pool.execute(
                'UPDATE usuarios SET email = ?, senha_hash = ? WHERE id = ?',
                [emailFinal, senhaHashFinal, usuarioId]
            );
        } catch (dbErr) {
            fallbackUsuarios.delete(usuarioAtual.email);
            usuarioAtual.email = emailFinal;
            usuarioAtual.senha_hash = senhaHashFinal;
            fallbackUsuarios.set(emailFinal, usuarioAtual);
        }

        // 5. Renova JWT
        const usuarioPayload = {
            id: usuarioAtual.id,
            nome: usuarioAtual.nome,
            email: emailFinal,
            tipo: usuarioAtual.tipo
        };

        const novoToken = jwt.sign(usuarioPayload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        res.cookie('token', novoToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            mensagem: `${alteracoes.join(' e ')} atualizado(s) com sucesso!`,
            usuario: usuarioPayload
        });
    } catch (err) {
        next(err);
    }
}
