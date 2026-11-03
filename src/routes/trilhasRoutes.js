import { Router } from 'express';
import { obterTrilha } from '../controllers/cursosController.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'galea_chave_secreta_jwt_desenvolvimento_2026';

function autenticacaoOpcional(req, res, next) {
    let token = req.cookies?.token;
    if (!token && req.headers.authorization) {
        const parts = req.headers.authorization.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
            token = parts[1];
        }
    }
    if (token) {
        try {
            req.usuario = jwt.verify(token, JWT_SECRET);
        } catch (e) {
            // Token inválido, segue sem usuário autenticado
        }
    }
    next();
}

const router = Router();

router.get('/:id', autenticacaoOpcional, obterTrilha);

export default router;
