import React from "react";
import PerguntaAberta from "../components/PerguntaAberta";
import PerguntaOpcoes from "../components/PerguntaOpcoes";

class Pagina1 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
        <PerguntaAberta pergunta={"2. Qual sua idade?"} />
        <PerguntaAberta pergunta={"3. Qual seu e-mail?"} />
        <PerguntaOpcoes
          pergunta={"4. Qual a sua escolaridade?"}
          respostas={[
            "Ensino Médio Incompleto",
            "Ensino Médio Completo",
            "Ensino Superior Incompleto",
            "Ensino Superior Completo"
          ]}
        />
      </div>
    );
  }
}

export default Pagina1;