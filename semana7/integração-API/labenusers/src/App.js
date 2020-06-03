import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './index.css';

import PaginaDeRegistro from './components/PaginaDeRegistro'
import PaginaDeLista from './components/PaginaDeLista'


class App extends React.Component {
  state = {
    irParaPaginaX: true,
  }

  onClickIrParaPaginaX = () => {
    this.setState({irParaPaginaX: !this.state.irParaPaginaX})
  }
 

  render () {
    if (this.state.irParaPaginaX) {
      return (
        <div>
          <PaginaDeRegistro irParaPaginaDeLista={this.onClickIrParaPaginaX}/>
        </div>
      );
    } else {
      return (
        <div>
          <PaginaDeLista irParaPaginaDeRegistro={this.onClickIrParaPaginaX}/>
        </div>
      )
    }
  }
}

export default App
