/* =====================================================
   Galea Educação - Conteúdo Pedagógico de Física
   Fontes: Mecânica Clássica (Newton), Termodinâmica, Ondulatória,
           Óptica Geométrica, Sistema Internacional de Unidades (SI).
   Ciclo de 3 aulas: 1=Texto Aprofundado, 2=Vídeo + Tela de Resumo, 3=Gamificação.
   ===================================================== */

window.GaleaBancosConteudo = window.GaleaBancosConteudo || {};

window.GaleaBancosConteudo.fisica = {
    // --- BLOCO 1 (Aulas 1 a 3) ---
    1: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a natureza da Física como ciência natural fundamental, o método científico empírico e a modelagem de fenômenos do universo.`,
            `### 1. O que é a Física`,
            `A palavra Física deriva do grego *physis* (natureza). É a ciência que investiga as propriedades fundamentais da matéria, da energia, do espaço e do tempo, buscando leis matemáticas universais que descrevam desde o comportamento de partículas subatômicas até o movimento de galáxias distantes.`,
            `### 2. O Método Científico`,
            `Estruturado por pioneiros como Galileu Galilei e Francis Bacon, o método científico substituiu o dogma medieval por evidências mensuráveis:`,
            `1. **Observação:** Notar um padrão ou fenômeno natural.`,
            `2. **Pergunta:** Formulação de um problema claro.`,
            `3. **Hipótese:** Proposição de uma explicação preliminar falseável.`,
            `4. **Experimentação:** Testes controlados com medições reprodutíveis.`,
            `5. **Teoria ou Lei:** Modelo validado pela comunidade científica.`,
            `> **Dica de Fixação Galea (TDAH):** Pense no método científico como um detetive investigando um mistério: nenhuma teoria é aceita sem provas concretas e pistas repetíveis!`
        ].join('\n\n')
    },

    2: {
        tipo: 'video-resumo',
        video: { titulo: 'Grandezas Físicas, Grandezas Escalares vs Vetoriais e o Sistema Internacional (SI)' },
        conteudo: [
            `## 📺 Guia da Videoaula: Grandezas e Unidades Fundamentais`,
            `Assista ao vídeo explicativo sobre o Sistema Internacional de Unidades. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Grandezas Escalares:** Precisam apenas de valor numérico e unidade de medida (ex.: Massa: 70 kg; Tempo: 30 s; Temperatura: 25 ºC).`,
            `- **Grandezas Vetoriais:** Exigem **módulo (valor)**, **direção** (horizontal, vertical) e **sentido** (para a direita, para cima). Ex.: Força, Velocidade, Aceleração.`,
            `- **O Padrão Ouro do SI (Sistema Internacional):**`,
            `  • Comprimento: Metro (\`m\`).`,
            `  • Tempo: Segundo (\`s\`).`,
            `  • Massa: Quilograma (\`kg\`).`,
            `- **Conversão Chave de Velocidade:** Para passar de \`km/h\` para \`m/s\`, divida por \`3,6\` (ex.: \`72 km/h ÷ 3,6 = 20 m/s\`).`,
            `> Conclua este resumo para liberar a gamificação na Lição 3!`
        ].join('\n\n')
    },

    3: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - Grandezas e Método Científico: Selecione todas as afirmações fisicamente CORRETAS:',
                    dica: 'Diferencie grandezas escalares de vetoriais e lembre-se das unidades oficiais do SI (m, kg, s)!',
                    opcoes: [
                        { texto: 'No SI, a unidade oficial de comprimento é o metro (m)', correta: true },
                        { texto: 'Força e velocidade são grandezas vetoriais', correta: true },
                        { texto: '72 km/h equivale exatamente a 20 m/s', correta: true },
                        { texto: 'Massa e tempo são grandezas puramente escalares', correta: true },
                        { texto: 'O método científico exige experimentos controlados e falseáveis', correta: true },
                        { texto: 'No SI, a unidade oficial de massa é a tonelada', correta: false },
                        { texto: 'Grandezas escalares necessitam de direção e sentido', correta: false }
                    ],
                    explicacao: 'No SI o comprimento padrão é metro (m) e a massa é kg. Força e velocidade exigem módulo, direção e sentido (vetoriais).'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Fator de Conversão de Velocidade: Complete com o fator numérico que converte km/h para m/s:',
                    dica: '1 hora tem 3.600 segundos e 1 quilômetro tem 1.000 metros (3600 / 1000 = 3,6).',
                    template: 'Para converter uma velocidade de km/h para m/s, dividimos o valor por {lacuna}',
                    opcoes: ['3.6', '10', '60', '36'],
                    respostaCorreta: '3.6',
                    explicacao: 'Como 1 km = 1000 m e 1 h = 3600 s, o fator de conversão exato entre as duas unidades é 3,6.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Classificação de Grandezas: Localize a linha onde uma grandeza puramente escalar foi classificada erroneamente como vetorial:',
                    dica: 'Grandezas escalares ficam perfeitamente definidas apenas com um número e uma unidade, sem precisar de direção!',
                    linhasCodigo: [
                        '1. Grandeza 1: Força de 100 N para a direita (vetorial)',
                        '2. Grandeza 2: Velocidade de 25 m/s para o norte (vetorial)',
                        '3. Grandeza 3: Intervalo de tempo de 40 segundos para o oeste (vetorial)',
                        '4. Grandeza 4: Aceleração da gravidade de 9,8 m/s² para baixo (vetorial)'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, o tempo foi descrito com direção "para o oeste". Tempo é uma grandeza rigorosamente escalar, não possui sentido nem direção espacial!'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - O Método Científico: Ordene as etapas formais da construção de uma teoria física comprovada:',
                    dica: 'Inicie pela observação, crie hipóteses, teste com experimentos rigorosos e formalize as leis matemáticas.',
                    itens: [
                        'Observação atenta e quantitativa de um fenômeno natural',
                        'Formulação de uma hipótese explicativa testável e falseável',
                        'Realização de experimentos controlados e coleta de medições',
                        'Análise estatística e formulação da lei ou teoria física'
                    ],
                    ordemCorreta: [
                        'Observação atenta e quantitativa de um fenômeno natural',
                        'Formulação de uma hipótese explicativa testável e falseável',
                        'Realização de experimentos controlados e coleta de medições',
                        'Análise estatística e formulação da lei ou teoria física'
                    ],
                    explicacao: 'O método científico galileano fundamenta a Física em hipóteses verificadas empiricamente por meio de experimentação reproduzível.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete com o padrão oficial de medida de massa no Sistema Internacional (SI):',
                    dica: 'Atenção: embora o grama seja muito comum, o padrão fundamental do SI leva o prefixo quilo!',
                    template: 'No Sistema Internacional de Unidades (SI), a unidade padrão de massa é o {lacuna}',
                    opcoes: ['quilograma', 'grama', 'tonelada', 'libra'],
                    respostaCorreta: 'quilograma',
                    explicacao: 'O quilograma (kg) é a unidade fundamental de massa do SI (uma das 7 unidades básicas da física moderna).'
                }
            ]
        }
    },

    // --- BLOCO 2 (Aulas 4 a 6) ---
    4: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender o Movimento Uniforme (MU), a constância da velocidade vetorial e a função horária do espaço.`,
            `### 1. O que Caracteriza o Movimento Uniforme`,
            `Um corpo está em **Movimento Uniforme (MU)** quando sua velocidade escalar instantânea permanece **constante** e diferente de zero ao longo de todo o trajeto. Isso significa que a aceleração escalar é rigorosamente nula (\`a = 0\`).`,
            `### 2. A Função Horária da Posição`,
            `Como a velocidade média coincide com a velocidade instantânea em todos os pontos:`,
            `\`s = s₀ + v · t\``,
            `- \`s\`: Posição final no instante t (em metros).`,
            `- \`s₀\`: Posição inicial onde o movimento começou a ser cronometrado.`,
            `- \`v\`: Velocidade escalar constante (em m/s). Se \`v > 0\`, o movimento é **progressivo** (a favor da orientação da trajetória); se \`v < 0\`, é **retrógrado**.`,
            `- \`t\`: Tempo decorrido (em segundos).`,
            `> **Dica de Fixação Galea (TDAH):** Pense em um trem elétrico no piloto automático em linha reta: a cada segundo que passa no relógio, ele avança rigorosamente a mesma distância!`
        ].join('\n\n')
    },

    5: {
        tipo: 'video-resumo',
        video: { titulo: 'Movimento Uniformemente Variado (MUV) e a Equação de Torricelli' },
        conteudo: [
            `## 📺 Guia da Videoaula: Aceleração Constante e Fórmulas do MUV`,
            `Assista ao vídeo demonstrando como a velocidade se modifica com aceleração uniforme. A seguir, consulte o resumo:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Aceleração Escalar (\`a\'):** Taxa de variação temporal da velocidade (\`a = Δv / Δt\`), medida em \`m/s²\`.`,
            `- **Função da Velocidade:** \`v = v₀ + a · t\`.`,
            `- **Função Horária do Espaço:** \`s = s₀ + v₀ · t + (a · t²) / 2\`.`,
            `- **Equação de Torricelli (Sem o Tempo):** Quando o enunciado não fornece nem pergunta o tempo: \`v² = v₀² + 2 · a · Δs\`.`,
            `> Conclua este resumo para liberar a gamificação na Lição 6!`
        ].join('\n\n')
    },

    6: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Aceleração no MU: Em um Movimento Uniforme (MU), a aceleração escalar do corpo é rigorosamente igual a:',
                    dica: 'No MU a velocidade é perfeitamente constante, logo não há variação de velocidade.',
                    template: 'No Movimento Uniforme (MU), a aceleração escalar é {lacuna}',
                    opcoes: ['nula (zero)', 'constante e positiva', 'infinita', 'crescente'],
                    respostaCorreta: 'nula (zero)',
                    explicacao: 'Como a velocidade no Movimento Uniforme não varia ao longo do tempo (Δv = 0), a aceleração é rigorosamente zero.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Características do MUV: Selecione todas as afirmativas verdadeiras sobre o Movimento Uniformemente Variado:',
                    dica: 'No MUV a aceleração é constante e diferente de zero, e a velocidade varia linearmente.',
                    opcoes: [
                        { texto: 'A aceleração escalar é constante e diferente de zero', correta: true },
                        { texto: 'A velocidade varia linearmente com o tempo (v = v₀ + a·t)', correta: true },
                        { texto: 'A Equação de Torricelli calcula grandezas sem depender do tempo', correta: true },
                        { texto: 'A posição varia com o tempo ao quadrado (parábola)', correta: true },
                        { texto: 'A velocidade permanece sempre a mesma no MUV', correta: false },
                        { texto: 'A aceleração cresce a cada segundo', correta: false }
                    ],
                    explicacao: 'No MUV a aceleração é fixa, gerando variação contínua da velocidade e variação quadrática na posição.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug da Função Horária: Localize o erro clássico de fórmula nesta equação horária do MUV:',
                    dica: 'Na função horária da posição do MUV, o termo da aceleração deve ser dividido por 2: (a·t²)/2!',
                    linhasCodigo: [
                        '1. Posição inicial: s₀ = 10 m, Velocidade inicial: v₀ = 5 m/s',
                        '2. Aceleração escalar constante: a = 4 m/s²',
                        '3. Função horária montada: s = 10 + 5·t + 4·t²',
                        '4. Esqueceram de dividir o termo de aceleração por 2 (o correto seria 2·t²)'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, escreveram 4·t² em vez de (4·t²)/2 = 2·t². A fórmula canônica exige a metade da aceleração: s = s₀ + v₀·t + (a·t²)/2.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Algoritmo de Torricelli: Ordene os passos para calcular a distância de frenagem de um carro usando Torricelli:',
                    dica: 'Identifique velocidades inicial e final (v=0), a desaceleração negativa e isole a distância Δs.',
                    itens: [
                        'Identificar a velocidade inicial v₀ e a velocidade final de parada v = 0',
                        'Determinar a taxa de desaceleração constante do veículo com sinal negativo',
                        'Substituir os valores na Equação de Torricelli: v² = v₀² + 2·a·Δs',
                        'Isolar algebricamente a distância de frenagem Δs até o repouso completo'
                    ],
                    ordemCorreta: [
                        'Identificar a velocidade inicial v₀ e a velocidade final de parada v = 0',
                        'Determinar a taxa de desaceleração constante do veículo com sinal negativo',
                        'Substituir os valores na Equação de Torricelli: v² = v₀² + 2·a·Δs',
                        'Isolar algebricamente a distância de frenagem Δs até o repouso completo'
                    ],
                    explicacao: 'A Equação de Torricelli resolve problemas de frenagem e colisão sem exigir o conhecimento do tempo decorrido.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Um carro parte do repouso (v₀ = 0) com aceleração constante de 3 m/s². Qual sua velocidade após 4 segundos?',
                    dica: 'Use a função da velocidade do MUV: v = v₀ + a · t = 0 + 3 · 4.',
                    template: 'Pela fórmula v = v₀ + a·t, a velocidade final após 4 s é de {lacuna} m/s',
                    opcoes: ['12', '7', '16', '24'],
                    respostaCorreta: '12',
                    explicacao: 'v = 0 + 3 m/s² · 4 s = 12 m/s (equivalente a 43,2 km/h).'
                }
            ]
        }
    },

    // --- BLOCO 3 (Aulas 7 a 9) ---
    7: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Interpretar gráficos cinemáticos (\`s × t\`, \`v × t\`) e explorar as propriedades da inclinação da reta e da área sob a curva.`,
            `### 1. A Geometria do Movimento`,
            `Gráficos físicos não são apenas desenhos; suas características geométricas possuem significados físicos exatos comprovados pelo cálculo diferencial e integral.`,
            `### 2. Gráfico da Posição versus Tempo (s × t)`,
            `- No **MU:** É uma reta inclinada. A inclinação (tangente do ângulo) representa a **velocidade escalar**.`,
            `- No **MUV:** É uma **parábola**. Se a concavidade for para cima, a aceleração é positiva (\`a > 0\`); para baixo, negativa (\`a < 0\`).`,
            `### 3. O Segredo da Área no Gráfico v × t`,
            `Em qualquer gráfico de **Velocidade contra Tempo (v × t)**, a **área geométrica** compreendida entre a curva e o eixo do tempo é numericamente igual ao **deslocamento escalar (\`Δs\`)** percorrido pelo móvel!`,
            `> **Dica de Fixação Galea (TDAH):** Lembre-se: no gráfico da velocidade, calcular a área debaixo da reta é o atalho mágico para descobrir quantos metros o carro andou sem precisar de fórmulas complicadas!`
        ].join('\n\n')
    },

    8: {
        tipo: 'video-resumo',
        video: { titulo: 'Queda Livre, Gravidade e o Experimento do Vácuo de Galileu' },
        conteudo: [
            `## 📺 Guia da Videoaula: Corpos em Queda Livre no Campo Gravitacional`,
            `Assista à demonstração da famosa pena e da bola de boliche caindo no vácuo com a mesma aceleração. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **A Descoberta de Galileu:** No vácuo (ausência de ar), todos os corpos caem exatamente com a mesma aceleração, independentemente de sua massa ou formato!`,
            `- **Aceleração da Gravidade (\`g\'):** Na superfície da Terra, \`g ≈ 9,8 m/s²\` (frequentemente aproximado para \`10 m/s²\` em exercícios escolares).`,
            `- **Equações da Queda Livre (partindo do repouso, \`v₀ = 0\'):**`,
            `  • Velocidade: \`v = g · t\`.`,
            `  • Altura de queda: \`h = (g · t²) / 2\`.`,
            `  • Torricelli: \`v² = 2 · g · h\`.`,
            `> Conclua este resumo para liberar a gamificação na Lição 9!`
        ].join('\n\n')
    },

    9: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - Queda Livre & Gráficos: Selecione todas as afirmações corretas sobre Queda Livre e cinemática gráfica:',
                    dica: 'Lembre-se da experiência de Galileu no vácuo e da propriedade de área no gráfico v×t!',
                    opcoes: [
                        { texto: 'No vácuo, corpos de massas diferentes caem juntos com o mesmo g', correta: true },
                        { texto: 'A área sob a curva no gráfico v×t equivale ao deslocamento Δs', correta: true },
                        { texto: 'A aceleração da gravidade na Terra vale aproximadamente 9,8 m/s²', correta: true },
                        { texto: 'No MUV, o gráfico s×t tem formato de parábola', correta: true },
                        { texto: 'No MU, o gráfico v×t é uma reta horizontal paralela ao eixo t', correta: true },
                        { texto: 'No vácuo, objetos mais pesados caem muito mais rápido', correta: false },
                        { texto: 'A área no gráfico s×t representa a aceleração', correta: false }
                    ],
                    explicacao: 'No vácuo despreza-se a resistência do ar e todos os corpos aceleram igualmente sob g ≈ 9,8 m/s². A área no gráfico v×t fornece o deslocamento Δs.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Propriedade Geométrica da Cinemática: Em qualquer gráfico de Velocidade contra Tempo (v × t), a área geométrica sob a curva é numericamente igual ao:',
                    dica: 'Essa propriedade permite calcular a distância percorrida sem precisar de fórmulas complexas.',
                    template: 'No gráfico v × t, a área sob a reta representa o {lacuna}',
                    opcoes: ['deslocamento (Δs)', 'tempo total', 'empuxo', 'peso'],
                    respostaCorreta: 'deslocamento (Δs)',
                    explicacao: 'A integral da velocidade no tempo fornece exatamente a variação da posição (deslocamento escalar Δs).'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug Aristotélico: Localize a linha que reproduz o erro histórico que Galileu desmentiu:',
                    dica: 'No vácuo, a massa NÃO altera a velocidade nem o tempo de queda dos corpos!',
                    linhasCodigo: [
                        '1. Experimento: Uma pena e uma esfera de chumbo são soltas de 10 m de altura',
                        '2. Ambiente: Câmara com vácuo total (sem qualquer molécula de ar)',
                        '3. Previsão aristotélica errada: A esfera de chumbo cairá 50x mais rápido que a pena',
                        '4. Resultado real: Ambos atingem o solo rigorosamente no mesmo milissegundo'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, afirma-se que o chumbo cairia mais rápido. Galileu provou que, na ausência de ar, todos os corpos caem juntos com aceleração g idêntica.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Lançamento Vertical: Ordene a trajetória de uma bola lançada verticalmente para cima até retornar à mão do lançador:',
                    dica: 'Inicie com velocidade máxima, desacelere até o repouso no ápice e acelere na descida.',
                    itens: [
                        'A bola sai da mão do lançador com velocidade vertical para cima máxima',
                        'A aceleração da gravidade atua para baixo reduzindo gradativamente a velocidade',
                        'No ponto mais alto da trajetória, a velocidade instantânea se anula (v = 0)',
                        'A bola inicia a queda livre acelerada retornando à mão com a mesma velocidade'
                    ],
                    ordemCorreta: [
                        'A bola sai da mão do lançador com velocidade vertical para cima máxima',
                        'A aceleração da gravidade atua para baixo reduzindo gradativamente a velocidade',
                        'No ponto mais alto da trajetória, a velocidade instantânea se anula (v = 0)',
                        'A bola inicia a queda livre acelerada retornando à mão com a mesma velocidade'
                    ],
                    explicacao: 'No lançamento vertical, o movimento de subida é uniformemente retardado e o de descida é uniformemente acelerado sob aceleração g constante.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Um objeto é solto do repouso (v₀ = 0) em queda livre na Terra (g = 10 m/s²). Qual sua velocidade após cair por 3 segundos?',
                    dica: 'Aplique v = g · t = 10 · 3.',
                    template: 'Pela fórmula v = g · t, a velocidade do corpo após 3 segundos de queda é de {lacuna} m/s',
                    opcoes: ['30', '15', '45', '100'],
                    respostaCorreta: '30',
                    explicacao: 'v = g · t => v = 10 m/s² · 3 s = 30 m/s (equivalente a 108 km/h).'
                }
            ]
        }
    },

    // --- BLOCO 4 (Aulas 10 a 12) ---
    10: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a Primeira Lei de Newton (Lei da Inércia), a tendência natural dos corpos e os referenciais inerciais.`,
            `### 1. O Pensamento Aristotélico vs Newtoniano`,
            `Durante quase dois milênios, acreditou-se na tese de Aristóteles de que um corpo só permaneceria em movimento se uma força o estivesse empurrando continuamente. Isaac Newton quebrou esse paradigma ao publicar os *Principia Mathematica* em 1687.`,
            `### 2. O Enunciado da Primeira Lei de Newton`,
            `> "Todo corpo continua em seu estado de repouso ou de movimento retilíneo uniforme (MRU), a menos que seja compelido a mudar esse estado por forças aplicadas sobre ele."`,
            `- **Inércia:** É a propriedade intrínseca da matéria de resistir a qualquer alteração em seu estado de movimento. A medida quantitativa da inércia de um corpo é a sua **massa (\`m\`)**.`,
            `- Se a força resultante sobre um objeto for zero (\`F_res = 0\`), ele permanece parado se estava em repouso, ou continua se movendo em linha reta com velocidade constante eternamente!`,
            `### 3. Exemplo Cotidiano: O Cinto de Segurança`,
            `Quando um carro freia bruscamente, os passageiros são arremessados para frente não por uma "força fantasma", mas pela sua própria **inércia**, que tenta manter a velocidade que já possuíam!`,
            `> **Dica de Fixação Galea (TDAH):** Pense na inércia como a "preguiça" da matéria: se está deitada no sofá (repouso), quer continuar deitada; se está correndo na esteira (movimento), quer continuar correndo em linha reta!`
        ].join('\n\n')
    },

    11: {
        tipo: 'video-resumo',
        video: { titulo: 'Segunda Lei de Newton: O Princípio Fundamental da Dinâmica (F = m·a)' },
        conteudo: [
            `## 📺 Guia da Videoaula: Força Resultante, Massa e Aceleração`,
            `Assista ao vídeo demonstrando a aplicação da 2ª Lei em sistemas de blocos. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **O Princípio Fundamental da Dinâmica:** A aceleração que um corpo adquire é diretamente proporcional à força resultante que atua sobre ele e inversamente proporcional à sua massa:`,
            `  \`F_res = m · a\``,
            `- **Unidade de Força no SI:** O **Newton (\`N\`)**. Um Newton é a força necessária para acelerar uma massa de 1 quilograma a 1 m/s² (\`1 N = 1 kg · m/s²\`).`,
            `- **Natureza Vetorial:** A aceleração gerada tem exatamente a mesma direção e o mesmo sentido da força resultante.`,
            `> Conclua este resumo para liberar a gamificação na Lição 12!`
        ].join('\n\n')
    },

    12: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Segunda Lei de Newton: Calcule a força resultante necessária para acelerar um bloco de 5 kg com aceleração de 4 m/s²:',
                    dica: 'Aplique o Princípio Fundamental da Dinâmica: F = m · a (multiplique a massa pela aceleração).',
                    template: 'Pela Segunda Lei de Newton (F = m·a), a intensidade da força resultante é {lacuna} N',
                    opcoes: ['20', '9', '1', '40'],
                    respostaCorreta: '20',
                    explicacao: 'F = m · a => F = 5 kg · 4 m/s² = 20 N (Newtons).'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Primeira e Segunda Leis: Selecione todas as afirmações fisicamente verdadeiras sobre Dinâmica:',
                    dica: 'Lembre-se do conceito de inércia e da relação vetorial entre força resultante e aceleração.',
                    opcoes: [
                        { texto: 'A inércia de um corpo é quantificada pela sua massa (m)', correta: true },
                        { texto: 'Se a força resultante for nula, o corpo fica em repouso ou MRU', correta: true },
                        { texto: 'A aceleração gerada tem a mesma direção e sentido da força resultante', correta: true },
                        { texto: '1 Newton equivale a 1 kg · m/s²', correta: true },
                        { texto: 'Um corpo precisa de força para continuar em movimento no vácuo', correta: false },
                        { texto: 'Massa e peso são sinônimos com a mesma unidade', correta: false }
                    ],
                    explicacao: 'A 1ª Lei de Newton mostra que movimento retilíneo uniforme dispensa força contínua. A aceleração obedece F_res = m·a.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Unidades no SI: Localize a linha onde esqueceram de converter a massa de gramas para quilogramas:',
                    dica: 'Na Segunda Lei de Newton (F = m·a), a massa deve ser obrigatoriamente expressa em quilogramas (kg)!',
                    linhasCodigo: [
                        '1. Objeto acelerado: bolinha de tênis com massa m = 500 g',
                        '2. Aceleração medida: a = 2 m/s²',
                        '3. Cálculo com unidade errada: F = 500 · 2 = 1000 N',
                        '4. Esqueceram de converter 500 g para 0,5 kg (a força real é apenas 1 N!)'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, multiplicaram 500 g direto sem converter para kg. 500 g = 0,5 kg, portanto F = 0,5 · 2 = 1 N, e não 1000 N!'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Diagrama de Corpo Livre: Ordene o processo canônico para calcular a aceleração de um bloco:',
                    dica: 'Desenhe as forças, some os vetores para achar a força resultante e divida pela massa.',
                    itens: [
                        'Isolar o corpo e desenhar todas as forças que atuam sobre ele (peso, normal, tração)',
                        'Calcular a soma vetorial de todas as forças para determinar a Força Resultante',
                        'Inserir o valor da massa em quilogramas na equação fundamental F = m·a',
                        'Calcular a aceleração resultante com seu módulo, direção e sentido'
                    ],
                    ordemCorreta: [
                        'Isolar o corpo e desenhar todas as forças que atuam sobre ele (peso, normal, tração)',
                        'Calcular a soma vetorial de todas as forças para determinar a Força Resultante',
                        'Inserir o valor da massa em quilogramas na equação fundamental F = m·a',
                        'Calcular a aceleração resultante com seu módulo, direção e sentido'
                    ],
                    explicacao: 'O método formal de isolamento de corpos e cálculo vetorial é a base de toda a mecânica clássica newtoniana.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Um passageiro é projetado para a frente quando o ônibus freia bruscamente. Essa tendência decorre da sua:',
                    dica: 'A propriedade da matéria de resistir a mudanças de velocidade é a...',
                    template: 'O passageiro continua em movimento para a frente devido à sua {lacuna}',
                    opcoes: ['inércia', 'gravidade', 'densidade', 'carga'],
                    respostaCorreta: 'inércia',
                    explicacao: 'Pela 1ª Lei de Newton, os corpos tendem por inércia a manter sua velocidade vetorial constante.'
                }
            ]
        }
    },

    // --- BLOCO 5 (Aulas 13 a 15) ---
    13: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a Terceira Lei de Newton (Ação e Reação), a interação mútua de pares de forças e a impossibilidade de forças isoladas no universo.`,
            `### 1. Forças São Sempre Interações aos Pares`,
            `Uma força nunca existe sozinha no universo; forças são sempre o resultado da interação mútua entre dois corpos.`,
            `### 2. O Enunciado da Terceira Lei de Newton`,
            `> "A toda ação sempre se opõe uma reação de igual intensidade e mesma direção, mas em sentidos contrários."`,
            `### 3. As 4 Regras de Ouro do Par Ação-Reação`,
            `1. Possuem rigorosamente a **mesma intensidade** (módulo).`,
            `2. Atuam na **mesma direção** (ex.: horizontal).`,
            `3. Apontam em **sentidos opostos** (uma para a direita, outra para a esquerda).`,
            `4. **REGRA CRUCIAL:** Atuam em **CORPOS DISTINTOS**! Por isso, o par ação e reação **NUNCA se anula mutuamente**!`,
            `### 4. Aplicações Práticas`,
            `- **Como Caminhamos:** Nosso pé empurra o chão para trás (ação); o chão empurra nosso pé para frente (reação).`,
            `- **Foguetes no Espaço:** O foguete ejeta gases quentes para trás com alta velocidade; os gases empurram o foguete para a frente, mesmo no vácuo absoluto!`,
            `> **Dica de Fixação Galea (TDAH):** Lembre-se: você não pode socar a parede sem que a parede devolva exatamente a mesma força na sua mão!`
        ].join('\n\n')
    },

    14: {
        tipo: 'video-resumo',
        video: { titulo: 'Força Peso vs Força Normal: Diferenças Fundamentais' },
        conteudo: [
            `## 📺 Guia da Videoaula: Força Gravitacional e Contato de Sustentação`,
            `Assista ao vídeo desfazendo o mito de que o Peso e a Normal são um par ação-reação. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Força Peso (\`P = m · g\'):** Força de atração gravitacional que o planeta Terra exerce sobre a massa do corpo (aponta sempre para o centro da Terra). A reação do peso reside no centro da Terra!`,
            `- **Força Normal (\`N\'):** Força de compressão e sustentação exercida pelas superfícies de contato, atuando sempre **perpendicularmente (a 90º)** à superfície de apoio.`,
            `- **Por que Peso e Normal NÃO são Ação e Reação:** Porque ambas atuam sobre o **mesmo corpo** (o bloco), enquanto pares de ação-reação atuam sempre em corpos distintos!`,
            `> Conclua este resumo para liberar a gamificação na Lição 15!`
        ].join('\n\n')
    },

    15: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - Terceira Lei & Pares de Forças: Selecione todas as afirmações fisicamente VERDADEIRAS sobre as Leis de Newton:',
                    dica: 'Lembre-se: o par Ação e Reação atua sempre em corpos diferentes e nunca se anula!',
                    opcoes: [
                        { texto: 'O par ação e reação atua em corpos distintos e nunca se anula', correta: true },
                        { texto: 'Ao caminhar, o pé empurra o chão para trás e o chão nos move para frente', correta: true },
                        { texto: 'Força Peso e Força Normal não formam par de ação e reação', correta: true },
                        { texto: 'A unidade de medida de força no SI é o Newton (N)', correta: true },
                        { texto: 'A reação da força peso de um objeto está no centro da Terra', correta: true },
                        { texto: 'Ação e reação se anulam porque atuam no mesmo corpo', correta: false },
                        { texto: 'Foguetes não conseguem acelerar no vácuo por não ter ar', correta: false }
                    ],
                    explicacao: 'A 3ª Lei de Newton estabelece que forças mútuas atuam em corpos diferentes com mesma intensidade e sentidos opostos. Por estarem em corpos distintos, nunca se equilibram entre si.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Sentido das Forças no Par: As forças que compõem o par ação-reação possuem mesma intensidade, mesma direção, mas atuam em sentidos:',
                    dica: 'Se uma força aponta para o norte, sua reação aponta necessariamente para o sul.',
                    template: 'O par de forças de ação e reação atua sempre em sentidos {lacuna}',
                    opcoes: ['opostos', 'iguais', 'perpendiculares', 'convergentes'],
                    respostaCorreta: 'opostos',
                    explicacao: 'A toda ação corresponde uma reação de mesma intensidade e direção, porém com sentido rigorosamente oposto (sentidos contrários).'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug do Mito Peso vs Normal: Localize a linha que reproduz o erro clássico sobre Peso e Normal:',
                    dica: 'Pares ação-reação atuam sempre em CORPOS DISTINTOS. Peso e Normal atuam sobre o mesmo bloco!',
                    linhasCodigo: [
                        '1. Um livro repousa estático sobre uma mesa de estudos',
                        '2. Força da gravidade da Terra puxa o livro para baixo (Peso)',
                        '3. Força de sustentação da mesa empurra o livro para cima (Normal)',
                        '4. Afirmação incorreta: O Peso e a Normal formam um par de ação e reação da 3ª Lei'
                    ],
                    linhaBug: 3,
                    explicacao: 'A linha 4 contém o erro clássico. Peso e Normal atuam sobre o mesmo corpo (o livro) e têm origens físicas diferentes (gravitacional e eletromagnética de contato).'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Propulsão de Foguete: Ordene o mecanismo físico da Terceira Lei que permite a um foguete acelerar no vácuo do espaço:',
                    dica: 'Combustão expele gás para trás, o gás reage empurrando a câmara para a frente.',
                    itens: [
                        'A câmara de combustão gera alta pressão e expele gases aquecidos para trás',
                        'Força de Ação: O bocal do motor empurra os gases em alta velocidade para fora',
                        'Força de Reação: Os gases ejetados empurram o foguete para a frente com força idêntica',
                        'O foguete acelera no espaço mesmo no vácuo absoluto sem precisar de atmosfera'
                    ],
                    ordemCorreta: [
                        'A câmara de combustão gera alta pressão e expele gases aquecidos para trás',
                        'Força de Ação: O bocal do motor empurra os gases em alta velocidade para fora',
                        'Força de Reação: Os gases ejetados empurram o foguete para a frente com força idêntica',
                        'O foguete acelera no espaço mesmo no vácuo absoluto sem precisar de atmosfera'
                    ],
                    explicacao: 'A propulsão a jato é puramente baseada na conservação da quantidade de movimento e na Terceira Lei de Newton.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: A força de sustentação exercida por superfícies de apoio atua sempre perpendicularmente (a 90º). Trata-se da Força:',
                    dica: 'Em matemática e física, "normal" é sinônimo de ortogonal ou perpendicular.',
                    template: 'A força de contato que sustenta corpos apoiados é a Força {lacuna}',
                    opcoes: ['Normal', 'Peso', 'Atrito', 'Elástica'],
                    respostaCorreta: 'Normal',
                    explicacao: 'A Força Normal (N) surge da repulsão eletromagnética entre os elétrons das superfícies em contato, agindo a 90º da superfície.'
                }
            ]
        }
    },

    // --- BLOCO 6 (Aulas 16 a 18) ---
    16: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a força de atrito estático e cinético, o coeficiente de atrito (\`μ\`) e o papel do atrito no cotidiano.`,
            `### 1. As Rugosidades Microscópicas`,
            `Mesmo superfícies que parecem perfeitamente polidas como vidro ou metal possuem picos e vales microscópicos. O atrito surge da colisão e solda a frio dessas microrrugosidades em contato.`,
            `### 2. Atrito Estático vs Atrito Cinético`,
            `- **Atrito Estático (\`f_at_estático ≤ μ_e · N\'):** Atua quando os corpos estão em repouso relativo, impedindo o início do deslizamento. Seu valor varia de zero até um limite máximo (*destacamento*).`,
            `- **Atrito Cinético/Dinâmico (\`f_at_cinético = μ_c · N\'):** Atua durante o deslizamento contínuo. Possui valor constante.`,
            `- **Regra Universal:** O coeficiente de atrito estático é sempre maior que o cinético (\`μ_e > μ_c\`). Por isso, colocar um guarda-roupa pesado em movimento exige mais força do que mantê-lo deslizando depois que começou a andar!`,
            `> **Dica de Fixação Galea (TDAH):** Pense nos freios ABS do carro: eles evitam que as rodas travem para que o pneu use o atrito estático (mais forte), parando o carro muito mais rápido do que se arrastasse no asfalto!`
        ].join('\n\n')
    },

    17: {
        tipo: 'video-resumo',
        video: { titulo: 'Trabalho Mecânico de uma Força Constante (W = F·d·cos θ)' },
        conteudo: [
            `## 📺 Guia da Videoaula: O Conceito Físico de Trabalho e o Joule`,
            `Assista ao vídeo diferenciando esforço físico biológico de trabalho mecânico no sentido estrito da Física. A seguir, consulte a síntese:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Definição de Trabalho (\`W\` ou \`τ\'):** É a medida da transferência ou transformação de energia provocada por uma força ao longo de um deslocamento:`,
            `  \`W = F · d · cos(θ)\``,
            `- Onde \`θ\` é o ângulo formado entre a reta da força e a direção do deslocamento.`,
            `- **Casos Especiais Importantes:**`,
            `  • \`θ = 0º\` (Mesmo sentido do movimento): \`cos(0º) = 1\` → **Trabalho Motor** (favorece o movimento).`,
            `  • \`θ = 180º\` (Sentido oposto, como atrito): \`cos(180º) = -1\` → **Trabalho Resistente** (consome energia).`,
            `  • \`θ = 90º\` (Perpendicular): \`cos(90º) = 0\` → **Trabalho Nulo**! Forças perpendiculares ao movimento (como a Normal em solo horizontal) não realizam trabalho.`,
            `- **Unidade no SI:** O **Joule (\`J = N · m\`)**.`,
            `> Conclua este resumo para liberar a gamificação na Lição 18!`
        ].join('\n\n')
    },

    18: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Trabalho de Força Constante: Calcule o trabalho realizado por uma força de 50 N que desloca uma caixa por 4 metros no mesmo sentido:',
                    dica: 'Como o ângulo é 0º, cos(0º) = 1. Multiplique W = F · d.',
                    template: 'O trabalho mecânico realizado pela força é igual a {lacuna} Joules (J)',
                    opcoes: ['200', '54', '12.5', '50'],
                    respostaCorreta: '200',
                    explicacao: 'W = F · d · cos(0º) => W = 50 N · 4 m · 1 = 200 Joules (J).'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Propriedades do Atrito e Trabalho: Selecione todas as afirmativas fisicamente verdadeiras:',
                    dica: 'Lembre-se que o atrito estático é maior que o cinético e forças a 90º têm trabalho nulo!',
                    opcoes: [
                        { texto: 'O coeficiente de atrito estático é maior que o cinético (μ_e > μ_c)', correta: true },
                        { texto: 'Uma força perpendicular ao deslocamento (θ = 90º) realiza trabalho nulo', correta: true },
                        { texto: 'No SI, a unidade oficial de trabalho e energia é o Joule (J = N·m)', correta: true },
                        { texto: 'A força de atrito cinético atua em sentido oposto ao deslizamento', correta: true },
                        { texto: 'O atrito estático é sempre constante independente da força aplicada', correta: false },
                        { texto: 'Forças normais realizam trabalho motor positivo em planos horizontais', correta: false }
                    ],
                    explicacao: 'Como cos(90º) = 0, forças perpendiculares ao movimento não realizam trabalho. O atrito estático cresce até o limite máximo μ_e·N.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug do Trabalho Perpendicular: Localize a linha que calculou trabalho com o cosseno incorreto:',
                    dica: 'Quando a força é perpendicular ao movimento (θ = 90º), cos(90º) = 0, portanto o trabalho é zero!',
                    linhasCodigo: [
                        '1. Uma pessoa carrega uma mala de 20 N andando em linha reta horizontal por 10 m',
                        '2. A força para segurar a mala aponta verticalmente para cima (θ = 90º)',
                        '3. Cálculo com erro conceitual: W = 20 N · 10 m = 200 J de trabalho mecânico',
                        '4. Esqueceram que cos(90º) = 0 e que o trabalho mecânico dessa força é rigorosamente 0 J!'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, calcularam 200 J. Como a força para cima é perpendicular ao deslocamento horizontal, cos(90º) = 0 e o trabalho mecânico é nulo (0 J).'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Dinâmica do Atrito: Ordene os estados da força de atrito ao empurrar um móvel pesado até ele deslizar:',
                    dica: 'Comece com força pequena equilibrada pelo atrito estático, atinja o pico máximo e veja a força cair no deslizamento.',
                    itens: [
                        'Força aplicada leve: o atrito estático se iguala à força mantendo o bloco parado',
                        'Força aumenta progressivamente até atingir o atrito estático máximo de destaque',
                        'O bloco rompe o repouso e a resistência cai para o atrito cinético (dinâmico)',
                        'O bloco desliza continuamente com atrito cinético constante e menor que o estático'
                    ],
                    ordemCorreta: [
                        'Força aplicada leve: o atrito estático se iguala à força mantendo o bloco parado',
                        'Força aumenta progressivamente até atingir o atrito estático máximo de destaque',
                        'O bloco rompe o repouso e a resistência cai para o atrito cinético (dinâmico)',
                        'O bloco desliza continuamente com atrito cinético constante e menor que o estático'
                    ],
                    explicacao: 'O atrito estático varia de 0 até μ_e·N. Ao iniciar o movimento, o atrito cinético assume valor estável e menor (μ_c·N).'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: No Sistema Internacional de Unidades (SI), a unidade padrão de Trabalho e Energia é o:',
                    dica: 'Homenageia o físico britânico James Prescott Joule.',
                    template: 'A unidade padrão de Trabalho Mecânico e Energia no SI é o {lacuna}',
                    opcoes: ['Joule (J)', 'Watt (W)', 'Newton (N)', 'Pascal (Pa)'],
                    respostaCorreta: 'Joule (J)',
                    explicacao: '1 Joule (J) é o trabalho realizado pela força de 1 Newton ao deslocar um objeto por 1 metro em sua direção.'
                }
            ]
        }
    },

    // --- BLOCO 7 (Aulas 19 a 21) ---
    19: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a Potência Mecânica como a taxa temporal de realização de trabalho e as unidades Watt e Cavalo-Vapor.`,
            `### 1. Não Basta Fazer Força: O Tempo Importa`,
            `Dois guindastes podem levantar a mesma carga de 10 toneladas até o 10º andar de um edifício, realizando rigorosamente o mesmo trabalho mecânico. Porém, se o primeiro leva 10 segundos e o segundo leva 10 minutos, o primeiro é incomparavelmente mais **potente**.`,
            `### 2. A Fórmula da Potência Média`,
            `\`Potência = Trabalho / Intervalo de Tempo\` (\`P = W / Δt\`)`,
            `- **Unidade no SI:** O **Watt (\`W = J/s\`)**, batizado em homenagem a James Watt, aprimorador da máquina a vapor. Um Watt representa a realização de 1 Joule de trabalho a cada 1 segundo.`,
            `- **Em Veículos:** Utiliza-se frequentemente o Cavalo-Vapor (\`1 cv ≈ 735,5 W\`) ou Horsepower (\`1 HP ≈ 746 W\`).`,
            `> **Dica de Fixação Galea (TDAH):** Pense na potência como a velocidade com que a energia é gasta ou gerada: subir uma escada correndo exige a mesma energia que subir andando, mas o seu corpo opera numa potência muito mais alta!`
        ].join('\n\n')
    },

    20: {
        tipo: 'video-resumo',
        video: { titulo: 'Energia Cinética e o Teorema do Trabalho e Energia Cinética (TEC)' },
        conteudo: [
            `## 📺 Guia da Videoaula: A Energia do Movimento`,
            `Assista ao vídeo demonstrando por que a velocidade tem impacto quadrático na energia cinética. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Energia Cinética (\`Ec\'):** É a modalidade de energia associada ao estado de movimento de uma massa:`,
            `  \`Ec = (m · v²) / 2\``,
            `- **O Efeito Quadrático da Velocidade:** Como a velocidade está elevada ao quadrado (\`v²\`), se você dobrar a velocidade de um automóvel (de 40 km/h para 80 km/h), a sua energia cinética de impacto se multiplica por **4 vezes**! Se triplicar, multiplica por **9 vezes**!`,
            `- **Teorema da Energia Cinética (TEC):** O trabalho total da força resultante sobre um corpo é igual à variação de sua energia cinética: \`W_res = ΔEc = Ec_final - Ec_inicial\`.`,
            `> Conclua este resumo para liberar a gamificação na Lição 21!`
        ].join('\n\n')
    },

    21: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - Potência & Energia Cinética: Selecione todas as afirmações corretas sobre Potência, Trabalho e Energia Cinética:',
                    dica: 'Lembre-se da unidade Watt (J/s) e do efeito quadrático da velocidade na energia cinética (v²)!',
                    opcoes: [
                        { texto: 'No SI, a unidade oficial de potência é o Watt (W = J/s)', correta: true },
                        { texto: 'Se a velocidade de um carro dobrar, sua energia cinética quadruplica', correta: true },
                        { texto: 'A energia cinética é calculada por Ec = (m·v²)/2', correta: true },
                        { texto: 'O trabalho da força resultante equivale à variação da energia cinética', correta: true },
                        { texto: '1 Joule equivale a 1 Newton multiplicado por 1 metro', correta: true },
                        { texto: 'Se a velocidade de um carro dobrar, a energia cinética apenas dobra', correta: false },
                        { texto: 'A potência é calculada multiplicando o trabalho pelo tempo', correta: false }
                    ],
                    explicacao: 'Potência é a taxa de realização de trabalho por unidade de tempo (W = J/s). Como a energia cinética depende de v², dobrar a velocidade quadruplica a energia associada ao movimento.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Energia de Movimento: A modalidade de energia associada diretamente à velocidade e à massa de um corpo em deslocamento é a Energia:',
                    dica: 'Do grego "kinesis", que significa movimento.',
                    template: 'A modalidade de energia ligada à velocidade dos corpos é a Energia {lacuna}',
                    opcoes: ['Cinética', 'Potencial', 'Térmica', 'Elástica'],
                    respostaCorreta: 'Cinética',
                    explicacao: 'A Energia Cinética (Ec = m·v²/2) quantifica a capacidade de um corpo em movimento de realizar trabalho.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug da Velocidade Quadrática: Localize o erro conceitual grave neste cálculo de energia cinética:',
                    dica: 'A velocidade na fórmula da energia cinética DEVE estar elevada ao quadrado (v²)!',
                    linhasCodigo: [
                        '1. Veículo com massa m = 1000 kg e velocidade v = 20 m/s',
                        '2. Cálculo com fórmula mutilada: Ec = (m · v) / 2',
                        '3. Resultado obtido: Ec = (1000 · 20) / 2 = 10.000 J',
                        '4. Esqueceram de elevar v ao quadrado (o valor real com v² é 200.000 J!)'
                    ],
                    linhaBug: 1,
                    explicacao: 'Na linha 2, esqueceram de elevar a velocidade ao quadrado (v²). A fórmula correta é Ec = (m · v²) / 2, gerando 200.000 Joules.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Cálculo de Potência Média: Ordene os passos para determinar a potência mecânica desenvolvida por um elevador de carga:',
                    dica: 'Determine a força peso da carga, calcule o trabalho na subida, cronometre o tempo e divida.',
                    itens: [
                        'Calcular o peso total da carga a ser elevada: P = m · g',
                        'Calcular o trabalho mecânico realizado na subida vertical: W = P · h',
                        'Cronometrar o intervalo de tempo decorrido Δt para atingir o topo',
                        'Dividir o trabalho pelo tempo para obter a potência desenvolvida em Watts'
                    ],
                    ordemCorreta: [
                        'Calcular o peso total da carga a ser elevada: P = m · g',
                        'Calcular o trabalho mecânico realizado na subida vertical: W = P · h',
                        'Cronometrar o intervalo de tempo decorrido Δt para atingir o topo',
                        'Dividir o trabalho pelo tempo para obter a potência desenvolvida em Watts'
                    ],
                    explicacao: 'A potência mecânica média mede a velocidade de transferência ou conversão de energia: Pot = W / Δt.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Um guindaste realiza um trabalho de 6.000 Joules em apenas 10 segundos. Sua potência média desenvolvida é de:',
                    dica: 'Potência = Trabalho / Tempo = 6000 J / 10 s.',
                    template: 'A potência do guindaste é igual a {lacuna} Watts (W)',
                    opcoes: ['600', '60.000', '60', '5.990'],
                    respostaCorreta: '600',
                    explicacao: 'Potência = 6.000 J / 10 s = 600 W (Watts).'
                }
            ]
        }
    },

    // --- BLOCO 8 (Aulas 22 a 24) ---
    22: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a Energia Potencial Gravitacional (\`m·g·h\`), a Energia Potencial Elástica (\`k·x²/2\`) e as forças conservativas.`,
            `### 1. O que é Energia Potencial`,
            `Energia potencial é a energia que se encontra "armazenada" em um sistema físico devido à posição ou configuração de seus elementos, pronta para ser convertida em energia cinética (movimento).`,
            `### 2. Energia Potencial Gravitacional (\`Epg\`)`,
            `Armazenada quando elevamos um corpo a uma certa altura \`h\` contra a atração do campo gravitacional:`,
            `\`Epg = m · g · h\``,
            `- Depende exclusivamente da massa \`m\`, da aceleração da gravidade \`g\` e da altura \`h\` em relação a um plano de referência arbitrário.`,
            `### 3. Energia Potencial Elástica (\`Epe\`)`,
            `Armazenada ao deformar (esticar ou comprimir) uma mola ou elástico de constante elástica \`k\` por uma deformação \`x\`:`,
            `\`Epe = (k · x²) / 2\``,
            `> **Dica de Fixação Galea (TDAH):** Pense na energia potencial como uma flecha puxada no arco: quanto mais você puxa a corda (deformação x), mais energia fica guardada esperando ser solta!`
        ].join('\n\n')
    },

    23: {
        tipo: 'video-resumo',
        video: { titulo: 'Conservação da Energia Mecânica em Sistemas Conservativos' },
        conteudo: [
            `## 📺 Guia da Videoaula: A Energia Nunca se Perde, Transforma-se!`,
            `Assista ao vídeo analisando a montanha-russa ideal. A seguir, consulte o resumo essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Energia Mecânica Total (\`Em\'):** É a soma de todas as energias cinéticas e potenciais do sistema: \`Em = Ec + Ep\`.`,
            `- **Princípio da Conservação:** Na ausência de forças dissipativas (como atrito com o solo ou resistência do ar), a Energia Mecânica de um sistema permanece rigorosamente **constante** em todos os pontos da trajetória:`,
            `  \`Em_inicial = Em_final\``,
            `- Na montanha-russa: no ponto mais alto, a energia potencial é máxima e a cinética é mínima; no ponto mais baixo, toda a energia potencial se converteu em velocidade e energia cinética máxima!`,
            `> Conclua este resumo para liberar a grande gamificação de encerramento da Física!`
        ].join('\n\n')
    },

    24: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Conservação Mecânica: Em um sistema conservativo sem atrito, se um corpo perde 500 J de energia potencial ao cair, sua energia cinética ganha exatamente:',
                    dica: 'O Princípio da Conservação da Energia Mecânica afirma que toda energia potencial perdida é convertida em energia cinética.',
                    template: 'Pelo princípio da conservação da energia mecânica, o ganho de energia cinética é de {lacuna} J',
                    opcoes: ['500', '250', '1000', '0'],
                    respostaCorreta: '500',
                    explicacao: 'Em sistemas conservativos, a energia mecânica total se conserva (ΔEm = 0). Logo, -500 J em Ep gera +500 J em Ec.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Princípios da Energia Mecânica: Selecione todas as afirmações fisicamente verdadeiras sobre conservação de energia:',
                    dica: 'A energia mecânica é Em = Ec + Ep e permanece rigorosamente constante se não houver atrito.',
                    opcoes: [
                        { texto: 'A energia mecânica total é a soma da energia cinética com a potencial (Em = Ec + Ep)', correta: true },
                        { texto: 'Na ausência de forças dissipativas, a energia mecânica se conserva em qualquer ponto', correta: true },
                        { texto: 'No ponto mais alto de uma queda livre, a energia potencial é máxima e a cinética é nula', correta: true },
                        { texto: 'A energia nunca é criada do nada nem destruída; apenas se transforma', correta: true },
                        { texto: 'Em uma montanha-russa ideal, a energia mecânica dobra na descida', correta: false },
                        { texto: 'O atrito conserva 100% da energia mecânica', correta: false }
                    ],
                    explicacao: 'O Princípio da Conservação da Energia é uma das leis fundamentais do cosmos: a energia transforma-se entre diferentes modalidades mantendo o total invariante.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug da Conservação: Localize a linha que afirma incorretamente que energia mecânica é criada do nada:',
                    dica: 'Em uma queda livre ideal, a energia mecânica total permanece rigorosamente IGUAL em qualquer instante!',
                    linhasCodigo: [
                        '1. Uma pedra de 2 kg é solta do repouso no alto de uma torre com Em = 1000 J',
                        '2. Na metade da queda, metade da energia potencial vira cinética: Ep = 500 J e Ec = 500 J',
                        '3. Afirmação falsa: No solo, a energia mecânica total da pedra atinge 2000 J porque a velocidade aumentou',
                        '4. Correção: A energia mecânica total no solo continua sendo exatamente 1000 J (apenas agora 100% cinética)'
                    ],
                    linhaBug: 2,
                    explicacao: 'A linha 3 erra gravemente. A velocidade aumenta porque a energia potencial foi convertida em cinética, mas a energia mecânica total continua rigorosamente 1000 J.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Montanha-Russa Ideal: Ordene a conversão contínua de energias no percurso de um carrinho sem atrito:',
                    dica: 'Inicie no topo mais alto com energia potencial máxima, desça convertendo em cinética e retorne.',
                    itens: [
                        'No topo da colina mais alta: Energia Potencial Gravitacional máxima e Cinética nula',
                        'Descida íngreme: Energia Potencial é convertida continuamente em Energia Cinética',
                        'No vale mais baixo da pista: Velocidade máxima e Energia Cinética máxima',
                        'Subida do looping: Energia Cinética se reconverte em Potencial conservando a soma Em'
                    ],
                    ordemCorreta: [
                        'No topo da colina mais alta: Energia Potencial Gravitacional máxima e Cinética nula',
                        'Descida íngreme: Energia Potencial é convertida continuamente em Energia Cinética',
                        'No vale mais baixo da pista: Velocidade máxima e Energia Cinética máxima',
                        'Subida do looping: Energia Cinética se reconverte em Potencial conservando a soma Em'
                    ],
                    explicacao: 'A montanha-russa converte ciclicamente energia potencial gravitacional em energia cinética mantendo a energia mecânica constante.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Grande Desafio Final de Física: A modalidade de energia armazenada em uma mola ou elástico comprimido é a Energia Potencial:',
                    dica: 'Calculada por Epe = (k · x²) / 2.',
                    template: 'A energia armazenada na deformação de molas e elásticos é a Energia Potencial {lacuna}',
                    opcoes: ['Elástica', 'Gravitacional', 'Nuclear', 'Térmica'],
                    respostaCorreta: 'Elástica',
                    explicacao: 'Parabéns! A Energia Potencial Elástica guarda trabalho mecânico em sistemas deformáveis. Você concluiu com maestria a trilha de Física!'
                }
            ]
        }
    }
};
