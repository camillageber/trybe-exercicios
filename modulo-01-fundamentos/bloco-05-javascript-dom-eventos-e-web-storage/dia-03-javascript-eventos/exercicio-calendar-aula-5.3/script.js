function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//   Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

// - Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// - Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// - Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>


let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDayOfMonth() {
    // 1. Onde eu vou colocar o elemento?
    let getDaysList = document.querySelector("#days");
    console.log(getDaysList);


    for (let index = 0; index < dezDaysList.length; index += 1) {

        // 2. Criar
        let dayItem = document.createElement("li");
        console.log(dayItem);

        // 3. Customizar
        let day = dezDaysList[index];

        if (day === 24 | day === 31) {
            dayItem.className = "day holiday";
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem);
        } else if (day === 4 | day === 11 | day === 18) {
            dayItem.className = "day friday";
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem);
        } else if (day === 25) {
            dayItem.className = "day holiday friday";
            dayItem.innerHTML = day;
            getDaysList.appendChild(dayItem);
        } else {
            dayItem.innerHTML = day;
            dayItem.className = "day";
            // 4. Inserir no HTML (obs: é necessário repetir esse passo em todos os if e else)
            getDaysList.appendChild(dayItem);
        }
    };
};

createDayOfMonth();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// - Adicione a este botão a ID "btn-holiday" .
// - Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createButton (name){
    let divButtons = document.querySelector(".buttons-container");
    let bHolidays = document.createElement("button");
    bHolidays.id = "btn-holiday";
    bHolidays.innerHTML = name;
    divButtons.appendChild(bHolidays);
}
createButton ("Feriados");

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function showHolidays(){
    let getHolidayButton = document.querySelector("#btn-holiday");
    let getHolidays = document.querySelectorAll(".holiday");
    let backgroundColor = "rgb(238,238,238)";
    let newColor = "blue";

    getHolidayButton.addEventListener("click", function(){
        for (let index = 0; index < getHolidays.length; index +=1){
            if (getHolidays[index].style.backgroundColor === newColor){
                getHolidays[index].style.backgroundColor = backgroundColor;
            } else {
                getHolidays[index].style.backgroundColor = newColor;
            }
        }
    })
};
showHolidays();

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// - Adicione a este botão o ID "btn-friday" .
// - Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function sextaFeira (name){
let divButtons = document.querySelector(".buttons-container");
let buttonFriday = document.createElement("button");
buttonFriday.id = "btn-friday";
buttonFriday.innerHTML = name;
divButtons.appendChild(buttonFriday);

}
sextaFeira("Sexta-feira");

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function showFriday(fridaysArray){
    let buttonFriday = document.querySelector("#btn-friday");
    let fridays = document.getElementsByClassName("friday");
    let fridayText = "É sexta-feira!";
  

    buttonFriday.addEventListener("click", function(){
        for (let index = 0; index < fridays.length; index += 1){
            if (fridays[index].innerHTML !== fridayText){
                fridays[index].innerHTML = fridayText;
            } else {
                fridays[index].innerHTML = fridaysArray[index];
            }
        }
    })

};
let dezFridays = [ 4, 11, 18, 25 ];
showFriday(dezFridays);

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

function zoomIn (){
    let days = document.querySelector("#days");

    days.addEventListener("mouseover", function(event){
        event.target.style.fontSize = "40px";
        event.target.style.fontWeight = '700';
    })
}
function zoomOut() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };
  
  zoomIn();
  zoomOut();