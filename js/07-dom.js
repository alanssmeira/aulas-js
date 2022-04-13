'use strict';

console.log("DOM")

/* Funções (ou métodos) de acesso/seleção ao DOM

-getElementById        -> seleciona UM elemento por ID
-querySelector         -> seleciona UM elemento por SELETOR
-querySelectorAll      -> seleciona VÁRIOS elementos por SELETOR
*/


// Exemplos
// const titulo = document.getElementById("titulo-principal");

const titulo = document.querySelector("#titulo-principal");
const subtitulos = document.querySelectorAll("h2");

console.log(titulo);
console.log(subtitulos);
console.log(subtitulos[0]);


// Leitura do conteúdo
console.log(titulo.textContent);
console.log(subtitulos[0].textContent);


// Alteração do conteúdo na página HTML
titulo.textContent = "Olá DOM, meu velho amigo";
subtitulos[0].innerHTML = "<i>Aprendendo DOM<i/>";


// Manipulando CSS via JS

// 1) Inline
// selecionar a pág inteira
const pagina = document.querySelector("body");
pagina.style.backgroundColor = "lightblue";


//Para selecionar um item específico de uma lista pode usar comandos CSS, como o "first ou last-child", "nth"
const primeiroItem = document.querySelector("#lista-editores li:first-child");
console.log(primeiroItem);

// 2) Classe
primeiroItem.classList.add("destaque-item")