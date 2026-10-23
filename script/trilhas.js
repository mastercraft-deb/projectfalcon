/* =====================================================
   Trilhas dos cursos (usado por pages/trilha.html)

   Para cada curso do catálogo (script/cursos.js):
   - titulo: o nome mostrado no topo da trilha
   - tema:   as cores dos círculos da trilha (claro = aula atual, bloqueado = aulas ainda trancadas)
   - aulas:  a lista de aulas. Cada aula vira um círculo no mapa.

   O número de aulas de cada lista é o mesmo número de "lições" que a página do
   curso mostra (pages/courses/*.html). Se mudar um, mude o outro:
   Física 24 · Elétrica 20 · Python 30 · Programação web 28 · Teoria musical 18 · Matemática 26.

   Aulas de exemplo: depois virão do banco de dados.
   ===================================================== */

window.GaleaTrilhas = (() => {
    'use strict';

    const TRILHAS = {
        fisica: {
            titulo: 'Física quântica – 2026',
            tema: { claro: '#F7B801', bloqueado: '#B8650F' },          // amarelo / laranja escuro
            aulas: [
                'Leis de Newton', 'Movimento e referencial', 'Força e aceleração', 'Ação e reação',
                'Energia e trabalho', 'Energia cinética', 'Energia potencial', 'Conservação da energia',
                'Ondas e luz', 'Frequência e comprimento de onda', 'Reflexão e refração', 'Interferência e difração',
                'Radiação do corpo negro', 'A catástrofe do ultravioleta', 'Quantização de Planck', 'Temperatura e cor',
                'Efeito fotoelétrico', 'Fótons e energia', 'Função trabalho', 'Aplicações do efeito fotoelétrico',
                'Dualidade onda-partícula', 'Hipótese de De Broglie', 'O experimento da dupla fenda', 'Princípio da incerteza'
            ]
        },

        eletrica: {
            titulo: 'Elétrica – 2026',
            tema: { claro: '#4DA3FF', bloqueado: '#2A5FA8' },          // azul
            aulas: [
                'Carga elétrica', 'Condutores e isolantes', 'Lei de Coulomb', 'Campo elétrico',
                'Potencial elétrico', 'Tensão elétrica', 'Corrente elétrica', 'Resistência e resistores',
                'Lei de Ohm', 'Potência e energia elétrica', 'Circuitos em série', 'Circuitos em paralelo',
                'Leis de Kirchhoff', 'Capacitores', 'Indutores', 'Magnetismo e campo magnético',
                'Corrente alternada', 'Transformadores', 'Segurança elétrica', 'Projeto: seu primeiro circuito'
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

        musica: {
            titulo: 'Teoria musical – 2026',
            tema: { claro: '#3DD6D0', bloqueado: '#1C8D8A' },          // turquesa
            aulas: [
                'O som e suas propriedades', 'Notas musicais', 'A pauta e a clave de sol', 'Figuras de valor e pausas',
                'Compasso e pulsação', 'Andamento', 'Tons e semitons', 'Escala maior',
                'Escala menor', 'Intervalos', 'Armaduras de clave', 'Tríades e acordes',
                'Acordes com sétima', 'Campo harmônico', 'Cadências', 'Ritmo e síncope',
                'Dinâmica e expressão', 'Compondo uma melodia'
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
