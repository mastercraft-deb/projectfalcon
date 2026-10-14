-- Rode este arquivo no phpMyAdmin (aba "Importar")
-- ou no console do MySQL do XAMPP.

CREATE DATABASE IF NOT EXISTS galea
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE galea;

CREATE TABLE IF NOT EXISTS usuarios (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    nome        VARCHAR(100)  NOT NULL,
    sobrenome   VARCHAR(100)  NOT NULL,
    email       VARCHAR(150)  NOT NULL UNIQUE,
    senha       VARCHAR(255)  NOT NULL,
    tipo        ENUM('aluno', 'instrutor') NOT NULL DEFAULT 'aluno',
    criado_em   TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Observação: essa é a tabela mínima para login/cadastro funcionarem.
-- O restante do esquema (categorias, cursos, modulos, aulas, inscricoes,
-- certificados, pagamentos etc.) já foi modelado por vocês no BRModelos
-- e pode ser exportado/incluído aqui depois, mantendo "usuarios" como
-- a tabela central referenciada pelas demais (aluno_id / instrutor_id).
