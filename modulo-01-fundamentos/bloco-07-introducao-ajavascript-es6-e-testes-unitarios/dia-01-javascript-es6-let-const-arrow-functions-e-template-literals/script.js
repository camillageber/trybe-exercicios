// EXERCÍCIOS 
// PARTE I

// 1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.


// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
}

testingScope(true);

// 2. Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// // Seu código aqui.

// console.log(oddsAndEvens); // será necessário alterar essa linha 😉

const oddsAndEvens = () => {
  let arrayNum = [13, 3, 4, 10, 7, 2];
  arrayNum[0] = 2;
  arrayNum[1] = 3;
  arrayNum[2] = 4;
  arrayNum[3] = 7;
  arrayNum[4] = 10;
  arrayNum[5] = 13;

  return arrayNum;
}

console.log(`Os números ${oddsAndEvens ()} se encontram ordenados de forma crescente!`);

// Bônus: 

const arrayNum = [13, 3, 4, 10, 7, 2];

const oddsAndEvens2 = (arrayN) => {
  const arraySort = arrayN.sort((a, b) => a - b); 
  return arraySort;
}

const arrayBonus = oddsAndEvens(arrayNum);
console.log(`Os números ${arrayBonus} se encontram ordenados de forma crescente!`);

// PARTE II

// 1. Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

const factorial = number => {
  let result = 1;

  for (let index = 2; index <= number; index += 1) {
      result *= index;
  }

  return result;
}

console.log(factorial(5));

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.

// Exemplo: 
// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const longestWord = text => {
  let wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));