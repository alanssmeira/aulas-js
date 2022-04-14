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

   /*  == (dois símbolos de igualdade) equivale à comparação | = (um símbolo de igualdade) equivale à atribuição */

    /* Se o texto do botão for ativar... */
    if (botao.textContent == 'Ativar') {
        //então, mudamos para Desativar:
        botao.textContent = "Desativar";
    } else {
        // senão, mudamos para Ativar
        botao.textContent = "Ativar";
    }
})


/* Exemplo 3: simulação de cadastro */

const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");

// Detectar o acionamento do fromulário

// usar "submit" ao invés de "click". Também funciona no Enter e é mais acessível

// Obs.: a função dentro do listener, é chamada de Callback. Uma função que depende de outra função.
formulario.addEventListener("submit", function(event){
    /* Anulando o comportamento padrão do navegador (redirecionar formulário) */
    event.preventDefault();

    console.log("OK")

    // 1) Capturar os dados digitados nos campos
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    // 2) calcular a mediadas notas
    let media = (nota1 + nota2) / 2;

    // /////////////////////////// EXC 1 ////////////////////

    // Criar uma variável e determinar a condição
    let situacao
    if (media >= 7) {
        situacao = "Aprovado"
    } else {
        situacao = "Reprovado"
    };

    // 3) Criando elemento dinamicamente via JS

    // 3.1) Criar o elemento/tag
    let paragrafo = document.createElement("p");

    // 3.2) Montar o conteúdo da tag                    /////////   EXC 2 
    paragrafo.innerHTML = `<b>${nome}</b> - <i>${media}</i> - <b>${situacao}</b>`;
    
    // 3.3) Adicionar tag/conteúdo à div de resultados
    divResultados.appendChild(paragrafo);
    
    console.log(paragrafo);


    /* Exercícios
    1) Programe o necessário para determinar se o aluno está aprovado ou reprovado. Critério: média maior/igual a 7 aprovado, caso contrário reprovado.
    
    2) Mostre a situação do aluno com o nome e a média.
    
    3) Desafio: faça com que os campos do formulário sejam resetados ao enviar.*/
    // limpa os dados dos campos de inserção
    formulario.reset();
    
    // Devolvendo o foco (cursor) para o campo nome
    campoNome.focus();

    //  *** DESAFIO *** Dissolver a atual função em várias funções dedicadas
});