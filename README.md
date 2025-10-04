# Lista de Exercícios - Javascript

Este projeto é uma implementação interativa de uma lista de exercícios de Javascript, cobrindo conceitos fundamentais da linguagem. A solução foi desenvolvida como parte do Módulo 1 do curso de Front-End da Ada Tech.

Os exercícios foram propostos pelo Professor Luís Fernando Teixeira Bicalho e implementados por Rita Jeveaux.

**Nota:** O projeto está disponivel no endereço: [ https://ritajeveaux.github.io/javascript-exercicios/ ](https://ritajeveaux.github.io/javascript-exercicios/)

## ✨ Funcionalidades

A página web apresenta os exercícios organizados em seções colapsáveis (accordion), permitindo ao usuário interagir com cada um deles através de formulários.

As seções abordadas são:

- **I. Variáveis:** Cálculos básicos como multiplicação, média, desconto, área e perímetro.
- **II. Funções:** Uso de funções para modularizar cálculos de média, produto e média ponderada.
- **III. Condicionais:** Lógica condicional para verificar status de aprovação de alunos e calcular reajustes salariais.
- **IV. Estruturas de Repetição:** Validação de dados de formulário e identificação do maior número em uma lista.

### 🎯 Desafio

O projeto implementa o desafio proposto no enunciado: em vez de utilizar `prompt()` para a entrada de dados, todos os exercícios foram integrados a uma interface HTML com formulários, proporcionando uma experiência de usuário mais rica e prática.

## 🚀 Tecnologias Utilizadas

- **HTML5:** Para a estrutura semântica da página.
- **CSS3:** Para a estilização e layout, incluindo a interface de accordion.
- **JavaScript (ES6+):** Para toda a lógica dos exercícios, manipulação do DOM e interatividade.

## 📂 Estrutura do Projeto

```
web-modulo1-Trabalho1-versao-final/
├── js/
│   ├── accordion.js   # Lógica para o componente de accordion
│   └── main.js        # Funções Javascript para resolver os exercícios
├── css/
│   └── style.css      # Estilos da página
├── index.html         # Arquivo principal com a estrutura HTML e formulários
├── ENUNCIADO.md       # O enunciado original dos exercícios
└── README.md          # Este arquivo
```

- **`index.html`**: O coração da aplicação, contendo todos os elementos de formulário para entrada de dados e as áreas para exibição dos resultados.
- **`js/main.js`**: Contém todas as funções que realizam os cálculos solicitados. As funções são bem organizadas e reutilizadas quando possível (ex: `calcula_produto`).
- **`js/accordion.js`**: Script que implementa a funcionalidade de expandir e recolher as seções de exercícios, melhorando a navegabilidade. Utiliza um `ResizeObserver` para ajustar dinamicamente a altura do painel quando o conteúdo do resultado é inserido.

## 🏁 Como Executar

Não é necessário nenhum servidor ou processo de build. Basta seguir os passos:

1.  Clone este repositório:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd web-modulo1-Trabalho1-versao-final
    ```
3.  Abra o arquivo `index.html` em seu navegador de preferência (Google Chrome, Firefox, etc.).

---

_© 2025 - Rita Jeveaux_
