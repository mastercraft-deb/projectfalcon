import pool from '../db/connection.js';
import { obterAulasConcluidasFallback } from './progressoController.js';

// Catálogo base de cursos e trilhas oficiais do Galea (146 aulas catalogadas)
export const CATALOGO_CURSOS = [
    {
        id: 'fisica',
        nome: 'Física',
        titulo_trilha: 'Física – 2026',
        descricao: 'Uma introdução aos princípios fundamentais da física: mecânica, movimento, forças e energia.',
        imagem: 'images/others/img-cursos/isaac-newton.jpg',
        pagina: 'courses/fisica.html',
        tema: { claro: '#F7B801', bloqueado: '#B8650F' },
        aulas: [
            'O que é Física e método científico', 'Grandezas físicas e unidades de medida', 'Movimento uniforme (MU)', 'Movimento uniformemente variado (MUV)',
            'Gráficos do movimento', 'Queda livre e gravidade', 'Primeira Lei de Newton (Inércia)', 'Segunda Lei de Newton (F = m·a)',
            'Terceira Lei de Newton (Ação e Reação)', 'Força peso e força normal', 'Força de atrito', 'Trabalho mecânico',
            'Potência mecânica', 'Energia cinética', 'Energia potencial gravitacional e elástica', 'Conservação da energia mecânica',
            'Fluidos: densidade e pressão', 'Princípio de Arquimedes (Empuxo)', 'Calor, temperatura e escalas termométricas', 'Propagação de calor',
            'Ondas: características e velocidade', 'Som e eco', 'Óptica: reflexão e espelhos', 'Óptica: refração e lentes'
        ]
    },
    {
        id: 'quimica',
        nome: 'Química',
        titulo_trilha: 'Química – 2026',
        descricao: 'Descubra os fundamentos da matéria, átomos, reações químicas e misturas.',
        imagem: 'images/others/img-cursos/quimica.jpg',
        pagina: 'courses/quimica.html',
        tema: { claro: '#00B4D8', bloqueado: '#0077B6' },
        aulas: [
            'O que é Química e a matéria', 'Estados físicos da matéria e mudanças de fase', 'Substâncias puras e misturas', 'Métodos de separação de misturas',
            'Modelos atômicos (Dalton, Thomson, Rutherford)', 'Estrutura atômica: prótons, nêutrons e elétrons', 'Número atômico e número de massa', 'A Tabela Periódica: organização e famílias',
            'Metais, ametais e gases nobres', 'Distribuição eletrônica e elétrons de valência', 'Ligação iônica', 'Ligação covalente',
            'Fórmulas químicas e nomenclatura básica', 'Ácidos e bases no cotidiano', 'Sais e óxidos', 'Escala de pH e indicadores',
            'Reações químicas e evidências', 'Balanceamento simples de equações químicas', 'Soluções e concentração básica', 'Química sustentável e meio ambiente'
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
        id: 'ingles',
        nome: 'Inglês',
        titulo_trilha: 'Inglês – 2026',
        descricao: 'Aprenda inglês do zero: vocabulário do dia a dia, pronúncia, saudações e frases essenciais.',
        imagem: 'images/others/img-cursos/ingles.jpg',
        pagina: 'courses/ingles.html',
        tema: { claro: '#2EC4B6', bloqueado: '#1B7A72' },
        aulas: [
            'Greetings & Introductions (Saudações)', 'Alphabet & Spelling (O alfabeto)', 'Numbers & Age (Números e idade)', 'Verb To Be: Afirmativa',
            'Verb To Be: Negativa e Interrogativa', 'Subject Pronouns (Pronomes pessoais)', 'Possessive Adjectives (My, your, his, her)', 'Colors & Common Objects (Cores e objetos)',
            'Days of the Week & Months (Dias e meses)', 'Telling Time (Dizendo as horas)', 'Simple Present: Verbos de rotina', 'Simple Present: Perguntas (Do / Does)',
            'Question Words (What, Where, Who, When)', 'Family Members (Família)', 'Food & Drinks (Comidas e bebidas)', 'Places in Town (Lugares na cidade)',
            'Describing People (Aparência e sentimentos)', 'Daily Conversation: Diálogo prático'
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
