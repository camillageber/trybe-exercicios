import React from "react";

const conteudos = [
  {
    conteudo: "High Order Functions",
    bloco: 8,
    status: "Aprendido",
  },
  {
    conteudo: "Composicao de Componentes",
    bloco: 11,
    status: "Aprendendo",
  },
  {
    conteudo: "Composicao de Estados",
    bloco: 12,
    status: "Aprenderei",
  },
  {
    conteudo: "Redux",
    bloco: 16,
    status: "Aprenderei",
  },
];

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        {conteudos.map((elemento) => (
          <div key={elemento.conteudo} className="card">
            <h4>{`O conteúdo é: ${elemento.conteudo}`}</h4>
            <p>{`Status: ${elemento.status}`}</p>
            <p>{`Bloco: ${elemento.bloco}`}</p>
          </div>
        ))}
      </div>
    );
  }
}
// Porque utilizar key nessa função? 
// As chaves ajudam o React a identificar quais itens sofreram alterações, foram adicionados ou removidos.
// A melhor forma de escolher uma chave é usar uma string que identifica unicamente um item da lista dentre os demais.
// https://pt-br.reactjs.org/docs/lists-and-keys.html


export default Content;