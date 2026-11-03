import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './src/routes/authRoutes.js';
import cursosRoutes from './src/routes/cursosRoutes.js';
import trilhasRoutes from './src/routes/trilhasRoutes.js';
import progressoRoutes from './src/routes/progressoRoutes.js';
import { errorHandler } from './src/middlewares/errorHandler.js';
import { testarConexao } from './src/db/connection.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middlewares de requisição
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Rotas da API REST
app.use('/api/auth', authRoutes);
app.use('/api/cursos', cursosRoutes);
app.use('/api/trilhas', trilhasRoutes);
app.use('/api/progresso', progressoRoutes);

// Servir arquivos estáticos do front-end na mesma origem
app.use(express.static(__dirname));

// Rota raiz entrega o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Middleware de tratamento de erros global
app.use(errorHandler);

// Inicialização do servidor
app.listen(port, async () => {
    console.log(`[Galea] Servidor rodando em http://localhost:${port}`);
    const dbAtivo = await testarConexao();
    if (dbAtivo) {
        console.log('[Galea] Conexão com o banco de dados MariaDB/MySQL estabelecida com sucesso.');
    } else {
        console.log('[Galea] Nota: Banco de dados MariaDB ainda não conectado ou em produção (utilizando fallback seguro).');
    }
});

export default app;
