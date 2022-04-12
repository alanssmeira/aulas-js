/* Estruturas tradicionais (tem em todas as linguagens):

While    ->   enquanto
do/while ->   faça/enquanto
for      ->   para

programar com loops no VSCODE pode travar o navegador, recomendável desligar salvamento automático para evitar loop infinito*/

// Exemplo loop while (enquanto)
console.log("while");

// Variável de controle do loop
/* Obs.: normalmente é chamada de i, j ou k */
let i = 1;

while(i <= 3){
    console.log(`Valor de i: ${i}`);
    i++; // incremento
}

console.log("-------------");

console.log("do/while");

let j = 1;  // variável de controle
do{
    console.log(`J vale ${j}`);
    j++;
}while( j <= 3 ) // ou j < 4
// O "do" garante que vai executar independente se é verdadeiro ou falso

// o "while" analisa se é verdadeiro para prosseguir com loop

console.log("--------------");

console.log("FOR");

// (variável de controle; condição; atualização da variável  --respectivamente no cód abaixo dentro dos parênteses)
//       ^
for(let i = 1; i <= 5; i++){
    console.log(`I vale ${i}`);
}

console.log("-----------------");

console.log("Loop e Estrutura de Dados");

// ARRAY (vetor)
// No array a contagem começa do 0
let alunos = ["Eduardo","Vagner", "Thalia", "Claudio", "Jéssica"];

for(let i = 0; i < 5; i++){
    console.log(alunos[i]);
}

/*  sort() -> função para ordenar arrays */
// console.log(alunos.sort() );

console.log("-----------------");

console.log("Loops Exclusivos do JS");

// for/of: ótimo para Arrays
// A variável "aluno" entra dentro de "alunos"
for(let aluno of alunos){
    console.log(aluno);
}

let livro = {
    título: "Senhor dos Anéis",
    ano: 1954,
    volumes: 3
};

//for/in
//funciona para array e objeto. Mais indicado para objetos
for( let dados in livro){
    console.log(livro[dados]);
}