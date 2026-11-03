import { Router } from 'express';
import { cadastro, login, logout, me, atualizarConta } from '../controllers/authController.js';
import { autenticarToken } from '../middlewares/auth.js';

const router = Router();

router.post('/cadastro', cadastro);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', autenticarToken, me);
router.put('/atualizar', autenticarToken, atualizarConta);

export default router;
