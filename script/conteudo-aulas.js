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
        }
    };

    const AULAS_PYTHON = {
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
