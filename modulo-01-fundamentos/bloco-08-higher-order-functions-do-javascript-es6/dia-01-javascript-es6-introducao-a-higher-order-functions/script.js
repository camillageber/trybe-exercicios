// EXERCÍCIOS DO DIA 8.1:

// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

function createEmail (name) {
  const emailSpace = name.toLowerCase().replace(/ /g, '_');
   return { name, email: `${emailSpace}@trybe.com` };
};


const newEmployees = (createEmail) => {
  const employees = {
    id1: createEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(createEmail));

// Baby steps:
// 1. Criar uma função
// 2. Essa função retornará um objeto no formato { nomeCompleto, email }
// 3. Essa função será um parâmetro da HOF newEmployees
// 4. A função que você criará recebe como parâmetro o nome completo
// 5. A partir desse nome completo, o retorno deve gerar automaticamente um e-mail nome_da_pessoa@trybe.com

// ------------------------------------------------------------------------------------------------------------
// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").


function checkResult(numberApostado, numberSorteado) {
  return numberApostado === numberSorteado;
};

function sortResult(numberApostado, checkResult) {
  const luckNumber = Math.floor(Math.random() * 5) + 1;
  console.log(luckNumber);
  if (numberApostado === luckNumber) {
    return 'Parabéns, você ganhou';
  } if (numberApostado !== luckNumber) {
    return 'Tente novamente';
  }
  return checkResult(numberApostado, luckNumber) 
};
console.log(sortResult(4, checkResult));

// Baby steps: 
// 1. Desenvolver uma HOF 
// 2. Essa Hof retorna o resultado de um sorteio
// 3. Esse sorteio irá gerar um número aleatório entre 1 e 5
// 4. A HOF recebe como parametros o número apostado e outra função
// 5. A outra função checa e retorna se o número apostado é igual ao sorteado
// 6. o retorno da HOF é uma string "Tente novamente" ou "Parabéns você ganhou"