import React from "react";
import PerguntaAberta from "../components/PerguntaAberta";
import PerguntaOpcoes from "../components/PerguntaOpcoes";

class Pagina3 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h3>
        <PerguntaAberta
          pergunta={"5. Por que você não terminou um curso de graduação?"}
        />
        <PerguntaOpcoes
          pergunta={"6. Você fez algum curso complementar?"}
          respostas={["Nenhum", "Curso Técnico", "Curso de Inglês"]}
        />
      </div>
    );
  }
}

export default Pagina3;