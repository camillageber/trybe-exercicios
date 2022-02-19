// EXERCÍCIOS - PARTE I - Buscando Elementos

// 1. Acesse o elemento elementoOndeVoceEsta.

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Eu sou o primeiro filho do filho';

// 4. Acesse o primeiroFilho a partir de pai.

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai.
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;

// ----------------------------------
// EXERCICIOS - PARTE II - Criando Elementos

 // 1. Crie um irmão para `elementoOndeVoceEsta`.
 const pai = document.getElementById('pai');
 const irmaoElementoOndeVoceEsta = document.createElement('section');
 irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
 pai.appendChild(irmaoElementoOndeVoceEsta);

 // 2. Crie um filho para `elementoOndeVoceEsta`.
 const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
 const filhoElementoOndeVoceEsta = document.createElement('section');
 filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
 elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

 // 3. Crie um filho para `primeiroFilhoDoFilho`.
 const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
 const filhoPrimeiroFilhoDoFilho = document.createElement('section');
 filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
 primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

 // 4. A partir desse filho criado, acesse `terceiroFilho`.
 const terceiroFilho = filhoPrimeiroFilhoDoFilho
   .parentElement // primeiroFilhoDoFilho
   .parentElement // elementoOndeVoceEsta
   .nextElementSibling; // terceiroFilho
 console.log(terceiroFilho);