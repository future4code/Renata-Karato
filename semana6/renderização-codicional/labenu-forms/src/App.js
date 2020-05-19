import React from "react";
import styled from "styled-components";
import "./index.css";

import Pagina1 from "./components/Pagina1";
import Pagina2 from "./components/Pagina2";
import Pagina3 from "./components/Pagina3";
import PaginaFinal from "./components/PaginaFinal";

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

class App extends React.Component {
  state = {
    etapa: 1
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Pagina1 />;
      case 2:
        return <Pagina2 />;
      case 3:
        return <Pagina3 />;
      case 4:
        return <PaginaFinal />;
      default:
        return <Pagina1 />;
    }
  };

  onClickProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <AppContainer>
        {this.renderizaEtapa()}
        {this.state.etapa !== 4 && (
          <button onClick={this.onClickProximaEtapa}>Próxima etapa </button>
        )}
      </AppContainer>
    );
  }
}

export default App;