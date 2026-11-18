/* =====================================================
   Trilhas dos cursos (usado por pages/trilha.html)

   Para cada curso do catálogo (script/cursos.js):
   - titulo: o nome mostrado no topo da trilha
   - tema:   as cores dos círculos da trilha (claro = aula atual, bloqueado = aulas ainda trancadas)
   - aulas:  a lista de aulas. Cada aula vira um círculo no mapa.

   O número de aulas de cada lista é o mesmo número de "lições" que a página do
   curso mostra (pages/courses/*.html). Se mudar um, mude o outro:
   Física 24 · Química 20 · Python 30 · Programação web 28 · Inglês 18 · Matemática 26.

   Aulas de exemplo: depois virão do banco de dados.
   ===================================================== */

window.GaleaTrilhas = (() => {
    'use strict';

    const TRILHAS = {
        fisica: {
            titulo: 'Física – 2026',
            tema: { claro: '#F7B801', bloqueado: '#B8650F' },          // amarelo / laranja escuro
            aulas: [
                'O que é Física e método científico', 'Grandezas físicas e unidades de medida', 'Movimento uniforme (MU)', 'Movimento uniformemente variado (MUV)',
                'Gráficos do movimento', 'Queda livre e gravidade', 'Primeira Lei de Newton (Inércia)', 'Segunda Lei de Newton (F = m·a)',
                'Terceira Lei de Newton (Ação e Reação)', 'Força peso e força normal', 'Força de atrito', 'Trabalho mecânico',
                'Potência mecânica', 'Energia cinética', 'Energia potencial gravitacional e elástica', 'Conservação da energia mecânica',
                'Fluidos: densidade e pressão', 'Princípio de Arquimedes (Empuxo)', 'Calor, temperatura e escalas termométricas', 'Propagação de calor',
                'Ondas: características e velocidade', 'Som e eco', 'Óptica: reflexão e espelhos', 'Óptica: refração e lentes'
            ]
        },

        quimica: {
            titulo: 'Química – 2026',
            tema: { claro: '#00B4D8', bloqueado: '#0077B6' },          // ciano / azul petróleo
            aulas: [
                'O que é Química e a matéria', 'Estados físicos da matéria e mudanças de fase', 'Substâncias puras e misturas', 'Métodos de separação de misturas',
                'Modelos atômicos (Dalton, Thomson, Rutherford)', 'Estrutura atômica: prótons, nêutrons e elétrons', 'Número atômico e número de massa', 'A Tabela Periódica: organização e famílias',
                'Metais, ametais e gases nobres', 'Distribuição eletrônica e elétrons de valência', 'Ligação iônica', 'Ligação covalente',
                'Fórmulas químicas e nomenclatura básica', 'Ácidos e bases no cotidiano', 'Sais e óxidos', 'Escala de pH e indicadores',
                'Reações químicas e evidências', 'Balanceamento simples de equações químicas', 'Soluções e concentração básica', 'Química sustentável e meio ambiente'
            ]
        },

        python: {
            titulo: 'Python – 2026',
            tema: { claro: '#A98BFF', bloqueado: '#6446B8' },          // violeta
            aulas: [
                'Olá, mundo!', 'Variáveis e tipos', 'Números e operações', 'Textos (strings)', 'Entrada e saída',
                'Condições: if e else', 'Operadores lógicos', 'Laço while', 'Laço for', 'Listas',
                'Tuplas', 'Dicionários', 'Conjuntos', 'Funções', 'Parâmetros e retorno',
                'Escopo de variáveis', 'Módulos e bibliotecas', 'Erros e exceções', 'Arquivos', 'Compreensão de listas',
                'Funções lambda', 'Classes e objetos', 'Atributos e métodos', 'Herança', 'Trabalhando com datas',
                'JSON e dados', 'Testes simples', 'Boas práticas (PEP 8)', 'Mini projeto: jogo de adivinhação', 'Projeto final'
            ]
        },

        web: {
            titulo: 'Programação web – 2026',
            tema: { claro: '#FF6FA6', bloqueado: '#B03466' },          // rosa
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

        ingles: {
            titulo: 'Inglês – 2026',
            tema: { claro: '#2EC4B6', bloqueado: '#1B7A72' },          // verde água / turquesa
            aulas: [
                'Greetings & Introductions (Saudações)', 'Alphabet & Spelling (O alfabeto)', 'Numbers & Age (Números e idade)', 'Verb To Be: Afirmativa',
                'Verb To Be: Negativa e Interrogativa', 'Subject Pronouns (Pronomes pessoais)', 'Possessive Adjectives (My, your, his, her)', 'Colors & Common Objects (Cores e objetos)',
                'Days of the Week & Months (Dias e meses)', 'Telling Time (Dizendo as horas)', 'Simple Present: Verbos de rotina', 'Simple Present: Perguntas (Do / Does)',
                'Question Words (What, Where, Who, When)', 'Family Members (Família)', 'Food & Drinks (Comidas e bebidas)', 'Places in Town (Lugares na cidade)',
                'Describing People (Aparência e sentimentos)', 'Daily Conversation: Diálogo prático'
            ]
        },

        matematica: {
            titulo: 'Matemática – 2026',
            tema: { claro: '#FF7A5C', bloqueado: '#B84A33' },          // coral
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
    };

    return {
        // dados da trilha de um curso (ou null se o curso não existe)
        de(id) {
            return Object.prototype.hasOwnProperty.call(TRILHAS, id) ? TRILHAS[id] : null;
        }
    };
})();
