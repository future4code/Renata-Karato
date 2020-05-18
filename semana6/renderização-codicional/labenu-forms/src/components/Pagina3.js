import React from "react";
import PaginaFinal from "../components/PaginaFinal";

class Pagina3 extends React.Component {
  state = {
    proximaEtapa: true
  };

  onClickProximaPagina = () => {
    this.setState({ proximaEtapa: !this.state.proximaEtapa });
  };

  render() {
    if (this.state.proximaEtapa) {
      return (
        <div>
          <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h3>
          <p>5. Por que você não terminou um curso de graduação?</p>
          <input />
          <p>6. Você fez algum curso complementar?</p>
          <p>
            <select>
              <option>Nenhum</option>
              <option>Curso técnico</option>
              <option>Curso de inglês</option>
            </select>
          </p>
          <p>
            <button onClick={this.onClickProximaPagina}>Próxima etapa</button>
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <PaginaFinal proximaEtapa={this.onClickProximaPagina} />
        </div>
      );
    }
  }
}

export default Pagina3;