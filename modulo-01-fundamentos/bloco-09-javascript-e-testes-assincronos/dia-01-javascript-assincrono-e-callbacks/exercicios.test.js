// -------------------------------------------------------------------------------------------
// 7 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

// const uppercase = (string, callback) => {
//   setTimeout(() => {
//     callback(string.toUpperCase());
//   }, 500);
// };

// it ('uppercase "teste" to equal "TESTE"', (done) => {
//   uppercase('teste', (callback) => {
//     try {
//       expect(callback).toBe('TESTE');
//       done();
//     } catch(error) {
//       done(error)
//     }
//   });
// });

// -------------------------------------------------------------------------------------------
// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// Verifique se a importação do arquivo correto está sendo feita.
const { expect } = require('@jest/globals');
const { getPokemonDetails } = require('./exercicios');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');

    function callback(error, result) {
      expect(error).toEqual(expectedError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    function callback(error, result) {
      expect(result).toBe(expectedString);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});