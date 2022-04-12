'use strict'; // MODO ESTRITO/RESTRITO

/* FUNÇÕES são blocos de código que podem ser executados e reaproveitados  em praticamente qualquer parte da sua aplicação.

Usar funções também é uma forma de separar a lógica e organizar melhor sua programação.*/


// Sintaxe tradicional
function linha(){
    console.log("---------------");
}

let curso = "Programador Web";
let escola = "Senac";
let ano = 2022;

console.log(`Curso: ${curso}`);
linha(); // Chamar a função
console.log(`Escola: ${escola}`);
linha();
console.log(`ano: ${ano}`);

// Procedure comporta funções simples, não retorna resultado

// Funções coleta, processa dados e dá um resultado

            // paramêtros/argumentos
function soma(valor1, valor2){
    let total = valor1 + valor2;
    return total;
}

//Para exibir o resultado da função, é necessário usar o "RETURN". Uma variável local, única para a function.

console.log( soma(10, 5));

