import { Router } from 'express';
import { listarCursos } from '../controllers/cursosController.js';

const router = Router();

router.get('/', listarCursos);

export default router;
