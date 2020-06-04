import React from "react";

function PerguntaOpcoes(props) {
  return (
    <div>
      <p>{props.pergunta}</p>
      <p>
        <select>
          {props.respostas.map(resposta => (
            <option value={resposta}>{resposta}</option>
          ))}
        </select>
      </p>
    </div>
  );
}

export default PerguntaOpcoes;