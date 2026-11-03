import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Pool de conexões compatível com MariaDB e MySQL
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'Galea',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: 'utf8mb4'
});

// Função utilitária para verificar se a conexão está ativa
export async function testarConexao() {
    try {
        const conexao = await pool.getConnection();
        conexao.release();
        return true;
    } catch (err) {
        return false;
    }
}

export default pool;
