/* =====================================================
   Galea Educação - Conteúdo Pedagógico de Matemática
   Fontes: BNCC Matemática, Teoria Elementar dos Números, Álgebra Elementar,
           Geometria Euclidiana e Estatística Descritiva Básica.
   Ciclo de 3 aulas: 1=Texto Aprofundado, 2=Vídeo + Tela de Resumo, 3=Gamificação.
   ===================================================== */

window.GaleaBancosConteudo = window.GaleaBancosConteudo || {};

window.GaleaBancosConteudo.matematica = {
    // --- BLOCO 1 (Aulas 1 a 3) ---
    1: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a evolução histórica dos conjuntos numéricos, a necessidade da criação dos números negativos e as propriedades dos Naturais (ℕ) e Inteiros (ℤ).`,
            `### 1. A Necessidade Humana de Contar e Medir`,
            `A matemática nasceu de necessidades práticas da civilização: contar animais de rebanhos, demarcar terras após as cheias do Rio Nilo e registrar safras agrícolas. Assim surgiram os **Números Naturais (ℕ = {0, 1, 2, 3...})**, que servem para contagem de unidades inteiras e discretas.`,
            `### 2. A Ruptura dos Números Negativos: Os Inteiros (ℤ)`,
            `Durante séculos, matemáticos rejeitaram a ideia de números menores que zero. Porém, o comércio mercantil e a contabilidade exigiram registrar dívidas e saldos negativos. Com isso, consolidou-se o conjunto dos **Números Inteiros (ℤ = {... -3, -2, -1, 0, 1, 2, 3...})**.`,
            `- O símbolo ℤ vem do alemão *Zahlen* (que significa "números").`,
            `- Na reta numérica orientada, números positivos ficam à direita do zero e números negativos à esquerda.`,
            `- O **Módulo ou Valor Absoluto** (\`|x|\`) representa a distância geométrica do número até o zero na reta: \`|-7| = 7\` e \`|7| = 7\`.`,
            `### 3. Aplicações no Mundo Real`,
            `- **Termometria:** Temperaturas abaixo de zero (\`-5 ºC\`).`,
            `- **Altitudes e Profundidades:** Altitude em relação ao nível do mar (Monte Everest: \`+8.848m\`; Fossa das Marianas: \`-10.994m\`).`,
            `- **Finanças:** Saldo bancário devedor ou crédito disponível.`,
            `> **Dica de Fixação Galea (TDAH):** Pense na reta numérica como um prédio com elevador: o térreo é o 0, os andares superiores são positivos (+), e os subsolos de garagem são negativos (-)!`
        ].join('\n\n')
    },

    2: {
        tipo: 'video-resumo',
        video: { titulo: 'As Quatro Operações Fundamentais e Regras de Sinais' },
        conteudo: [
            `## 📺 Guia da Videoaula: Operações Básicas e Regras Algébricas`,
            `Assista ao vídeo demonstrando as operações com inteiros na reta numérica. A seguir, consulte o resumo essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Adição e Subtração com Sinais:**`,
            `  • Sinais iguais: Soma os valores e conserva o sinal (\`(-4) + (-6) = -10\`).`,
            `  • Sinais diferentes: Subtrai o menor do maior em módulo e conserva o sinal do maior (\`10 + (-15) = -5\`).`,
            `- **Multiplicação e Divisão (Regra de Sinais):**`,
            `  • \`(+) · (+) = (+)\` e \`(-) · (-) = (+)\` (Sinais iguais resultam em positivo).`,
            `  • \`(+) · (-) = (-)\` e \`(-) · (+) = (-)\` (Sinais diferentes resultam em negativo).`,
            `- **Propriedades Vitais:**`,
            `  • O elemento neutro da adição é o \`0\` (\`x + 0 = x\`).`,
            `  • O elemento neutro da multiplicação é o \`1\` (\`x · 1 = x\`).`,
            `  • **Atenção:** Divisão por zero é matematicamente indefinida!`,
            `> Conclua este resumo para liberar a gamificação na Lição 3!`
        ].join('\n\n')
    },

    3: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - Regras de Sinais: Selecione todas as sentenças e operações com números inteiros CORRETAS:',
                    dica: 'Atenção especial às regras de sinais da multiplicação e adição com números negativos!',
                    opcoes: [
                        { texto: '(-5) · (-4) = +20', correta: true },
                        { texto: '|-15| = 15', correta: true },
                        { texto: '(-10) + (+3) = -7', correta: true },
                        { texto: '0 é o elemento neutro da adição', correta: true },
                        { texto: '(-18) ÷ (+2) = -9', correta: true },
                        { texto: '(-3) · (+4) = +12', correta: false },
                        { texto: '|-8| = -8', correta: false },
                        { texto: 'Divisão por zero resulta em zero', correta: false }
                    ],
                    explicacao: 'Na multiplicação de números com mesmo sinal o resultado é positivo [(-5)·(-4) = +20]. O módulo é sempre positivo e divisão por zero é indefinida.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Multiplicação com Negativos: Complete a operação com a resposta correta:',
                    dica: 'Menos com menos na multiplicação resulta em sinal positivo (+)!',
                    template: 'O produto de (-6) · (-7) é igual a {lacuna}',
                    opcoes: ['+42', '-42', '-13', '+13'],
                    respostaCorreta: '+42',
                    explicacao: 'Multiplicando dois números inteiros negativos, o produto é sempre positivo: (-6) · (-7) = +42.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug Aritmético: Localize a linha que cometeu um erro de regra de sinais na expressão:',
                    dica: '20 somado com -8 equivale a 20 - 8, resultando em valor positivo!',
                    linhasCodigo: [
                        '1. Expressão original: 15 - (-5) + (-8)',
                        '2. Passo 1 (eliminar parênteses): 15 + 5 + (-8)',
                        '3. Passo 2 (somar parcelas): 20 + (-8) = -12',
                        '4. Resultado registrado incorretamente: -12'
                    ],
                    linhaBug: 2,
                    explicacao: 'No Passo 2 (linha 3), 20 + (-8) é igual a +12, e não -12! O número de maior módulo (20) determina o sinal positivo.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Hierarquia de Operações: Ordene as operações aritméticas na sequência universal de resolução:',
                    dica: 'Potenciação/Radiciação vêm antes de Multiplicação/Divisão, e Adição/Subtração ficam por último.',
                    itens: [
                        'Resolver potenciações e raízes quadradas',
                        'Calcular multiplicações e divisões da esquerda para a direita',
                        'Calcular adições e subtrações da esquerda para a direita',
                        'Obter o valor numérico final simplificado'
                    ],
                    ordemCorreta: [
                        'Resolver potenciações e raízes quadradas',
                        'Calcular multiplicações e divisões da esquerda para a direita',
                        'Calcular adições e subtrações da esquerda para a direita',
                        'Obter o valor numérico final simplificado'
                    ],
                    explicacao: 'A hierarquia algébrica padrão exige: 1. Potências/Raízes; 2. Produtos/Divisões; 3. Somas/Subtrações.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete com o valor do módulo (valor absoluto) do número inteiro negativo:',
                    dica: 'O módulo expressa a distância geométrica até a origem (zero), sendo invariavelmente não negativo.',
                    template: 'O módulo de |-45| é igual a {lacuna}',
                    opcoes: ['45', '-45', '0', '1'],
                    respostaCorreta: '45',
                    explicacao: 'O módulo |x| elimina o sinal negativo, medindo o comprimento real do segmento até o zero.'
                }
            ]
        }
    },

    // --- BLOCO 2 (Aulas 4 a 6) ---
    4: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Dominar a representação de partes de um todo através de frações, simplificação por MDC e operações com denominadores diferentes.`,
            `### 1. O que é uma Fração`,
            `Uma fração expressa a divisão de uma unidade inteira em partes geometricamente iguais. Escrita na forma \`a / b\`, onde \`a\` é o **numerador** (quantas partes temos) e \`b\` é o **denominador** (em quantas partes o todo foi fatiado, com \`b ≠ 0\`).`,
            `### 2. Frações Equivalentes e Simplificação`,
            `Multiplicar ou dividir o numerador e o denominador pelo mesmo número não altera o valor da fração. A simplificação reduz a fração à sua forma irredutível utilizando o Maior Divisor Comum (MDC): \`12 / 18\` dividido por 6 resulta em \`2 / 3\`.`,
            `### 3. Operações com Frações`,
            `- **Multiplicação:** Multiplica numerador por numerador e denominador por denominador: \`(2/3) · (4/5) = 8/15\`.`,
            `- **Divisão:** Conserva a primeira fração e multiplica pelo inverso da segunda: \`(2/3) ÷ (4/5) = (2/3) · (5/4) = 10/12 = 5/6\`.`,
            `- **Adição e Subtração:** Se os denominadores forem diferentes, é obrigatório encontrar o Mínimo Múltiplo Comum (MMC) antes de operar.`,
            `> **Dica de Fixação Galea (TDAH):** Pense em uma pizza cortada em 8 fatias: se você come 2 pedaços, comeu \`2/8\`, que é exatamente a mesma quantidade que \`1/4\` da pizza inteira!`
        ].join('\n\n')
    },

    5: {
        tipo: 'video-resumo',
        video: { titulo: 'Números Decimais, Notação Posicional e Relação com Frações' },
        conteudo: [
            `## 📺 Guia da Videoaula: Números Decimais e Potências de 10`,
            `Assista ao vídeo explicativo sobre casas decimais e sua conversão direta para frações. A seguir, consulte o resumo essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Estrutura Posicional:**`,
            `  • Primeira casa após a vírgula: **décimos** (\`0,1 = 1/10\`).`,
            `  • Segunda casa: **centésimos** (\`0,01 = 1/100\`).`,
            `  • Terceira casa: **milésimos** (\`0,001 = 1/1000\`).`,
            `- **Multiplicação por 10, 100, 1000:** Desloca a vírgula para a direita tantas casas quantos forem os zeros (\`2,35 · 10 = 23,5\`).`,
            `- **Divisão por 10, 100, 1000:** Desloca a vírgula para a esquerda (\`45,8 ÷ 100 = 0,458\`).`,
            `- **Alinhamento na Adição e Subtração:** Mantenha sempre "vírgula embaixo de vírgula".`,
            `> Conclua este resumo para encarar o desafio da Lição 6!`
        ].join('\n\n')
    },

    6: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Conversão Fracionária: Complete a conversão da fração 3/4 para a sua forma decimal exata correspondente:',
                    dica: 'Divida o numerador 3 pelo denominador 4 (3,00 ÷ 4).',
                    template: 'A fração 3/4 equivale exatamente ao número decimal {lacuna}',
                    opcoes: ['0.75', '0.50', '0.25', '0.34'],
                    respostaCorreta: '0.75',
                    explicacao: 'Ao dividir 3 por 4, obtemos 0,75 (ou 75 centésimos), que é a forma decimal exata de 3/4.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Frações Equivalentes: Selecione todas as frações rigorosamente equivalentes a 1/2 (metade):',
                    dica: 'Multiplicar numerador e denominador pelo mesmo fator gera frações equivalentes.',
                    opcoes: [
                        { texto: '2/4', correta: true },
                        { texto: '5/10', correta: true },
                        { texto: '50/100', correta: true },
                        { texto: '12/24', correta: true },
                        { texto: '3/7', correta: false },
                        { texto: '2/5', correta: false },
                        { texto: '4/10', correta: false }
                    ],
                    explicacao: 'Frações equivalentes mantêm a mesma proporção geométrica: 2/4 = 5/10 = 50/100 = 12/24 = 1/2.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug da Adição de Frações: Localize o erro clássico que todo iniciante comete:',
                    dica: 'Frações com o mesmo denominador mantêm a base; nunca some os denominadores!',
                    linhasCodigo: [
                        '1. Problema: Somar 1/4 de pizza com mais 2/4 de pizza',
                        '2. Passo 1: Somar numeradores: 1 + 2 = 3',
                        '3. Passo 2: Somar denominadores: 4 + 4 = 8, obtendo 3/8',
                        '4. Conclusão incorreta registrada'
                    ],
                    linhaBug: 2,
                    explicacao: 'No Passo 2 (linha 3), o denominador 4 NUNCA deve ser somado! 1/4 + 2/4 = 3/4, e não 3/8.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Algoritmo do MMC: Ordene o procedimento correto para somar frações com denominadores diferentes:',
                    dica: 'Encontre o MMC dos denominadores, ajuste os numeradores, some e simplifique.',
                    itens: [
                        'Calcular o MMC entre os denominadores distintos',
                        'Dividir pelo denominador antigo e multiplicar pelo numerador',
                        'Somar os novos numeradores mantendo o denominador comum',
                        'Simplificar a fração resultante pelo MDC até a forma irredutível'
                    ],
                    ordemCorreta: [
                        'Calcular o MMC entre os denominadores distintos',
                        'Dividir pelo denominador antigo e multiplicar pelo numerador',
                        'Somar os novos numeradores mantendo o denominador comum',
                        'Simplificar a fração resultante pelo MDC até a forma irredutível'
                    ],
                    explicacao: 'O método canônico é: 1. MMC da base; 2. Proporção dos numeradores; 3. Adição direta; 4. Redução irredutível.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Na multiplicação de frações, simplifique o produto de (2/3) · (3/4):',
                    dica: 'Multiplique numeradores (2·3=6) e denominadores (3·4=12), depois simplifique 6/12 dividindo por 6.',
                    template: 'O produto (2/3) · (3/4) simplificado na forma irredutível é {lacuna}',
                    opcoes: ['1/2', '2/3', '5/7', '6/12'],
                    respostaCorreta: '1/2',
                    explicacao: '(2·3)/(3·4) = 6/12. Dividindo numerador e denominador por 6, chegamos a 1/2.'
                }
            ]
        }
    },

    // --- BLOCO 3 (Aulas 7 a 9) ---
    7: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender os conceitos de razão e proporção, grandezas diretamente e inversamente proporcionais e a propriedade fundamental das proporções.`,
            `### 1. O Conceito de Razão`,
            `Na matemática, uma **razão** é a comparação multiplicativa entre duas grandezas da mesma espécie ou de naturezas distintas através de uma divisão: \`Razão = a / b\`.`,
            `- Exemplos clássicos: **Velocidade média** (distância / tempo), **Densidade demográfica** (habitantes / área), **Escala de mapas** (medida no papel / medida real).`,
            `### 2. Proporção e a Propriedade Fundamental`,
            `Uma **proporção** é a igualdade formal entre duas razões equivalentes: \`a / b = c / d\`.`,
            `- **Teorema Fundamental das Proporções:** Em toda proporção, o produto dos extremos é rigorosamente igual ao produto dos meios: \`a · d = b · c\`.`,
            `### 3. Grandezas Diretas vs Inversas`,
            `- **Diretamente Proporcionais:** Quando uma grandeza dobra, a outra dobra na mesma medida (ex.: quantidade de combustível e distância percorrida).`,
            `- **Inversamente Proporcionais:** Quando uma grandeza dobra, a outra é reduzida pela metade (ex.: velocidade do veículo e tempo de viagem).`,
            `> **Dica de Fixação Galea (TDAH):** Pense em uma receita de bolo: se você vai fazer o dobro de bolos, precisa do dobro de ovos (direta). Mas se tiver o dobro de cozinheiros ajudando, o tempo cai pela metade (inversa)!`
        ].join('\n\n')
    },

    8: {
        tipo: 'video-resumo',
        video: { titulo: 'Regra de Três Simples Direta e Inversa' },
        conteudo: [
            `## 📺 Guia da Videoaula: Algoritmo da Regra de Três`,
            `Assista ao passo a passo para montar tabelas comparativas e aplicar a regra de três simples. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Passo 1 (Organização):** Monte uma tabela com duas colunas identificando as grandezas envolvidas.`,
            `- **Passo 2 (Análise de Proporcionalidade):** Pergunte a si mesmo: se a primeira grandeza aumentar, a segunda vai aumentar ou diminuir?`,
            `- **Passo 3 (Resolução):**`,
            `  • Se for **Diretamente Proporcional:** Multiplique em cruz (*produto cruzado*): \`x · b = a · c\`.`,
            `  • Se for **Inversamente Proporcional:** Multiplique em linha reta: \`x · c = a · b\`.`,
            `> Conclua este resumo para liberar a gamificação na Lição 9!`
        ].join('\n\n')
    },

    9: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 1/5 - Método da Regra de Três: Ordene os passos para resolver problemas de proporcionalidade:',
                    dica: 'Comece identificando as grandezas, analise se são diretas ou inversas, monte a proporção e isole x.',
                    itens: [
                        'Identificar as duas grandezas e montar a tabela de valores',
                        'Analisar se as grandezas são diretamente ou inversamente proporcionais',
                        'Montar a equação proporcional correta (cruzada ou em linha)',
                        'Resolver a equação e isolar a incógnita x para achar a resposta'
                    ],
                    ordemCorreta: [
                        'Identificar as duas grandezas e montar a tabela de valores',
                        'Analisar se as grandezas são diretamente ou inversamente proporcionais',
                        'Montar a equação proporcional correta (cruzada ou em linha)',
                        'Resolver a equação e isolar a incógnita x para achar a resposta'
                    ],
                    explicacao: 'O método canônico é: 1. Tabular dados; 2. Avaliar sentido da proporcionalidade; 3. Montar a proporção; 4. Isolar a incógnita algebraicamente.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Grandezas Proporcionais: Selecione todas as relações DIRETAMENTE proporcionais:',
                    dica: 'Direta: quando uma dobra, a outra também dobra (ex: combustível e distância).',
                    opcoes: [
                        { texto: 'Distância percorrida e consumo de combustível (velocidade constante)', correta: true },
                        { texto: 'Número de pães comprados e valor total a pagar', correta: true },
                        { texto: 'Horas trabalhadas e salário bruto proporcional', correta: true },
                        { texto: 'Velocidade do carro e tempo de viagem (inversa)', correta: false },
                        { texto: 'Número de operários e tempo para concluir obra (inversa)', correta: false },
                        { texto: 'Torneiras abertas e tempo para encher caixa d\'água (inversa)', correta: false }
                    ],
                    explicacao: 'Grandezas diretas crescem no mesmo sentido multiplicativo. Já tempo e velocidade são inversamente proporcionais.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Proporcionalidade: Identifique a linha com o erro no cálculo com grandezas inversas:',
                    dica: 'Dobrando os pedreiros, o tempo cai pela metade; multiplicar em cruz seria o erro fatal de tratá-los como diretos!',
                    linhasCodigo: [
                        '1. Problema: 2 pedreiros constroem muro em 6 dias. Quantos dias levam 4 pedreiros?',
                        '2. Análise: Mais pedreiros levam MENOS tempo (inversamente proporcional)',
                        '3. Montagem incorreta em cruz: 2 / 6 = 4 / x => 2x = 24 => x = 12 dias',
                        '4. Resultado absurdo registrado: o dobro de pedreiros demoraria o dobro do tempo!'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, foi feita multiplicação cruzada como se fosse direta. Para grandezas inversas multiplica-se em linha: 4 · x = 2 · 6 => 4x = 12 => x = 3 dias!'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 4/5 - Cálculo de Porcentagem: Complete o valor correspondente a 20% de desconto sobre uma compra de R$ 150,00:',
                    dica: '20% é igual a 0,20 (ou 20/100). Calcule 150 · 0,20.',
                    template: 'O desconto de 20% sobre R$ 150,00 equivale a R$ {lacuna}',
                    opcoes: ['30', '20', '15', '25'],
                    respostaCorreta: '30',
                    explicacao: '150 · 0,20 = 30. O valor do desconto é de R$ 30,00.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Selecione as proporções matematicamente EQUIVALENTES:',
                    dica: 'O produto dos extremos é igual ao produto dos meios: a · d = b · c.',
                    opcoes: [
                        { texto: '2/5 = 6/15 (pois 2·15 = 5·6 = 30)', correta: true },
                        { texto: '3/4 = 75/100 (pois 3·100 = 4·75 = 300)', correta: true },
                        { texto: '1/3 = 10/30 (pois 1·30 = 3·10 = 30)', correta: true },
                        { texto: '2/3 = 4/9 (pois 2·9 ≠ 3·4)', correta: false },
                        { texto: '5/2 = 2/5 (inversos não são iguais)', correta: false }
                    ],
                    explicacao: 'Pelo Teorema Fundamental das Proporções, a/b = c/d se e somente se a·d = b·c.'
                }
            ]
        }
    },

    // --- BLOCO 4 (Aulas 10 a 12) ---
    10: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a hierarquia matemática de operações (PEMDAS) e a eliminação correta de símbolos de agrupamento.`,
            `### 1. Por que Existe uma Ordem de Operações`,
            `Sem convenções internacionais de prioridade, uma conta simples como \`2 + 3 · 4\` teria dois resultados conflitantes: \`20\` (se somar primeiro) ou \`14\` (se multiplicar primeiro). A matemática estabeleceu uma convenção universal para eliminar qualquer ambiguidade.`,
            `### 2. A Hierarquia Universal (PEMDAS)`,
            `Em qualquer expressão numérica, execute estritamente nesta sequência:`,
            `1. **Parênteses, Colchetes e Chaves \`() [] {}\`:** De dentro para fora.`,
            `2. **Expoentes e Raízes:** Potenciação e Radiciação na ordem em que aparecem.`,
            `3. **Multiplicações e Divisões:** No mesmo nível de prioridade, resolvidas da esquerda para a direita.`,
            `4. **Adições e Subtrações:** Resolvidas por último, da esquerda para a direita.`,
            `### 3. Exemplo Resolvido`,
            `\`\`\`\n10 + 2 · [15 - (3² + 1)]\n= 10 + 2 · [15 - (9 + 1)]\n= 10 + 2 · [15 - 10]\n= 10 + 2 · 5\n= 10 + 10 = 20\n\`\`\``,
            `> **Dica de Fixação Galea (TDAH):** Lembre-se da palavra mágica **PEMDAS**: Parênteses, Expoentes, Multiplicação/Divisão, Adição/Subtração!`
        ].join('\n\n')
    },

    11: {
        tipo: 'video-resumo',
        video: { titulo: 'Introdução à Álgebra, Termos Semelhantes e Equações do 1º Grau' },
        conteudo: [
            `## 📺 Guia da Videoaula: A Linguagem das Letras na Matemática`,
            `Assista ao vídeo e veja como a incógnita x atua como uma ponte para resolver problemas. A seguir, consulte o resumo essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **O que é uma Incógnita:** Uma letra que representa um valor numérico desconhecido a ser determinado (\`x\`, \`y\`, \`n\`).`,
            `- **Termos Semelhantes:** Apenas termos com a mesma parte literal podem ser somados ou subtraídos: \`3x + 5x = 8x\`, mas \`3x + 5\` não pode ser somado.`,
            `- **Princípio da Balança (Equações do 1º Grau):** Uma equação é como uma balança de pratos perfeitamente equilibrada. Tudo o que for feito de um lado deve ser feito exatamente do outro lado para manter a igualdade.`,
            `- **Regra Prática de Transposição:** Um termo muda de lado invertendo sua operação: adição vira subtração; multiplicação vira divisão.`,
            `> Conclua este resumo para liberar a gamificação na Lição 12!`
        ].join('\n\n')
    },

    12: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Equação do 1º Grau: Resolva a equação 2x + 6 = 16 e complete com o valor da incógnita x:',
                    dica: 'Subtraia 6 de ambos os lados (2x = 10) e divida por 2.',
                    template: 'O valor da incógnita que satisfaz a equação 2x + 6 = 16 é x = {lacuna}',
                    opcoes: ['5', '10', '4', '8'],
                    respostaCorreta: '5',
                    explicacao: 'Isolando o termo: 2x = 16 - 6 => 2x = 10 => x = 10 / 2 => x = 5.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Hierarquia PEMDAS: Selecione todas as expressões calculadas de forma CORRETA:',
                    dica: 'Multiplicações e divisões têm prioridade absoluta sobre adições e subtrações!',
                    opcoes: [
                        { texto: '2 + 3 · 4 = 14', correta: true },
                        { texto: '(2 + 3) · 4 = 20', correta: true },
                        { texto: '10 - 2 · 3 = 4', correta: true },
                        { texto: '20 ÷ 4 · 2 = 10 (da esquerda p/ direita)', correta: true },
                        { texto: '2 + 3 · 4 = 20 (somou primeiro)', correta: false },
                        { texto: '10 - 2 · 3 = 24', correta: false }
                    ],
                    explicacao: 'Sem parênteses, 3 · 4 = 12 primeiro, depois 2 + 12 = 14. Parênteses alteram a ordem natural da conta.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Álgebra: Localize a linha que cometeu o erro clássico de transposição de termos:',
                    dica: 'Ao passar um termo somando para o outro lado da igualdade, ele deve trocar de sinal (ficar subtraindo)!',
                    linhasCodigo: [
                        '1. Equação inicial: 3x + 12 = 0',
                        '2. Passo 1 (transposição): 3x = 12',
                        '3. Passo 2 (divisão): x = 12 / 3',
                        '4. Raiz calculada com sinal invertido: x = 4'
                    ],
                    linhaBug: 1,
                    explicacao: 'Na linha 2 (Passo 1), o +12 deveria ter passado como -12 (3x = -12 => x = -4). Esqueceram de inverter o sinal!'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Algoritmo da Balança: Ordene os passos formais para isolar a incógnita em uma equação do 1º grau:',
                    dica: 'Agrupe as incógnitas no primeiro membro, termos constantes no segundo, simplifique e divida.',
                    itens: [
                        'Agrupar todos os termos com incógnita no primeiro membro',
                        'Mover os termos numéricos para o segundo membro invertendo a operação',
                        'Reduzir os termos semelhantes em ambos os membros',
                        'Dividir ambos os membros pelo coeficiente que multiplica a incógnita'
                    ],
                    ordemCorreta: [
                        'Agrupar todos os termos com incógnita no primeiro membro',
                        'Mover os termos numéricos para o segundo membro invertendo a operação',
                        'Reduzir os termos semelhantes em ambos os membros',
                        'Dividir ambos os membros pelo coeficiente que multiplica a incógnita'
                    ],
                    explicacao: 'A regra de ouro da balança mantém a igualdade ao isolar a variável desconhecida.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Calcule o valor da incógnita na equação 5x - 15 = 20:',
                    dica: 'Some 15 dos dois lados: 5x = 35. Em seguida, divida 35 por 5.',
                    template: 'Na equação 5x - 15 = 20, a raiz é x = {lacuna}',
                    opcoes: ['7', '5', '8', '6'],
                    respostaCorreta: '7',
                    explicacao: '5x = 20 + 15 => 5x = 35 => x = 35 / 5 = 7.'
                }
            ]
        }
    },

    // --- BLOCO 5 (Aulas 13 a 15) ---
    13: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Traduzir enunciados em linguagem natural para expressões algébricas formais e resolver situações-problema reais.`,
            `### 1. Traduzindo do Português para a Matemática`,
            `O maior obstáculo na resolução de problemas matemáticos não é a álgebra, mas a tradução textual. Veja o dicionário clássico de termos:`,
            `- "Um número desconhecido" → \`x\`.`,
            `- "O dobro de um número" → \`2x\`.`,
            `- "O sucessor de um número" → \`x + 1\`.`,
            `- "A diferença entre dois números" → \`x - y\`.`,
            `- "A terça parte de um valor" → \`x / 3\`.`,
            `- "É igual a / resulta em" → \`=\`.`,
            `### 2. Exemplo Prático de Modelagem`,
            `*Problema:* "O triplo de um número adicionado a 15 é igual a 45. Qual é esse número?"`,
            `1. Modelagem: \`3x + 15 = 45\`.`,
            `2. Resolução: \`3x = 45 - 15\` → \`3x = 30\` → \`x = 10\`.`,
            `3. Validação: \`3 · 10 + 15 = 30 + 15 = 45\` (Verdadeiro!).`,
            `> **Dica de Fixação Galea (TDAH):** Pense na modelagem como traduzir um texto do português para o inglês: você substitui as palavras por símbolos matemáticos equivalentes linha por linha!`
        ].join('\n\n')
    },

    14: {
        tipo: 'video-resumo',
        video: { titulo: 'Inequações e Conjuntos Solução com Intervalos Reais' },
        conteudo: [
            `## 📺 Guia da Videoaula: Desigualdades e Sinais de Inequação`,
            `Assista ao vídeo explicativo sobre inequações e a regra de inversão do sinal. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Símbolos de Desigualdade:** \`>\` (maior que), \`<\` (menor que), \`≥\` (maior ou igual), \`≤\` (menor ou igual).`,
            `- **Conjunto Solução Infinito:** Diferente de uma equação simples que costuma ter apenas uma raiz, a inequação expressa uma faixa contínua de respostas (ex.: \`x > 5\` engloba 5.1, 6, 100, 1000...).`,
            `- **A REGRA DE OURO DAS INEQUAÇÕES:** Ao multiplicar ou dividir ambos os lados por um **número negativo**, o sinal da desigualdade deve ser obrigatoriamente **invertido**! (\`-2x < 10\` vira \`x > -5\`).`,
            `> Conclua este resumo para desbloquear a gamificação na Lição 15!`
        ].join('\n\n')
    },

    15: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - Desigualdades & Modelagem: Selecione todas as afirmações matematicamente VERDADEIRAS:',
                    dica: 'Atenção à regra de inversão do sinal de desigualdade ao multiplicar por número negativo!',
                    opcoes: [
                        { texto: 'Se -x < 5, multiplicando por -1 obtemos x > -5', correta: true },
                        { texto: 'A equação 3x = 12 possui raiz única x = 4', correta: true },
                        { texto: 'O triplo de x aumentado de 4 expressa-se como 3x + 4', correta: true },
                        { texto: 'x ≥ 10 inclui o próprio número 10 na solução', correta: true },
                        { texto: 'Multiplicar por negativo mantém o sentido da desigualdade', correta: false },
                        { texto: 'x < 3 inclui o número 3 como solução válida', correta: false }
                    ],
                    explicacao: 'Multiplicar inequações por número negativo inverte o sentido da desigualdade (> vira <).'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Inversão do Sinal: Complete com o símbolo de desigualdade correto ao multiplicar -2x < 10 por -1:',
                    dica: 'Ao dividir por -2, o sinal < inverte obrigatoriamente para >.',
                    template: 'Resolvendo a inequação -2x < 10, o conjunto solução é x {lacuna} -5',
                    opcoes: ['>', '<', '≥', '≤'],
                    respostaCorreta: '>',
                    explicacao: 'Dividir ou multiplicar ambos os membros por número negativo inverte a desigualdade: x > -5.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Tradução Algébrica: Localize o erro na modelagem do enunciado para símbolos matemáticos:',
                    dica: 'A expressão "a diferença entre o dobro de x e 8" deve ser escrita como 2x - 8, e não 8 - 2x!',
                    linhasCodigo: [
                        '1. Enunciado: O dobro de um número subtraído de 8 é igual a 14',
                        '2. Modelagem correta de "dobro subtraído de 8": 8 - 2x = 14',
                        '3. Tentativa errada: 2x - 8 = 14 => 2x = 22 => x = 11',
                        '4. Inversão dos termos da subtração detectada'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, escreveram 2x - 8 em vez de 8 - 2x. Na subtração, a ordem dos termos altera totalmente o resultado!'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Resolução de Inequação: Ordene os passos para resolver a inequação -3x + 9 ≤ 0:',
                    dica: 'Isole o termo com x, passe o 9 subtraindo e divida por -3 invertendo o sinal para ≥.',
                    itens: [
                        'Equação inicial: -3x + 9 ≤ 0',
                        'Mover o termo numérico: -3x ≤ -9',
                        'Dividir por -3 e inverter o sinal da desigualdade: x ≥ -9 / (-3)',
                        'Solução final em intervalo real: x ≥ 3'
                    ],
                    ordemCorreta: [
                        'Equação inicial: -3x + 9 ≤ 0',
                        'Mover o termo numérico: -3x ≤ -9',
                        'Dividir por -3 e inverter o sinal da desigualdade: x ≥ -9 / (-3)',
                        'Solução final em intervalo real: x ≥ 3'
                    ],
                    explicacao: 'O passo crucial é a inversão de ≤ para ≥ ao dividir por -3, resultando em x ≥ 3.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: O triplo de um número somado a 15 resulta em 45. Qual é o valor desse número?',
                    dica: '3x + 15 = 45 => 3x = 30 => x = 30 / 3.',
                    template: 'O número procurado na equação 3x + 15 = 45 é x = {lacuna}',
                    opcoes: ['10', '15', '20', '30'],
                    respostaCorreta: '10',
                    explicacao: '3x = 45 - 15 => 3x = 30 => x = 10. Verificação: 3·10 + 15 = 45.'
                }
            ]
        }
    },

    // --- BLOCO 6 (Aulas 16 a 18) ---
    16: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a geometria por trás dos Produtos Notáveis: o quadrado da soma, o quadrado da diferença e o produto da soma pela diferença.`,
            `### 1. A Geometria dos Produtos Notáveis`,
            `Produtos notáveis são multiplicações de polinômios que seguem padrões fixos. Em vez de calcular termo a termo todas as vezes, aplicamos identidades comprovadas algebricamente e geometricamente.`,
            `### 2. Os Três Produtos Notáveis Clássicos`,
            `- **1. Quadrado da Soma de Dois Termos:** \`(a + b)² = a² + 2ab + b²\`.`,
            `  • *Interpretação Geométrica:* Área de um quadrado de lado \`(a+b)\`, formado por um quadrado grande \`a²\`, dois retângulos \`ab\` e um quadrado menor \`b²\`.`,
            `- **2. Quadrado da Diferença:** \`(a - b)² = a² - 2ab + b²\`.`,
            `- **3. Produto da Soma pela Diferença:** \`(a + b) · (a - b) = a² - b²\` (*Diferença de Dois Quadrados*).`,
            `### 3. O Erro Mais Famoso da Álgebra`,
            `**NUNCA** cometa o erro clássico de escrever \`(a + b)² = a² + b²\`. O termo do meio \`+2ab\` é obrigatório e indispensável!`,
            `> **Dica de Fixação Galea (TDAH):** Decore o ritmo: "O primeiro ao quadrado, mais duas vezes o primeiro pelo segundo, mais o segundo ao quadrado!"`
        ].join('\n\n')
    },

    17: {
        tipo: 'video-resumo',
        video: { titulo: 'Fatoração Algébrica: Fator Comum, Agrupamento e Trinômio do 2º Grau' },
        conteudo: [
            `## 📺 Guia da Videoaula: Decompondo Polinômios em Fatores`,
            `Assista ao vídeo demonstrando como a fatoração simplifica expressões complexas. A seguir, consulte o resumo essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **O que é Fatorar:** Transformar uma soma ou subtração de termos em uma multiplicação equivalente de fatores.`,
            `- **Casos Principais:**`,
            `  • **Fator Comum em Evidência:** Identifica o termo que se repete em todas as parcelas: \`ax + bx = x(a + b)\`.`,
            `  • **Agrupamento:** Fatora em pares para encontrar um fator compartilhado: \`ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)\`.`,
            `  • **Diferença de Quadrados:** Desfaz o produto notável: \`x² - 25 = (x + 5)(x - 5)\`.`,
            `> Conclua este resumo para liberar a gamificação na Lição 18!`
        ].join('\n\n')
    },

    18: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Produtos Notáveis: Complete a expansão de (x + 3)² com o termo central correto:',
                    dica: 'Lembre-se da regra: 2 vezes o primeiro termo vezes o segundo termo (2 · x · 3).',
                    template: '(x + 3)² = x² + {lacuna} + 9',
                    opcoes: ['6x', '3x', '9x', '12x'],
                    respostaCorreta: '6x',
                    explicacao: 'A expansão de (x + 3)² é x² + 2(x)(3) + 3² = x² + 6x + 9. O termo intermediário é 6x.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Identidades Algébricas: Selecione todas as identidades de produtos notáveis e fatorações CORRETAS:',
                    dica: 'Atenção especial à diferença de dois quadrados: (a + b)(a - b) = a² - b².',
                    opcoes: [
                        { texto: '(a + b)(a - b) = a² - b²', correta: true },
                        { texto: '(a - b)² = a² - 2ab + b²', correta: true },
                        { texto: 'x² - 25 = (x + 5)(x - 5)', correta: true },
                        { texto: 'ax + ay = a(x + y)', correta: true },
                        { texto: '(a + b)² = a² + b² (esqueceu o 2ab)', correta: false },
                        { texto: '(a - b)² = a² - b²', correta: false }
                    ],
                    explicacao: '(a + b)² jamais é a² + b²; o termo central +2ab é obrigatório. A diferença de quadrados é (a + b)(a - b) = a² - b².'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug do Erro Mais Famoso: Localize a linha que cometeu a omissão do termo do meio do produto notável:',
                    dica: 'O quadrado da soma requer o dobro do primeiro pelo segundo termo (2ab)!',
                    linhasCodigo: [
                        '1. Problema: Expandir algebricamente (x + 5)²',
                        '2. Regra aplicada incorretamente: Elevar cada termo ao quadrado isolado',
                        '3. Linha com erro fatal: (x + 5)² = x² + 25',
                        '4. Termo obrigatório 2 · x · 5 = 10x foi omitido!'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, escreveram x² + 25. A expansão correta de (x + 5)² é x² + 10x + 25.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Fatoração por Fator Comum: Ordene os passos para fatorar a expressão 4x² + 8x:',
                    dica: 'Identifique o MDC (4) e a menor potência de x (x), coloque 4x em evidência e divida os termos.',
                    itens: [
                        'Identificar o MDC entre os números 4 e 8 (MDC = 4)',
                        'Identificar a menor potência da variável comum (x)',
                        'Colocar o monômio 4x em evidência antes dos parênteses',
                        'Dividir os termos originais: 4x(x + 2)'
                    ],
                    ordemCorreta: [
                        'Identificar o MDC entre os números 4 e 8 (MDC = 4)',
                        'Identificar a menor potência da variável comum (x)',
                        'Colocar o monômio 4x em evidência antes dos parênteses',
                        'Dividir os termos originais: 4x(x + 2)'
                    ],
                    explicacao: 'Fatorar em evidência decompõe a soma no produto 4x(x + 2).'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete a fatoração da diferença de dois quadrados x² - 16:',
                    dica: 'x² - 16 = (x + 4)(x - 4).',
                    template: 'A forma fatorada de x² - 16 é igual a (x + 4)(x {lacuna} 4)',
                    opcoes: ['-', '+', '·', '÷'],
                    respostaCorreta: '-',
                    explicacao: 'A diferença de dois quadrados fatora sempre como o produto da soma pela diferença: (x + 4)(x - 4).'
                }
            ]
        }
    },

    // --- BLOCO 7 (Aulas 19 a 21) ---
    19: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender o conceito formal de função como uma relação de dependência unívoca entre dois conjuntos (domínio e imagem).`,
            `### 1. O que é uma Função na Matemática`,
            `Formalizada por matemáticos como Leibniz e Euler, uma **função** é uma lei de correspondência que associa cada elemento \`x\` de um conjunto de partida (o **Domínio**) a um único elemento \`y = f(x)\` em um conjunto de chegada (o **Contradomínio** e a **Imagem**).`,
            `### 2. A Função Afim (Função do 1º Grau)`,
            `A função afim possui a lei de formação elementar: \`f(x) = ax + b\`.`,
            `- O coeficiente \`a\` é o **Coeficiente Angular** (taxa de variação ou inclinação): indica quanto \`y\` cresce ou decresce a cada 1 unidade que \`x\` avança. Se \`a > 0\`, a função é crescente; se \`a < 0\`, decrescente.`,
            `- O coeficiente \`b\` é o **Coeficiente Linear**: o ponto exato onde a reta corta o eixo vertical \`y\` (ou seja, quando \`x = 0\`).`,
            `### 3. Exemplo Prático: Corrida de Aplicativo`,
            `Uma corrida cobra uma taxa fixa de R$ 5,00 mais R$ 2,50 por quilômetro rodado: \`Preço(x) = 2,50x + 5,00\`. Aqui, \`a = 2,50\` e \`b = 5,00\`.`,
            `> **Dica de Fixação Galea (TDAH):** Pense na função como uma esteira de fábrica: você coloca a matéria-prima \`x\`, a máquina aplica a regra \`ax + b\`, e do outro lado sai o produto pronto \`y\`!`
        ].join('\n\n')
    },

    20: {
        tipo: 'video-resumo',
        video: { titulo: 'O Gráfico da Função Afim no Plano Cartesiano' },
        conteudo: [
            `## 📺 Guia da Videoaula: Plotando Retas no Plano Cartesiano`,
            `Assista ao vídeo explicativo sobre o plano de René Descartes e a inclinação de retas. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Geometria da Função Afim:** O gráfico de toda função do tipo \`f(x) = ax + b\` é invariavelmente uma **reta contínua**.`,
            `- **Como Construir uma Reta:** Como dois pontos distintos determinam uma reta única, você só precisa encontrar 2 pares ordenados \`(x, y)\`:`,
            `  1. Ponto no eixo Y: Faça \`x = 0\` → \`y = b\` → Ponto \`(0, b)\`.`,
            `  2. Raiz da Função (corte no eixo X): Faça \`y = 0\` → \`ax + b = 0\` → \`x = -b / a\` → Ponto \`(-b/a, 0)\`.`,
            `> Conclua este resumo para liberar a gamificação na Lição 21!`
        ].join('\n\n')
    },

    21: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - Função Afim: Selecione todas as afirmações corretas sobre a função f(x) = 2x - 8 e retas no plano:',
                    dica: 'Analise o coeficiente angular a, o coeficiente linear b e a raiz da função.',
                    opcoes: [
                        { texto: 'A raiz (zero) da função ocorre em x = 4', correta: true },
                        { texto: 'A reta corta o eixo Y no ponto (0, -8)', correta: true },
                        { texto: 'A função é crescente pois a = 2 > 0', correta: true },
                        { texto: 'O gráfico de qualquer função afim é uma reta', correta: true },
                        { texto: 'A função é decrescente', correta: false },
                        { texto: 'O gráfico de uma função afim é uma parábola', correta: false }
                    ],
                    explicacao: 'Em f(x) = 2x - 8: como a=2>0 a função cresce; corta o eixo Y em (0, -8); e a raiz é 2x - 8 = 0 => x = 4.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Ponto de Intercepto Linear: Em f(x) = 3x + 12, em qual valor no eixo vertical Y a reta corta?',
                    dica: 'O coeficiente linear b é o valor de y quando x = 0.',
                    template: 'A reta da função f(x) = 3x + 12 corta o eixo vertical Y no ponto (0, {lacuna})',
                    opcoes: ['12', '3', '-12', '4'],
                    respostaCorreta: '12',
                    explicacao: 'Fazendo x = 0: f(0) = 3(0) + 12 = 12. O corte no eixo Y é dado diretamente pelo coeficiente b.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug da Raiz da Função: Identifique o erro no cálculo do zero da função f(x) = 4x - 20:',
                    dica: 'Ao igualar a zero, -20 passa para o outro lado como +20!',
                    linhasCodigo: [
                        '1. Função: f(x) = 4x - 20',
                        '2. Condição de raiz: f(x) = 0 => 4x - 20 = 0',
                        '3. Transposição errada: 4x = -20 => x = -5',
                        '4. Raiz anotada incorretamente com sinal negativo'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, -20 deveria ter passado positivo: 4x = +20 => x = 5. A raiz correta é x = 5.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Construção Gráfica: Ordene o processo canônico para plotar o gráfico de uma reta no plano cartesiano:',
                    dica: 'Encontre o corte em Y, calcule a raiz em X, marque os pares ordenados e una com a régua.',
                    itens: [
                        'Calcular o ponto de intercepto no eixo Y fazendo x = 0: (0, b)',
                        'Calcular a raiz da função fazendo y = 0: (-b/a, 0)',
                        'Marcar ambos os pares ordenados nos eixos X e Y',
                        'Traçar a reta infinita que conecta os dois pontos determinados'
                    ],
                    ordemCorreta: [
                        'Calcular o ponto de intercepto no eixo Y fazendo x = 0: (0, b)',
                        'Calcular a raiz da função fazendo y = 0: (-b/a, 0)',
                        'Marcar ambos os pares ordenados nos eixos X e Y',
                        'Traçar a reta infinita que conecta os dois pontos determinados'
                    ],
                    explicacao: 'Dois pontos distintos no plano cartesiano determinam de forma única e rigorosa uma reta euclidiana.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Uma função com lei f(x) = -5x + 30 possui coeficiente angular negativo (a < 0). Portanto, ela é:',
                    dica: 'Se a < 0, quando x aumenta, o valor de y diminui.',
                    template: 'Como o coeficiente a é negativo (-5), a função afim é classificada como {lacuna}',
                    opcoes: ['decrescente', 'crescente', 'constante', 'nula'],
                    respostaCorreta: 'decrescente',
                    explicacao: 'Coeficiente angular negativo (a < 0) define uma função estritamente decrescente.'
                }
            ]
        }
    },

    // --- BLOCO 8 (Aulas 22 a 24) ---
    22: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender as propriedades fundamentais dos triângulos: a condição de existência, a soma dos ângulos internos e o Teorema de Pitágoras.`,
            `### 1. O Triângulo na Geometria Euclidiana`,
            `O triângulo é o polígono mais rígido e estável da natureza, sendo a base de sustentação de pontes, treliças e guindastes na engenharia moderna.`,
            `### 2. A Soma dos Ângulos Internos`,
            `Em qualquer triângulo plano, a soma das medidas dos seus três ângulos internos é sempre exatamente igual a **180º** (\`α + β + θ = 180º\`).`,
            `### 3. Teorema de Pitágoras`,
            `No triângulo retângulo (que possui um ângulo reto de 90º):`,
            `- O maior lado oposto ao ângulo reto é a **Hipotenusa (\`a\`)**.`,
            `- Os outros dois lados adjacentes são os **Catetos (\`b\` e \`c\`)**.`,
            `- **Teorema:** "O quadrado da hipotenusa é igual à soma dos quadrados dos catetos": \`a² = b² + c²\`.`,
            `> **Dica de Fixação Galea (TDAH):** Pense no clássico triângulo 3-4-5: \`3² + 4² = 9 + 16 = 25 = 5²\`. É o atalho mais prático para conferir esquadro de paredes na construção civil!`
        ].join('\n\n')
    },

    23: {
        tipo: 'video-resumo',
        video: { titulo: 'Perímetro e Área das Principais Figuras Planas' },
        conteudo: [
            `## 📺 Guia da Videoaula: Cálculo Prático de Perímetro e Área`,
            `Assista ao vídeo comparativo entre contorno (unidade linear) e preenchimento de superfície (unidade quadrática). A seguir, consulte a síntese:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Perímetro (\`P\'):** Soma de todos os lados externos da figura geométrica (medido em metros \`m\` ou centímetros \`cm\`).`,
            `- **Área (\`A\'):** Medida da superfície interna (em \`m²\` ou \`cm²\`):`,
            `  • Retângulo: \`Área = base · altura\` (\`b · h\`).`,
            `  • Quadrado: \`Área = lado²\` (\`L²\`).`,
            `  • Triângulo: \`Área = (base · altura) / 2\` (\`(b · h) / 2\`).`,
            `  • Círculo: \`Área = π · raio²\` (\`π · r²\`).`,
            `> Conclua este resumo para desbloquear a gamificação na Lição 24!`
        ].join('\n\n')
    },

    24: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Teorema de Pitágoras: Em um triângulo retângulo com catetos 6 cm e 8 cm, calcule a hipotenusa:',
                    dica: 'Calcule a² = 6² + 8² = 36 + 64 = 100, e retire a raiz quadrada.',
                    template: 'O comprimento da hipotenusa é igual a {lacuna} cm',
                    opcoes: ['10', '14', '12', '16'],
                    respostaCorreta: '10',
                    explicacao: 'Pelo Teorema de Pitágoras: a² = 6² + 8² => a² = 36 + 64 => a² = 100 => a = √100 = 10 cm.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Geometria dos Triângulos: Selecione todas as propriedades verdadeiras dos triângulos na geometria plana:',
                    dica: 'A soma dos ângulos internos é sempre 180º e a hipotenusa é o lado oposto ao ângulo reto de 90º.',
                    opcoes: [
                        { texto: 'A soma dos ângulos internos de qualquer triângulo é sempre 180º', correta: true },
                        { texto: 'No triângulo retângulo, a hipotenusa é o maior lado', correta: true },
                        { texto: 'A área do triângulo é calculada por (base · altura) / 2', correta: true },
                        { texto: 'Triângulo equilátero tem todos os 3 lados iguais', correta: true },
                        { texto: 'A soma dos ângulos internos é 360º', correta: false },
                        { texto: 'A hipotenusa é adjacente ao ângulo reto', correta: false }
                    ],
                    explicacao: 'A soma dos ângulos internos de qualquer triângulo euclidiano é 180º. A hipotenusa opõe-se ao ângulo de 90º.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug da Área do Triângulo: Identifique a linha onde esqueceram a fórmula correta da área:',
                    dica: 'A área do triângulo é metade do retângulo: (base · altura) / 2!',
                    linhasCodigo: [
                        '1. Triângulo de base b = 10 cm e altura h = 6 cm',
                        '2. Cálculo da área: Área = b · h',
                        '3. Área calculada = 10 · 6 = 60 cm²',
                        '4. Esqueceram de dividir por 2 (a área real é 30 cm²)'
                    ],
                    linhaBug: 1,
                    explicacao: 'Na linha 2, aplicaram Área = b · h (fórmula do retângulo). Para triângulos é obrigatório dividir por 2: (10 · 6) / 2 = 30 cm²!'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Algoritmo de Pitágoras: Ordene o procedimento rigoroso para calcular a hipotenusa desconhecida:',
                    dica: 'Identifique os catetos, eleve ao quadrado, some os resultados e extraia a raiz quadrada.',
                    itens: [
                        'Identificar os comprimentos dos dois catetos adjacentes ao ângulo de 90º',
                        'Elevar cada um dos catetos ao quadrado individualmente',
                        'Somar os dois quadrados obtidos: b² + c²',
                        'Extrair a raiz quadrada positiva da soma para determinar a hipotenusa'
                    ],
                    ordemCorreta: [
                        'Identificar os comprimentos dos dois catetos adjacentes ao ângulo de 90º',
                        'Elevar cada um dos catetos ao quadrado individualmente',
                        'Somar os dois quadrados obtidos: b² + c²',
                        'Extrair a raiz quadrada positiva da soma para determinar a hipotenusa'
                    ],
                    explicacao: 'O teorema estabelece que a² = b² + c², portanto a = √(b² + c²).'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: O mais célebre terno pitagórico possui catetos 3 e 4. Sua hipotenusa mede:',
                    dica: '3² + 4² = 9 + 16 = 25. A raiz de 25 é...',
                    template: 'No terno pitagórico 3-4-{lacuna}, a hipotenusa mede exatamente 5',
                    opcoes: ['5', '6', '7', '8'],
                    respostaCorreta: '5',
                    explicacao: 'O triângulo 3-4-5 é a referência clássica da geometria euclidiana.'
                }
            ]
        }
    },

    // --- BLOCO 9 (Aulas 25 e 26 - Encerramento de Matemática) ---
    25: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Dominar as medidas descritivas de tendência central (Média, Mediana, Moda) e o cálculo da probabilidade teórica clássica de Laplace.`,
            `### 1. Medidas de Tendência Central`,
            `- **Média Aritmética Simples:** Soma de todos os valores observados dividida pelo total de elementos: \`Média = (x₁ + x₂ + ... + xₙ) / n\`.`,
            `- **Mediana:** O elemento exatamente central após organizar todos os dados em ordem crescente (*rol*). Se a quantidade for par, é a média dos dois centrais.`,
            `- **Moda:** O valor que aparece com maior frequência no conjunto de dados.`,
            `### 2. Teoria da Probabilidade Clássica`,
            `Definida pelo matemático Pierre-Simon Laplace, a probabilidade mede a chance de um evento aleatório ocorrer em um espaço amostral equiprovável:`,
            `\`P(Evento) = (Casos Favoráveis) / (Total de Casos Possíveis)\``,
            `- A probabilidade é um número que varia estritamente entre **0% (evento impossível)** e **100% (evento certo)**, ou de 0 a 1 em fração decimal.`,
            `> **Dica de Fixação Galea (TDAH):** Pense em um dado comum de 6 faces: a chance de sair um número par é de 3 em 6 (3/6 = 1/2 = 50%)!`
        ].join('\n\n')
    },

    26: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - Estatística & Probabilidade: Selecione todas as afirmações matematicamente CORRETAS:',
                    dica: 'Lembre-se: probabilidade nunca pode ser negativa nem ultrapassar 100%!',
                    opcoes: [
                        { texto: 'A média de 4, 6 e 8 é exatamente 6', correta: true },
                        { texto: 'P(sair cara em moeda honesta) = 50%', correta: true },
                        { texto: 'Um evento com probabilidade 100% é dito certo', correta: true },
                        { texto: 'A probabilidade varia estritamente entre 0 e 1', correta: true },
                        { texto: 'A moda é o elemento de maior frequência observada', correta: true },
                        { texto: 'A probabilidade pode ser 150%', correta: false },
                        { texto: 'Um evento impossível tem chance de 50%', correta: false }
                    ],
                    explicacao: 'A probabilidade varia estritamente entre 0% e 100%. A média de (4+6+8)/3 = 6.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Cálculo da Mediana: Determine a mediana do conjunto ordenado de dados [2, 5, 8, 12, 20]:',
                    dica: 'A mediana é o elemento que ocupa exatamente a posição central em uma lista já ordenada.',
                    template: 'No conjunto ordenado [2, 5, 8, 12, 20], a mediana é o número {lacuna}',
                    opcoes: ['8', '5', '12', '9.4'],
                    respostaCorreta: '8',
                    explicacao: 'Com 5 elementos (ímpar), a mediana é o 3º termo central, que é 8.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug da Mediana: Localize o erro metodológico clássico cometido neste cálculo de mediana:',
                    dica: 'Para achar a mediana, é OBRIGATÓRIO organizar os dados em ordem crescente (rol) antes de escolher o centro!',
                    linhasCodigo: [
                        '1. Dados brutos coletados: [15, 3, 20, 2, 8]',
                        '2. O pesquisador escolheu direto o item do meio: 20',
                        '3. Esqueceu de ordenar em rol: [2, 3, 8, 15, 20]',
                        '4. Mediana correta seria 8, mas anotou 20 incorretamente!'
                    ],
                    linhaBug: 1,
                    explicacao: 'Na linha 2, o pesquisador pegou o elemento do meio da lista desordenada. A mediana exige colocar os dados em rol antes de identificar o centro!'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Lei de Laplace: Ordene os passos para calcular a probabilidade clássica de um evento:',
                    dica: 'Defina o espaço amostral, conte os casos favoráveis, monte a razão e simplifique.',
                    itens: [
                        'Definir o espaço amostral total de resultados possíveis (n)',
                        'Contar o número de casos favoráveis ao evento desejado (k)',
                        'Montar a razão de probabilidade clássica: P = k / n',
                        'Simplificar a fração irredutível ou converter em porcentagem'
                    ],
                    ordemCorreta: [
                        'Definir o espaço amostral total de resultados possíveis (n)',
                        'Contar o número de casos favoráveis ao evento desejado (k)',
                        'Montar a razão de probabilidade clássica: P = k / n',
                        'Simplificar a fração irredutível ou converter em porcentagem'
                    ],
                    explicacao: 'A fórmula de Laplace expressa a chance de um evento como Casos Favoráveis / Casos Possíveis.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Grande Desafio Final de Matemática: Ao lançar um dado honesto de 6 faces, qual é a chance em porcentagem de sair um número par (2, 4 ou 6)?',
                    dica: 'São 3 faces favoráveis em 6 possíveis: 3/6 = 1/2 = ...%',
                    template: 'A probabilidade de sair número par no dado é de {lacuna}%',
                    opcoes: ['50', '33', '66', '25'],
                    respostaCorreta: '50',
                    explicacao: 'Parabéns! P(par) = 3/6 = 0,50 = 50%. Você concluiu a trilha completa de Matemática!'
                }
            ]
        }
    }
};
