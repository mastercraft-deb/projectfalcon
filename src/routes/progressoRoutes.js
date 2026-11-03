import { Router } from 'express';
import { obterProgresso, concluirAula } from '../controllers/progressoController.js';
import { autenticarToken } from '../middlewares/auth.js';

const router = Router();

router.get('/', autenticarToken, obterProgresso);
router.post('/', autenticarToken, concluirAula);

export default router;
