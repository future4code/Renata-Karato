import React from "react";
import Pagina3 from "../components/Pagina3"

class Pagina2 extends React.Component {
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
            <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            <p>5. Qual curso?</p>
            <input />
            <p>6. Qual a unidade de ensino?</p>
            <input />
            <p>
            <button onClick={this.onClickProximaPagina}>Próxima etapa</button>
            </p>
          </div>
        );
    } else {
        return (
          <div>
            <Pagina3 proximaEtapa={this.onClickProximaPagina} />
          </div>
      );
    }
  }
}

export default Pagina2;
