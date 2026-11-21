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
                'O que é Física e método científico', 'Grandezas físicas e unidades de medida', 'Resumo de O que é Física e método científico e Grandezas físicas e unidades de medida', 'Movimento uniforme (MU)',
                'Movimento uniformemente variado (MUV)', 'Resumo de Movimento uniforme (MU) e Movimento uniformemente variado (MUV)', 'Gráficos do movimento', 'Queda livre e gravidade',
                'Resumo de Gráficos do movimento e Queda livre e gravidade', 'Primeira Lei de Newton (Inércia)', 'Segunda Lei de Newton (F = m·a)', 'Resumo de Primeira Lei de Newton (Inércia) e Segunda Lei de Newton (F = m·a)',
                'Terceira Lei de Newton (Ação e Reação)', 'Força peso e força normal', 'Resumo de Terceira Lei de Newton (Ação e Reação) e Força peso e força normal', 'Força de atrito',
                'Trabalho mecânico', 'Resumo de Força de atrito e Trabalho mecânico', 'Potência mecânica', 'Energia cinética',
                'Resumo de Potência mecânica e Energia cinética', 'Energia potencial gravitacional e elástica', 'Conservação da energia mecânica', 'Resumo de Energia potencial gravitacional e elástica e Conservação da energia mecânica'
            ]
        },

        quimica: {
            titulo: 'Química – 2026',
            tema: { claro: '#00B4D8', bloqueado: '#0077B6' },          // ciano / azul petróleo
            aulas: [
                'O que é Química e a matéria', 'Estados físicos da matéria e mudanças de fase', 'Resumo de O que é Química e a matéria e Estados físicos da matéria e mudanças de fase', 'Métodos de separação de misturas',
                'Modelos atômicos (Dalton, Thomson, Rutherford)', 'Resumo de Métodos de separação de misturas e Modelos atômicos (Dalton, Thomson, Rutherford)', 'Número atômico e número de massa', 'A Tabela Periódica: organização e famílias',
                'Resumo de Número atômico e número de massa e A Tabela Periódica: organização e famílias', 'Distribuição eletrônica e elétrons de valência', 'Ligação iônica', 'Resumo de Distribuição eletrônica e elétrons de valência e Ligação iônica',
                'Fórmulas químicas e nomenclatura básica', 'Ácidos e bases no cotidiano', 'Resumo de Fórmulas químicas e nomenclatura básica e Ácidos e bases no cotidiano', 'Escala de pH e indicadores',
                'Reações químicas e evidências', 'Resumo de Escala de pH e indicadores e Reações químicas e evidências', 'Soluções e concentração básica', 'Química sustentável e meio ambiente'
            ]
        },

        python: {
            titulo: 'Python – 2026',
            tema: { claro: '#A98BFF', bloqueado: '#6446B8' },          // violeta
            aulas: [
                'Olá, mundo!', 'Variáveis e tipos', 'Resumo de Olá, mundo! e Variáveis e tipos', 'Textos (strings)', 'Entrada e saída',
                'Resumo de Textos (strings) e Entrada e saída', 'Operadores lógicos', 'Laço while', 'Resumo de Operadores lógicos e Laço while', 'Listas',
                'Tuplas', 'Resumo de Listas e Tuplas', 'Conjuntos', 'Funções', 'Resumo de Conjuntos e Funções',
                'Escopo de variáveis', 'Módulos e bibliotecas', 'Resumo de Escopo de variáveis e Módulos e bibliotecas', 'Arquivos', 'Compreensão de listas',
                'Resumo de Arquivos e Compreensão de listas', 'Classes e objetos', 'Atributos e métodos', 'Resumo de Classes e objetos e Atributos e métodos', 'Trabalhando com datas',
                'JSON e dados', 'Resumo de Trabalhando com datas e JSON e dados', 'Boas práticas (PEP 8)', 'Mini projeto: jogo de adivinhação', 'Resumo de Boas práticas (PEP 8) e Mini projeto: jogo de adivinhação'
            ]
        },

        web: {
            titulo: 'Programação web – 2026',
            tema: { claro: '#FF6FA6', bloqueado: '#B03466' },          // rosa
            aulas: [
                'Como a web funciona', 'Primeira página em HTML', 'Resumo de Como a web funciona e Primeira página em HTML', 'Links e imagens',
                'Tabelas', 'Resumo de Links e imagens e Tabelas', 'HTML semântico', 'Introdução ao CSS',
                'Resumo de HTML semântico e Introdução ao CSS', 'Tipografia', 'Modelo de caixa', 'Resumo de Tipografia e Modelo de caixa',
                'Flexbox', 'Grid', 'Resumo de Flexbox e Grid', 'Design responsivo',
                'Animações em CSS', 'Resumo de Design responsivo e Animações em CSS', 'Introdução ao JavaScript', 'Variáveis e tipos (JS)',
                'Resumo de Introdução ao JavaScript e Variáveis e tipos (JS)', 'Condições e laços', 'Funções', 'Resumo de Condições e laços e Funções',
                'Eventos', 'Arrays e objetos', 'Resumo de Eventos e Arrays e objetos', 'Projeto final: seu portfólio'
            ]
        },

        ingles: {
            titulo: 'Inglês – 2026',
            tema: { claro: '#2EC4B6', bloqueado: '#1B7A72' },          // verde água / turquesa
            aulas: [
                'Greetings & Introductions (Saudações)', 'Alphabet & Spelling (O alfabeto)', 'Resumo de Greetings & Introductions (Saudações) e Alphabet & Spelling (O alfabeto)', 'Verb To Be: Afirmativa',
                'Verb To Be: Negativa e Interrogativa', 'Resumo de Verb To Be: Afirmativa e Verb To Be: Negativa e Interrogativa', 'Possessive Adjectives (My, your, his, her)', 'Colors & Common Objects (Cores e objetos)',
                'Resumo de Possessive Adjectives (My, your, his, her) e Colors & Common Objects (Cores e objetos)', 'Telling Time (Dizendo as horas)', 'Simple Present: Verbos de rotina', 'Resumo de Telling Time (Dizendo as horas) e Simple Present: Verbos de rotina',
                'Question Words (What, Where, Who, When)', 'Family Members (Família)', 'Resumo de Question Words (What, Where, Who, When) e Family Members (Família)', 'Places in Town (Lugares na cidade)',
                'Describing People (Aparência e sentimentos)', 'Resumo de Places in Town (Lugares na cidade) e Describing People (Aparência e sentimentos)'
            ]
        },

        matematica: {
            titulo: 'Matemática – 2026',
            tema: { claro: '#FF7A5C', bloqueado: '#B84A33' },          // coral
            aulas: [
                'Números naturais e inteiros', 'As quatro operações', 'Resumo de Números naturais e inteiros e As quatro operações', 'Frações',
                'Números decimais', 'Resumo de Frações e Números decimais', 'Razão e proporção', 'Regra de três',
                'Resumo de Razão e proporção e Regra de três', 'Expressões numéricas', 'Introdução à álgebra', 'Resumo de Expressões numéricas e Introdução à álgebra',
                'Problemas com equações', 'Inequações', 'Resumo de Problemas com equações e Inequações', 'Produtos notáveis',
                'Fatoração', 'Resumo de Produtos notáveis e Fatoração', 'Funções', 'Gráfico da função afim',
                'Resumo de Funções e Gráfico da função afim', 'Triângulos', 'Perímetro e área', 'Resumo de Triângulos e Perímetro e área',
                'Introdução à estatística', 'Resumo de Introdução à estatística'
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
