// PARTE II

// EXERCÍCIO 1:
// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// OBS: Foi necessário criar uma arrow function contendo as informações do pedido contidos no objeto order, 
// como as informações do cliente, do entregador e o que o cliente pediu. Para puxar essas informações
// fiz o uso de variáveis, contendo os dados. A const address, por puxar todo o subobjeto address, foi
// declarada com o valor 'address', para puxar todos os parâmetros de seu subobjeto. 
// Em algumas consts, declarei com notação de ponto e outras com  conchetes, ambas funcionam. 
// Após isso, foi necessário criar um console.log (ainda dentro da função), usando template literals para conter a frase pedida 
// no exercício, utilizando as variáveis criadas na função para completar os dados. 
// Depois, chamei a função, usando como parâmetro o meu objeto de referência (order).

  const customerInfo = (pedido) => {
  const address = 'address';
  const deliveryPerson = pedido.order.delivery.deliveryPerson;
  const customerName = pedido.name;
  const customerPhone = pedido['phoneNumber'];
  const street = pedido[address].street;
  const number = pedido[address].number;
  const apartment = pedido.address.apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
}

customerInfo(order);

// EXERCÍCIO 2: 
// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.

  const orderModifier = (pedido2) => {
  const newBuyer = pedido2.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = pedido2.order.drinks.coke.type;
  const newTotal = pedido2.payment.total = '50';

  console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`);
}

orderModifier(order);