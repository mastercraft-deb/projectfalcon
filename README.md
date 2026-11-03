# GALEA

**ETEC de Cotia · 2026 · Trabalho de Conclusão de Curso em Desenvolvimento de Sistemas**

Galea é um sistema web para o desenvolvimento de cursos com estilo **gamificado**. Foi pensada para pessoas com TDAH, mas é aberta a todo mundo: lições curtas, recompensa (XP) a cada passo, trilhas claras e uma interface acessível, com identidade visual cósmica.

> **Status:** projeto em desenvolvimento.

---

## Sumário

1. [Sobre o projeto](#sobre-o-projeto)
2. [Cursos](#cursos)
3. [Funcionalidades](#funcionalidades)
4. [Acessibilidade](#acessibilidade)
5. [Como funciona](#como-funciona)
6. [Tecnologias](#tecnologias)
7. [Como rodar o projeto](#como-rodar-o-projeto)
8. [Equipe](#equipe)

---

## Sobre o projeto

Muitas plataformas de ensino pedem atenção contínua por longos períodos, o que pode ser um obstáculo para quem tem dificuldade de concentração. A Galea parte da ideia oposta: dividir o conteúdo em **pequenas etapas**, mostrar sempre **o próximo passo** e **recompensar o progresso**, para que estudar seja uma experiência leve e motivadora.

Princípios do projeto:

- **Lições curtas e objetivas**, organizadas em trilhas.
- **Gamificação com regras claras:** cada aula concluída rende XP, e a aula seguinte só é desbloqueada ao concluir a anterior.
- **Acessibilidade como parte do projeto**, e não como detalhe.
- **Simplicidade:** interface limpa, com foco no que importa em cada momento.

---

## Cursos

O catálogo reúne **6 cursos** e **146 aulas**:

| Curso | Aulas |
|---|---|
| Física (introdução à física quântica) | 24 |
| Elétrica | 20 |
| Python | 30 |
| Programação web | 28 |
| Teoria musical | 18 |
| Matemática | 26 |

---

## Funcionalidades

- **Conta de usuário:** cadastro, login e logout, com senhas protegidas por criptografia.
- **Descobrir:** pesquisa de cursos, com opção de adicionar e remover de "Meus cursos".
- **Meus cursos:** acompanhamento do progresso de cada curso e página própria para cada um.
- **Trilhas gamificadas:** mapa de aulas em círculos, com aulas bloqueadas e desbloqueadas, janela de lição e sistema de **XP**.
- **Notificações:** sino no topo da tela e avisos rápidos de ações, como adicionar ou remover um curso.
- **Comunidade:** chat por curso, para conversar com outros alunos.
- **Perfil:** foto, nome e "Sobre mim" personalizáveis.
- **Configurações:** conta, aparência e acessibilidade, foco e pausas.
- **Páginas de Termos de uso e Privacidade.**

---

## Acessibilidade

A Galea oferece recursos para tornar o estudo mais confortável:

- **Tamanho do texto** ajustável.
- **Movimento reduzido**, para quem se incomoda com animações.
- **Alto contraste.**
- **Espaçamento** ajustável.
- **Modo foco**, que esconde elementos que distraem.
- **Lembretes de pausa**, para estudar em ciclos.
- **Navegação completa pelo teclado**, com foco visível e janelas que fecham com a tecla Esc.

---

## Como funciona

O site é composto por um **front-end** (as telas que o aluno vê) e um **back-end** (o servidor que cuida das contas, dos cursos e do progresso).

- A tela principal funciona como uma "casca": o **menu lateral** e o **sino de notificações** ficam sempre visíveis, e o conteúdo de cada seção (Descobrir, Meus cursos, Comunidade, Perfil e Configurações) aparece no centro.
- Ao abrir um curso, o aluno acessa a **trilha de aulas**. Cada aula concluída soma XP **uma única vez** e libera a próxima.
- O progresso fica ligado à conta do usuário.

---

## Tecnologias

| Camada | Tecnologia | Para que serve |
|---|---|---|
| Front-end | **HTML5** | Estrutura das páginas |
| Front-end | **CSS3** | Visual, responsividade, temas e acessibilidade |
| Front-end | **JavaScript** | Interatividade, trilhas e comunicação com o servidor |
| Back-end | **Node.js** | Ambiente de execução do servidor |
| Back-end | **Express** | Servidor web e rotas da API |

O front-end foi feito **sem frameworks**, com HTML, CSS e JavaScript puros. Os ícones são do conjunto Material Symbols, e o projeto usa as fontes Dalek e Romanica na identidade visual.

---

## Como rodar o projeto

### Requisitos

- **Node.js 18 ou superior**
- **Git**

### Passo a passo

```bash
# 1. Clone o repositório e entre na pasta
git clone https://github.com/mastercraft-deb/projectfalcon.git
cd projectfalcon

# 2. Instale as dependências
npm install

# 3. Crie o arquivo de configuração a partir do modelo
cp .env.example .env          # no Windows (cmd): copy .env.example .env

# 4. Inicie o servidor
npm run dev
```

Depois, abra **http://localhost:3000** no navegador.

> **Importante:** acesse sempre pelo endereço `http://localhost:3000`. Abrir os arquivos `.html` direto do computador não funciona, porque o site depende do servidor.

### Comandos disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor com **nodemon**, que reinicia sozinho ao salvar um arquivo. Ideal para desenvolvimento. |
| `npm start` | Inicia o servidor normalmente. |

---

## Equipe

| Nome | Função |
|---|---|
| **Daniel** | Back-end (Node.js) |
| **Giovanni** | JavaScript |
| **Phelipe** | Front-end |
| **Matheus** | Banco de dados |
| **Miguel B** | Imagens |
| **Miguel L** | Banco de dados |
| **Bruna** | Documentação |

**Instituição:** ETEC de Cotia · **Ano:** 2026

---

## Licença

Projeto acadêmico distribuído sob a licença **ISC**.
