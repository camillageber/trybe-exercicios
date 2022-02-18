        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        */
    
//  1- Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 
function descricao(){
     let paragrafoDescricao = document.getElementsByTagName("p")[1];
     paragrafoDescricao.innerText = "Eu espero que daqui há 2 anos eu esteja mais sábia, mais calma, mais feliz.";

     return paragrafoDescricao;
 };
 descricao();

//  2- Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function mudaCor(){
    let corVerde = document.getElementsByTagName("main")[0];
    corVerde.style.backgroundColor = "rgb(76,164,109)";

    return corVerde;
};
mudaCor();

//  3- Crie uma função que mude a cor do quadrado vermelho para branco.

function mudaCor2(){
    let corBranca = document.getElementsByClassName("center-content")[0];
    corBranca.style.backgroundColor = "white";

    return corBranca;
};
mudaCor2();

//  4- Crie uma função que corrija o texto da tag <h1>.

function title(){
    let textoCorrigido = document.getElementsByTagName("h1")[0];
    textoCorrigido.innerText = "Exercício 5.1 - Javascript";

    return textoCorrigido;
};
title();
//  5- Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function textoMaiusculo(){
    let mudaTexto = document.getElementsByTagName("p")[0];
    mudaTexto.innerHTML =  mudaTexto.innerHTML.toUpperCase();

    return mudaTexto;
};
textoMaiusculo();

//  6- Crie uma função que exiba o conteúdo de todas as tags <p> no console.