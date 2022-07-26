# Simple CSS Modal

Esse é um simples modal com CSS e JS. Os conhecimentos utilizados para construir essa página foram:

* JavaScript Básico
* CSS Positioning
* Variáveis CSS
* Transitions, Transform, e Filters

## JavaScript Básico

Nesse projeto, o papel do JavaScript é simplesmente fazer um toggle das classes de acordo com os cliques e componentes de origem.
Temos três botões no projeto: dois para abrir e fechar o modal, um para alternar o modo noturno. Precisamos de duas funções para isso, e aqui temos:

```js
// Buscando todos os elementos com a classe .toggle
const buttons = document.querySelectorAll(".toggle");

// Percorrendo o array de elementos
for (const button of buttons) {
  // Adicionando um listener de click para cada botão
  button.addEventListener("click", function() {
    // Faz o toggle do efeito de blur no conteudo da pagina
    document.querySelector(".content").classList.toggle("blur");
    // Faz o toggle da abertura/fechamento do modal
    document.querySelector(".modal").classList.toggle("open");
  });
}
```

E para lidar com o modo noturno, também é feita uma manipulação de classes, mas dessa vez no elemento ```<body/>```:

```js
// Adicionando um listener de click no botão .dark-mode
document.querySelector(".dark-mode").addEventListener("click", function() {
  // Faz o toggle da classe no <body>
  document.body.classList.toggle("dark");
});
```

Agora a magia é com o CSS...

## CSS Positioning

Positioning significa posicionamento, e as regras de posicionamento do CSS permitem esconder elementos fora da área de visualização do navegador. E é com esse macete que o efeito do modal é criado.

Esse trecho é o responsável por colocar o modal posicionado abaixo do valor atual da altura da janela:

```css
.modal {
  position: absolute;
  bottom: -100vh;
  left: 0;
}
```

## Variáveis CSS

Variáveis CSS permitem armazenar valores repetitivos, e facilitar sua manipulação na manutenção do CSS. Aqui vamos utilizar para armazenar as cores que precisamos para estilizar a página + modal.

Para declarar e utilizar uma variável, é só conferir o exemplo abaixo:

```css
.modal {
  /* Criando variável `primary` com valor orange */
  --primary: orange;
}

button {
  /* Para utilizar uma variável, utilize a função var() */
  background: var(--primary);
}
```

Mas assim como na programação, as possuem escopo definido e limitado. Uma variavel criada dentro de um button, só poderia ser utilizada por um button. Para a criação de variáveis globais, utilizamos a pseudo-tag root:

```css
:root {
  --background: #ffffff;
  --darkmode: #191919;
  --primary: #884dc1;
  --shadow: #535353;
  --button: #ffffff;
  --color: #5d5d5d;
}
```

Essas são as configurações do projeto para o modo diurno. O modo noturno é implementado pelo JavaScript adicionando a classe ```dark-mode``` no ```<body/>```, então precisamos configurar os valores para o dark-mode por lá:

```css
body.dark {
  --background: #191919;
  --darkmode: #191919;
  --primary: #ff5f29;
  --button: #e8e8e8;
  --shadow: #535353;
  --color: #e8e8e8;
}
```

## Transitions, Transform, e Filters

Os responsáveis pelas animações e efeitos visuais são esses três guerreiros do título. Mas começando pelo inicio, temos:

### Transition

```css
* {
  transition: all 0.3s;
}
```

Essa linha de CSS acima tem o poder de transformar todas as transições de todos os elementos da página em animações. E com isso, só precisamos fazer o elemento mudar suas propriedades - e elas automaticamente estarão animadas.

No caso do modal, alteramos a propriedade ```bottom``` de ```-100vh``` para ```0``` e o navegador cuida de trazer a div de forma animada para sua nova posição.

### Transform e Filter

O ```transform``` é utilizado no ```:hover``` dos buttons, para fazer um simples efeito de deslizar para a direita. Também no ```:hover```, temos um efeito de "cintilar" para dar um charme. Isso é conquistado através da propriedade ```filter``` e da função ```brightness()```:

```css
button:hover {
  filter: brightness(120%);
  transform: translateX(3%);
}
```
