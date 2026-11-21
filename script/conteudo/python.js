/* =====================================================
   Galea Educação - Conteúdo Pedagógico de Python
   Fontes: Documentação Oficial Python (python.org), PEP 8,
           Diretrizes de Neuroeducação e Ensino Acessível (TDAH).
   Ciclo de 3 aulas: 1=Texto Aprofundado, 2=Vídeo + Tela de Resumo, 3=Gamificação.
   ===================================================== */

window.GaleaBancosConteudo = window.GaleaBancosConteudo || {};

window.GaleaBancosConteudo.python = {
    // --- BLOCO 1 (Aulas 1 a 3) ---
    1: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a filosofia da linguagem Python, como funciona o interpretador e dominar a exibição de dados com \`print()\`.`,
            `### 1. Origem e Filosofia do Python`,
            `Criado em 1991 pelo programador holandês Guido van Rossum no CWI (Centrum Wiskunde & Informatica), o Python foi projetado com uma premissa fundamental descrita no *Zen do Python* (PEP 20): **a legibilidade conta**. Ao contrário de linguagens como C ou Java que exigem estruturas verbosas e pontuações complexas para tarefas simples, o Python prioriza clareza visual e sintaxe quase idêntica ao inglês natural.`,
            `Hoje, o Python é a linguagem líder mundial em Inteligência Artificial, Ciência de Dados, Computação Científica e Automação de Infraestrutura em gigantes como Google, NASA, Netflix e Spotify.`,
            `### 2. Como Funciona a Execução de Código`,
            `Python é uma linguagem de alto nível, interpretada e com tipagem dinâmica forte:`,
            `- O código fonte (\`.py\`) é lido pelo interpretador Python (CPython por padrão).`,
            `- O interpretador compila o código para um formato intermediário chamado **Bytecode** (\`.pyc\`), que roda sobre a máquina virtual Python (PVM).`,
            `- Isso significa que você não precisa compilar manualmente o programa para executá-lo em diferentes sistemas operacionais.`,
            `### 3. A Função print() em Detalhes`,
            `A função nativa \`print()\` é o principal canal de comunicação do programa para o console do usuário:`,
            `- **Sintaxe padrão:** \`print("Mensagem de texto")\` ou \`print('Mensagem com aspas simples')\`.`,
            `- **Parâmetro \`sep\`:** Define o separador entre múltiplos itens: \`print("Python", "é", "demais", sep=" - ")\` resulta em \`Python - é - demais\`.`,
            `- **Parâmetro \`end\`:** Controla o caractere de encerramento (o padrão é uma quebra de linha \`\\n\`): \`print("Carregando...", end="")\` mantém a próxima impressão na mesma linha.`,
            `### 4. Erros Comuns e Armadilhas`,
            `- **Case-Sensitivity:** Python diferencia rigorosamente maiúsculas de minúsculas. Escrever \`Print("Olá")\` ou \`PRINT("Olá")\` causará um erro imediato do tipo \`NameError\`.`,
            `- **Aspas desbalanceadas:** Abrir com aspas duplas e tentar fechar com aspas simples gera \`SyntaxError: unterminated string literal\`.`,
            `> **Dica de Fixação Galea (TDAH):** Pense na função \`print()\` como o alto-falante do computador. Seus pensamentos e cálculos só ganham voz quando passam pelo alto-falante!`
        ].join('\n\n')
    },

    2: {
        tipo: 'video-resumo',
        video: { titulo: 'Variáveis na Memória, Tipos Primitivos e Convenções PEP 8' },
        conteudo: [
            `## 📺 Guia da Videoaula: Variáveis e Estrutura de Memória`,
            `Assista à aula gravada acima acompanhando como o Python aloca identificadores na memória RAM. A seguir, revise os pontos fundamentais antes de avançar para a gamificação de fixação:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Variáveis como Etiquetas:** Em Python, variáveis não são "caixas estáticas", mas sim referências (ponteiros elegantes) para objetos alocados na memória dinâmica (*Heap*).`,
            `- **Os 4 Tipos Primitivos Essenciais:**`,
            `  • \`int\` (Inteiros): Números sem casas decimais, positivos ou negativos (\`10\`, \`-500\`, \`0\`). Possuem precisão arbitrária.`,
            `  • \`float\` (Ponto Flutuante): Números reais com casas decimais separadas por ponto (\`3.1415\`, \`-0.5\`, \`100.0\`).`,
            `  • \`str\` (Strings): Sequências de caracteres textuais delimitadas por aspas simples ou duplas (\`"Galea"\`, \`'Aprendizado'\`).`,
            `  • \`bool\` (Booleanos): Estados lógicos binários que assumem exclusivamente \`True\` ou \`False\` (sempre com inicial maiúscula).`,
            `- **Regras Oficiais de Nomenclatura (PEP 8):**`,
            `  • Use nomes descritivos em minúsculas separados por sublinhado: padrão \`snake_case\` (\`total_pontos\`, \`aluno_aprovado\`).`,
            `  • **PROIBIDO:** Começar com dígitos (\`1_lugar\`), conter espaços (\`meu saldo\`) ou símbolos especiais (\`@\`, \`!\`, \`-\`, \`$\`).`,
            `  • **PROIBIDO:** Usar palavras reservadas da linguagem (\`class\`, \`def\`, \`if\`, \`for\`, \`while\`, \`return\`).`,
            `> Conclua este resumo para liberar a gamificação na Lição 3 e testar seu domínio prático!`
        ].join('\n\n')
    },

    3: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - Nomenclatura PEP 8: Selecione todos os identificadores de variável perfeitamente VÁLIDOS em Python:',
                    dica: 'Atenção a caracteres proibidos (!, @, -), espaços em branco, início com dígitos numéricos e palavras reservadas como class!',
                    opcoes: [
                        { texto: 'nome_aluno', correta: true },
                        { texto: 'total_pontos', correta: true },
                        { texto: 'valor_01', correta: true },
                        { texto: 'xp_acumulado', correta: true },
                        { texto: 'taxa_imposto', correta: true },
                        { texto: '20_pontos', correta: false },
                        { texto: 'usuario@admin', correta: false },
                        { texto: 'saldo total', correta: false },
                        { texto: 'class', correta: false }
                    ],
                    explicacao: 'Em Python, variáveis usam snake_case e não podem iniciar com algarismos, conter espaços, símbolos especiais ou palavras reservadas como class.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Parâmetros do print: Complete o código para exibir os itens separados por traço:',
                    dica: 'O parâmetro sep define o caractere separador entre os múltiplos argumentos do print().',
                    template: 'print("Python", "é", "demais", {lacuna}=" - ")',
                    opcoes: ['sep', 'end', 'split', 'join'],
                    respostaCorreta: 'sep',
                    explicacao: 'O parâmetro nativo sep=" - " substitui o espaço padrão por traços entre os argumentos impressos.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug: Identifique a linha que causará um erro imediato do tipo NameError:',
                    dica: 'Python é estritamente case-sensitive: comandos nativos são escritos em minúsculas!',
                    linhasCodigo: [
                        '1. nome = "Guido"',
                        '2. ano_criacao = 1991',
                        '3. Print(f"Criador: {nome}")',
                        '4. print("Linguagem Python")'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, "Print" começa com maiúscula. Python não reconhece "Print", causando NameError: name \'Print\' is not defined.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Pipeline do Interpretador: Ordene as etapas de execução de um programa Python:',
                    dica: 'O código fonte é lido, vira bytecode (.pyc) e roda na Máquina Virtual Python (PVM).',
                    itens: [
                        'Desenvolvedor escreve o código fonte (.py)',
                        'Interpretador CPython analisa a sintaxe do arquivo',
                        'Compilação interna para Bytecode intermediário (.pyc)',
                        'Python Virtual Machine (PVM) executa as instruções no SO'
                    ],
                    ordemCorreta: [
                        'Desenvolvedor escreve o código fonte (.py)',
                        'Interpretador CPython analisa a sintaxe do arquivo',
                        'Compilação interna para Bytecode intermediário (.pyc)',
                        'Python Virtual Machine (PVM) executa as instruções no SO'
                    ],
                    explicacao: 'O fluxo de execução Python passa pela escrita do código (.py), parsing sintático, geração de bytecode (.pyc) e execução na PVM.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Selecione todas as atribuições de tipos primitivos CORRETAS:',
                    dica: 'Lembre-se: bool tem inicial maiúscula (True/False), float usa ponto (.) e str usa aspas.',
                    opcoes: [
                        { texto: 'ativo = True (bool)', correta: true },
                        { texto: 'preco = 49.90 (float)', correta: true },
                        { texto: 'idade = 25 (int)', correta: true },
                        { texto: 'versao = "3.12" (str)', correta: true },
                        { texto: 'ligado = true (sem maiúscula)', correta: false },
                        { texto: 'valor = 10,5 (com vírgula)', correta: false },
                        { texto: 'total = "100" (é int)', correta: false }
                    ],
                    explicacao: 'Booleanos em Python exigem inicial maiúscula (True/False), floats utilizam ponto decimal e números entre aspas são strings.'
                }
            ]
        }
    },

    // --- BLOCO 2 (Aulas 4 a 6) ---
    4: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Dominar a manipulação moderna de strings com f-strings, métodos nativos de texto e regras de imutabilidade.`,
            `### 1. A Natureza das Strings em Python`,
            `Em Python, textos são objetos da classe \`str\`. Uma característica vital que todo programador profissional deve conhecer é que **strings são imutáveis**: uma vez alocada na memória, o conteúdo de uma string jamais pode ser alterado no local. Qualquer operação de transformação gera um objeto novo.`,
            `### 2. Interpolação Moderna: F-Strings (PEP 498)`,
            `Introduzidas no Python 3.6, as *Formatted String Literals* (f-strings) tornaram-se o padrão ouro absoluto da linguagem, superando os antigos operadores \`%\` e o método \`.format()\`:`,
            `\`\`\`python\nnome = "Alice"\nnivel = 42\nmensagem = f"Parabéns {nome}, você alcançou o nível {nivel}!"\n\`\`\``,
            `- O prefixo \`f\` antes das aspas instrui o interpretador a avaliar tudo o que está dentro das chaves \`{...}\` em tempo de execução.`,
            `- Você pode executar expressões matemáticas diretamente dentro das chaves: \`f"Dobro: {nivel * 2}"\`.`,
            `- Formatação numérica precisa: \`f"Preço: R$ {valor:.2f}"\` formata números com exatamente 2 casas decimais.`,
            `### 3. Métodos Essenciais de Manipulação`,
            `- \`.strip()\`: Remove espaços em branco redundantes no início e no fim do texto (essencial para limpar dados de formulários).`,
            `- \`.lower()\` e \`.upper()\`: Padronizam textos em minúsculas ou maiúsculas para comparações insensíveis a caso.`,
            `- \`.replace("antigo", "novo")\`: Substitui todas as ocorrências de um trecho sem alterar a variável original.`,
            `> **Dica de Fixação Galea (TDAH):** Pense nas f-strings como molduras de fotos com espaços vazios: você coloca a etiqueta \`{variável}\` e o Python preenche a foto certa instantaneamente!`
        ].join('\n\n')
    },

    5: {
        tipo: 'video-resumo',
        video: { titulo: 'Entrada de Dados com input(), Conversão Explícita de Tipos e Tratamento' },
        conteudo: [
            `## 📺 Guia da Videoaula: Captura Interativa e Casting de Tipos`,
            `Assista ao vídeo demonstrativo sobre como programas reais recebem instruções e parâmetros dos usuários. A seguir, consulte o resumo dos pontos essenciais:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **O Funcionamento de \`input()\':** Pausa a execução sequencial do interpretador e aguarda o usuário digitar um valor e pressionar Enter. Uma mensagem guia opcional pode ser passada como argumento: \`nome = input("Digite seu nome: ")\`.`,
            `- **A Regra de Ouro do \`input()\':** Todo dado retornado por \`input()\` é invariavelmente uma **String (\`str\`)**, mesmo que o usuário digite apenas números.`,
            `- **Conversão Explícita (*Type Casting*):**`,
            `  • Para cálculos com números inteiros: \`idade = int(input("Sua idade: "))\`.`,
            `  • Para valores decimais: \`altura = float(input("Sua altura em metros: "))\`.`,
            `  • Se a conversão for omitida, tentar somar \`input() + input()\` resultará em concatenação textual (\`"10" + "20" = "1020"\`) em vez de adição aritmética (\`30\`).`,
            `> Conclua este resumo para liberar a gamificação prática da Lição 6!`
        ].join('\n\n')
    },

    6: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Interpolação Moderna: Complete a sintaxe da f-string com formatação de 2 casas decimais:',
                    dica: 'Em f-strings, a formatação de float com duas casas decimais utiliza :.2f.',
                    template: 'saldo = 1250.5\nmensagem = f"Seu saldo atual é R$ {saldo:{lacuna}}"',
                    opcoes: ['.2f', '2d', '.2s', 'round2'],
                    respostaCorreta: '.2f',
                    explicacao: 'A expressão {saldo:.2f} formata o número de ponto flutuante com exatamente 2 casas decimais.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 2/5 - Caça-Bug de Tipagem: O código abaixo junta os números como texto em vez de somá-los matematicamente. Onde está a falha?',
                    dica: 'input() sempre retorna uma string (str). Se não houver conversão (int/float), o operador + apenas concatena o texto!',
                    linhasCodigo: [
                        '1. n1 = input("Primeiro número: ")',
                        '2. n2 = input("Segundo número: ")',
                        '3. total = n1 + n2',
                        '4. print(f"Soma real: {total}")'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, n1 e n2 ainda são strings! Somar "10" + "20" resulta em "1020". O correto seria int(n1) + int(n2).'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 3/5 - Métodos Nativos de String: Selecione todos os métodos que REALMENTE existem em Python:',
                    dica: 'Atenção aos métodos de outras linguagens como trim() ou uppercase() que não pertencem ao Python!',
                    opcoes: [
                        { texto: 'strip()', correta: true },
                        { texto: 'lower()', correta: true },
                        { texto: 'upper()', correta: true },
                        { texto: 'replace()', correta: true },
                        { texto: 'split()', correta: true },
                        { texto: 'trim() (é do JavaScript)', correta: false },
                        { texto: 'uppercase() (é do JS)', correta: false },
                        { texto: 'deleteSpaces()', correta: false }
                    ],
                    explicacao: 'Python utiliza strip() para remover espaços, lower()/upper() para caixa e replace() para substituições.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Pipeline de Entrada: Ordene o fluxo correto de captura, conversão e cálculo numérico:',
                    dica: 'Primeiro capturamos o dado do usuário, convertemos o tipo, processamos a conta e exibimos.',
                    itens: [
                        'entrada_str = input("Informe o preço do produto: ")',
                        'preco = float(entrada_str)',
                        'preco_com_desconto = preco * 0.90',
                        'print(f"Preço promocional: R$ {preco_com_desconto:.2f}")'
                    ],
                    ordemCorreta: [
                        'entrada_str = input("Informe o preço do produto: ")',
                        'preco = float(entrada_str)',
                        'preco_com_desconto = preco * 0.90',
                        'print(f"Preço promocional: R$ {preco_com_desconto:.2f}")'
                    ],
                    explicacao: 'O fluxo seguro é: ler como string com input(), converter para float, aplicar a fórmula aritmética e exibir via f-string.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete o método que limpa espaços acidentais antes e depois do texto digitado:',
                    dica: 'O método strip() remove espaços em branco redundantes nas extremidades da string.',
                    template: 'email_digitado = "  aluno@galea.com.br  "\nemail_higienizado = email_digitado.{lacuna}()',
                    opcoes: ['strip', 'clean', 'trim', 'clear'],
                    respostaCorreta: 'strip',
                    explicacao: 'O método nativo .strip() é essencial para higienizar entradas de formulários e cadastros.'
                }
            ]
        }
    },

    // --- BLOCO 3 (Aulas 7 a 9) ---
    7: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Dominar a lógica de decisões compostas utilizando operadores lógicos \`and\`, \`or\`, \`not\` e tabelas-verdade.`,
            `### 1. Tomada de Decisão Booleana`,
            `Programas inteligentes não seguem apenas linhas retas; eles tomam bifurcações baseadas no estado dos dados. Os operadores lógicos permitem combinar múltiplas comparações relacionais (\`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`) em expressões sofisticadas.`,
            `### 2. Os Três Operadores Lógicos`,
            `- **Operador \`and\` (E lógico):** Avalia como \`True\` se, e somente se, **todas** as condições forem verdadeiras. Exemplo: \`idade >= 18 and tem_cnh == True\`. Se qualquer lado for falso, o resultado global é falso.`,
            `- **Operador \`or\` (OU lógico):** Avalia como \`True\` se **ao menos uma** das condições for verdadeira. Exemplo: \`eh_feriado or eh_fim_de_semana\`. Só resulta em falso se ambos os lados forem falsos.`,
            `- **Operador \`not\` (NÃO lógico):** Inverte o valor booleano da expressão. \`not True\` torna-se \`False\`, e \`not False\` torna-se \`True\`.`,
            `### 3. Avaliação de Curto-Circuito (*Short-Circuit Evaluation*)`,
            `O interpretador Python é inteligente: em uma expressão \`A and B\`, se \`A\` for falso, o Python nem avalia \`B\`, pois o resultado já é garantidamente falso. Em \`A or B\`, se \`A\` for verdadeiro, \`B\` não é avaliado.`,
            `> **Dica de Fixação Galea (TDAH):** Pense no \`and\` como duas chaves elétricas em série: você precisa ligar as duas para a lâmpada acender. Já o \`or\` são dois caminhos alternativos: qualquer um aberto já deixa a luz passar!`
        ].join('\n\n')
    },

    8: {
        tipo: 'video-resumo',
        video: { titulo: 'Laço while, Condições de Parada e Prevenção de Loops Infinitos' },
        conteudo: [
            `## 📺 Guia da Videoaula: Repetição Controlada por Condição`,
            `Assista à demonstração do laço de repetição \`while\`. A seguir, analise a síntese técnica dos conceitos para fixação:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Propósito do \`while\':** Executa repetidamente um bloco de código subordinado enquanto a expressão de teste permanecer verdadeira (\`True\`).`,
            `- **Anatomia do Laço Seguro:**`,
            `  1. **Inicialização:** A variável de controle deve ser criada antes do laço (\`contador = 0\`).`,
            `  2. **Teste Lógico:** Verificação no cabeçalho (\`while contador < 5:\`).`,
            `  3. **Passo de Atualização:** Modificação da variável dentro do corpo do laço (\`contador += 1\`).`,
            `- **O Perigo do Loop Infinito:** Se o passo de atualização for esquecido ou a condição nunca puder se tornar falsa, o programa consumirá 100% de processador e travará o processo.`,
            `- **Instruções Especiais:** \`break\` encerra o laço na hora; \`continue\` pula direto para a próxima repetição.`,
            `> Conclua este resumo para desbloquear a gamificação na Lição 9!`
        ].join('\n\n')
    },

    9: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - Lógica Booleana: Selecione todas as avaliações lógicas tecnicamente VERDADEIRAS em Python:',
                    dica: 'Lembre-se: and exige ambos verdadeiros, or aceita ao menos um, e not inverte o valor.',
                    opcoes: [
                        { texto: 'True and False resulta em False', correta: true },
                        { texto: 'True or False resulta em True', correta: true },
                        { texto: 'not False resulta em True', correta: true },
                        { texto: 'bool(0) avalia como False', correta: true },
                        { texto: 'bool("texto") avalia como True', correta: true },
                        { texto: 'True and True resulta em False', correta: false },
                        { texto: 'False or False resulta em True', correta: false },
                        { texto: 'not True resulta em True', correta: false }
                    ],
                    explicacao: 'Na lógica booleana do Python, 0 é falsy, textos não vazios são truthy, and exige ambos True e or exige ao menos um True.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 2/5 - Alerta de Loop Infinito: Identifique a linha responsável por travar o computador em um loop eterno:',
                    dica: 'Se a variável contadora não for incrementada dentro do laço, a condição nunca se tornará falsa!',
                    linhasCodigo: [
                        '1. limite = 5',
                        '2. contador = 0',
                        '3. while contador < limite:',
                        '4.     print(f"Passo: {contador}")',
                        '5.     # O desenvolvedor esqueceu o contador += 1'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, o laço testa "contador < limite", mas como contador nunca muda de valor dentro do laço, ele rodará infinitamente!'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 3/5 - Controle de Fluxo: Complete o comando para interromper IMEDIATAMENTE a repetição quando a condição for atingida:',
                    dica: 'A instrução break aborta a execução do laço instantaneamente.',
                    template: 'while True:\n    comando = input("Digite sair: ")\n    if comando == "sair":\n        {lacuna}',
                    opcoes: ['break', 'continue', 'stop', 'exit'],
                    respostaCorreta: 'break',
                    explicacao: 'A palavra-chave nativa break interrompe e encerra laços while ou for instantaneamente.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Laço Seguro: Ordene a sequência lógica e sintática correta de um laço while com parada garantida:',
                    dica: 'Inicialize a variável contadora antes do laço e incremente seu valor no interior do bloco repetido.',
                    itens: [
                        'contador = 1',
                        'while contador <= 5:',
                        '    print(contador)',
                        '    contador += 1'
                    ],
                    ordemCorreta: [
                        'contador = 1',
                        'while contador <= 5:',
                        '    print(contador)',
                        '    contador += 1'
                    ],
                    explicacao: 'A variável deve ser inicializada externamente (contador = 1), testada no cabeçalho do while e incrementada a cada iteração para atingir a condição de parada.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete a instrução que pula a iteração atual e avança direto para a próxima repetição:',
                    dica: 'A instrução continue salta direto para o próximo teste de repetição sem sair do laço.',
                    template: 'for n in range(10):\n    if n % 2 == 0:\n        {lacuna}  # Pula os números pares\n    print(n)',
                    opcoes: ['continue', 'pass', 'break', 'skip'],
                    respostaCorreta: 'continue',
                    explicacao: 'A instrução continue encerra a iteração corrente e avança o iterador imediatamente para a próxima repetição.'
                }
            ]
        }
    },

    // --- BLOCO 4 (Aulas 10 a 12) ---
    10: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a estrutura de dados mais dinâmica do Python: listas mutáveis (\`list\`), indexação e métodos utilitários.`,
            `### 1. O que são Listas em Python`,
            `Listas são coleções ordenadas, mutáveis e heterogêneas de elementos delimitadas por colchetes \`[]\`. Elas permitem agrupar múltiplos valores sob um único nome e manipulá-los dinamicamente em tempo de execução.`,
            `### 2. Indexação Positiva e Negativa`,
            `- **Base Zero:** O primeiro item está sempre na posição 0: \`frutas[0]\`.`,
            `- **Índices Negativos:** O Python permite indexar a partir do final: \`frutas[-1]\` acessa o último elemento, e \`frutas[-2]\` o penúltimo.`,
            `- **Fatiamento (*Slicing*):** \`frutas[1:3]\` fatia a lista do índice 1 até o índice 2 (o limite superior nunca é incluído).`,
            `### 3. Métodos Fundamentais de Listas`,
            `- \`.append(item)\`: Adiciona um novo elemento ao final da lista de forma eficiente O(1).`,
            `- \`.insert(posicao, item)\`: Insere um elemento em uma posição arbitrária empurrando os demais.`,
            `- \`.pop()\`: Remove e retorna o último elemento da lista (ou do índice fornecido).`,
            `- \`len(lista)\`: Função nativa que devolve o número exato de elementos presentes.`,
            `> **Dica de Fixação Galea (TDAH):** Pense na lista como uma fila de pessoas em um banco: cada uma tem uma senha numerada começando do 0, e quem chega no final entra com o \`.append()\`!`
        ].join('\n\n')
    },

    11: {
        tipo: 'video-resumo',
        video: { titulo: 'Tuplas Imutáveis e Dicionários Estruturados Chave-Valor' },
        conteudo: [
            `## 📺 Guia da Videoaula: Tuplas vs Dicionários`,
            `Assista à aula sobre quando utilizar coleções imutáveis e como mapear entidades complexas com tabelas hash. A seguir, consulte o resumo essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Tuplas \`()\`:**`,
            `  • Coleções imutáveis: uma vez instanciadas, nenhum elemento pode ser adicionado, alterado ou removido.`,
            `  • Mais rápidas e consomem menos memória que listas; garantem proteção contra modificações acidentais de dados de configuração (ex.: coordenadas GPS, cores RGB).`,
            `- **Dicionários \`{}\`:**`,
            `  • Estruturas baseadas em pares **chave: valor** associativos.`,
            `  • Acesso ultra veloz por chave O(1): \`usuario = {"nome": "Maria", "pontos": 120}\`.`,
            `  • O método seguro \`usuario.get("email", "não informado")\` previne quebras de código causadas por \`KeyError\` caso a chave não exista.`,
            `> Conclua este resumo para liberar a gamificação na Lição 12!`
        ].join('\n\n')
    },

    12: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Acesso Seguro a Dicionários: Complete com o método que busca a chave sem gerar o erro KeyError:',
                    dica: 'O método get busca o valor associado à chave ou retorna None (ou valor padrão) caso ela não exista.',
                    template: 'usuario = {"nome": "Galea", "xp": 100}\nvalor = usuario.{lacuna}("pontos", 0)',
                    opcoes: ['get', 'pop', 'find', 'search'],
                    respostaCorreta: 'get',
                    explicacao: 'O método .get("chave", padrao) é a forma canônica e recomendada de consultar valores em dicionários com tolerância a falhas.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Mutabilidade vs Imutabilidade: Selecione todas as coleções que são MUTÁVEIS em Python:',
                    dica: 'Listas e Dicionários podem ser alterados após criados; Tuplas e Strings são imutáveis!',
                    opcoes: [
                        { texto: 'list (Listas: [1, 2])', correta: true },
                        { texto: 'dict (Dicionários: {"a": 1})', correta: true },
                        { texto: 'set (Conjuntos: {1, 2})', correta: true },
                        { texto: 'tuple (Tuplas: (1, 2))', correta: false },
                        { texto: 'str (Strings: "texto")', correta: false },
                        { texto: 'int (Inteiros: 42)', correta: false }
                    ],
                    explicacao: 'Em Python, listas, dicionários e conjuntos são estruturas mutáveis (podem ter itens adicionados/removidos). Tuplas e strings são imutáveis.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Imutabilidade: Localize a linha que causará um TypeError fatal:',
                    dica: 'Tuplas não permitem alteração de seus elementos via atribuição de índice!',
                    linhasCodigo: [
                        '1. coordenadas_gps = (23.5505, 46.6333)',
                        '2. print("Latitude:", coordenadas_gps[0])',
                        '3. coordenadas_gps[0] = 22.0000',
                        '4. print("Coordenada atualizada")'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, tentar atribuir novo valor a um elemento de tupla causa TypeError: \'tuple\' object does not support item assignment.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Manipulação de Listas: Ordene a sequência correta de criação, adição e remoção do último item:',
                    dica: 'Crie a lista vazia, adicione itens com .append() e desempilhe o último com .pop().',
                    itens: [
                        'fila = []',
                        'fila.append("Primeiro")',
                        'fila.append("Segundo")',
                        'atendido = fila.pop()'
                    ],
                    ordemCorreta: [
                        'fila = []',
                        'fila.append("Primeiro")',
                        'fila.append("Segundo")',
                        'atendido = fila.pop()'
                    ],
                    explicacao: 'A lista é inicializada com [], preenchida com .append() e o elemento final é desempilhado com .pop().'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete o índice para capturar diretamente o ÚLTIMO elemento de uma lista sem calcular seu tamanho:',
                    dica: 'Python permite indexação reversa: o último elemento tem índice -1.',
                    template: 'ranking = ["Alice", "Bob", "Carlos", "Diana"]\nultimo_colocado = ranking[{lacuna}]',
                    opcoes: ['-1', '0', 'last', 'end'],
                    respostaCorreta: '-1',
                    explicacao: 'O índice [-1] acessa de forma elegante e instantânea o último elemento de qualquer sequência em Python.'
                }
            ]
        }
    },

    // --- BLOCO 5 (Aulas 13 a 15) ---
    13: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Dominar o tipo conjunto (\`set\`) para descarte instantâneo de duplicatas e operações de teoria dos conjuntos.`,
            `### 1. Conjuntos Matemáticos na Computação`,
            `Inspirados na teoria dos conjuntos da matemática, os \`sets\` em Python são coleções não ordenadas de elementos únicos delimitadas por chaves \`{}\`.`,
            `### 2. Deduplicação Instantânea`,
            `Se você possui uma lista com milhares de dados e precisa remover todas as repetições:`,
            `\`\`\`python\nlista_bruta = [1, 2, 2, 3, 4, 4, 4, 5]\nunicos = list(set(lista_bruta))\n# Resultado: [1, 2, 3, 4, 5]\n\`\`\``,
            `A conversão de lista para conjunto elimina itens repetidos na hora devido à estrutura interna de tabela hash.`,
            `### 3. Operações de Conjuntos`,
            `- **União (\`|\` ou \`.union()\'):** Junta todos os elementos de ambos os grupos.`,
            `- **Interseção (\`&\` ou \`.intersection()\'):** Retorna apenas os elementos presentes em ambos os grupos.`,
            `- **Diferença (\`-\` ou \`.difference()\'):** Retorna o que pertence ao primeiro conjunto mas não ao segundo.`,
            `> **Dica de Fixação Galea (TDAH):** Pense no \`set\` como uma caixinha mágica que só aceita figurinhas que você ainda não tem repetidas no álbum!`
        ].join('\n\n')
    },

    14: {
        tipo: 'video-resumo',
        video: { titulo: 'Criando Funções Reutilizáveis com def, Parâmetros e Retorno' },
        conteudo: [
            `## 📺 Guia da Videoaula: Modularização Profissional com Funções`,
            `Assista à explicação sobre o princípio DRY (*Don't Repeat Yourself*). A seguir, revise o resumo estrutural dos conceitos:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **A Palavra-Chave \`def\':** Em Python, funções são sempre definidas com \`def nome_da_funcao(parametros):\` (nunca use 'function').`,
            `- **Parâmetros vs Argumentos:** Parâmetros são os nomes declarados na assinatura da função; argumentos são os valores reais passados na invocação.`,
            `- **O Papel do \`return\':** Devolve o resultado processado para quem chamou a função continuar utilizando-o em novas contas. Funções sem \`return\` explícito retornam o valor nulo \`None\`.`,
            `- **Docstrings:** Documente suas funções com três aspas duplas logo na primeira linha do bloco: \`"""Explicação detalhada."""\`.`,
            `> Conclua este resumo para desbloquear a gamificação na Lição 15!`
        ].join('\n\n')
    },

    15: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 1/5 - Caça-Bug de Definição: Encontre a linha com vício de sintaxe na definição desta função em Python:',
                    dica: 'Diferente de outras linguagens, em Python funções usam a palavra-chave def.',
                    linhasCodigo: [
                        '1. # Função utilitária de desconto',
                        '2. function calcular_desconto(preco, taxa):',
                        '3.     return preco * (1 - taxa)',
                        '4. resultado = calcular_desconto(100, 0.15)'
                    ],
                    linhaBug: 1,
                    explicacao: 'Na linha 2, foi utilizada a palavra "function" (típica do JavaScript ou PHP). Em Python a palavra-chave canônica e obrigatória é "def".'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Propriedades dos Conjuntos (Sets): Selecione todas as afirmativas VERDADEIRAS sobre sets:',
                    dica: 'Conjuntos matemáticos removem duplicatas e possuem operadores especiais como | e &.',
                    opcoes: [
                        { texto: 'Eliminam elementos duplicados automaticamente', correta: true },
                        { texto: 'São coleções não ordenadas de dados', correta: true },
                        { texto: 'O operador | realiza a união de conjuntos', correta: true },
                        { texto: 'O operador & realiza a interseção', correta: true },
                        { texto: 'Permitem armazenar chaves duplicadas', correta: false },
                        { texto: 'Acessam elementos via índice numérico [0]', correta: false },
                        { texto: 'São declarados obrigatoriamente com parênteses ()', correta: false }
                    ],
                    explicacao: 'Sets em Python usam chaves {}, não admitem duplicatas e não possuem índices numéricos de posição.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 3/5 - Retorno de Valores: Complete o comando para devolver o resultado computado para o código chamador:',
                    dica: 'A palavra-chave return encerra a função entregando o dado produzido.',
                    template: 'def calcular_dobro(numero):\n    resultado = numero * 2\n    {lacuna} resultado',
                    opcoes: ['return', 'send', 'output', 'export'],
                    respostaCorreta: 'return',
                    explicacao: 'A instrução return entrega o resultado calculado pela função de volta ao chamador.'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Anatomia de Função: Ordene a estrutura formal de uma função profissional com docstring:',
                    dica: 'Inicie com def, adicione a docstring explicativa com aspas triplas, o cálculo com return e a chamada.',
                    itens: [
                        'def calcular_media(valores):',
                        '    """Calcula a média aritmética dos itens."""',
                        '    return sum(valores) / len(valores)',
                        'media_final = calcular_media([8, 9, 10])'
                    ],
                    ordemCorreta: [
                        'def calcular_media(valores):',
                        '    """Calcula a média aritmética dos itens."""',
                        '    return sum(valores) / len(valores)',
                        'media_final = calcular_media([8, 9, 10])'
                    ],
                    explicacao: 'A anatomia recomendada é: assinatura com def, docstring de documentação, processamento com return e invocação.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete a conversão que remove todas as duplicatas de uma lista em uma única linha:',
                    dica: 'Converter para conjunto (set) deduplica a lista instantaneamente.',
                    template: 'ids_brutos = [101, 102, 101, 103, 102]\nids_unicos = list({lacuna}(ids_brutos))',
                    opcoes: ['set', 'unique', 'filter', 'tuple'],
                    respostaCorreta: 'set',
                    explicacao: 'A conversão list(set(colecao)) é a técnica mais pythônica e veloz para deduplicação de listas.'
                }
            ]
        }
    },

    // --- BLOCO 6 (Aulas 16 a 18) ---
    16: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender a regra de escopo LEGB (Local, Enclosing, Global, Built-in) e a vida útil das variáveis em memória.`,
            `### 1. O Ciclo de Vida das Variáveis`,
            `Variáveis não vivem para sempre na memória. O escopo define em quais partes do seu código uma variável pode ser acessada de forma legítima.`,
            `### 2. A Hierarquia LEGB do Python`,
            `Quando você digita o nome de uma variável, o Python pesquisa sequencialmente em 4 níveis:`,
            `1. **Local (L):** Variáveis criadas dentro do corpo da função atual. Elas nascem quando a função inicia e são destruídas quando ela termina.`,
            `2. **Enclosing (E):** Escopo de funções externas em casos de funções aninhadas (*closures*).`,
            `3. **Global (G):** Variáveis declaradas no nível principal do módulo (\`.py\`).`,
            `4. **Built-in (B):** Identificadores nativos pré-carregados pelo Python (\`len\`, \`print\`, \`range\`, \`int\`).`,
            `### 3. A Boa Prática: Não Poluir o Escopo Global`,
            `Evite depender de variáveis globais usando a palavra-chave \`global\`. O padrão limpo é receber dados como parâmetros e devolver dados via \`return\`.`,
            `> **Dica de Fixação Galea (TDAH):** Pense nas variáveis locais como um crachá de visitante: ele só funciona dentro daquela sala específica e perde a validade ao cruzar a porta!`
        ].join('\n\n')
    },

    17: {
        tipo: 'video-resumo',
        video: { titulo: 'Módulos Nativos e Tratamento Defensivo de Erros com try/except' },
        conteudo: [
            `## 📺 Guia da Videoaula: Bibliotecas Nativas e Código Resiliente`,
            `Assista à demonstração prática de importação e captura de exceções. A seguir, consulte a síntese conceitual:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Modularização com \`import\':** O ecossistema padrão (*Batteries Included*) traz bibliotecas prontas como \`math\` (cálculos avançados), \`random\` (aleatoriedade) e \`sys\`.`,
            `- **Tratamento de Exceções (\`try/except\'):**`,
            `  • O bloco \`try\` executa o código que pode falhar (como conversão de texto digitado pelo usuário ou leitura de rede).`,
            `  • O bloco \`except NomeDoErro:\` captura a falha específica e oferece uma resposta amigável sem derrubar o programa.`,
            `  • O bloco opcional \`finally:\` executa sempre, havendo erro ou não (ideal para fechar conexões abertas).`,
            `> Conclua este resumo para liberar o desafio prático na Lição 18!`
        ].join('\n\n')
    },

    18: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 1/5 - Tratamento de Erros: Complete a cláusula para capturar falhas de conversão de texto em número:',
                    dica: 'O bloco try executa a tentativa e o except intercepta o erro ValueError.',
                    template: 'try:\n    numero = int("abc")\n{lacuna} ValueError:\n    print("Valor inválido fornecido")',
                    opcoes: ['except', 'catch', 'finally', 'else'],
                    respostaCorreta: 'except',
                    explicacao: 'Em Python, o tratamento de exceções utiliza o par try / except (diferente de linguagens como Java que usam try / catch).'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Hierarquia LEGB: Selecione todas as camadas válidas da regra de escopo de variáveis em Python:',
                    dica: 'A regra LEGB abrange Local, Enclosing, Global e Built-in.',
                    opcoes: [
                        { texto: 'Local (L): dentro da função atual', correta: true },
                        { texto: 'Enclosing (E): de funções externas aninhadas', correta: true },
                        { texto: 'Global (G): nível do arquivo módulo', correta: true },
                        { texto: 'Built-in (B): nativas do interpretador', correta: true },
                        { texto: 'Browser (B): do navegador web', correta: false },
                        { texto: 'External (E): do sistema operacional', correta: false }
                    ],
                    explicacao: 'A busca de variáveis em Python segue estritamente a sequência LEGB: Local, Enclosing, Global e Built-in.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Exceção: Encontre a linha onde o desenvolvedor usou sintaxe de outra linguagem:',
                    dica: 'Python não possui a palavra-chave "catch"!',
                    linhasCodigo: [
                        '1. try:',
                        '2.     resultado = 10 / 0',
                        '3. catch ZeroDivisionError:',
                        '4.     print("Divisão por zero não é permitida")'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, foi usado "catch", palavra de Java/C#/JavaScript. Em Python usa-se "except ZeroDivisionError:".'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Estrutura Resiliente: Ordene a sequência completa de tratamento com garantia de encerramento:',
                    dica: 'Inicie com try, capture a falha com except e use finally para fechar recursos.',
                    itens: [
                        'try:',
                        '    conexao = abrir_banco()',
                        'except ConnectionError:',
                        '    print("Falha ao conectar")',
                        'finally:',
                        '    fechar_recursos()'
                    ],
                    ordemCorreta: [
                        'try:',
                        '    conexao = abrir_banco()',
                        'except ConnectionError:',
                        '    print("Falha ao conectar")',
                        'finally:',
                        '    fechar_recursos()'
                    ],
                    explicacao: 'O bloco try tenta a operação, except trata a falha e finally é executado incondicionalmente.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Selecione os módulos que JÁ VÊM NATIVOS na instalação padrão do Python (Batteries Included):',
                    dica: 'Módulos como math, random, sys e json não precisam de "pip install"!',
                    opcoes: [
                        { texto: 'math (cálculos matemáticos)', correta: true },
                        { texto: 'random (números aleatórios)', correta: true },
                        { texto: 'sys (parâmetros do interpretador)', correta: true },
                        { texto: 'datetime (manipulação temporal)', correta: true },
                        { texto: 'numpy (exige pip install)', correta: false },
                        { texto: 'pandas (exige pip install)', correta: false },
                        { texto: 'django (exige pip install)', correta: false }
                    ],
                    explicacao: 'Python possui uma vasta biblioteca padrão (math, random, sys, datetime, json) disponível imediatamente via import sem precisar de pip.'
                }
            ]
        }
    },

    // --- BLOCO 7 (Aulas 19 a 21) ---
    19: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Manipular arquivos no sistema de arquivos com segurança utilizando o gerenciador de contexto \`with open()\`.`,
            `### 1. A Importância da Persistência de Dados`,
            `Até agora, todas as variáveis residiam apenas na memória RAM volátil: ao desligar o programa, os dados desapareciam. Para que um software guarde informações a longo prazo, precisamos gravar dados em disco rígido ou SSD.`,
            `### 2. O Gerenciador de Contexto \`with open()\` (PEP 343)`,
            `O modo profissional e seguro de abrir arquivos em Python é utilizando a cláusula \`with\`:`,
            `\`\`\`python\nwith open("relatorio.txt", "w", encoding="utf-8") as arq:\n    arq.write("Relatório diário de vendas\\n")\n\`\`\``,
            `- O bloco \`with\` garante que o arquivo seja **fechado automaticamente** pelo sistema operacional, mesmo que ocorra uma pane ou exceção durante a gravação.`,
            `- O parâmetro \`encoding="utf-8"\` é essencial para preservar acentos e caracteres especiais do português sem corromper o texto.`,
            `### 3. Modos de Abertura Essenciais`,
            `- \`"r"\` (Read): Modo de leitura padrão. O arquivo deve existir previamente.`,
            `- \`"w"\` (Write): Modo de escrita destrutiva (sobrescreve todo o conteúdo existente ou cria um arquivo novo).`,
            `- \`"a"\` (Append): Modo de anexo (adiciona novos dados ao final sem apagar o conteúdo antigo).`,
            `> **Dica de Fixação Galea (TDAH):** Pense no \`with\` como um porteiro responsável: ele abre o arquivo para você entrar, te acompanha enquanto trabalha e garante que a porta seja trancada ao sair!`
        ].join('\n\n')
    },

    20: {
        tipo: 'video-resumo',
        video: { titulo: 'Compreensão de Listas (List Comprehensions) e Código Pythônico' },
        conteudo: [
            `## 📺 Guia da Videoaula: List Comprehensions em Profundidade`,
            `Assista ao vídeo e veja como transformar laços for tradicionais de 5 linhas em instruções elegantes de uma única linha. A seguir, consulte a síntese:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Sintaxe Canônica:** \`[expressao for item in iteravel (if condicao_filtro)]\`.`,
            `- **Exemplo Prático de Transformação:**`,
            `  • Código tradicional:`,
            `    \`\`\`python\n    quadrados = []\n    for x in range(5):\n        quadrados.append(x ** 2)\n    \`\`\``,
            `  • Versão Pythônica: \`quadrados = [x ** 2 for x in range(5)]\`.`,
            `- **Com Filtro Condicional:** \`pares = [n for n in numeros if n % 2 == 0]\`.`,
            `- **Vantagem de Performance:** Além de mais compactas e legíveis, list comprehensions são executadas diretamente em nível de bytecode em C, sendo sensivelmente mais rápidas que laços manuais com \`.append()\`.`,
            `> Conclua este resumo para encarar o desafio da Lição 21!`
        ].join('\n\n')
    },

    21: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - Compreensão de Listas: Selecione todas as list comprehensions 100% VÁLIDAS em Python:',
                    dica: 'Lembre-se da estrutura [expressao for variavel in colecao (if filtro)]!',
                    opcoes: [
                        { texto: '[x * 2 for x in range(10)]', correta: true },
                        { texto: '[item.upper() for item in palavras]', correta: true },
                        { texto: '[n for n in dados if n > 0]', correta: true },
                        { texto: '[0 for _ in range(5)]', correta: true },
                        { texto: '[float(v) for v in precos]', correta: true },
                        { texto: '[x while x < 5]', correta: false },
                        { texto: 'for x in range(5): [x]', correta: false },
                        { texto: '[for n in lista: n]', correta: false }
                    ],
                    explicacao: 'List comprehensions usam a sintaxe [expressao for item in iteravel (if condicao)]. Não admitem while nem a inversão fora dos colchetes.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Gerenciador de Contexto: Complete o modo de abertura que cria ou sobrescreve o arquivo com UTF-8:',
                    dica: 'O modo "w" (write) abre para escrita destrutiva, criando o arquivo caso não exista.',
                    template: 'with open("relatorio.txt", "{lacuna}", encoding="utf-8") as arq:\n    arq.write("Dados Galea")',
                    opcoes: ['w', 'r', 'x', 'b'],
                    respostaCorreta: 'w',
                    explicacao: 'O modo "w" (write) abre o arquivo para escrita, criando-o ou truncando seu conteúdo anterior.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Contexto: Encontre a linha onde o desenvolvedor errou o alias de abertura do arquivo:',
                    dica: 'A sintaxe canônica do gerenciador de contexto é with open(...) as identificador:.',
                    linhasCodigo: [
                        '1. caminho = "notas.txt"',
                        '2. with open(caminho, "r") to f:',
                        '3.     conteudo = f.read()',
                        '4. print(conteudo)'
                    ],
                    linhaBug: 1,
                    explicacao: 'Na linha 2, foi usado "to f:" em vez de "as f:". Em Python a palavra-chave correta é "as".'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Fluxo de Persistência: Ordene o processo seguro de escrita de logs sem vazamento de recursos:',
                    dica: 'Abra com with open no modo "a" (append), escreva a linha com \\n e saia do bloco.',
                    itens: [
                        'with open("log.txt", "a", encoding="utf-8") as arq:',
                        '    linha = "Registro gravado às 10:00\\n"',
                        '    arq.write(linha)',
                        '# O arquivo fecha automaticamente aqui ao sair do with'
                    ],
                    ordemCorreta: [
                        'with open("log.txt", "a", encoding="utf-8") as arq:',
                        '    linha = "Registro gravado às 10:00\\n"',
                        '    arq.write(linha)',
                        '# O arquivo fecha automaticamente aqui ao sair do with'
                    ],
                    explicacao: 'O with garante o fechamento determinístico do arquivo mesmo em caso de erro, prevenindo corrupção de dados.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete o filtro da list comprehension para capturar apenas números pares:',
                    dica: 'O operador % calcula o resto da divisão. Se for igual a zero (== 0), o número é par.',
                    template: 'pares = [n for n in range(50) if n % 2 {lacuna} 0]',
                    opcoes: ['==', '!=', 'is', '='],
                    respostaCorreta: '==',
                    explicacao: 'A comparação de igualdade estrita em Python é feita com == (dois sinais de igual).'
                }
            ]
        }
    },

    // --- BLOCO 8 (Aulas 22 a 24) ---
    22: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Compreender os fundamentos da Programação Orientada a Objetos (POO): o conceito de Classes, Instâncias e o papel do \`self\`.`,
            `### 1. O Paradigma Orientado a Objetos`,
            `Até agora, programamos sob o paradigma procedural. A POO propõe organizar o código modelando entidades do mundo real com suas características (atributos/dados) e seus comportamentos (métodos/funções).`,
            `### 2. Classe vs Objeto`,
            `- **Classe:** É a planta arquitetônica ou o molde abstrato. Define quais dados e ações toda entidade desse tipo terá. Declarada com \`class NomeClasse:\` (convenção *PascalCase*).`,
            `- **Objeto (Instância):** É a construção real e concreta criada a partir do molde: \`jogador_1 = Personagem("Aragorn", 100)\`.`,
            `### 3. O Mistério do Parâmetro self Desvendado`,
            `Em qualquer método de classe em Python, o primeiro parâmetro deve ser obrigatoriamente chamado de **\`self\`**:`,
            `- \`self\` representa a **instância específica** que está executando a ação naquele milissegundo.`,
            `- Ao invocar \`jogador_1.atacar()\`, o Python converte nos bastidores para \`Personagem.atacar(jogador_1)\`.`,
            `> **Dica de Fixação Galea (TDAH):** Pense na classe como uma forma de cortar biscoitos: a forma é a classe, e cada biscoito de gengibre que sai do forno é um objeto único com sua própria quantidade de confeitos!`
        ].join('\n\n')
    },

    23: {
        tipo: 'video-resumo',
        video: { titulo: 'O Construtor __init__, Encapsulamento e Herança com super()' },
        conteudo: [
            `## 📺 Guia da Videoaula: Construtores e Herança entre Classes`,
            `Assista ao vídeo explicativo sobre herança de atributos e reaproveitamento de código em POO. A seguir, consulte a síntese essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **O Método Mágico \`__init__\':** É o construtor oficial do objeto. É disparado automaticamente no momento em que a classe é instanciada para inicializar os atributos: \`self.nome = nome\`.`,
            `- **Herança de Classes:** Permite que uma classe filha herde atributos e métodos de uma classe mãe, especializando comportamentos: \`class Guerreiro(Personagem):\`.`,
            `- **O Método \`super()\':** Invoca o construtor da classe base, permitindo que a classe filha reaproveite toda a lógica de inicialização original sem duplicar código: \`super().__init__(nome, vida)\`.`,
            `> Conclua este resumo para desbloquear a gamificação na Lição 24!`
        ].join('\n\n')
    },

    24: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 1/5 - Herança de Classes: Ordene a definição sintática correta de uma classe filha herdando da classe base:',
                    dica: 'A herança é indicada nos parênteses da classe e o construtor da mãe é chamado com super().__init__.',
                    itens: [
                        'class Mago(Personagem):',
                        '    def __init__(self, nome, magia):',
                        '        super().__init__(nome)',
                        '        self.magia = magia'
                    ],
                    ordemCorreta: [
                        'class Mago(Personagem):',
                        '    def __init__(self, nome, magia):',
                        '        super().__init__(nome)',
                        '        self.magia = magia'
                    ],
                    explicacao: 'Primeiro declaramos a herança com class Mago(Personagem):, depois o construtor __init__, acionamos super().__init__(nome) e atribuímos self.magia.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - O Parâmetro de Instância: Complete o primeiro parâmetro obrigatório de métodos em classes Python:',
                    dica: 'O parâmetro self representa a instância concreta que executa o método.',
                    template: 'class Guerreiro:\n    def atacar({lacuna}):\n        print("Ataque com espada!")',
                    opcoes: ['self', 'this', 'me', 'inst'],
                    respostaCorreta: 'self',
                    explicacao: 'Em Python, o primeiro parâmetro de qualquer método de instância deve ser explicitamente self.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de POO: Encontre o método que falhará ao ser invocado por esquecer o parâmetro de instância:',
                    dica: 'Todo método de instância necessita de self como primeiro parâmetro!',
                    linhasCodigo: [
                        '1. class Carro:',
                        '2.     def __init__(self, modelo):',
                        '3.         self.modelo = modelo',
                        '4.     def buzinar():',
                        '5.         print("Bi bi!")'
                    ],
                    linhaBug: 3,
                    explicacao: 'Na linha 4, o método "buzinar()" não declarou "def buzinar(self):". Ao chamar carro.buzinar(), o Python lançará TypeError.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 4/5 - Pilares de POO: Selecione todas as afirmativas VERDADEIRAS sobre Orientação a Objetos em Python:',
                    dica: 'Pense em classes como moldes, instâncias como objetos reais e super() como a ligação com a classe mãe.',
                    opcoes: [
                        { texto: '__init__ é o método construtor oficial do objeto', correta: true },
                        { texto: 'Uma classe pode servir de modelo para múltiplos objetos', correta: true },
                        { texto: 'super() invoca a implementação da classe mãe', correta: true },
                        { texto: 'self referencia a instância específica em execução', correta: true },
                        { texto: 'Classes em Python só podem ter 1 único método', correta: false },
                        { texto: 'Herança é declarada com a palavra "extends"', correta: false }
                    ],
                    explicacao: 'Python usa parênteses para herança (class Filha(Mae):) e não a palavra extends como no Java. __init__ e self são os pilares de instanciação.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete o nome do método especial de inicialização (*dunder init*):',
                    dica: 'Ele possui dois underlines antes e dois depois da palavra init.',
                    template: 'class Aluno:\n    def {lacuna}(self, matricula):\n        self.matricula = matricula',
                    opcoes: ['__init__', '_init_', 'constructor', 'init'],
                    respostaCorreta: '__init__',
                    explicacao: 'O método canônico __init__ é chamado automaticamente durante a criação de qualquer nova instância.'
                }
            ]
        }
    },

    // --- BLOCO 9 (Aulas 25 a 27) ---
    25: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Manipular registros temporais com o módulo nativo \`datetime\`, formatação de datas e cálculo de deltas de tempo.`,
            `### 1. O Desafio do Tempo na Computação`,
            `Lidar com fusos horários, anos bissextos e padrões internacionais de calendário exige bibliotecas padronizadas. O Python disponibiliza o módulo \`datetime\` para controle cronológico robusto.`,
            `### 2. Captura e Formatação de Datas`,
            `\`\`\`python\nfrom datetime import datetime\nagora = datetime.now()\n# Formatação no padrão brasileiro:\ndata_formatada = agora.strftime("%d/%m/%Y %H:%M")\n\`\`\``,
            `- O método \`.strftime()\` (*String Format Time*) formata o objeto temporal em texto amigável: \`%d\` (dia com 2 dígitos), \`%m\` (mês), \`%Y\` (ano completo com 4 dígitos), \`%H\` (hora 24h), \`%M\` (minutos).`,
            `- O método inverso \`.strptime()\` (*String Parse Time*) converte um texto digitado pelo usuário de volta para objeto de data.`,
            `### 3. Operações com timedelta`,
            `A classe \`timedelta\` permite calcular prazos somando ou subtraindo dias e semanas: \`vencimento = agora + timedelta(days=30)\`.`,
            `> **Dica de Fixação Galea (TDAH):** Lembre-se: \`strftime\` tem F de Formatar (vira texto), e \`strptime\` tem P de Parse (analisa e vira data)!`
        ].join('\n\n')
    },

    26: {
        tipo: 'video-resumo',
        video: { titulo: 'Trabalhando com Dados Estruturados em JSON no Python' },
        conteudo: [
            `## 📺 Guia da Videoaula: Intercâmbio de Dados com o Módulo json`,
            `Assista ao vídeo e veja como APIs de ponta trocam informações no formato JSON. A seguir, consulte o resumo essencial:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **O que é JSON:** *JavaScript Object Notation* é o formato textual universal padrão da web para comunicação entre servidores e clientes.`,
            `- **Os Dois Métodos Cruciais do Módulo \`json\':**`,
            `  • \`json.dumps(objeto)\` (*Dump String*): Serializa dicionários e listas Python em texto JSON formatado.`,
            `  • \`json.loads(texto_json)\` (*Load String*): Desserializa o texto JSON de volta para dicionários e listas nativas do Python.`,
            `- Mapeamento de tipos: \`True\` do Python vira \`true\` no JSON; dicionários viram objetos \`{}\`; listas viram arrays \`[]\`; \`None\` vira \`null\`.`,
            `> Conclua este resumo para encarar o desafio da Lição 27!`
        ].join('\n\n')
    },

    27: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 1/5 - JSON & Datetime: Selecione todas as afirmações tecnicamente VERDADEIRAS sobre JSON e datas:',
                    dica: 'Lembre-se dos métodos json.dumps / json.loads e do formato strftime do módulo datetime!',
                    opcoes: [
                        { texto: 'json.dumps converte dicionários em texto JSON', correta: true },
                        { texto: 'json.loads converte texto JSON em dicionários Python', correta: true },
                        { texto: 'datetime.now() obtém data e hora atuais do sistema', correta: true },
                        { texto: 'strftime("%d/%m/%Y") formata data no padrão brasileiro', correta: true },
                        { texto: 'JSON é suportado nativamente via import json', correta: true },
                        { texto: 'json.dumps apaga arquivos do disco rígido', correta: false },
                        { texto: 'JSON só funciona no Linux', correta: false },
                        { texto: 'datetime só funciona com anos bissextos', correta: false }
                    ],
                    explicacao: 'O módulo json oferece serialização (dumps) e desserialização (loads) universal, enquanto datetime trata registros temporais.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 2/5 - Desserialização JSON: Complete o método que converte uma string formatada em JSON de volta para dicionário Python:',
                    dica: 'loads significa "load string" (carregar a partir de texto).',
                    template: 'import json\ntexto_bruto = \'{"pontos": 50}\'\ndados = json.{lacuna}(texto_bruto)',
                    opcoes: ['loads', 'dumps', 'parse', 'to_dict'],
                    respostaCorreta: 'loads',
                    explicacao: 'O método json.loads(string) converte texto em formato JSON diretamente para estruturas nativas do Python.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de Importação: Localize a linha que causará um NameError fatal ao manipular JSON:',
                    dica: 'Nenhum método do módulo json pode ser usado sem antes importá-lo no script!',
                    linhasCodigo: [
                        '1. perfil = {"nome": "Lucas", "nivel": 10}',
                        '2. json_formatado = json.dumps(perfil)',
                        '3. print(json_formatado)',
                        '4. # O import json foi completamente esquecido no início!'
                    ],
                    linhaBug: 1,
                    explicacao: 'Na linha 2, a chamada "json.dumps" falhará com NameError porque o módulo "json" não foi importado com "import json".'
                },
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 4/5 - Pipeline de Exportação JSON: Ordene o fluxo de criação, serialização e gravação de dados estruturados:',
                    dica: 'Importe o json, monte o dicionário, serialize para texto com json.dumps e salve com with open.',
                    itens: [
                        'import json',
                        'dados_jogador = {"nick": "Falcon", "score": 999}',
                        'json_texto = json.dumps(dados_jogador, indent=2)',
                        'with open("save.json", "w") as f:\n    f.write(json_texto)'
                    ],
                    ordemCorreta: [
                        'import json',
                        'dados_jogador = {"nick": "Falcon", "score": 999}',
                        'json_texto = json.dumps(dados_jogador, indent=2)',
                        'with open("save.json", "w") as f:\n    f.write(json_texto)'
                    ],
                    explicacao: 'O fluxo padrão de persistência serializa o objeto em texto JSON e o grava em disco com with open.'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 5/5 - Desafio Mestre: Complete a diretiva de formatação do strftime para exibir o ano com 4 dígitos:',
                    dica: '%Y com letra maiúscula formata o ano completo (ex: 2026), enquanto %y minúsculo exibe apenas 2 dígitos (26).',
                    template: 'from datetime import datetime\ndata_str = datetime.now().strftime("%d/%m/{lacuna}")',
                    opcoes: ['%Y', '%y', '%A', '%year'],
                    respostaCorreta: '%Y',
                    explicacao: 'A diretiva %Y (maiúsculo) formata o ano completo com quatro algarismos (ex.: 2026).'
                }
            ]
        }
    },

    // --- BLOCO 10 (Aulas 28 a 30) ---
    28: {
        tipo: 'texto',
        conteudo: [
            `**Objetivo da Aula:** Dominar o guia oficial de estilo PEP 8 (*Python Enhancement Proposal 8*), linters e padrões de código profissional.`,
            `### 1. O que é a PEP 8`,
            `Escrita em 2001 por Guido van Rossum e Barry Warsaw, a **PEP 8** é a diretriz oficial de estilo que define a identidade visual do código Python em todo o mundo. Seguir a PEP 8 garante que qualquer desenvolvedor no planeta consiga ler e manter o seu código com facilidade.`,
            `### 2. Principais Diretrizes da PEP 8`,
            `- **Indentação:** Utilize rigorosamente **4 espaços** por nível de aninhamento (nunca misture tabulações e espaços).`,
            `- **Comprimento de Linha:** Mantenha linhas com no máximo 79 a 88 caracteres para caber confortavelmente em múltiplos monitores e revisões de pull request.`,
            `- **Convenções de Nomes:**`,
            `  • Módulos e pacotes: minúsculas curtas (\`meu_modulo.py\`).`,
            `  • Classes: *PascalCase* (\`ContaBancaria\`, \`ProcessadorDados\`).`,
            `  • Funções e variáveis: *snake_case* (\`calcular_media\`, \`saldo_atual\`).`,
            `  • Constantes: *SCREAMING_SNAKE_CASE* (\`PI = 3.1415\`, \`TAXA_MAXIMA = 0.2\`).`,
            `- **Espaçamento:** Dois espaços em branco entre funções no nível do módulo; um espaço ao redor de operadores de atribuição (\`x = 10\`).`,
            `> **Dica de Fixação Galea (TDAH):** Pense na PEP 8 como as regras de trânsito: quando todo mundo dirige pelo mesmo lado da pista, ninguém bate o carro e o tráfego flui sem estresse!`
        ].join('\n\n')
    },

    29: {
        tipo: 'video-resumo',
        video: { titulo: 'Arquitetura de Software e Ciclo de Vida do Projeto Final' },
        conteudo: [
            `## 📺 Guia da Videoaula: Estruturação de Aplicações Completas`,
            `Assista ao planejamento da arquitetura da aplicação final integrando POO, persistência em JSON e menus interativos. A seguir, consulte a síntese:`,
            `### 📌 Tela de Resumo & Consulta Rápida:`,
            `- **Separação de Camadas (MVC Simplificado):**`,
            `  1. **Modelo de Dados:** Classes responsáveis pelas entidades e regras de validação.`,
            `  2. **Persistência:** Funções dedicadas a salvar e carregar dados estruturados em arquivos JSON.`,
            `  3. **Interface do Usuário:** Loop interativo com \`while True\` apresentando opções claras e tratando entradas inválidas com \`try/except\`.`,
            `- **Robustez e Segurança:** Nunca permita que o programa encerre abruptamente por erro de digitação do usuário. Trate exceções e avise com mensagens humanizadas.`,
            `> Conclua este resumo para desbloquear a Grande Gamificação Final do Curso de Python!`
        ].join('\n\n')
    },

    30: {
        tipo: 'gamificada',
        gamificacao: {
            etapas: [
                {
                    tipo: 'ordene',
                    enunciado: 'Fase 1/5 - Ciclo de Vida do Software: Ordene o fluxo de inicialização, execução e encerramento da aplicação final:',
                    dica: 'Inicie importando recursos e carregando dados; execute o menu interativo e finalize persistindo as alterações em disco.',
                    itens: [
                        'Importar módulos nativos e carregar dados salvos em JSON',
                        'Iniciar o loop principal do menu interativo com while True',
                        'Processar os comandos do usuário e atualizar os objetos em memória',
                        'Salvar os dados alterados em arquivo e encerrar a aplicação com segurança'
                    ],
                    ordemCorreta: [
                        'Importar módulos nativos e carregar dados salvos em JSON',
                        'Iniciar o loop principal do menu interativo com while True',
                        'Processar os comandos do usuário e atualizar os objetos em memória',
                        'Salvar os dados alterados em arquivo e encerrar a aplicação com segurança'
                    ],
                    explicacao: 'O ciclo canônico de softwares robustos é: 1. Carregar estado; 2. Exibir menu interativo; 3. Processar comandos; 4. Persistir alterações antes de sair.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 2/5 - Padrões de Código PEP 8: Selecione todas as convenções que seguem RIGOROSAMENTE a PEP 8:',
                    dica: '4 espaços de indentação, snake_case para funções/variáveis, PascalCase para classes e SCREAMING_SNAKE para constantes.',
                    opcoes: [
                        { texto: '4 espaços por nível de indentação (sem tabs)', correta: true },
                        { texto: 'class GerenciadorContas: (PascalCase)', correta: true },
                        { texto: 'def calcular_imposto(): (snake_case)', correta: true },
                        { texto: 'LIMITE_MAXIMO = 100 (constantes)', correta: true },
                        { texto: 'class gerenciador_contas: (classe em snake_case)', correta: false },
                        { texto: 'def CalcularImposto(): (função em PascalCase)', correta: false },
                        { texto: 'Indentação com 1 espaço apenas', correta: false }
                    ],
                    explicacao: 'A PEP 8 padroniza: 4 espaços para indentação, PascalCase para classes, snake_case para funções/variáveis e letras maiúsculas para constantes.'
                },
                {
                    tipo: 'caca-bug',
                    enunciado: 'Fase 3/5 - Caça-Bug de PEP 8: Identifique a linha que viola a convenção de nomenclatura de classes em Python:',
                    dica: 'Pela PEP 8, classes devem adotar PascalCase (PrimeiraLetraMaiuscula), nunca snake_case!',
                    linhasCodigo: [
                        '1. # Módulo financeiro',
                        '2. taxa_juros = 0.05',
                        '3. class conta_bancaria_cliente:',
                        '4.     def __init__(self, saldo):',
                        '5.         self.saldo = saldo'
                    ],
                    linhaBug: 2,
                    explicacao: 'Na linha 3, o nome "conta_bancaria_cliente" viola a PEP 8. A convenção canônica para classes exige PascalCase: "ContaBancariaCliente".'
                },
                {
                    tipo: 'lacunas',
                    enunciado: 'Fase 4/5 - Convenção de Constantes: Complete a variável de taxa imutável seguindo a convenção PEP 8:',
                    dica: 'Constantes globais na PEP 8 são escritas inteiramente em maiúsculas com underline (SCREAMING_SNAKE_CASE).',
                    template: '{lacuna} = 0.15\ndef aplicar_taxa(valor):\n    return valor * (1 + TAXA_PADRAO)',
                    opcoes: ['TAXA_PADRAO', 'taxaPadrao', 'taxa_padrao', 'TaxaPadrao'],
                    respostaCorreta: 'TAXA_PADRAO',
                    explicacao: 'A PEP 8 estipula que variáveis com valor constante que não devem ser reatribuídas sejam grafadas em caixa alta com sublinhados.'
                },
                {
                    tipo: 'grid-chips',
                    enunciado: 'Fase 5/5 - Grande Desafio Final de Python: Selecione os 4 pilares de um código Pythônico profissional:',
                    dica: 'Lembre-se do Zen do Python: legibilidade, tratamento com try/except, with open para recursos e PEP 8!',
                    opcoes: [
                        { texto: 'Legibilidade e clareza de código (PEP 20)', correta: true },
                        { texto: 'Tratamento preventivo de erros com try/except', correta: true },
                        { texto: 'Gerenciamento automático de recursos com with', correta: true },
                        { texto: 'Aderência às boas práticas de estilo da PEP 8', correta: true },
                        { texto: 'Usar comandos longos e obscuros em uma única linha', correta: false },
                        { texto: 'Ignorar erros com except: pass silencioso', correta: false }
                    ],
                    explicacao: 'Parabéns! Você dominou os fundamentos e boas práticas do Python moderno: código legível, seguro, padronizado e defensivo!'
                }
            ]
        }
    }
};
