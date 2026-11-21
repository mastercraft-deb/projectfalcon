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
                    enunciado: 'Selecione todas as afirmações fisicamente CORRETAS sobre grandezas e o método científico:',
                    dica: 'Diferencie grandezas escalares de vetoriais e lembre-se das unidades oficiais do SI (m, kg, s)!',
                    opcoes: [
                        { texto: 'No SI, a unidade oficial de comprimento é o metro (m)', correta: true },
                        { texto: 'Força e velocidade são grandezas vetoriais', correta: true },
                        { texto: '72 km/h equivale exatamente a 20 m/s', correta: true },
                        { texto: 'Massa e tempo são grandezas puramente escalares', correta: true },
                        { texto: 'O método científico exige experimentos controlados e falseáveis', correta: true },
                        { texto: 'No SI, a unidade oficial de massa é a tonelada', correta: false },
                        { texto: 'Grandezas escalares necessitam de direção e sentido', correta: false },
                        { texto: 'Para converter m/s em km/h deve-se dividir por 3,6', correta: false }
                    ],
                    explicacao: 'No SI o comprimento padrão é metro (m) e a massa é kg. Força e velocidade exigem módulo, direção e sentido (vetoriais). Para converter m/s para km/h multiplica-se por 3,6.'
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
                    enunciado: 'Em um Movimento Uniforme (MU), a aceleração escalar do corpo é rigorosamente igual a:',
                    dica: 'No MU a velocidade é perfeitamente constante, logo não há variação de velocidade.',
                    template: 'No Movimento Uniforme (MU), a aceleração escalar é {lacuna}',
                    opcoes: ['nula (zero)', 'constante e positiva', 'infinita', 'crescente', 'negativa'],
                    respostaCorreta: 'nula (zero)',
                    explicacao: 'Como a velocidade no Movimento Uniforme não varia ao longo do tempo (Δv = 0), a aceleração resultante é rigorosamente zero.'
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
                    enunciado: 'Selecione todas as afirmações corretas sobre Queda Livre e gráficos cinemáticos:',
                    dica: 'Lembre-se da experiência de Galileu no vácuo e da propriedade de área no gráfico v×t!',
                    opcoes: [
                        { texto: 'No vácuo, corpos de massas diferentes caem juntos com o mesmo g', correta: true },
                        { texto: 'A área sob a curva no gráfico v×t equivale ao deslocamento Δs', correta: true },
                        { texto: 'A aceleração da gravidade na Terra vale aproximadamente 9,8 m/s²', correta: true },
                        { texto: 'No MUV, o gráfico s×t tem formato de parábola', correta: true },
                        { texto: 'No MU, o gráfico v×t é uma reta horizontal paralela ao eixo t', correta: true },
                        { texto: 'No vácuo, objetos mais pesados caem muito mais rápido', correta: false },
                        { texto: 'A área no gráfico s×t representa a aceleração', correta: false },
                        { texto: 'A gravidade depende da cor do objeto que cai', correta: false }
                    ],
                    explicacao: 'No vácuo despreza-se a resistência do ar e todos os corpos aceleram igualmente sob g ≈ 9,8 m/s². A área sob a curva no gráfico v×t fornece o deslocamento Δs.'
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
                    enunciado: 'Calcule a força resultante necessária para acelerar um bloco de 5 kg com aceleração de 4 m/s²:',
                    dica: 'Aplique a Segunda Lei de Newton: F = m · a (multiplique a massa pela aceleração).',
                    template: 'Pela Segunda Lei de Newton (F = m·a), a intensidade da força resultante é {lacuna} N',
                    opcoes: ['20', '9', '1', '40', '1.25'],
                    respostaCorreta: '20',
                    explicacao: 'F = m · a => F = 5 kg · 4 m/s² = 20 N (Newtons).'
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
                    enunciado: 'Selecione todas as afirmações fisicamente VERDADEIRAS sobre as Leis de Newton:',
                    dica: 'Lembre-se: o par Ação e Reação atua sempre em corpos diferentes e nunca se anula!',
                    opcoes: [
                        { texto: 'O par ação e reação atua em corpos distintos e nunca se anula', correta: true },
                        { texto: 'Ao caminhar, o pé empurra o chão para trás e o chão nos move para frente', correta: true },
                        { texto: 'Força Peso e Força Normal não formam par de ação e reação', correta: true },
                        { texto: 'A unidade de medida de força no SI é o Newton (N)', correta: true },
                        { texto: 'A reação da força peso de um objeto está no centro da Terra', correta: true },
                        { texto: 'Ação e reação se anulam porque atuam no mesmo corpo', correta: false },
                        { texto: 'Foguetes não conseguem acelerar no vácuo por não ter ar', correta: false },
                        { texto: 'A Força Normal é sempre paralela à superfície', correta: false }
                    ],
                    explicacao: 'A 3ª Lei de Newton estabelece que forças mútuas atuam em corpos diferentes com mesma intensidade e sentidos opostos. Por estarem em corpos distintos, nunca se equilibram entre si.'
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
                    enunciado: 'Calcule o trabalho motor realizado por uma força constante de 50 N que desloca uma caixa por 4 metros na mesma direção:',
                    dica: 'Como o deslocamento é no mesmo sentido da força, cos(0º) = 1. Multiplique W = F · d.',
                    template: 'O trabalho realizado pela força é igual a {lacuna} Joules (J)',
                    opcoes: ['200', '54', '12.5', '0', '50'],
                    respostaCorreta: '200',
                    explicacao: 'W = F · d · cos(0º) => W = 50 N · 4 m · 1 = 200 Joules (J).'
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
                    enunciado: 'Selecione todas as afirmações corretas sobre Potência, Trabalho e Energia Cinética:',
                    dica: 'Lembre-se da unidade Watt (J/s) e do efeito quadrático da velocidade na energia cinética (v²)!',
                    opcoes: [
                        { texto: 'No SI, a unidade oficial de potência é o Watt (W = J/s)', correta: true },
                        { texto: 'Se a velocidade de um carro dobrar, sua energia cinética quadruplica', correta: true },
                        { texto: 'A energia cinética é calculada por Ec = (m·v²)/2', correta: true },
                        { texto: 'O trabalho da força resultante equivale à variação da energia cinética', correta: true },
                        { texto: '1 Joule equivale a 1 Newton multiplicado por 1 metro', correta: true },
                        { texto: 'Se a velocidade de um carro dobrar, a energia cinética apenas dobra', correta: false },
                        { texto: 'A potência é calculada multiplicando o trabalho pelo tempo', correta: false },
                        { texto: 'Forças perpendiculares ao movimento realizam trabalho máximo', correta: false }
                    ],
                    explicacao: 'Potência é a taxa de realização de trabalho por unidade de tempo (W = J/s). Como a energia cinética depende de v², dobrar a velocidade quadruplica a energia associada ao movimento.'
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
                    enunciado: 'Em um sistema conservativo sem atrito, se um corpo perde 500 J de energia potencial ao cair, sua energia cinética ganha exatamente:',
                    dica: 'O Princípio da Conservação da Energia Mecânica afirma que toda energia potencial perdida é convertida em energia cinética.',
                    template: 'Pelo princípio da conservação da energia mecânica, o ganho de energia cinética é de {lacuna} J',
                    opcoes: ['500', '250', '1000', '0', '50'],
                    respostaCorreta: '500',
                    explicacao: 'Em sistemas conservativos, a energia total não se altera (ΔEm = 0). Logo, qualquer perda na energia potencial se converte integralmente em energia cinética (+500 J).'
                }
            ]
        }
    }
};
