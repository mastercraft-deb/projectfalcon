import pool from '../db/connection.js';
import { obterAulasConcluidasFallback } from './progressoController.js';

// Catálogo base de cursos e trilhas oficiais do Galea (146 aulas catalogadas)
export const CATALOGO_CURSOS = [
    {
        id: 'fisica',
        nome: 'Física',
        titulo_trilha: 'Física quântica – 2026',
        descricao: 'Uma introdução à física quântica, dos primeiros experimentos aos conceitos que mudaram a ciência.',
        imagem: 'images/others/img-cursos/isaac-newton.jpg',
        pagina: 'courses/fisica.html',
        tema: { claro: '#F7B801', bloqueado: '#B8650F' },
        aulas: [
            'Leis de Newton', 'Movimento e referencial', 'Força e aceleração', 'Ação e reação',
            'Energia e trabalho', 'Energia cinética', 'Energia potencial', 'Conservação da energia',
            'Ondas e luz', 'Frequência e comprimento de onda', 'Reflexão e refração', 'Interferência e difração',
            'Radiação do corpo negro', 'A catástrofe do ultravioleta', 'Quantização de Planck', 'Temperatura e cor',
            'Efeito fotoelétrico', 'Fótons e energia', 'Função trabalho', 'Aplicações do efeito fotoelétrico',
            'Dualidade onda-partícula', 'Hipótese de De Broglie', 'O experimento da dupla fenda', 'Princípio da incerteza'
        ]
    },
    {
        id: 'eletrica',
        nome: 'Elétrica',
        titulo_trilha: 'Elétrica – 2026',
        descricao: 'Dos conceitos básicos de carga, tensão e corrente até circuitos simples.',
        imagem: 'https://www.meer.com/attachments/f5a5d221264e9fb9ea60ff5a8e4813b10d0aee06/store/fill/860/645/e13059b688401aa2d7345800e6e5e932731e3f1550b7ca7e85943f6a5120/A-glow-of-nitrogen-fills-the-atmosphere-as-Nikola-Tesla-is-photographed-sitting-in-front-of-his.jpg',
        pagina: 'courses/eletrica.html',
        tema: { claro: '#4DA3FF', bloqueado: '#2A5FA8' },
        aulas: [
            'Carga elétrica', 'Condutores e isolantes', 'Lei de Coulomb', 'Campo elétrico',
            'Potencial elétrico', 'Tensão elétrica', 'Corrente elétrica', 'Resistência e resistores',
            'Lei de Ohm', 'Potência e energia elétrica', 'Circuitos em série', 'Circuitos em paralelo',
            'Leis de Kirchhoff', 'Capacitores', 'Indutores', 'Magnetismo e campo magnético',
            'Corrente alternada', 'Transformadores', 'Segurança elétrica', 'Projeto: seu primeiro circuito'
        ]
    },
    {
        id: 'python',
        nome: 'Python',
        titulo_trilha: 'Python – 2026',
        descricao: 'Aprenda a programar do zero: variáveis, condições, laços e funções.',
        imagem: 'images/others/img-cursos/python.jpg',
        pagina: 'courses/python.html',
        tema: { claro: '#A98BFF', bloqueado: '#6446B8' },
        aulas: [
            'Olá, mundo!', 'Variáveis e tipos', 'Números e operações', 'Textos (strings)', 'Entrada e saída',
            'Condições: if e else', 'Operadores lógicos', 'Laço while', 'Laço for', 'Listas',
            'Tuplas', 'Dicionários', 'Conjuntos', 'Funções', 'Parâmetros e retorno',
            'Escopo de variáveis', 'Módulos e bibliotecas', 'Erros e exceções', 'Arquivos', 'Compreensão de listas',
            'Funções lambda', 'Classes e objetos', 'Atributos e métodos', 'Herança', 'Trabalhando com datas',
            'JSON e dados', 'Testes simples', 'Boas práticas (PEP 8)', 'Mini projeto: jogo de adivinhação', 'Projeto final'
        ]
    },
    {
        id: 'web',
        nome: 'Programação web',
        titulo_trilha: 'Programação web – 2026',
        descricao: 'HTML, CSS e JavaScript para criar suas primeiras páginas.',
        imagem: 'images/others/img-cursos/dev-web.png',
        pagina: 'courses/web.html',
        tema: { claro: '#FF6FA6', bloqueado: '#B03466' },
        aulas: [
            'Como a web funciona', 'Primeira página em HTML', 'Títulos, parágrafos e listas', 'Links e imagens',
            'Tabelas', 'Formulários', 'HTML semântico', 'Introdução ao CSS',
            'Seletores e cores', 'Tipografia', 'Modelo de caixa', 'Posicionamento',
            'Flexbox', 'Grid', 'Design responsivo', 'Animações em CSS',
            'Introdução ao JavaScript', 'Variáveis e tipos', 'Condições e laços', 'Funções',
            'O DOM', 'Eventos', 'Arrays e objetos', 'Formulários com JavaScript',
            'Consumindo dados (fetch)', 'Armazenamento no navegador', 'Publicando seu site', 'Projeto final: seu portfólio'
        ]
    },
    {
        id: 'musica',
        nome: 'Teoria musical',
        titulo_trilha: 'Teoria musical – 2026',
        descricao: 'Notas, escalas, ritmos e acordes explicados de forma simples.',
        imagem: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F1e%2FWolfgang-amadeus-mozart_1.jpg&f=1&nofb=1&ipt=4e1a19be9c6f473998fbc19dc8c53d5d4f5d78e1e437073d6445b6e81bb83649',
        pagina: 'courses/musica.html',
        tema: { claro: '#3DD6D0', bloqueado: '#1C8D8A' },
        aulas: [
            'O som e suas propriedades', 'Notas musicais', 'A pauta e a clave de sol', 'Figuras de valor e pausas',
            'Compasso e pulsação', 'Andamento', 'Tons e semitons', 'Escala maior',
            'Escala menor', 'Intervalos', 'Armaduras de clave', 'Tríades e acordes',
            'Acordes com sétima', 'Campo harmônico', 'Cadências', 'Ritmo e síncope',
            'Dinâmica e expressão', 'Compondo uma melodia'
        ]
    },
    {
        id: 'matematica',
        nome: 'Matemática',
        titulo_trilha: 'Matemática – 2026',
        descricao: 'Da aritmética à álgebra e à geometria, com exercícios curtos e desafios.',
        imagem: 'images/others/img-cursos/matematica.jpg',
        pagina: 'courses/matematica.html',
        tema: { claro: '#FF7A5C', bloqueado: '#B84A33' },
        aulas: [
            'Números naturais e inteiros', 'As quatro operações', 'Múltiplos e divisores', 'Frações',
            'Números decimais', 'Porcentagem', 'Razão e proporção', 'Regra de três',
            'Potências e raízes', 'Expressões numéricas', 'Introdução à álgebra', 'Equações do 1º grau',
            'Problemas com equações', 'Inequações', 'Sistemas de equações', 'Produtos notáveis',
            'Fatoração', 'Equações do 2º grau', 'Funções', 'Gráfico da função afim',
            'Ângulos', 'Triângulos', 'Perímetro e área', 'Teorema de Pitágoras',
            'Introdução à estatística', 'Probabilidade básica'
        ]
    }
];

