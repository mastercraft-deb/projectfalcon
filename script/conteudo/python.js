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
                    enunciado: 'Selecione todos os nomes de variável perfeitamente VÁLIDOS e que seguem as boas práticas do Python (PEP 8):',
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
                    explicacao: 'Em Python, nomes de variáveis não podem iniciar com algarismos, conter espaços, caracteres especiais nem coincidir com palavras reservadas da linguagem como class.'
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
                    tipo: 'caca-bug',
                    enunciado: 'Localize a linha que contém o erro de sintaxe que impede a execução deste bloco condicional:',
                    dica: 'Em Python, toda cláusula if, elif e else deve terminar impreterivelmente com dois pontos (:)',
                    linhasCodigo: [
                        '1. idade = int(input("Informe sua idade: "))',
                        '2. if idade >= 18:',
                        '3.     print("Acesso autorizado ao laboratório")',
                        '4. else',
                        '5.     print("Acesso restrito para menores")'
                    ],
                    linhaBug: 3,
                    explicacao: 'Na linha 4, a cláusula "else" esqueceu os dois pontos finais (:). A sintaxe canônica e obrigatória em Python é "else:".'
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
                    tipo: 'ordene',
                    enunciado: 'Ordene a sequência lógica e sintática correta de um laço while seguro que imprime de 1 a 5 sem entrar em loop infinito:',
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
                    enunciado: 'Complete a linha de código utilizando o método seguro de dicionários que evita o erro KeyError:',
                    dica: 'O método get busca o valor associado à chave ou retorna None caso ela não exista.',
                    template: 'usuario = {"nome": "Galea", "xp": 100}\nvalor = usuario.{lacuna}("nome")',
                    opcoes: ['get', 'pop', 'append', 'push', 'find'],
                    respostaCorreta: 'get',
                    explicacao: 'O método .get("chave") é a forma canônica e recomendada de consultar valores em dicionários sem correr risco de KeyError.'
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
                    enunciado: 'Encontre a linha com vício de sintaxe na definição desta função em Python:',
                    dica: 'Diferente de outras linguagens, em Python funções usam a palavra-chave def.',
                    linhasCodigo: [
                        '1. # Função utilitária de boas-vindas',
                        '2. function calcular_desconto(preco, taxa):',
                        '3.     return preco * (1 - taxa)',
                        '4. resultado = calcular_desconto(100, 0.15)'
                    ],
                    linhaBug: 1,
                    explicacao: 'Na linha 2, foi utilizada a palavra "function" (típica do JavaScript ou PHP). Em Python a palavra-chave canônica e obrigatória é "def".'
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
                    enunciado: 'Complete a cláusula de proteção para capturar falhas de conversão de texto em número:',
                    dica: 'O bloco try tenta executar o comando e o except intercepta o erro ValueError.',
                    template: 'try:\n    numero = int("abc")\n{lacuna} ValueError:\n    print("Valor inválido fornecido")',
                    opcoes: ['except', 'catch', 'finally', 'else', 'error'],
                    respostaCorreta: 'except',
                    explicacao: 'Em Python, o tratamento de exceções utiliza o par try / except (diferente de linguagens como Java que usam try / catch).'
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
                    enunciado: 'Selecione todas as compreensões de lista (list comprehensions) 100% VÁLIDAS em Python:',
                    dica: 'Lembre-se da estrutura [expressao for variavel in colecao (if filtro)]!',
                    opcoes: [
                        { texto: '[x * 2 for x in range(10)]', correta: true },
                        { texto: '[item.upper() for item in palavras]', correta: true },
                        { texto: '[n for n in dados if n > 0]', correta: true },
                        { texto: '[0 for _ in range(5)]', correta: true },
                        { texto: '[float(v) for v in precos]', correta: true },
                        { texto: '[x while x < 5]', correta: false },
                        { texto: 'for x in range(5): [x]', correta: false },
                        { texto: '[for n in lista: n]', correta: false },
                        { texto: '[x if for x in lista]', correta: false }
                    ],
                    explicacao: 'List comprehensions usam a sintaxe [expressao for item in iteravel (if condicao)]. Não admitem while nem a inversão do laço for fora dos colchetes.'
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
                    enunciado: 'Ordene a definição sintática correta de uma classe filha Mago herdando da classe base Personagem:',
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
                    explicacao: 'Primeiro declaramos a herança com class Mago(Personagem):, depois definimos o construtor com __init__, acionamos o super().__init__(nome) e finalizamos atribuindo self.magia.'
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
                    enunciado: 'Selecione todas as afirmações tecnicamente VERDADEIRAS sobre JSON e datas em Python:',
                    dica: 'Lembre-se dos métodos json.dumps / json.loads e do formato strftime do módulo datetime!',
                    opcoes: [
                        { texto: 'json.dumps converte dicionários em texto JSON', correta: true },
                        { texto: 'json.loads converte texto JSON em dicionários Python', correta: true },
                        { texto: 'datetime.now() obtém data e hora atuais do sistema', correta: true },
                        { texto: 'strftime("%d/%m/%Y") formata data no padrão dia/mês/ano', correta: true },
                        { texto: 'JSON é suportado nativamente via import json', correta: true },
                        { texto: 'json.dumps apaga arquivos do disco rígido', correta: false },
                        { texto: 'JSON só funciona em sistemas operacionais Linux', correta: false },
                        { texto: 'datetime calcula apenas anos bissextos', correta: false },
                        { texto: 'json.loads serve apenas para somar números', correta: false }
                    ],
                    explicacao: 'O módulo json oferece serialização (dumps) e desserialização (loads) universal, enquanto datetime trata registros e cálculos temporais.'
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
                    enunciado: 'Ordene o ciclo de vida profissional de inicialização, execução e encerramento seguro da aplicação final:',
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
                    explicacao: 'O ciclo canônico de softwares robustos é: 1. Carregar dependências e estado persistido; 2. Exibir o menu interativo; 3. Executar a lógica de negócio; 4. Persistir alterações antes de sair.'
                }
            ]
        }
    }
};
