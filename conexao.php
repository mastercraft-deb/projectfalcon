<?php
$hostname = "localhost";
$bancodedados = "galea";
$usuario = "root";
$senha = "";

// Conecta sem selecionar banco ainda, pra poder criar ele se não existir
$mysqli = new mysqli($hostname, $usuario, $senha);

if ($mysqli->connect_errno) {
    die("Falha ao conectar: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error);
}

// Cria o banco de dados, caso ainda não exista
$mysqli->query("CREATE DATABASE IF NOT EXISTS $bancodedados CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");

// Agora seleciona o banco
$mysqli->select_db($bancodedados);

// Cria a tabela de usuários, caso ainda não exista
$mysqli->query("
    CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        sobrenome VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        senha VARCHAR(255) NOT NULL,
        tipo ENUM('aluno','instrutor') NOT NULL DEFAULT 'aluno',
        criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB
");

echo "Conectado ao Banco de Dados";
?>