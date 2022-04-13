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

/* Procedure comporta funções simples, não retorna resultado

Funções coleta, processa dados e dá um resultado


VERSÃO 1: sintaxe tradicional
            paramêtros/argumentos
function soma(valor1, valor2){
    let total = valor1 + valor2;
    return total;
}

 VERSÃO 2: sintaxe ARROW FUNCTION (FUNÇÃO SETA/FLECHA) */
const soma = (valor1, valor2) => {
    let total = valor1 + valor2;
    return total
};

// VERSÃO 2 RESUMIDA
// Arrow Function com retorno ÍMPLICITO
const soma1 = (valor1, valor2) => valor1 + valor2

//Para exibir o resultado da função, é necessário usar o "RETURN". Uma variável local, única para a function.

// VERSÃO 2
console.log( soma(10, 5));

//VERSÃO 2 RESUMIDA
console.log( soma1(100, 55));



linha();

// VERSÃO 1: tradicional
/* function dobra(numero){
    let resultado = numero * 2;
    return resultado;
} */


// O RETURN é capaz de processar antes de exibir o resultado, permitindo colocar a fórmula para reduzir código
/* function dobra(numero){
    return numero * 2;
} */

// VERSÃO 2: Arrow Function
/* const dobra = (numero) => {
    let resultado = numero * 2;
    return resultado;
}; */


// Quando uma função tem apenas 1 parâmetro (numero) os parênteses podem ser removidos
// Retorno IMPLÍCITO (remove {} e return)
const dobra = numero => numero * 2

console.log(dobra(10));
console.log(dobra(150));

let nota1 = 8.5;
let nota2 = 7.4;

// Com mais de 1 parâmetro é necessário parênteses
// O return segue implícito
const calculaMedia = (n1, n2) => (n1 + n2) / 2;

// Obs.: se não tem parâmetros, também precisa usar ()
const linha2 = () => console.log("***********")