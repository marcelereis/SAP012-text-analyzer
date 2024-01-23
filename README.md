<h1>
    <a href="https://www.laboratoria.la/br">
     <img align="center" width="40px" src="https://v.fastcdn.co/u/cf943cfe/52655001-0-Laboratoria-RGB-isot.png"></a>
    <span>Projeto 01 - Analisador de Texto</span>
</h1> 

![Status](https://img.shields.io/static/v1?label=Status&message=CONCLU%C3%8DDO&color=%3CCOLOR%3E&style=%3CSTYLE%3E&logo=%3CLOGO%3E) ![Date](https://img.shields.io/badge/Release_date-JANEIRO-blue)


<img src="https://i.imgur.com/SaIdQPJ.gif">

## Índice

- [1. Sobre o Projeto](#1-sobre-o-projeto)
- [2. Ferramentas utilizadas](#2-ferramentas-utilizadas)
- [3. Funcionalidades](#3-funcionalidades)
- [4. Boilerplate](#4-boilerplate)
- [5. Objetivos de aprendizagem](#5-objetivos-de-aprendizagem)
- [6. Considerações finais](#7-considerações-finais)

---

## 1. Sobre o Projeto

Um analisador de texto é uma aplicação para extrair informações úteis de um
texto utilizando diversas técnicas, como o processamento de linguagem natural
(PLN), aprendizado de máquina (ML) e análise estatística. Essas aplicações podem
fornecer uma variedade de métricas que oferecem informações básicas sobre
o comprimento e a estrutura do texto, como contagem de palavras, contagem de
caracteres, contagem de sentenças e contagem de parágrafos. Outras métricas
incluem análise de sentimentos, que utiliza técnicas de PLN para determinar
o tom geral positivo, negativo ou neutro do texto, e análise de legibilidade,
que utiliza algoritmos para avaliar a complexidade e legibilidade do texto.

Em geral, as aplicações de análise de texto fornecem informações valiosas e métricas
sobre os textos que podem ajudar os usuários a tomar decisões informadas e tirar
conclusões significativas. Por meio do uso dessas ferramentas de análise, os usuários
podem obter uma compreensão mais profunda dos textos.

Neste projeto, elaborado com propósitos educacionais, construiu-se uma aplicação que capacita os usuários a conduzirem análises de textos diretamente no navegador. Os usuários têm a liberdade de inserir um texto de sua escolha, e a aplicação oferece uma variedade de indicadores e métricas específicas. Essas métricas abarcam diferentes aspectos, incluindo a contagem de caracteres, letras, números e outras estatísticas pertinentes.

- Este projeto foi desenvolvido de forma **individual**, com apoio da equipe e das colegas do Bootcamp de Desenvolvimento Front-end da **Laboratória**.
- O principal objetivo desse projeto é a aprendizagem e o desenvolvimento de habilidades técnicas e softskills.
- Não foi permitido o uso de frameworks de CSS (Bootstrap, Materialize, etc).
- O projeto foi realizado em 5 Sprints.

#### Tecnologias Empregadas
O Analisador de Texto foi desenvolvido utilizando as seguintes tecnologias:

**HTML**: Utilizado para estruturar a interface da aplicação.
**CSS**: Encarregado do estilo e layout visual da aplicação.
**JavaScript**: Implementação das funcionalidades interativas e lógica de análise de texto.

#### Deploy
A aplicação foi publicada (ou _deployed_) para que as usuárias da web possam acessá-la.

Neste projeto, foi utilizado o _Github Pages_ para implantar o site: [Text Analyzer](https://marcelereis.github.io/SAP012-text-analyzer/).


## 2. Ferramentas utilizadas

### Preparo do PC para trabalhar

+ Node.js
+ Git e GitBash
+ Playwright
+ Visual Studio Code

### Linguagens

+ HTML
+ CSS
+ Vanilla JavaScript

## 3. Funcionalidades

A lista de funcionalidades é a seguinte:

- **Contagem de palavras**: a aplicação deve ser capaz de contar o número de palavras no texto de entrada e mostrar essa contagem para a usuária.
- **Contagem de caracteres**: a aplicação deve ser capaz de contar o número de caracteres no texto de entrada, incluindo espaços e sinais de pontuação, e mostrar essa contagem para a usuária.
- **Contagem de caracteres excluindo espaços e sinais de pontuação**: a aplicação deve ser capaz de contar o número de caracteres no texto de entrada, excluindo espaços e sinais de pontuação, e mostrar essa contagem para a usuária. 
- **Contagem de números**: a aplicação deve contar quantos números há no texto de entrada e mostrar essa contagem para a usuária.
- **Soma total dos números**: a aplicação deve somar todos os números que estão no texto de entrada e mostrar o resultado para a usuária.
- **Comprimento médio das palavras**: a aplicação deve calcular o comprimento médio das palavras no texto de entrada e mostrar esse valor para usuária.


#### Como Usar:

- Digite seu texto na caixa de texto principal;
- As métricas serão atualizadas automaticamente à medida que você digita;
- Pressione o botão "Limpar tudo" para zerar todas as contagens e iniciar uma nova análise.


## 4. Boilerplate

A lógica do projeto deve ser implementada completamente em JavaScript. Neste
projeto, NÃO foi permitido usar bibliotecas ou frameworks, apenas JavaScript
puro, também conhecido como Vanilla JavaScript.

Como ponto de partida, realizou-se um processo de _fork_ e _clonagem_ de um
repositório da **Laboratória**, a partir do qual pegamos a estrutura básica com arquivos e configuração inicial de dependências. Esse boilerplate tinha a seguinte estrutura:


    ./
    ├── .babelrc
    ├── .editorconfig
    ├── .eslintrc
    ├── .gitignore
    ├── README.md
    ├── package.json
    ├── src
    │   ├── analyzer.js
    │   ├── index.html
    │   ├── index.js
    │   └── style.css
    └── test
        ├── .eslintrc
        └── analyzer.spec.js

### Scripts / arquivos

Para melhor modulação do projeto os arquivos implementados foram distruídos da seguinte forma:

- **`README.md`**

- **`src/index.html`**

- **`src/style.css`** 

- **`src/index.js`**

- **`src/analyzer.js`**

---


## 5. Objetivos de aprendizagem

### HTML

- **Uso de HTML semântico**
O projeto tinha critérios que especificava o uso de `class`, `id`, `data-testid` `name`.

### CSS

- **Uso de seletores CSS**

- **Modelo de caixa (box model): borda, margem, preenchimento**

### Web APIs

- **Uso de seletores do DOM**: `querySelector` e `getElementById`.

- **Manipulação de eventos do DOM (ouvintes, propagação, delegação)**: `addEventListener`.

- **Manipulação dinâmica do DOM**:`textContent`.
      

### JavaScript

- **Tipos de dados primitivos**

- **Strings (cadeias de caracteres)**

- **Variáveis (declaração, atribuição, escopo)**

- **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

- **Uso de loops (while, for, for..of)**

- **Funções (parâmetros, argumentos, retorno)**

- **Testes unitários (unit tests)**

- **Módulos do ECMAScript (ES Modules)**

- **Uso de linter (ESLINT)**

- **Uso de identificadores descritivos (Nomenclatura e Semântica)**

### Controle de Versões (Git e GitHub)

- **GitHub: Criação de conta e repositórios, configuração de chaves SSH**

- **Git: Controle de versões com git (clone,status, add, commit, push, deploy)**

- **GitHub: Implantação com GitHub Pages**: A aplicação está implantada no GitHub Pages:
  [Text Analyzer](https://marcelereis.github.io/SAP012-text-analyzer/).

### Foco na Usuária

- **Projetado e desenvolvido um produto ou serviço centrado nas usuárias**

### Design do Produto

- **O projeto foi desenvolvido respeitando os princípios básicos do design visual**: contraste, alinhamento e hierarquia.

## 7. Considerações finais

Realizar esse projeto foi uma jornada incrível para aprimorar diversas habilidades, tanto técnicas quanto práticas. Durante o processo, adquiri conhecimento em linguagens, ferramentas e tecnologias, e também aprimorei habilidades como organização, planejamento, gestão de tempo, comunicação e autodidatismo. Superar os desafios deste primeiro projeto não apenas trouxe satisfação, mas também fortaleceu minha autoconfiança.

## Autora