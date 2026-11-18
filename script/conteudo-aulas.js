/* =====================================================
   Conteúdo Pedagógico das Aulas de Matemática (Galea)
   Didática adaptada para TDAH e público geral:
   - Chunking (parágrafos curtos, sem sobrecarga)
   - Ancoragem visual imediata (SVGs leves)
   - Exemplo do cotidiano + Dica de ouro + Desafio relâmpago
   ===================================================== */

window.GaleaConteudos = (() => {
    'use strict';

    const AULAS_MATEMATICA = {
        // Aula 1: Números naturais e inteiros (índice 0)
        1: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/matematica/aula1_reta_numerica.svg',
            alt: 'Diagrama da Reta Numérica ilustrando números inteiros negativos e números naturais positivos',
            conteudo: [
                `**O que você vai aprender:** Como o ser humano inventou os números para contar o que tem e para registrar o que deve ou está abaixo de zero!`,
                `### 1. Quem são os Números Naturais (ℕ)?`,
                `São os números que usamos naturalmente para contar objetos inteiros: **0, 1, 2, 3, 4, 5...** até o infinito. Não existem números negativos nem frações aqui. É o número de moedas no bolso ou de degraus que você subiu.`,
                `### 2. O nascimento dos Números Inteiros (ℤ)`,
                `E se a temperatura cair abaixo de zero (-5°C)? Ou se você tiver R$ 10 e gastar R$ 15, ficando com saldo de -R$ 5? Para isso existem os **números inteiros**: eles reúnem todos os naturais e os seus opostos negativos: **... -3, -2, -1, 0, +1, +2, +3...**`,
                `> **Dica de ouro (TDAH):** Pense na reta como um termômetro ou elevador. Para cima/direita você ganha calor e dinheiro (+). Para baixo/esquerda você perde (-).`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `Se você está no 2º andar (+2) e desce 3 andares, em qual andar você para? Resposta: **-1 (subsolo)**!`
            ].join('\n\n')
        },

        // Aula 2: As quatro operações (Gamificada - Grid Chips 1ª vez)
        2: {
            tipo: 'gamificada',
            conteudo: [
                `**O que você vai aprender:** As propriedades fundamentais da adição, subtração, multiplicação e divisão, e como utilizá-las para simplificar cálculos complexos.`,
                `### 1. As Propriedades da Multiplicação e Adição`,
                `- **Propriedade Comutativa:** A ordem dos fatores ou parcelas não altera o resultado (\`a + b = b + a\` e \`a × b = b × a\`).`,
                `- **Propriedade Distributiva:** A multiplicação se distribui sobre a soma: \`5 × (2 + 3) = 5×2 + 5×3 = 25\`.`,
                `- **Elementos Neutros:** O número **0** é o elemento neutro da adição (\`x + 0 = x\`). O número **1** é o elemento neutro da multiplicação (\`x × 1 = x\`).`,
                `- **Elemento Nulo:** O número **0** multiplicado por qualquer valor sempre zera o produto (\`x × 0 = 0\`).`,
                `### 2. Cuidados e Impossibilidades Matemáticas`,
                `- A **subtração e a divisão NÃO são comutativas** (\`10 - 4 ≠ 4 - 10\` e \`8 ÷ 2 ≠ 2 ÷ 8\`).`,
                `- **Divisão por zero não existe:** Dividir qualquer número por zero é uma indeterminação impossível na aritmética!`,
                `> **Dica de ouro (TDAH):** Lembre-se: o 0 'não faz nada' na soma, mas 'destrói tudo' na multiplicação!`
            ].join('\n\n'),
            gamificacao: {
                etapas: [
                    {
                        tipo: 'grid-chips',
                        enunciado: 'Com base nas propriedades das operações ensinadas na aula, selecione as afirmações e igualdades VERDADEIRAS:',
                        dica: 'Atenção aos elementos neutros, à distributiva e às operações que não aceitam inversão de ordem!',
                        opcoes: [
                            { texto: '5 × (2 + 3) = 5×2 + 5×3', correta: true },
                            { texto: '12 + 0 = 12 (0 é neutro)', correta: true },
                            { texto: '7 × 1 = 7 (1 é neutro)', correta: true },
                            { texto: '9 × 0 = 0 (0 é nulo)', correta: true },
                            { texto: '4 × 6 = 6 × 4 (comutativa)', correta: true },
                            { texto: '10 ÷ 0 = 0', correta: false },
                            { texto: '15 - 5 = 5 - 15', correta: false },
                            { texto: '8 × 1 = 1', correta: false },
                            { texto: '6 ÷ 2 = 2 ÷ 6', correta: false }
                        ],
                        explicacao: 'A multiplicação é distributiva e comutativa; 0 é neutro na soma e nulo no produto; 1 é neutro no produto. Subtração e divisão não são comutativas e divisão por zero é impossível!'
                    }
                ]
            }
        },

        // Aula 3: Múltiplos e divisores (índice 2)
        3: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/matematica/aula3_multiplos_divisores.svg',
            alt: 'Infográfico comparando múltiplos como saltos e divisores como agrupamentos perfeitos',
            conteudo: [
                `**O que você vai aprender:** A diferença definitiva entre múltiplos e divisores sem nunca mais confundir na hora da prova.`,
                `### 1. Múltiplos: Os saltos da tabuada`,
                `Múltiplo de um número é o resultado de multiplicá-lo por qualquer inteiro. Pense em um sapo dando saltos de 3 em 3 metros: ele pisa no 0, 3, 6, 9, 12, 15... Todos esses são **múltiplos de 3**! Os múltiplos crescem infinitamente.`,
                `### 2. Divisores: Os grupos perfeitos`,
                `Um número é divisor de outro quando a divisão é exata, isto é, o resto é **zero**. Por exemplo: se você tem 12 balas e quer dividir igualmente sem quebrar nenhuma bala, você consegue formar:`,
                `- 1 grupo de 12`,
                `- 2 grupos de 6`,
                `- 3 grupos de 4`,
                `- 4 grupos de 3`,
                `- 6 grupos de 2`,
                `- 12 grupos de 1`,
                `Logo, os divisores de 12 são: **1, 2, 3, 4, 6 e 12**. Não dá para dividir 12 por 5 sem sobrar!`,
                `> **Regra mental:** Múltiplo = resultado da multiplicação (cresce). Divisor = quem cabe certinho dentro do número (conjunto limitado).`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `O número 15 é múltiplo de 4? Não, pois na tabuada do 4 temos 12 e 16, o 15 fica de fora!`
            ].join('\n\n')
        },

        // Aula 5: Números decimais (Gamificada - Ordene os Passos)
        5: {
            tipo: 'gamificada',
            conteudo: [
                `**O que você vai aprender:** O que significa a vírgula nos números e o algoritmo para somar e subtrair decimais sem errar a posição.`,
                `### 1. O que há depois da vírgula?`,
                `A vírgula separa os números inteiros das suas partes fracionárias:`,
                `- **1ª casa após a vírgula:** Décimos (0,1 = 1/10)`,
                `- **2ª casa após a vírgula:** Centésimos (0,01 = 1/100)`,
                `- **3ª casa após a vírgula:** Milésimos (0,001 = 1/1000)`,
                `Por exemplo: R$ 5,75 significa 5 reais inteiros mais 7 décimos e 5 centésimos.`,
                `### 2. A Regra Sagrada da Adição e Subtração:`,
                `Para somar ou subtrair números com vírgula, a regra inegociável é: **VÍRGULA EMBAIXO DE VÍRGULA**. Se uma casa estiver vazia, preencha com zero!`,
                `> **Exemplo:** Para somar 12,5 com 3,75, escrevemos 12,50 + 03,75 = **16,25**.`
            ].join('\n\n'),
            gamificacao: {
                etapas: [
                    {
                        tipo: 'ordene',
                        enunciado: 'Ordene os passos para somar números decimais (ex: 12,5 + 3,75):',
                        dica: 'Clique nas setinhas para mover os passos para a ordem correta.',
                        itens: [
                            'Somar coluna por coluna da direita para a esquerda',
                            'Alinhar os números colocando vírgula embaixo de vírgula',
                            'Posicionar a vírgula no resultado alinhada com as demais',
                            'Preencher as casas decimais vazias com o número zero'
                        ],
                        ordemCorreta: [
                            'Alinhar os números colocando vírgula embaixo de vírgula',
                            'Preencher as casas decimais vazias com o número zero',
                            'Somar coluna por coluna da direita para a esquerda',
                            'Posicionar a vírgula no resultado alinhada com as demais'
                        ],
                        explicacao: 'Primeiro alinhamos as vírgulas, igualamos as casas com zeros, somamos da direita para a esquerda e descemos a vírgula!'
                    }
                ]
            }
        },

        // Aula 7: Razão e proporção (índice 6)
        7: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/matematica/aula7_razao_proporcao.svg',
            alt: 'Diagrama visual demonstrando a proporção de receitas e regra dos produtos cruzados',
            conteudo: [
                `**O que você vai aprender:** Como comparar duas quantidades e manter a harmonia perfeita em receitas, mapas e finanças.`,
                `### 1. O que é Razão?`,
                `Razão é simplesmente uma **comparação por divisão** entre duas grandezas. Se em uma sala temos 10 meninos e 20 meninas, a razão é de 10 para 20, ou simplificando: **1 para 2** (para cada 1 menino, há 2 meninas).`,
                `### 2. O que é Proporção?`,
                `Proporção é a **igualdade entre duas razões**. Pense na receita de um suco:`,
                `- 2 copos de concentrado para 3 copos de água.`,
                `- Se você vai dar uma festa e quer fazer o dobro, usará 4 de suco para 6 de água.`,
                `A relação se manteve: 2/3 = 4/6. Isso é uma proporção!`,
                `> **O truque dos produtos cruzados:** Em qualquer proporção a/b = c/d, multiplicar cruzado sempre dá o mesmo resultado! Exemplo: 2 × 6 = 3 × 4 = 12.`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `Se 1 chocolate custa R$ 4, quanto custam 5 chocolates? Proporção direta: 1/4 = 5/x ➔ x = 5 × 4 = **R$ 20,00**.`
            ].join('\n\n')
        },

        // Aula 8: Regra de três (Gamificada - Preencha a Lacuna)
        8: {
            tipo: 'gamificada',
            conteudo: [
                `**O que você vai aprender:** O método mais útil da matemática cotidiana para calcular preços, doses, velocidades e rendimentos.`,
                `### 1. O que é a Regra de Três Simples?`,
                `É uma ferramenta que permite descobrir um 4º valor desconhecido (x) a partir de 3 valores conhecidos que mantêm uma proporção direta ou inversa.`,
                `### 2. Proporção Direta: Multiplique Cruzado!`,
                `Se você aumenta uma grandeza e a outra também aumenta na mesma proporção:`,
                `- Um automóvel consome **8 litros** de gasolina para percorrer **100 km**.`,
                `- Quantos litros consumirá para uma viagem de **350 km**?`,
                `Montamos a proporção: **8 / 100 = x / 350**`,
                `Multiplicando cruzado: 100 · x = 8 · 350 ➔ 100x = 2800 ➔ **x = 28 litros**.`,
                `> **Dica de ouro (TDAH):** Monte sempre duas colunas com os nomes das grandezas (ex: "Combustível" e "Quilometragem") para não inverter os números sem querer!`
            ].join('\n\n'),
            gamificacao: {
                etapas: [
                    {
                        tipo: 'lacunas',
                        enunciado: 'Complete a resolução do problema de consumo ensinado na aula:',
                        dica: '8 / 100 = x / 350 ➔ 100x = 2800 ➔ x = ?',
                        template: '8 litros = 100 km<br>x litros = 350 km<br>100x = 2800 ➔ x = {lacuna} litros',
                        opcoes: ['28', '25', '32', '30'],
                        respostaCorreta: '28',
                        explicacao: 'Multiplicando cruzado: 100x = 8 × 350 = 2800 ➔ x = 2800 / 100 = 28 litros de combustível!'
                    }
                ]
            }
        },

        // Aula 10: Expressões numéricas (índice 9)
        10: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/matematica/aula10_expressoes_numericas.svg',
            alt: 'Escada de prioridades das operações matemáticas',
            conteudo: [
                `**O que você vai aprender:** O segredo da ordem das operações para nunca mais cair nas pegadinhas da internet!`,
                `### 1. Por que existe uma ordem?`,
                `Se cada pessoa resolvesse a conta na ordem que quisesse, 2 + 3 × 4 poderia dar 20 ou 14. Na Matemática universal, a multiplicação tem prioridade estrutural, logo o resultado correto é **14**.`,
                `### 2. A Hierarquia dos Campeões:`,
                `- **1º Símbolos de agrupamento:** Parênteses ( ), depois colchetes [ ], e por fim chaves { }.`,
                `- **2º Potências e raízes:** Calcule x² ou √x antes de qualquer conta básica.`,
                `- **3º Multiplicações (×) e Divisões (÷):** Quem aparecer primeiro da esquerda para a direita.`,
                `- **4º Adições (+) e Subtrações (−):** Por último, também da esquerda para a direita.`,
                `> **Mnemônica para lembrar:** P-E-M-D-A-S (Parênteses, Expoentes, Multiplicação/Divisão, Adição/Subtração).`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `Quanto vale **10 - 2 × 3 + 1**?`,
                `1) Primeiro a multiplicação: 2 × 3 = 6. Ficamos com: 10 - 6 + 1.`,
                `2) Da esquerda para a direita: 10 - 6 = 4.`,
                `3) Finalize: 4 + 1 = **5**!`
            ].join('\n\n')
        },

        // Aula 12: Equações do 1º grau (Gamificada - Caça ao Bug)
        12: {
            tipo: 'gamificada',
            conteudo: [
                `**O que você vai aprender:** Como desvendar o valor de uma letra misteriosa (incógnita) em uma balança de igualdade matemática.`,
                `### 1. O Conceito da Balança de Dois Pratos`,
                `Uma equação é uma igualdade: o que está do lado esquerdo do sinal de igual pesa exatamente o mesmo que o lado direito.`,
                `- Se você adicionar, subtrair, multiplicar ou dividir de um lado, **tem que fazer o mesmo do outro lado** para a balança não tombar!`,
                `### 2. O Atalho Prático: "Passar para o outro lado"`,
                `Para isolar a letra **x**, passamos os números para o outro lado aplicando a operação inversa:`,
                `- Se estava somando (+), passa **subtraindo (−)**`,
                `- Se estava multiplicando (×), passa **dividindo (÷)**`,
                `Exemplo: 2x + 4 = 14 ➔ 2x = 14 - 4 ➔ 2x = 10 ➔ x = 10 / 2 ➔ **x = 5**.`,
                `> **Cuidado com a pegadinha:** Nunca mude um número de lado sem trocar o seu sinal!`
            ].join('\n\n'),
            gamificacao: {
                etapas: [
                    {
                        tipo: 'caca-bug',
                        enunciado: 'Identifique em qual linha ocorreu o erro matemático ao resolver 4x + 8 = 28:',
                        dica: 'Atenção especial ao sinal do número quando ele muda de lado!',
                        linhas: [
                            { codigo: '4x + 8 = 28' },
                            { codigo: '4x = 28 + 8' },
                            { codigo: '4x = 36' },
                            { codigo: 'x = 36 / 4 = 9' }
                        ],
                        linhaBug: 1, // índice 1 é a 2ª linha
                        explicacao: 'A linha 2 cometeu o bug clássico: ao mudar o +8 para o outro lado, o sinal deveria virar -8 (4x = 28 - 8 = 20 ➔ x = 5)!'
                    }
                ]
            }
        },

        // Aula 13: Problemas com equações (Gamificada - Ordene os Passos)
        13: {
            tipo: 'gamificada',
            conteudo: [
                `**O que você vai aprender:** Como decodificar enigmas escritos em português para fórmulas matemáticas e encontrar a resposta exata.`,
                `### 1. O Dicionário Português ➔ Matemática:`,
                `- *"Um número qualquer"* ➔ **x**`,
                `- *"O dobro de um número"* ➔ **2x**`,
                `- *"O triplo aumentado de 5"* ➔ **3x + 5**`,
                `- *"A metade de um valor"* ➔ **x / 2**`,
                `- *"É igual a..." ou "Resulta em..."* ➔ **=**`,
                `### 2. Exemplo Resolvido:`,
                `*"O dobro da idade de Luísa mais 4 anos é igual a 20. Quantos anos ela tem?"*`,
                `1. Incógnita: idade da Luísa = x`,
                `2. Equação: 2x + 4 = 20`,
                `3. Resolução: 2x = 16 ➔ **x = 8 anos**!`,
                `> **Dica de ouro (TDAH):** Antes de sair fazendo contas, dê um nome claro para o seu x ("x = preço da coxinha"). Isso evita que você encontre o valor e responda a pergunta errada!`
            ].join('\n\n'),
            gamificacao: {
                etapas: [
                    {
                        tipo: 'ordene',
                        enunciado: 'Ordene o método profissional de 4 etapas para resolver problemas matemáticos:',
                        dica: 'Organize do início da leitura até a confirmação final da resposta.',
                        itens: [
                            'Resolver a equação isolando a incógnita com operações inversas',
                            'Ler o enunciado e definir claramente o que a incógnita (x) representa',
                            'Validar se a resposta faz sentido na situação real da pergunta',
                            'Traduzir o texto em linguagem algébrica e montar a equação'
                        ],
                        ordemCorreta: [
                            'Ler o enunciado e definir claramente o que a incógnita (x) representa',
                            'Traduzir o texto em linguagem algébrica e montar a equação',
                            'Resolver a equação isolando a incógnita com operações inversas',
                            'Validar se a resposta faz sentido na situação real da pergunta'
                        ],
                        explicacao: 'Excelente! Primeiro interpretamos o x, montamos a equação, calculamos o resultado e por fim validamos se a resposta faz sentido no mundo real.'
                    }
                ]
            }
        },

        // Aula 14: Inequações (índice 13)
        14: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/matematica/aula14_inequacoes.svg',
            alt: 'Representação gráfica de inequações com bolinha aberta e bolinha fechada',
            conteudo: [
                `**O que você vai aprender:** Como expressar condições que têm várias respostas possíveis (ex: "ter mais de 18 anos" ou "velocidade menor que 80 km/h").`,
                `### 1. Equação vs. Inequação`,
                `- Uma **equação** tem sinal de igual (=) e busca uma resposta exata (x = 4).`,
                `- Uma **inequação** tem sinais de desigualdade (>, <, ≥, ≤) e sua resposta é um **conjunto de valores**.`,
                `### 2. O código dos sinais:`,
                `- **> (Maior que) e < (Menor que):** O valor limite NÃO entra (usamos **bolinha aberta** na reta). Ex: x > 2 significa 2,01, 3, 10, mas NÃO o 2.`,
                `- **≥ (Maior ou igual) e ≤ (Menor ou igual):** O valor limite ESTÁ incluído (usamos **bolinha fechada** ou preenchida). Ex: x ≤ 4 inclui o 4.`,
                `> **Atenção extrema ao sinal negativo:** Se multiplicar ou dividir ambos os lados de uma inequação por um número negativo (-1), você precisa **virar o sinal**! Exemplo: -x < 5 vira x > -5.`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `Se 2x + 1 > 7, quanto vale x?`,
                `2x > 7 - 1 ➔ 2x > 6 ➔ **x > 3** (qualquer número maior que 3 satisfaz a condição).`
            ].join('\n\n')
        },

        // Aula 15: Sistemas de equações (Gamificada - Preencha a Lacuna)
        15: {
            tipo: 'gamificada',
            conteudo: [
                `**O que você vai aprender:** Como desvendar duas incógnitas (x e y) ao mesmo tempo quando temos duas pistas conectadas.`,
                `### 1. O que é um Sistema de Equações?`,
                `Imagine que você comprou 1 pastel e 1 suco por R$ 10. E que o pastel é R$ 4 mais caro que o suco. Como saber o preço exato de cada um?`,
                `Montamos duas equações juntas:`,
                `- **x + y = 10** (onde x é pastel e y é suco)`,
                `- **x - y = 4**`,
                `### 2. O Método da Adição:`,
                `Se somarmos as duas equações em coluna, o +y cancela com o -y!`,
                `- (x + x) + (y - y) = 10 + 4`,
                `- **2x = 14 ➔ x = 7** (o pastel custa R$ 7,00).`,
                `- Substituindo de volta: 7 + y = 10 ➔ **y = 3** (o suco custa R$ 3,00).`,
                `> **Regra prática:** Procure termos opostos (+y e -y) para somar e zerar uma das letras logo de cara!`
            ].join('\n\n'),
            gamificacao: {
                etapas: [
                    {
                        tipo: 'lacunas',
                        enunciado: 'Encontre o valor de y no sistema resolvido por adição:',
                        dica: 'Se x + y = 10 e já calculamos que x = 7, quanto vale y?',
                        template: 'x + y = 10<br>x - y = 4<br>2x = 14 ➔ x = 7<br>Substituindo: 7 + y = 10 ➔ y = {lacuna}',
                        opcoes: ['3', '4', '7', '10'],
                        respostaCorreta: '3',
                        explicacao: '7 + y = 10 ➔ y = 10 - 7 = 3. O par ordenado da solução é (7, 3)!'
                    }
                ]
            }
        },

        // Aula 16: Produtos notáveis (índice 15)
        16: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/matematica/aula16_produtos_notaveis.svg',
            alt: 'Demonstração geométrica do quadrado da soma de dois termos',
            conteudo: [
                `**O que você vai aprender:** O atalho geométrico para resolver multiplicações de polinômios sem fazer contas gigantes.`,
                `### 1. O Quadrado da Soma: (a + b)²`,
                `Imagine um grande terreno quadrado de lado (a + b). A área total dele é dividida em 4 partes:`,
                `- Um quadrado azul de área **a²**`,
                `- Dois retângulos amarelos de área **ab** (total: **2ab**)`,
                `- Um quadradinho verde de área **b²**`,
                `Somando tudo: **(a + b)² = a² + 2ab + b²**.`,
                `### 2. Os três produtos mais famosos:`,
                `1. **Quadrado da soma:** (a + b)² = a² + 2ab + b²`,
                `2. **Quadrado da diferença:** (a - b)² = a² - 2ab + b²`,
                `3. **Produto da soma pela diferença:** (a + b)(a - b) = a² - b²`,
                `> **Dica para não esquecer:** Fale em voz alta: *"O quadrado do primeiro, mais duas vezes o primeiro pelo segundo, mais o quadrado do segundo!"* O ritmo ajuda o cérebro a memorizar.`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `Quanto vale (x + 3)²?`,
                `x² + 2·(x)·(3) + 3² = **x² + 6x + 9**.`
            ].join('\n\n')
        },

        // Aula 17: Fatoração (índice 16)
        17: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/matematica/aula17_fatoracao.svg',
            alt: 'Diagrama do processo de fatoração colocando termos em evidência',
            conteudo: [
                `**O que você vai aprender:** Como simplificar expressões complexas desmontando somas em multiplicações fáceis de cortar.`,
                `### 1. O que significa "Fatorar"?`,
                `Fatorar é transformar uma soma ou subtração em uma **multiplicação de fatores**. É exatamente o caminho inverso da distributiva ("chuveirinho"):`,
                `- Distribuir: 3 × (x + 2) = 3x + 6`,
                `- Fatorar: 3x + 6 = **3(x + 2)**`,
                `### 2. Casos essenciais no dia a dia:`,
                `- **Fator Comum em Evidência:** Identifique o que repete em todos os termos e coloque para fora do parêntese. Em 5x + 15, o 5 cabe nos dois termos: 5(x + 3).`,
                `- **Diferença de Quadrados:** Quando vir dois números ao quadrado subtraindo: x² - 25 vira **(x + 5)(x - 5)**!`,
                `- **Trinômio Quadrado Perfeito:** Reconhecer o produto notável ao contrário: x² + 10x + 25 = **(x + 5)²**.`,
                `> **Para que serve?** Para simplificar frações algébricas gigantes em segundos, cortando termos iguais em cima e embaixo!`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `Fatore a expressão: 4x + 12. O número 4 divide ambos, logo: **4(x + 3)**.`
            ].join('\n\n')
        },

        // Aula 20: Gráfico da função afim (índice 19)
        20: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/matematica/aula20_grafico_funcao_afim.svg',
            alt: 'Gráfico da função afim no plano cartesiano detalhando coeficientes a e b',
            conteudo: [
                `**O que você vai aprender:** Como desenhar no papel qualquer relação em linha reta (como corridas de aplicativo, contas de água e crescimento constante).`,
                `### 1. A Fórmula Mágica da Reta: y = ax + b`,
                `Toda função afim (ou do 1º grau) tem essa estrutura e gera sempre uma **linha reta** perfeita no gráfico:`,
                `- **b (Coeficiente Linear):** É o ponto onde a reta cruza o eixo vertical (Y). É a taxa fixa inicial! Se x = 0, y = b.`,
                `- **a (Coeficiente Angular):** É a inclinação da reta (o ritmo de crescimento):`,
                `  • Se **a > 0**, a reta sobe (função crescente ↗).`,
                `  • Se **a < 0**, a reta desce (função decrescente ↘).`,
                `### 2. Como desenhar a reta em 2 passos:`,
                `1. Marque o ponto **(0, b)** no eixo vertical Y.`,
                `2. Escolha outro valor simples para x (por exemplo x = 1 ou a raiz onde y = 0), marque o segundo ponto e ligue-os com a régua!`,
                `> **Exemplo real:** Uma corrida de táxi tem bandeirada de R$ 5,00 mais R$ 2,00 por km. A função é **y = 2x + 5**. O gráfico começa no 5 e sobe 2 unidades a cada km!`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `Na função y = 3x - 4, onde a reta corta o eixo Y? Corta exatamente no ponto **-4**!`
            ].join('\n\n')
        },

        // Aula 21: Ângulos (índice 20)
        21: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/matematica/aula21_angulos.svg',
            alt: 'Guia visual dos tipos de ângulos: agudo, reto, obtuso e raso',
            conteudo: [
                `**O que você vai aprender:** O que é a abertura entre duas retas e como identificar os 4 tipos fundamentais no mundo ao seu redor.`,
                `### 1. O que é um Ângulo?`,
                `Ângulo é a medida da **abertura** entre duas semirretas que partem do mesmo ponto (vértice). Medimos essa abertura em **graus (°)**, onde uma volta completa equivale a 360°.`,
                `### 2. A Família dos Ângulos:`,
                `- **Ângulo Agudo (< 90°):** Fechadinho e pontiagudo como a ponta de uma fatia de pizza ou tesoura quase fechada.`,
                `- **Ângulo Reto (= 90°):** O mais importante da engenharia! Forma um "L" perfeito, com o símbolo de quadradinho e ponto. Está nos cantos das paredes, livros e janelas.`,
                `- **Ângulo Obtuso (> 90° e < 180°):** Mais aberto e espaçoso que o ângulo reto, como um notebook aberto confortavelmente.`,
                `- **Ângulo Raso (= 180°):** Forma uma linha reta perfeita contínua (meia volta).`,
                `> **Ângulos Complementares e Suplementares:** Dois ângulos que juntos somam 90° são chamados de *complementares* (ex: 30° e 60°). Se somarem 180°, são *suplementares*!`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `Quando os ponteiros de um relógio marcam exatamente 3h00, qual ângulo eles formam? Um **ângulo reto de 90°**!`
            ].join('\n\n')
        },

        // Aula 22: Triângulos (Gamificada - Grid Chips 2ª vez)
        22: {
            tipo: 'gamificada',
            conteudo: [
                `**O que você vai aprender:** Por que o triângulo é a figura mais forte da engenharia e como classificar qualquer triângulo em segundos.`,
                `### 1. A Regra dos 180 Graus`,
                `Em qualquer triângulo do universo plano, se você somar os seus 3 ângulos internos, o resultado será **sempre 180°**! Se um ângulo tem 90° e outro tem 30°, o terceiro só pode ser 60°.`,
                `### 2. Classificação quanto aos Lados:`,
                `- **Equilátero:** 3 lados rigorosamente iguais (e 3 ângulos iguais de 60°).`,
                `- **Isósceles:** 2 lados iguais e 1 diferente (os ângulos da base também são iguais).`,
                `- **Escaleno:** Todos os 3 lados têm medidas diferentes.`,
                `### 3. Classificação quanto aos Ângulos:`,
                `- **Acutângulo:** Todos os 3 ângulos são agudos (< 90°).`,
                `- **Retângulo:** Possui exatamente 1 ângulo reto (= 90°).`,
                `- **Obtusângulo:** Possui 1 ângulo obtuso (> 90°).`,
                `> **Curiosidade:** Pontes e guindastes usam estruturas triangulares porque o triângulo é a única figura geométrica indeformável!`
            ].join('\n\n'),
            gamificacao: {
                etapas: [
                    {
                        tipo: 'grid-chips',
                        enunciado: 'Selecione as afirmações e classificações geométricas VERDADEIRAS sobre triângulos:',
                        dica: 'Atenção aos nomes quanto aos lados e à soma dos ângulos!',
                        opcoes: [
                            { texto: 'Lados 3, 4 e 5 formam triângulo', correta: true },
                            { texto: 'Soma dos ângulos internos = 180°', correta: true },
                            { texto: 'Equilátero: 3 ângulos de 60°', correta: true },
                            { texto: 'No retângulo, agudos somam 90°', correta: true },
                            { texto: 'Maior lado opõe-se ao maior ângulo', correta: true },
                            { texto: 'Lados 2, 3 e 6 formam triângulo', correta: false },
                            { texto: 'Pode ter 2 ângulos obtusos (>90°)', correta: false },
                            { texto: 'Soma dos ângulos internos = 360°', correta: false },
                            { texto: 'Escaleno possui 2 lados iguais', correta: false }
                        ],
                        explicacao: 'Pela desigualdade triangular, a soma de dois lados deve superar o terceiro (2+3=5 < 6 não fecha). A soma interna é 180°, o equilátero tem três ângulos de 60° e no retângulo os agudos somam 90°!'
                    }
                ]
            }
        },

        // Aula 24: Teorema de Pitágoras (Gamificada - Caça ao Bug)
        24: {
            tipo: 'gamificada',
            conteudo: [
                `**O que você vai aprender:** O teorema mais célebre da história: como calcular distâncias inclinadas e diagonais perfeitas.`,
                `### 1. Quem é quem no Triângulo Retângulo?`,
                `- **Hipotenusa (a):** É o maior lado do triângulo e fica sempre de frente para o ângulo reto de 90°.`,
                `- **Catetos (b e c):** São os dois lados que formam a esquina do "L" de 90°.`,
                `### 2. A Fórmula Mágica: a² = b² + c²`,
                `*"O quadrado da hipotenusa é igual à soma dos quadrados dos catetos."*`,
                `Se os catetos medem 3 e 4:`,
                `- a² = 3² + 4²`,
                `- a² = 9 + 16 = 25`,
                `- a = √25 = **5**! O famoso triângulo 3-4-5.`,
                `> **Dica de ouro (TDAH):** Cuidado para não esquecer de tirar a raiz quadrada no último passo! O valor da hipotenusa não é 25, mas sim a raiz de 25, que dá 5.`
            ].join('\n\n'),
            gamificacao: {
                etapas: [
                    {
                        tipo: 'caca-bug',
                        enunciado: 'Encontre a linha com o erro no cálculo da hipotenusa dos catetos 6 e 8:',
                        dica: 'Observe bem a operação feita para desfazer o expoente ao quadrado!',
                        linhas: [
                            { codigo: 'Catetos b = 6 e c = 8' },
                            { codigo: 'h² = 6² + 8² = 36 + 64 = 100' },
                            { codigo: 'h = 100 ÷ 2 = 50' },
                            { codigo: 'print(f"Hipotenusa = {h}")' }
                        ],
                        linhaBug: 2, // índice 2 é a 3ª linha
                        explicacao: 'Na linha 3 houve a confusão clássica: para desfazer h² deve-se tirar a raiz quadrada (h = √100 = 10), e não dividir por 2!'
                    }
                ]
            }
        },

        // Aula 25: Introdução à estatística (Gamificada - Preencha a Lacuna)
        25: {
            tipo: 'gamificada',
            conteudo: [
                `**O que você vai aprender:** Como cientistas e empresas resumem milhares de dados em números simples e compreensíveis.`,
                `### 1. Os Três Mosqueteiros da Estatística`,
                `- **Média Aritmética:** Some todos os valores e divida pelo número total de itens.`,
                `- **Moda:** É o valor da moda, ou seja, aquele que **mais se repete** na amostra!`,
                `- **Mediana:** Coloque os dados em ordem crescente: a mediana é exatamente o **valor central** que divide a lista no meio.`,
                `### 2. Exemplo com as notas: 4, 7, 7, 10`,
                `- Média: (4 + 7 + 7 + 10) / 4 = 28 / 4 = **7,0**`,
                `- Moda: **7** (é a única nota que apareceu duas vezes)`,
                `- Mediana: Média dos dois do meio: (7 + 7) / 2 = **7**`,
                `> **Para que serve?** Médias nos dizem o desempenho geral, mas a moda e mediana revelam se existem extremos distorcendo a realidade!`
            ].join('\n\n'),
            gamificacao: {
                etapas: [
                    {
                        tipo: 'lacunas',
                        enunciado: 'Calcule a Média Aritmética das notas dos alunos:',
                        dica: 'Conjunto: 3, 5, 5, 7. Some tudo (20) e divida por 4!',
                        template: 'Dados: [3, 5, 5, 7]<br>Soma = 3 + 5 + 5 + 7 = 20<br>Média = 20 ÷ 4 = {lacuna}',
                        opcoes: ['5', '4', '6', '10'],
                        respostaCorreta: '5',
                        explicacao: '20 dividido por 4 é exatamente 5. Portanto a média do grupo é 5!'
                    }
                ]
            }
        },

        // Aula 26: Probabilidade básica (Gamificada - Caça ao Bug)
        26: {
            tipo: 'gamificada',
            conteudo: [
                `**O que você vai aprender:** A ciência de calcular a chance de algo acontecer antes do resultado ocorrer.`,
                `### 1. A Fórmula Universal da Probabilidade`,
                `**P = Casos Favoráveis / Casos Possíveis**`,
                `- **Casos Favoráveis:** O que você quer que aconteça (ex: sair coroa).`,
                `- **Casos Possíveis:** Tudo o que pode acontecer (ex: cara ou coroa = 2 opções).`,
                `Portanto: P = 1 / 2 = 0,5 = **50%**.`,
                `### 2. Os Limites da Probabilidade:`,
                `- **P = 0 (0%):** Evento impossível (ex: tirar 7 em um dado comum de 6 faces).`,
                `- **P = 1 (100%):** Evento certo (ex: o sol nascer amanhã).`,
                `> **Regra de ouro:** Nenhuma probabilidade pode ser menor que 0% ou maior que 100%! Se o seu cálculo deu 200%, você inverteu a fração!`
            ].join('\n\n'),
            gamificacao: {
                etapas: [
                    {
                        tipo: 'caca-bug',
                        enunciado: 'Aponte onde está o erro ao calcular a chance de tirar um número par em um dado de 6 faces:',
                        dica: 'Lembre-se da ordem: Favoráveis ÷ Possíveis, e o limite de 100%!',
                        linhas: [
                            { codigo: 'Pares no dado = {2, 4, 6} -> Favoráveis = 3' },
                            { codigo: 'Total de faces = {1, 2, 3, 4, 5, 6} -> Possíveis = 6' },
                            { codigo: 'P = 6 ÷ 3 = 2, ou seja, 200%' },
                            { codigo: 'print("Cálculo da probabilidade finalizado")' }
                        ],
                        linhaBug: 2, // índice 2 é a 3ª linha
                        explicacao: 'A linha 3 inverteu a divisão! A fórmula é Favoráveis ÷ Possíveis = 3/6 = 1/2 = 50%. A probabilidade jamais pode passar de 100%!'
                    }
                ]
            }
        }
    };

    const AULAS_PYTHON = {
        // Aula 2: Variáveis e tipos (Gamificada - Grid Chips 1ª vez - EXATO DA IMAGEM)
        2: {
            tipo: 'gamificada',
            conteudo: [
                `**O que você vai aprender:** Como criar caixas na memória do computador para guardar dados e as regras oficiais de nomes em Python.`,
                `### 1. O que é uma Variável?`,
                `Uma variável é como uma caixa etiquetada onde guardamos dados para usar mais tarde. Criamos uma variável com o operador de atribuição **\`=\`**:`,
                `\`pontos = 100\`\n\`nome = "Galea"\``,
                `### 2. Regras Oficiais de Nomenclatura no Python:`,
                `- **Pode usar:** Letras maiúsculas e minúsculas, números e sublinhado (underscore \`_\`).`,
                `- **NÃO pode começar com número:** \`1_lugar\` é proibido! Use \`primeiro_lugar\` ou \`lugar_1\`.`,
                `- **NÃO pode conter espaços:** \`xp total\` dá erro! Use \`xp_total\` (\`snake_case\`).`,
                `- **NÃO pode usar símbolos especiais:** Nem \`!\`, nem \`@\`, nem \`-\`, nem \`?\`.`,
                `- **NÃO pode usar palavras reservadas da linguagem:** Palavras como \`class\`, \`def\`, \`if\`, \`for\` e \`return\` pertencem ao Python e não podem ser nomes de variáveis.`,
                `> **Dica Pythonica:** A comunidade Python adota o estilo **snake_case** (letras minúsculas separadas por sublinhado: \`preco_final\`, \`saldo_disponivel\`).`
            ].join('\n\n'),
            gamificacao: {
                etapas: [
                    {
                        tipo: 'grid-chips',
                        enunciado: 'Com base nas regras de variáveis e tipos ensinadas na aula, selecione as atribuições 100% VÁLIDAS em Python:',
                        dica: 'Dica: variáveis devem seguir as regras de nomenclatura e tipos primitivos (int, float, str, bool)!',
                        opcoes: [
                            { texto: 'saldo_conta = 150.50', correta: true },
                            { texto: 'nome_aluno = "Galea"', correta: true },
                            { texto: 'eh_maior = True', correta: true },
                            { texto: 'idade = int("25")', correta: true },
                            { texto: 'pontos_totais = 1000', correta: true },
                            { texto: '2_lugar = "Prata"', correta: false },
                            { texto: 'valor total = 50', correta: false },
                            { texto: 'class = "Mago"', correta: false },
                            { texto: 'preco$ = 19.90', correta: false }
                        ],
                        explicacao: 'Variáveis em Python usam snake_case (letras, números e _), aceitam tipos primitivos (int, float, str, bool), não podem começar com números, nem ter espaços ou símbolos especiais ($) e não podem usar palavras reservadas como "class".'
                    },
                    {
                        tipo: 'grid-chips',
                        enunciado: 'Selecione as variáveis com nomes válidos e convenção oficial snake_case ensinada na aula:',
                        dica: 'Dica: cuidado com palavras reservadas como class, def ou for, e símbolos como hífen e @!',
                        opcoes: [
                            { texto: 'taxa_imposto = 0.15', correta: true },
                            { texto: 'nivel_jogador = 5', correta: true },
                            { texto: 'mensagem_aviso = "Ok"', correta: true },
                            { texto: 'esta_conectado = False', correta: true },
                            { texto: 'def = "Função"', correta: false },
                            { texto: 'user-id = 101', correta: false },
                            { texto: '1_tentativa = True', correta: false },
                            { texto: 'email@usuario = "a@b"', correta: false },
                            { texto: 'for = 10', correta: false }
                        ],
                        explicacao: 'taxa_imposto, nivel_jogador, mensagem_aviso e esta_conectado seguem o padrão snake_case. Palavras reservadas (def, for) e caracteres como "-" ou "@" não são permitidos em identificadores Python!'
                    }
                ]
            }
        },

        // Aula 3: Números e operações
        3: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/python/aula3_numeros_operacoes.svg',
            alt: 'Tabela dos operadores aritméticos de Python com exemplos claros',
            conteudo: [
                `**O que você vai aprender:** Como fazer cálculos, manipular inteiros (int) e decimais (float) e usar os operadores exclusivos do Python.`,
                `### 1. Inteiros (int) vs Decimais (float)`,
                `No Python, você não precisa declarar tipo! Se escrever \`idade = 20\`, é um número inteiro (\`int\`). Se escrever \`preco = 19.90\` (com ponto, nunca vírgula!), é um decimal de ponto flutuante (\`float\`).`,
                `### 2. Os três operadores que surpreendem quem vem de outras linguagens:`,
                `- **Divisão tradicional (\`/):** Em Python, mesmo \`4 / 2\` devolve \`2.0\` (sempre gera float).`,
                `- **Divisão inteira (\`//\`):** Pega apenas a parte inteira do quociente, descartando as casas decimais. Ex: \`7 // 2\` dá **3**.`,
                `- **Módulo (\`%\`):** Devolve o **resto** da divisão. É a melhor forma de testar se um número é par (\`n % 2 == 0\`)!`,
                `- **Potência (\`**\`):** Use dois asteriscos para exponenciação (\`2 ** 3 = 8\`). O símbolo \`^\` em Python é operação bit a bit, não potência!`,
                `> **Dica de ouro (TDAH):** Lembre-se: \`/\` divide normal, \`//\` joga as casas decimais no lixo, e \`%\` guarda só o que sobrou!`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `Quanto vale a expressão \`10 // 3 + 10 % 3\`?`,
                `10 // 3 = 3 (parte inteira). 10 % 3 = 1 (resto). Logo: 3 + 1 = **4**!`
            ].join('\n\n')
        },

        // Aula 4: Textos (strings)
        4: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/python/aula4_strings.svg',
            alt: 'Diagrama visual de fatiamento e indexação de strings em Python',
            conteudo: [
                `**O que você vai aprender:** O poder de manipular textos, fatiar palavras e usar f-strings modernas.`,
                `### 1. Strings são listas de caracteres`,
                `Qualquer texto entre aspas simples (\`'texto'\`) ou duplas (\`"texto"\`) é uma string (\`str\`). O Python numera cada letra começando no **índice 0**.`,
                `Se \`curso = "PYTHON"\`:`,
                `- \`curso[0]\` é a letra **P**.`,
                `- \`curso[-1]\` é a última letra, **N** (índice negativo conta de trás para frente!).`,
                `### 2. O fatiamento mágico (Slicing): \`[início:fim]\``,
                `Para pegar um pedaço de texto, usamos colchetes com dois pontos. O índice de fim é exclusivo (não entra):`,
                `- \`curso[0:2]\` pega as posições 0 e 1 ➔ **"PY"**.`,
                `- \`curso[2:]\` pega do índice 2 até o final ➔ **"THON"**.`,
                `### 3. A melhor forma de juntar texto e variáveis: f-strings`,
                `Coloque um \`f\` antes das aspas e escreva variáveis direto entre chaves:`,
                `\`\`\`python\nnome = "Leo"\nxp = 100\nprint(f"Parabéns {nome}, você ganhou {xp} XP!")\n\`\`\``,
                `> **Regra prática:** Esqueça concatenar com \`+\`! Use sempre f-strings: é mais limpo, rápido e nunca dá erro de tipo.`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `Se \`palavra = "GALEA"\`, o que retorna \`palavra[-1]\`? Retorna a letra **'A'**!`
            ].join('\n\n')
        },

        // Aula 6: Condições: if e else (Gamificada - Caça ao Bug)
        6: {
            tipo: 'gamificada',
            conteudo: [
                `**O que você vai aprender:** Como ensinar seu código a tomar decisões lógicas e seguir caminhos diferentes conforme a situação.`,
                `### 1. A Estrutura if e else`,
                `O comando \`if\` (SE) testa uma condição verdadeira. Se ela for falsa, o programa pula para o \`else\` (SENÃO):`,
                `\`\`\`python\nif vida <= 0:\n    print("Game Over!")\nelse:\n    print("Continue lutando!")\n\`\`\``,
                `### 2. As Duas Regras de Ouro da Sintaxe Python:`,
                `1. **Os Dois Pontos (\`:\`):** Toda linha com \`if\`, \`elif\` ou \`else\` DEVE terminar obrigatoriamente com dois-pontos.`,
                `2. **A Indentação (4 espaços):** O código que pertence à condição deve estar recuado para a direita. No Python, a indentação não é enfeite, é a própria estrutura do programa!`,
                `> **Dica mental (TDAH):** O \`:\` funciona como uma porta. Se você não colocar a maçaneta (\`:\`), o Python não consegue entrar no bloco indentado!`
            ].join('\n\n'),
            gamificacao: {
                etapas: [
                    {
                        tipo: 'caca-bug',
                        enunciado: 'Encontre a linha que causará um SyntaxError no código de verificação de aprovação:',
                        dica: 'Lembre-se da pontuação obrigatória no final de toda condição em Python!',
                        linhas: [
                            { codigo: 'nota = 8.5' },
                            { codigo: 'if nota >= 7.0' },
                            { codigo: '    print("Parabéns, você foi aprovado!")' },
                            { codigo: 'else:' },
                            { codigo: '    print("Você está de recuperação.")' }
                        ],
                        linhaBug: 1, // índice 1 é a linha 2
                        explicacao: 'A linha 2 esqueceu os dois-pontos ":" obrigatórios no final do comando if (if nota >= 7.0:)!'
                    }
                ]
            }
        },

        // Aula 7: Operadores lógicos
        7: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/python/aula7_operadores_logicos.svg',
            alt: 'Guia visual dos operadores lógicos AND, OR e NOT',
            conteudo: [
                `**O que você vai aprender:** Como combinar múltiplas perguntas para tomar decisões inteligentes no seu código.`,
                `### 1. Os 3 Guardiões da Lógica`,
                `- **\`and\` (E):** Exige que **todas** as condições sejam verdadeiras. Se uma falhar, tudo é falso. Como entrar no banco: precisa de agência E conta E senha corretas.`,
                `- **\`or\` (OU):** Basta que **pelo menos uma** condição seja verdadeira. Se você paga com dinheiro OU cartão, a compra é aprovada.`,
                `- **\`not\` (NÃO):** Inverte o valor. Se for \`True\`, vira \`False\`. Se for \`False\`, vira \`True\`.`,
                `### 2. Exemplos que você vai usar todo dia:`,
                `- \`if nivel >= 5 and tem_chave: print("Porta do castelo aberta!")\``,
                `- \`if eh_admin or eh_professor: print("Acesso ao painel liberado!")\``,
                `- \`if not jogo_pausado: atualizar_tela()\``,
                `> **Dica mental:** \`and\` é exigente (procura um False para reprovar). \`or\` é compreensivo (procura um True para aprovar).`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `Qual o resultado de \`not (5 > 2 and 3 < 1)\`?`,
                `5 > 2 é True. 3 < 1 é False. True and False = False. Como tem \`not\` na frente, o resultado final é **True**!`
            ].join('\n\n')
        },

        // Aula 9: Laço for (Gamificada - Preencha a Lacuna)
        9: {
            tipo: 'gamificada',
            conteudo: [
                `**O que você vai aprender:** Como automatizar tarefas repetitivas com o laço de repetição for e dominar o gerador range().`,
                `### 1. O Laço for e a Função range()`,
                `Para repetir uma ação um número exato de vezes, usamos o comando \`range()\`:`,
                `\`\`\`python\nfor i in range(3):\n    print("Olá Galea!")\n\`\`\``,
                `Isso imprimirá a frase 3 vezes!`,
                `### 2. Como o range() funciona:`,
                `- \`range(5)\`: Gera os números de 0 até 4 (total de 5 repetições). O último número **nunca entra** (é exclusivo)!`,
                `- \`range(1, 6)\`: Começa no 1 e vai até o 5.`,
                `- \`range(0, 10, 2)\`: Conta de 2 em 2 (0, 2, 4, 6, 8).`,
                `> **Atenção:** Em Python, quase tudo começa contando do **zero**!`
            ].join('\n\n'),
            gamificacao: {
                etapas: [
                    {
                        tipo: 'lacunas',
                        enunciado: 'Complete o código para que o laço execute exatamente 5 repetições (do 0 ao 4):',
                        dica: 'Lembre-se de como o range gera sequências parando antes do valor limite!',
                        template: 'for contagem in range({lacuna}):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f"Subindo para o andar {contagem}")',
                        opcoes: ['5', '0..4', '(0, 4)', '1 to 5'],
                        respostaCorreta: '5',
                        explicacao: 'range(5) gera os números 0, 1, 2, 3 e 4 (5 repetições exatas, parando antes do 5)!'
                    }
                ]
            }
        },

        // Aula 10: Listas
        10: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/python/aula10_listas.svg',
            alt: 'Diagrama de uma lista em Python com gavetas indexadas e métodos append e pop',
            conteudo: [
                `**O que você vai aprender:** A estrutura mais usada do Python para guardar vários itens ordenados em uma só variável.`,
                `### 1. Criando e acessando listas`,
                `Uma lista é criada com colchetes \`[]\`. Ela pode conter qualquer tipo de dado misturado:`,
                `\`jogadores = ["Ana", "Bia", "Carlos"]\``,
                `- Acessar primeiro: \`jogadores[0]\` ➔ "Ana"`,
                `- Acessar último: \`jogadores[-1]\` ➔ "Carlos"`,
                `### 2. Os métodos essenciais do dia a dia:`,
                `- **\`.append(item)\`**: Adiciona um novo elemento no final da lista.`,
                `- **\`.pop()\`**: Remove e devolve o último elemento da lista.`,
                `- **\`.remove(valor)\`**: Procura o valor e remove a primeira ocorrência.`,
                `- **\`len(lista)\`**: Retorna quantos itens existem na lista.`,
                `> **Lembre-se:** Listas são **mutáveis**. Você pode alterar um valor existente direto: \`jogadores[0] = "Rafael"\`.`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `Se você tem \`itens = [1, 2]\` e roda \`itens.append(3)\`, qual o tamanho da lista? Resposta: **3 elementos** (\`[1, 2, 3]\`).`
            ].join('\n\n')
        },

        // Aula 12: Dicionários
        12: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/python/aula12_dicionarios.svg',
            alt: 'Ilustração de dicionário em Python com chaves e valores mapeados',
            conteudo: [
                `**O que você vai aprender:** Como organizar dados com rótulos e etiquetas explicativas usando a estrutura mais poderosa do Python.`,
                `### 1. O que é um Dicionário?`,
                `Enquanto listas usam posições numéricas (0, 1, 2), dicionários usam **chaves com nome** entre chaves \`{}\`:`,
                `\`\`\`python\nusuario = {\n    "nome": "Guilherme",\n    "nivel": 4,\n    "online": True\n}\n\`\`\``,
                `### 2. Como usar:`,
                `- **Ler um dado:** \`usuario["nome"]\` ➔ "Guilherme"`,
                `- **Alterar um dado:** \`usuario["nivel"] = 5\``,
                `- **Adicionar novo campo:** \`usuario["xp"] = 350\` (se a chave não existir, ela é criada na hora!)`,
                `- **Leitura segura sem erro:** \`usuario.get("email", "não informado")\` (se não existir, não quebra seu programa!)`,
                `> **Dica TDAH:** Pense no dicionário como a ficha de RPG do seu personagem: cada atributo tem um nome claro (\`forca: 18\`, \`vida: 100\`).`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `Como você consulta a idade em \`perfil = {"idade": 22}\`? Usando **\`perfil["idade"]\`** ou **\`perfil.get("idade")\`**!`
            ].join('\n\n')
        },

        // Aula 13: Conjuntos (Gamificada - Grid Chips 2ª vez)
        13: {
            tipo: 'gamificada',
            conteudo: [
                `**O que você vai aprender:** O tipo de dados set (conjuntos), a estrutura mais rápida para eliminar repetições e fazer testes de pertinência.`,
                `### 1. O que é um set?`,
                `Um conjunto (\`set\`) é uma coleção de elementos que obedece a duas regras matemáticas:`,
                `1. **Não possui ordem fixa:** Os itens não têm índices como [0] ou [1].`,
                `2. **NUNCA aceita itens repetidos:** Se você tentar colocar 10 valores iguais, ele guarda apenas um!`,
                `### 2. O Superpoder do set: Limpar Listas!`,
                `Se você tem uma lista cheia de duplicatas:`,
                `\`nomes = ["Ana", "Bia", "Ana", "Carlos", "Bia"]\``,
                `Basta converter para set: \`set(nomes)\` ➔ vira \`{"Ana", "Bia", "Carlos"}\`!`,
                `> **Operações Matemáticas:** Conjuntos suportam união (\`|\`), interseção (\`&\`) e diferença (\`-\`) em frações de milissegundo!`
            ].join('\n\n'),
            gamificacao: {
                etapas: [
                    {
                        tipo: 'grid-chips',
                        enunciado: 'Sejam os conjuntos da aula: python = {"Ana", "Bia", "Caio"} e web = {"Bia", "Caio", "Davi"}. Selecione as expressões VERDADEIRAS:',
                        dica: 'Lembre-se: & é interseção (ambos), | é união (todos sem repetir), - é diferença (apenas no primeiro)!',
                        opcoes: [
                            { texto: 'python & web == {"Bia", "Caio"}', correta: true },
                            { texto: 'len(python | web) == 4', correta: true },
                            { texto: 'python - web == {"Ana"}', correta: true },
                            { texto: '"Davi" in web', correta: true },
                            { texto: 'web - python == {"Davi"}', correta: true },
                            { texto: 'len(python | web) == 6', correta: false },
                            { texto: 'python & web == {"Ana", "Davi"}', correta: false },
                            { texto: '"Lucas" in python', correta: false },
                            { texto: 'python - web == {}', correta: false }
                        ],
                        explicacao: 'A interseção (&) retorna quem está em ambos (Bia e Caio); a união (|) une todos sem duplicatas (Ana, Bia, Caio, Davi = 4 elementos); a diferença (-) traz quem está exclusivamente no primeiro conjunto!'
                    }
                ]
            }
        },

        // Aula 15: Parâmetros e retorno
        15: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/python/aula15_parametros_retorno.svg',
            alt: 'Diagrama da caixa de função recebendo parâmetros e devolvendo resultado com return',
            conteudo: [
                `**O que você vai aprender:** A diferença crucial entre apenas mostrar algo na tela e devolver uma informação útil para o resto do sistema.`,
                `### 1. Parâmetros: As entradas da função`,
                `Parâmetros são variáveis temporárias que recebem o que você enviar ao chamar a função:`,
                `\`\`\`python\ndef somar(a, b):\n    return a + b\n\`\`\``,
                `Ao chamar \`somar(10, 5)\`, \`a\` vale 10 e \`b\` vale 5.`,
                `### 2. A grande diferença: print() vs return`,
                `- **\`print()\`:** É como um megafone. Apenas desenha texto no terminal para humanos lerem. O computador não guarda nada.`,
                `- **\`return\`:** É o entregador. Ele entrega o valor nas mãos de quem chamou para ser guardado numa variável, gravado no banco ou recalculado!`,
                `### 3. Valores padrão (Default parameters):`,
                `Você pode definir valores opcionais: \`def saudar(nome="viajante"):\`. Se ninguém passar nome, o padrão é usado!`,
                `> **Regra de ouro:** Quando o Python bate na linha do \`return\`, a função encerra imediatamente! Qualquer linha depois do return é ignorada.`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `Se você tem \`def dobro(x): return x * 2\`, quanto vale \`resultado = dobro(7)\`? Vale **14**!`
            ].join('\n\n')
        },

        // Aula 16: Escopo de variáveis
        16: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/python/aula16_escopo_variaveis.svg',
            alt: 'Representação do escopo global contendo funções com escopos locais isolados',
            conteudo: [
                `**O que você vai aprender:** Onde suas variáveis vivem, onde elas morrem e por que funções não misturam seus dados acidentalmente.`,
                `### 1. Escopo Global vs Escopo Local`,
                `- **Escopo Global:** Variáveis criadas fora de qualquer função. O arquivo inteiro consegue enxergar e ler.`,
                `- **Escopo Local:** Variáveis criadas **dentro** de uma função. Elas nascem quando a função executa e são destruídas assim que a função termina!`,
                `### 2. O que acontece na prática?`,
                `\`\`\`python\ntaxa = 1.1  # Variável global\n\ndef calcular():\n    desconto = 5  # Variável local\n    return 100 * taxa - desconto\n\`\`\``,
                `Se você tentar usar \`print(desconto)\` lá fora, o Python grita: **\`NameError: name 'desconto' is not defined\`**!`,
                `> **Boas práticas:** Evite alterar variáveis globais dentro de funções com a palavra \`global\`. Prefira sempre passar dados via parâmetros e receber via \`return\`.`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `Uma variável criada dentro de um \`def\` existe fora dele? Não, seu escopo é estritamente **local**!`
            ].join('\n\n')
        },

        // Aula 18: Erros e exceções (Gamificada - Caça ao Bug)
        18: {
            tipo: 'gamificada',
            conteudo: [
                `**O que você vai aprender:** Como blindar seu sistema contra falhas e tratar imprevistos com try e except sem o programa travar.`,
                `### 1. Erros de Sintaxe vs Exceções`,
                `- **SyntaxError:** Você escreveu algo errado que o Python nem consegue rodar (ex: esqueceu dois-pontos ou parênteses).`,
                `- **Exceptions (Exceções):** O código está bem escrito, mas na hora de rodar acontece uma situação impossível (ex: dividir por zero ou tentar abrir um arquivo que não existe).`,
                `### 2. O Escudo Protetor: try e except`,
                `\`\`\`python\ntry:\n    numero = int(input("Digite sua idade: "))\n    print(f"Ano que vem você terá {numero + 1} anos")\nexcept ValueError:\n    print("Por favor, digite apenas números inteiros!")\n\`\`\``,
                `Se o usuário digitar "dez" por extenso, o programa não quebra; ele cai suavemente no \`except\`!`,
                `> **Dica profissional:** Nunca use um \`except:\` vazio sem nome de erro, pois ele pode esconder bugs reais que você precisa consertar!`
            ].join('\n\n'),
            gamificacao: {
                etapas: [
                    {
                        tipo: 'caca-bug',
                        enunciado: 'Encontre a linha que causará um ZeroDivisionError imediato durante a execução:',
                        dica: 'Procure qual operação matemática é proibida e não possui proteção try/except:',
                        linhas: [
                            { codigo: 'vidas = 3' },
                            { codigo: 'pontos = 150' },
                            { codigo: 'fator_bonus = 0' },
                            { codigo: 'score_final = pontos / fator_bonus' },
                            { codigo: 'print(f"Score: {score_final}")' }
                        ],
                        linhaBug: 3, // índice 3 é a linha 4
                        explicacao: 'A linha 4 tenta dividir "pontos / 0", gerando ZeroDivisionError! Na matemática e computação, divisão por zero é indefinida e trava o script.'
                    }
                ]
            }
        },

        // Aula 19: Arquivos
        19: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/python/aula19_arquivos.svg',
            alt: 'Fluxo seguro de manipulação de arquivos com o comando with open em Python',
            conteudo: [
                `**O que você vai aprender:** Como ler e salvar textos e dados no disco rígido sem risco de corromper arquivos.`,
                `### 1. O Jeito Moderno: with open()`,
                `No passado, você precisava abrir e lembrar de fechar com \`close()\`. Se desse erro no meio, o arquivo ficava travado. Em Python moderno, usamos **\`with\`**:`,
                `\`\`\`python\nwith open("progresso.txt", "w", encoding="utf-8") as arq:\n    arq.write("Nível 5 alcançado!\\n")\n\`\`\``,
                `Quando o bloco acaba, o arquivo fecha sozinho. 100% seguro!`,
                `### 2. Os três modos fundamentais:`,
                `- **\`"r"\` (Read):** Apenas leitura. Se o arquivo não existir, gera erro.`,
                `- **\`"w"\` (Write):** Escrita. Se o arquivo já existir, **apaga tudo** e escreve do zero!`,
                `- **\`"a"\` (Append):** Anexar. Adiciona novas linhas no final sem apagar nada!`,
                `> **Dica essencial:** Adicione sempre \`encoding="utf-8"\` para nunca ter problemas com acentos (ç, á, ã)!`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `Qual modo de abertura você usa se quiser adicionar novos registros sem apagar o que já estava escrito? O modo **\`"a"\` (append)**!`
            ].join('\n\n')
        },

        // Aula 20: Compreensão de listas
        20: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/python/aula20_list_comprehension.svg',
            alt: 'Anatomia da sintaxe de list comprehension destacando transformação, iteração e filtro',
            conteudo: [
                `**O que você vai aprender:** O recurso que faz programadores de outras linguagens se apaixonarem por Python: criar e filtrar listas em uma linha.`,
                `### 1. O Jeito Longo vs O Jeito Pythonico`,
                `Imagine dobrar os números pares de uma lista:`,
                `**Jeito tradicional (4 linhas):**`,
                `\`\`\`python\ndobros = []\nfor n in numeros:\n    if n % 2 == 0:\n        dobros.append(n * 2)\n\`\`\``,
                `**Com List Comprehension (1 linha elegante):**`,
                `\`dobros = [n * 2 for n in numeros if n % 2 == 0]\``,
                `### 2. Como ler a fórmula:`,
                `1. \`[ o_que_eu_quero_fazer \``,
                `2. \`  for item in colecao \``,
                `3. \`  if condicao_opcional ]\``,
                `> **Benefício TDAH:** Menos código boilerplate (código repetitivo sem valor) significa menos ruído visual e menor esforço mental para entender o que o script faz.`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `O que gera \`[x * 10 for x in [1, 2, 3]]\`? Gera a lista **\`[10, 20, 30]\`**!`
            ].join('\n\n')
        },

        // Aula 22: Classes e objetos (Gamificada - Ordene os Passos)
        22: {
            tipo: 'gamificada',
            conteudo: [
                `**O que você vai aprender:** O conceito de Programação Orientada a Objetos (POO), modelando entidades do mundo real em software.`,
                `### 1. A Metáfora do Molde e do Bolo`,
                `- **Classe (Class):** É a receita ou a forma do bolo. Ela descreve quais atributos e comportamentos existirão.`,
                `- **Objeto (Instância):** É o bolo real que saiu do forno! Você pode criar 50 bolos diferentes a partir do mesmo molde.`,
                `### 2. O Construtor __init__`,
                `É o método especial que é acionado automaticamente no momento exato em que o objeto nasce na memória:`,
                `\`\`\`python\nclass Aluno:\n    def __init__(self, nome, curso):\n        self.nome = nome\n        self.curso = curso\n\n# Criando um objeto real:\naluno1 = Aluno("Marina", "Python")\n\`\`\``,
                `> **Curiosidade:** Quase tudo em Python é um objeto (strings, listas e até números inteiros possuem classes por baixo dos panos)!`
            ].join('\n\n'),
            gamificacao: {
                etapas: [
                    {
                        tipo: 'ordene',
                        enunciado: 'Ordene o ciclo de vida para definir e instanciar uma Classe em Python:',
                        dica: 'Organize desde a declaração da palavra class até a criação do objeto.',
                        itens: [
                            'Criar a instância real na memória: heroi = Guerreiro("Conan")',
                            'Definir a assinatura da classe com class Guerreiro:',
                            'Armazenar os parâmetros recebidos nos atributos do self',
                            'Escrever o método construtor def __init__(self, nome):'
                        ],
                        ordemCorreta: [
                            'Definir a assinatura da classe com class Guerreiro:',
                            'Escrever o método construtor def __init__(self, nome):',
                            'Armazenar os parâmetros recebidos nos atributos do self',
                            'Criar a instância real na memória: heroi = Guerreiro("Conan")'
                        ],
                        explicacao: 'Perfeito! Primeiro declaramos a classe, criamos o método construtor __init__, salvamos no self e por fim instanciamos o objeto!'
                    }
                ]
            }
        },

        // Aula 23: Atributos e métodos (Gamificada - Preencha a Lacuna)
        23: {
            tipo: 'gamificada',
            conteudo: [
                `**O que você vai aprender:** A diferença entre as características de um objeto (atributos) e suas ações (métodos), e o papel do self.`,
                `### 1. Atributos: O que o objeto TEM`,
                `São as variáveis internas associadas àquela instância:`,
                `- \`self.vida = 100\``,
                `- \`self.velocidade = 0\``,
                `### 2. Métodos: O que o objeto FAZ`,
                `São funções declaradas dentro da classe. Todo método de instância precisa ter **\`self\`** como seu primeiro parâmetro:`,
                `\`\`\`python\nclass Carro:\n    def __init__(self, modelo):\n        self.modelo = modelo\n        self.velocidade = 0\n\n    def acelerar(self, quanto):\n        self.velocidade += quanto\n        print(f"Velocidade atual: {self.velocidade} km/h")\n\`\`\``,
                `Ao chamar \`meu_carro.acelerar(20)\`, o Python passa \`meu_carro\` automaticamente para o \`self\`!`,
                `> **Regra de ouro:** Sem o \`self\`, o método não sabe qual dos objetos criados deve acelerar ou ter a vida alterada!`
            ].join('\n\n'),
            gamificacao: {
                etapas: [
                    {
                        tipo: 'lacunas',
                        enunciado: 'Complete a declaração do método de aceleração com o parâmetro obrigatório de instância:',
                        dica: 'Qual palavra mágica representa a própria instância em qualquer método de classe Python?',
                        template: 'class NaveEspacial:<br>&nbsp;&nbsp;&nbsp;&nbsp;def acelerar({lacuna}, propulsao):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.velocidade += propulsao',
                        opcoes: ['self', 'this', 'me', 'auto'],
                        respostaCorreta: 'self',
                        explicacao: 'Em Python, o primeiro parâmetro de qualquer método de instância DEVE ser sempre "self"!'
                    }
                ]
            }
        },

        // Aula 24: Herança
        24: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/python/aula24_heranca.svg',
            alt: 'Diagrama de classes com classe Pai Animal e classes filhas Cachorro e Gato',
            conteudo: [
                `**O que você vai aprender:** Como reaproveitar código inteligente entre classes criando famílias de objetos.`,
                `### 1. O que é Herança em Orientação a Objetos?`,
                `Quando várias classes compartilham características idênticas, criamos uma **classe base (Pai)** e deixamos as **classes filhas** herdarem tudo:`,
                `\`\`\`python\nclass Personagem:\n    def __init__(self, nome):\n        self.nome = nome\n        self.vida = 100\n\n    def sofrer_dano(self, qtd):\n        self.vida -= qtd\n\`\`\``,
                `### 2. A classe Filha herda tudo e adiciona o que é dela:`,
                `\`\`\`python\nclass Mago(Personagem):\n    def soltar_magia(self):\n        return "Bola de fogo!"\n\`\`\``,
                `O \`Mago\` já nasce com \`nome\`, \`vida\` e o método \`sofrer_dano()\`, sem precisar digitar nada disso de novo!`,
                `> **O comando super():** Se quiser chamar o construtor do Pai dentro da filha, use: \`super().__init__(nome)\`.`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `Se a classe \`Carro\` herda de \`Veiculo\`, quem é a classe pai? **Veiculo** é a classe pai!`
            ].join('\n\n')
        },

        // Aula 25: Trabalhando com datas
        25: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/python/aula25_datas.svg',
            alt: 'Guia de manipulação e formatação de datas com datetime e strftime',
            conteudo: [
                `**O que você vai aprender:** Como lidar com horas, dias e anos sem se perder nos fusos e formatos.`,
                `### 1. O módulo nativo datetime`,
                `Para usar, basta importar: \`from datetime import datetime, timedelta\`.`,
                `- **Pegar momento exato:** \`agora = datetime.now()\` (contém ano, mês, dia, hora, minuto, segundo).`,
                `- **Criar data específica:** \`aniversario = datetime(2026, 12, 25)\`.`,
                `### 2. Formatando datas com strftime (String From Time)`,
                `Em computação, datas usam formato internacional \`YYYY-MM-DD\`. Para exibir no padrão brasileiro \`DD/MM/YYYY\`:`,
                `\`data_br = agora.strftime("%d/%m/%Y às %H:%M")\``,
                `### 3. Somando dias com timedelta:`,
                `\`prazo = agora + timedelta(days=7)\` ➔ Adiciona exatamente 7 dias na data atual!`,
                `> **Mnemônica:** \`strftime\` = String From Time (converte data para texto legível).`,
                `### 🎯 Desafio Rápido de Fixação:`,
                `Qual símbolo no \`strftime\` representa o ano completo com 4 dígitos? É o **%Y** maiúsculo (o minúsculo %y só pega os dois últimos, como 26)!`
            ].join('\n\n')
        },

        // Aula 29: Mini projeto: jogo de adivinhação
        29: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/python/aula29_jogo_adivinhacao.svg',
            alt: 'Fluxograma completo do jogo de adivinhação em Python',
            conteudo: [
                `**O que você vai aprender:** Como juntar variáveis, laços, números aleatórios e lógica em um jogo interativo completo.`,
                `### 1. A Lógica do Jogo`,
                `O computador sorteia um número secreto entre 1 e 50. O jogador tenta adivinhar. A cada tentativa, o jogo responde: *"Muito alto!"* ou *"Muito baixo!"* até o acerto.`,
                `### 2. O Código Completo do Projeto:`,
                `\`\`\`python\nimport random\n\nsecreto = random.randint(1, 50)\ntentativas = 0\nacertou = False\n\nprint("=== BEM-VINDO AO JOGO DE ADIVINHAÇÃO ===")\n\nwhile not acertou:\n    chute = int(input("Digite seu palpite (1 a 50): "))\n    tentativas += 1\n    \n    if chute == secreto:\n        print(f"🎉 Acertou em {tentativas} tentativas!")\n        acertou = True\n    elif chute < secreto:\n        print("📈 Tente um número MAIOR...")\n    else:\n        print("📉 Tente um número MENOR...")\n\`\`\``,
                `> **Teste no Playground:** Copie este código e execute no nosso Code Lab! Tente encontrar o número usando busca binária (chutando sempre o meio: 25, depois 37 ou 12).`,
                `### 🎯 Desafio de Extensão:`,
                `Adicione um limite de no máximo 5 tentativas. Se passar de 5, exiba "Game Over!"`
            ].join('\n\n')
        },

        // Aula 30: Projeto final
        30: {
            tipo: 'texto-visual',
            imagem: '../images/aulas/python/aula30_projeto_final.svg',
            alt: 'Mapa conceitual do projeto final consolidando todo o curso de Python',
            conteudo: [
                `**O que você vai aprender:** A integração total: como estruturar um projeto profissional com menu interativo, banco de dados em arquivo e classes.`,
                `### 1. O Desafio Final: Sistema de Gestão Gamificado`,
                `Você construirá um sistema CLI (Linha de Comando) capaz de:`,
                `1. Cadastrar alunos ou itens com classes POO.`,
                `2. Salvar e carregar dados em arquivos JSON com \`with open\`.`,
                `3. Tratar erros de digitação com blocos \`try / except\`.`,
                `4. Exibir relatórios usando \`list comprehension\` e filtros rápidos.`,
                `### 2. Estrutura recomendada de pastas:`,
                `- \`main.py\`: Ponto de entrada com o menu \`while True\`.`,
                `- \`modelos.py\`: Suas classes (\`Aluno\`, \`Curso\`).`,
                `- \`dados.json\`: O arquivo com os registros salvos.`,
                `> **Mensagem do Professor Galea:** Você começou no "Olá mundo" e agora entende a linguagem mais utilizada do planeta em Inteligência Artificial, Ciência de Dados e Automação. Parabéns pela jornada!`,
                `### 🎯 Conquista Desbloqueada:`,
                `Ao concluir esta aula, você ganha o distintivo **Desenvolvedor Python Galea 2026** e +50 XP bônus!`
            ].join('\n\n')
        }
    };

    return {
        obter(cursoId, numeroAula) {
            if (cursoId === 'matematica' && AULAS_MATEMATICA[numeroAula]) {
                return AULAS_MATEMATICA[numeroAula];
            }
            if (cursoId === 'python' && AULAS_PYTHON[numeroAula]) {
                return AULAS_PYTHON[numeroAula];
            }
            return null;
        }
    };
})();
