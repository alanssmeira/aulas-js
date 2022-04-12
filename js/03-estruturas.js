/* Estruturas de Dados no JavaScript 
ARRAY (VETOR)
Lista de dados indexados */

let alunos = ["Tiago", "João", "Marília", "Vagner"];

// Acessando o aluno armazenado no índice 1
console.log(alunos[1]); // João
console.log(alunos[3]); // Vagner

// Da forma abaixo, conseguimos ver os índices (números)
console.log(alunos);

/* Exercício Array:
1) Crie um array contendo os seguintes dados de uma pessoa:
-Nome e sobrenome
-Idade
-Cidade
-Estado */
let dados = ["Tiago Santos", 38, "São Paulo", "SP"];

/* 2) Mostre uma frase no console conforme o exemplo abaixo:
O Fulano da Silva é da cidade de São Paulo e tem 20 anos. */
console.log(
    `${dados[0]} é da cidade de ${dados[2]} e tem ${dados[1]} anos.`
);


console.log("----------------------------");


/* OBJETO 
Lista de dados não-indexados */
let filme = {
    // propriedade: valor
    titulo: "Homem Aranha",
    ano: 2021,
    genero: "Ação/Ficção",
    classificacao: 16
};

console.log(filme.titulo);
console.log(filme.genero);
console.log(
    `${filme.titulo} foi lançado em ${filme.ano} com classificação de +${filme.classificacao}`
);

/* Exercício de Objeto
1) Crie um novo objeto contendo os dados (fictícios) 
de um pedido de uma loja virtual. Exemplo:
-data do pedido
-produto comprado
-preço do pedido 
-prazo de entrega */
let pedido = {
    data: "02/04/2022",
    produto: "Playstation 5",
    preco: 5000,
    prazo: 7
};

/* 2) Mostre uma frase contendo as seguintes informações:
O produto XYZ foi comprado em 07/04/2022 com entrega em 7 dias úteis */
console.log(
    `O produto ${pedido.produto} foi comprado em ${pedido.data} com entrega em ${pedido.prazo} dias úteis.`
);