export async function listarCursos(req, res, next) {
    try {
        try {
            // Tenta consultar cursos do MariaDB
            const [linhas] = await pool.execute('SELECT id, slug, nome, descricao, imagem, xp_total, total_aulas FROM cursos ORDER BY id ASC');
            if (linhas.length > 0) {
                return res.status(200).json(linhas);
            }
        } catch (dbErr) {
            // Fallback para o catálogo estruturado caso o banco esteja na Fase 4
        }

        const cursosCompletos = CATALOGO_CURSOS.map(c => ({
            id: c.id,
            slug: c.id,
            nome: c.nome,
            descricao: c.descricao,
            imagem: c.imagem,
            pagina: c.pagina,
            total_aulas: c.aulas.length,
            xp_total: c.aulas.length * 10
        }));

        return res.status(200).json(cursosCompletos);
    } catch (err) {
        next(err);
    }
}

export async function obterTrilha(req, res, next) {
    try {
        const { id } = req.params;
        const curso = CATALOGO_CURSOS.find(c => c.id === id);

        if (!curso) {
            return res.status(404).json({ erro: 'Trilha ou curso não encontrado.' });
        }

        let aulasConcluidasSet = new Set();
        const usuarioId = req.usuario?.id;

        if (usuarioId) {
            try {
                const [progresso] = await pool.execute(
                    'SELECT aula_ordem FROM progresso WHERE usuario_id = ? AND curso_slug = ?',
                    [usuarioId, id]
                );
                progresso.forEach(p => aulasConcluidasSet.add(p.aula_ordem));
            } catch (dbErr) {
                // Fallback em memória caso o MariaDB ainda não esteja conectado ou populado
                const memAulas = obterAulasConcluidasFallback(usuarioId, id);
                memAulas.forEach(ordem => aulasConcluidasSet.add(ordem));
            }
        }

        const modulos = curso.aulas.map((titulo, i) => {
            let estado = 'bloqueado';
            if (aulasConcluidasSet.has(i)) {
                estado = 'concluido';
            } else if (i === 0 || aulasConcluidasSet.has(i - 1)) {
                estado = 'atual';
            }
            return {
                ordem: i,
                titulo,
                estado
            };
        });

        return res.status(200).json({
            id: curso.id,
            nome: curso.nome,
            titulo: curso.titulo_trilha,
            tema: curso.tema,
            total_aulas: curso.aulas.length,
            concluidas_qtd: aulasConcluidasSet.size,
            porcentagem: Math.round((aulasConcluidasSet.size / curso.aulas.length) * 100),
            modulos
        });
    } catch (err) {
        next(err);
    }
}
