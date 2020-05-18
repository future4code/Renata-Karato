import React from "react";
import styled from "styled-components";
import Pagina1 from "./components/Pagina1";
import Pagina2 from "./components/Pagina2";

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

class App extends React.Component {
  state = {
    proximaEtapa: true
  };

  onClickProximaPagina = () => {
    this.setState({ proximaEtapa: !this.state.proximaEtapa });
  };

  render() {
    if (this.state.proximaEtapa) {
      return (
        <AppContainer>
          <Pagina1 proximaEtapa={this.onClickProximaPagina} />
        </AppContainer>
      );
    } else {
      return (
        <AppContainer>
          <Pagina2 proximaEtapa={this.onClickProximaPagina} />
        </AppContainer>
      );
    }
  }
}

export default App;