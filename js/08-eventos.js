'use strict';

/* Exemplo 01 */
const subExemplo01 = document.querySelector("#subtitulo-exemplo01");
const msg = document.querySelector("#mensagem");

// Monitor/Ouvinte de Evento
// "addEventListener" serve para monitorar eventos
subExemplo01.addEventListener("click", function(){
    msg.textContent = "Olá";
});

// "mouseover" -> quando arrasta para cima
// "mouseout"  -> quando tira o mouse
// "dblclick"  -> duplo clique
subExemplo01.addEventListener("dblclick", function(){
    msg.textContent = ""; // string vazia tira o texto
});


/* Exemplo 02: modo noturno */
const botao = document.querySelector("#noturno");
const pagina = document.querySelector("body");

botao.addEventListener("click", function (){
    pagina.classList.toggle("modo-noturno");
    // "toggle" alterna. Se ligado, desliga e vice versa.
})