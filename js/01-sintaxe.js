/* ALT SHIFT A
Comentário de múltiplas
linhas */

// CTRL ;  Comentário de linha única

// Comando de saída de dados

/* Sempre que trabalhar com textos
devemos colocá-lo entre aspas SIMPLES '',
DUPLAS "" ou crase `` 

Template String/Literal (veremos depois) */

console.log(`Olá JavaScript!`);

/* Variáveis e Constantes 
Espaços identificados na memória para armazenar dados temporariamente */

// Variável: valor pode mudar
// Obs.: antigamente, era usado "var"
let ano = 2022;

// Constante: valor imutável (não muda)
const aluno = "Tiago";
// const aluno = prompt();


console.log(ano);
console.log(aluno);

console.log(ano, aluno);

/* Operações matemáticas
+ (adição) 
- (subtração)
/ (divisão) 
* (multiplicação) */
let preco = 1500;
let desconto = 250;
let precoFinal = preco - desconto;

console.log(preco, desconto, precoFinal);

let produto = "TV Led";

/* A TV Led custava 1500 reais. */

// 1ª forma (tradicional) - CONCATENAÇÃO
console.log("A "+produto+" custava "+preco+" reais.");

// 2ª forma (moderna) - Template String/Literal
console.log(`A ${produto} custava ${preco} reais.`);