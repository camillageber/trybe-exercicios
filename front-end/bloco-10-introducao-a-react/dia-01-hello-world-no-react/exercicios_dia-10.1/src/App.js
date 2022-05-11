import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
// Porque utilizar key nessa função? 
// As chaves ajudam o React a identificar quais itens sofreram alterações, foram adicionados ou removidos.
// A melhor forma de escolher uma chave é usar uma string que identifica unicamente um item da lista dentre os demais.
// https://pt-br.reactjs.org/docs/lists-and-keys.html

const tarefas = ['Acordar', 'Tomar café', 'Praticar exercícios', 'Tomar banho', 'Fazer compras', 'Estudar'];

function App() {
  return (
    <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
  );
}

export default App;
