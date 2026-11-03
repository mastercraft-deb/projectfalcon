import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'galea_chave_secreta_jwt_desenvolvimento_2026';

export function autenticarToken(req, res, next) {
    // Busca o token no cookie httpOnly ou no cabeçalho Authorization
    let token = req.cookies?.token;

    if (!token && req.headers.authorization) {
        const parts = req.headers.authorization.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
    }

    if (!token) {
        return res.status(401).json({ erro: 'Não autorizado. Faça login para continuar.' });
    }

    try {
        const decodificado = jwt.verify(token, JWT_SECRET);
        req.usuario = decodificado;
        next();
    } catch (err) {
        return res.status(401).json({ erro: 'Sessão inválida ou expirada. Faça login novamente.' });
    }
}
