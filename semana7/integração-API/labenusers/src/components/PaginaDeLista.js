import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class PaginaDeLista extends React.Component {
    render () {
        return (
        <div>
            <div>
                <button onClick={this.props.irParaPaginaDeRegistro}>Ir Para Página de Registro</button>
            </div>
            <div>
                <h2>Usuários Cadastrados:</h2>
            </div>
        </div>
        )
    }
}

export default PaginaDeLista;