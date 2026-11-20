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
                    enunciado: 'Selecione todas as sentenças e operações com números inteiros matematicamente CORRETAS:',
                    dica: 'Atenção especial às regras de sinais da multiplicação e adição com números negativos!',
                    opcoes: [
                        { texto: '(-5) · (-4) = +20', correta: true },
                        { texto: '|-15| = 15', correta: true },
                        { texto: '(-10) + (+3) = -7', correta: true },
                        { texto: '0 é o elemento neutro da adição', correta: true },
                        { texto: '(-18) ÷ (+2) = -9', correta: true },
                        { texto: '(-3) · (+4) = +12', correta: false },
                        { texto: '|-8| = -8', correta: false },
                        { texto: 'Divisão por zero resulta em zero', correta: false },
                        { texto: '(-5) - (-2) = -7', correta: false }
                    ],
                    explicacao: 'Na multiplicação de números com mesmo sinal o resultado é positivo [(-5)·(-4) = +20]. O módulo é sempre positivo [|-15| = 15] e divisão por zero é indefinida.'
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
                    enunciado: 'Complete a conversão da fração 3/4 para a sua forma decimal exata correspondente:',
                    dica: 'Divida o numerador 3 pelo denominador 4 (3,00 ÷ 4).',
                    template: 'A fração 3/4 equivale exatamente ao número decimal {lacuna}',
                    opcoes: ['0.75', '0.50', '0.25', '0.34', '1.33'],
                    respostaCorreta: '0.75',
                    explicacao: 'Ao dividir 3 por 4, obtemos 0,75 (ou 75 centésimos), que é a forma decimal exata de 3/4.'
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
                    enunciado: 'Ordene os passos do método infalível para resolver qualquer problema com Regra de Três:',
                    dica: 'Comece identificando as grandezas, analise se são diretas ou inversas, monte a proporção e isole a incógnita x.',
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
                    explicacao: 'O método canônico é: 1. Tabular dados; 2. Avaliar sentido da proporcionalidade; 3. Montar a proporção geométrica; 4. Isolar a incógnita algebraicamente.'
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
                    enunciado: 'Resolva a equação 2x + 6 = 16 e complete com o valor correto da incógnita x:',
                    dica: 'Subtraia 6 de ambos os lados (2x = 10) e divida por 2.',
                    template: 'O valor da incógnita que satisfaz a equação 2x + 6 = 16 é x = {lacuna}',
                    opcoes: ['5', '10', '4', '8', '3'],
                    respostaCorreta: '5',
                    explicacao: 'Isolando o termo: 2x = 16 - 6 => 2x = 10 => x = 10 / 2 => x = 5.'
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
                    enunciado: 'Selecione todas as afirmações matematicamente VERDADEIRAS sobre inequações e equações do 1º grau:',
                    dica: 'Atenção à regra de inversão do sinal de desigualdade ao multiplicar por número negativo!',
                    opcoes: [
                        { texto: 'Se -x < 5, multiplicando por -1 obtemos x > -5', correta: true },
                        { texto: 'A equação 3x = 12 possui solução única x = 4', correta: true },
                        { texto: 'O triplo de x aumentado de 4 expressa-se como 3x + 4', correta: true },
                        { texto: 'x ≥ 10 inclui o próprio número 10 na solução', correta: true },
                        { texto: 'Em 2x - 8 = 0, a raiz da equação é x = 4', correta: true },
                        { texto: 'Multiplicar por negativo mantém o sentido da desigualdade', correta: false },
                        { texto: 'A solução de x + 5 = 2 é x = 7', correta: false },
                        { texto: 'Uma inequação possui sempre uma única resposta pontual', correta: false },
                        { texto: 'x < 3 inclui o número 3 como solução válida', correta: false }
                    ],
                    explicacao: 'Multiplicar uma inequação por número negativo inverte o sentido da desigualdade. Inequações representam intervalos com infinitas soluções reais.'
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
                    enunciado: 'Complete a expansão do produto notável (x + 3)² com o termo central correto:',
                    dica: 'Lembre-se da regra: 2 vezes o primeiro termo vezes o segundo termo (2 · x · 3).',
                    template: '(x + 3)² = x² + {lacuna} + 9',
                    opcoes: ['6x', '3x', '9x', '5x', '12x'],
                    respostaCorreta: '6x',
                    explicacao: 'A expansão de (x + 3)² é x² + 2(x)(3) + 3² = x² + 6x + 9. O termo intermediário é 6x.'
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
                    enunciado: 'Selecione todas as afirmações corretas sobre a função f(x) = 2x - 8 e gráficos no plano cartesiano:',
                    dica: 'Analise o coeficiente angular a, o coeficiente linear b e a raiz da função.',
                    opcoes: [
                        { texto: 'A raiz (zero) da função ocorre em x = 4', correta: true },
                        { texto: 'A reta corta o eixo Y no ponto (0, -8)', correta: true },
                        { texto: 'A função é estritamente crescente pois a = 2 > 0', correta: true },
                        { texto: 'O gráfico de qualquer função afim é uma reta', correta: true },
                        { texto: 'Para x = 5, o valor da função é f(5) = 2', correta: true },
                        { texto: 'A função é decrescente', correta: false },
                        { texto: 'O gráfico de uma função afim é uma parábola', correta: false },
                        { texto: 'A reta corta o eixo X em x = -4', correta: false },
                        { texto: 'O coeficiente linear da função é +8', correta: false }
                    ],
                    explicacao: 'Em f(x) = 2x - 8: como a=2>0 a função cresce; corta o eixo Y em (0, -8); e a raiz é 2x - 8 = 0 => 2x = 8 => x = 4.'
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
                    enunciado: 'Em um triângulo retângulo com catetos medindo 6 cm e 8 cm, calcule a hipotenusa usando o Teorema de Pitágoras:',
                    dica: 'Calcule a² = 6² + 8² = 36 + 64 = 100, e retire a raiz quadrada.',
                    template: 'O comprimento da hipotenusa é igual a {lacuna} cm',
                    opcoes: ['10', '14', '12', '100', '16'],
                    respostaCorreta: '10',
                    explicacao: 'Pelo Teorema de Pitágoras: a² = 6² + 8² => a² = 36 + 64 => a² = 100 => a = √100 = 10 cm.'
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
                    enunciado: 'Selecione todas as afirmações estatísticas e probabilísticas matematicamente CORRETAS:',
                    dica: 'Lembre-se: probabilidade nunca pode ser negativa nem ultrapassar 100%!',
                    opcoes: [
                        { texto: 'A média de 4, 6 e 8 é exatamente 6', correta: true },
                        { texto: 'P(sair cara em uma moeda honesta) = 50%', correta: true },
                        { texto: 'Um evento com probabilidade 100% é dito certo', correta: true },
                        { texto: 'A probabilidade varia exclusivamente entre 0 e 1', correta: true },
                        { texto: 'A moda é o elemento que possui a maior frequência', correta: true },
                        { texto: 'A probabilidade de um evento pode ser 150%', correta: false },
                        { texto: 'A chance de sair 7 no dado comum de 6 faces é 1/6', correta: false },
                        { texto: 'A média dos números 10 e 20 é igual a 30', correta: false },
                        { texto: 'Um evento impossível tem probabilidade 50%', correta: false }
                    ],
                    explicacao: 'A probabilidade varia estritamente entre 0% e 100%. Em um dado com faces 1 a 6, sair 7 é um evento impossível (0%). A média de 4, 6 e 8 é (4+6+8)/3 = 6.'
                }
            ]
        }
    }
};
