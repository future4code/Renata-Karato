import React from "react";

function PerguntaAberta(props) {
  return (
    <div>
      <p>{props.pergunta}</p>
      <p>
        <input onChange={props.onChange} value={props.value} />
      </p>
    </div>
  );
}

export default PerguntaAberta;
