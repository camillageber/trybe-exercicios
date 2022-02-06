// Conteúdos

// Variáveis

// 1-Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
// Solução:

// const myName = "Link";

// 2-Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
// Solução:

// const birthCity = "Hyrule";

// 3-Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
// Solução:

// let birthYear = 1986;

// 4-Utilize o console.log() para imprimir as constantes e variáveis que você criou.
// Solução:

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// 5-Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
// Solução:

// birthYear = 2030;
// console.log(birthYear);;

// 6- Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔
// Solução:

// birthCity = "The Sky";
// console.log(birthCity);
// // TypeError: Assignment to constant variable.
// **Recebemos esse erro porque tentamos mudar o valor de uma constante e isso não é permitido, visto que elas sempre devem manter sua atribuição original, caso contrário, não deveriam ser constantes.

// Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

// 1- Crie uma constante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
// Solução:

// const base = 5;
// const height = 8;

// 2- Crie uma costante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
// Solução:

// const area  = base * height;
// console.log(area);

// 3- Crie uma costante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
// Solução:

// const perimeter = 5 + 5 + 8 + 8;
// console.log(perimeter);

// Condições If e Else

// 1- Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
// Solução:

// const grade = 80;

// 2- Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
// Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
// Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
// Se a nota for menor que 60, imprima "Você foi reprovada(o)"
// Solução:

// if (grade >= 80) {
//   console.log("Parabéns, você foi aprovada(o)!")
// } else if (grade < 80 && grade >= 60) {
//   console.log("Você está na nossa lista de espera");
// } else if (grade < 60) {
//   console.log("Você foi reprovada(o)")
// }

// Operadores lógicos
// Operador AND

// 1- Crie uma costante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
// Solução:

// const currentHour = 16;

// 2- Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
// Solução:

// let message = "";

// 3- Implemente condicionais para que:
// Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
// Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
// Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
// Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
// Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
// Solução:

// if (currentHour >= 22) {
//   message = "Não deveríamos comer nada, é hora de dormir";
// } else if (currentHour >= 18 && currentHour < 22) {
//   message = "Rango da noite, vamos jantar :D";
// } else if (currentHour >= 14 && currentHour < 18) {
//   message = "Vamos fazer um bolo pro café da tarde?";
// } else if (currentHour >= 11 && currentHour < 14) {
//   message = "Hora do almoço!!!";
// } else if (currentHour < 11 && currentHour < 4) {
//   message = "Hmmm, cheiro de café recém passado";
// }

// 4- Agora imprima a variável message fora das suas condições.

// console.log(message);

// Operador OR

// 1- Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
// Solução:

// const weekDay = "quarta-feira";

// 2- Implemente condicionais para que:
// Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
// Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".
// Solução:

// if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
//  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
// } else {
//   console.log("FINALMENTE, descando merecido UwU");
// }

// --------

// Exercício 1
// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// const a = 10;
// const b = 5;

// console.log('Soma: ' + (a + b));
// console.log('Subtração: ' + (a - b));
// console.log('Multiplicação: ' + (a * b));
// console.log('Divisão: ' + (a / b));
// console.log('Módulo: ' + (a % b));

// Exercício 2
// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.


// const a = 20;
// const b = 21;

// if (a > b) {
//   console.log("'a' é maior que 'b'");
// } else {
//   console.log("'b' é maior que 'a'");
// };

// Exercício 3
// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.


// const a = 6;
// const b = 4;
// const c = 2;

// if (a > b && a > c) {
//   console.log('O maior número é: ' + a + ' (a)');
// } else if (b > a && b > c) {
//   console.log('O maior número é: ' + b + ' (b)');
// } else {
//   console.log('O maior número é: ' + c + ' (c)');
// };

// Exercício 4
// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero", caso contrário.


// const number = 4;

// if (number > 0) {
//   console.log('positive');
// } else if (number < 0) {
//   console.log('negative');
// } else {
//   console.log('zero');
// };

// Exercício 5
// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.


// let degreeAngleA = 65;
// let degreeAngleB = 100;
// let degreeAngleC = 15;

// let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

// let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

// if(allAnglesArePositives){
//   if (sumOfAngles === 180) {
//     console.log(true);
//   } else {
//     console.log(false);
//   };
// } else {
//   console.log('Erro: ângulo inválido');
// }

// Exercício 6
// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// const chessPiece = 'bispo';

// switch (chessPiece.toLowerCase()) {
//   case 'rei':
//     console.log('Rei-> Uma casa apenas para qualquer direção.');
//     break;
//   case 'bispo':
//     console.log('Bispo-> Diagonal.');
//     break;
//   case 'rainha':
//     console.log('Rainha-> Diagonal, horizontal e vertical.');
//     break;
//   case 'cavalo':
//     console.log('Cavalo -> "L" pode pular sobre as peças.');
//     break;
//   case 'torre':
//     console.log('Torre -> Horizontal e vertical.');
//     break;
//   case 'peão':
//     console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
//     break;
//   default:
//     console.log('Erro, peça inválida!');
//     break;
// };

// Exercício 7
// Escreva um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.


// const grade = 76;

// if (grade < 0 || grade > 100) {
//   console.log("Erro, nota incorreta!");
// } else if (grade >= 90) {
//   console.log("A");
// } else if (grade >= 80) {
//   console.log("B");
// } else if (grade >= 70) {
//   console.log("C");
// } else if (grade >= 60) {
//   console.log("D");
// } else if (grade >= 50) {
//   console.log("E");
// } else {
//   console.log("F");
// }

// Exercício 8
// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false .


// const a = 1;
// const b = 3;
// const c = 5;

// let isEven = false;

// if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
//   isEven = true;
// };
// console.log(isEven);

// Exercício 9
// Escreva um programa que defina três números em constantes no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false .


// const a = 1;
// const b = 3;
// const c = 5;

// let isOdd = false;

// if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
//   isOdd = true;
// };
// console.log(isOdd);

// Exercício 10
// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%, que deve ser considerado no cálculo do lucro.
// Seu programa também deve emitir uma mensagem de erro e encerrar, caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)


// const costOfProduct = 1;
// const saleValue = 3;

// if (costOfProduct >= 0 && saleValue >= 0) {
//   const totalCostOfProduct = costOfProduct * 1.2;
//   const totalProfit = (saleValue - totalCostOfProduct) * 1000;
//   console.log(totalProfit);
// } else {
//   console.log("Error, os valores não podem ser negativos");
// };

// Exercício 11
// Uma pessoa de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido por ela.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.


// let aliquotINSS;
// let aliquotIR;

// const grossSalary = 2000.00;

// if (grossSalary <= 1556.94) {
//   aliquotINSS = grossSalary * 0.08;
// } else if (grossSalary <= 2594.92) {
//   aliquotINSS = grossSalary * 0.09;
// } else if (grossSalary <= 5189.82) {
//   aliquotINSS = grossSalary * 0.11;
// } else {
//   aliquotINSS = 570.88;
// }

// const baseSalary = grossSalary - aliquotINSS;

// if (baseSalary <= 1903.98) {
//   aliquotIR = 0;
// } else if (baseSalary <= 2826.65) {
//   aliquotIR = (baseSalary * 0.075) - 142.80;
// } else if (baseSalary <= 3751.05) {
//   aliquotIR = (baseSalary * 0.15) - 354.80;
// } else if (baseSalary <= 4664.68) {
//   aliquotIR = (baseSalary * 0.225) - 636.13;
// } else {
//   aliquotIR = (baseSalary * 0.275) - 869.36;
// };

// console.log("Salário: " + (baseSalary - aliquotIR));