export function errorHandler(err, req, res, next) {
    console.error('Erro na requisição:', err);

    const status = err.status || err.statusCode || 500;
    const mensagem = err.message || 'Erro interno no servidor.';

    res.status(status).json({ erro: mensagem });
}
