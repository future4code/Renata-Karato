import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class PaginaDeRegistro extends React.Component {
    state = {
        nome: "",
        email: "",
    };

    reuneUsuarios = () => {
        axios.get(
            'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            {
                headers: 
                {Authorization: "renata-karato-mello"}
            }
        ).then(resp => {
            console.log(resp)
        }).catch(err => {
            console.log(err)
        });
    };

       criaUsuario = () => {
        const body = {
            name: this.state.nome,
            email: this.state.email,
        };

        axios.post(
            'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
                headers: 
                {Authorization: "renata-karato-mello"}
            }
        ).then(resposta => {
            console.log(resposta)
        }).catch(erro => {
            console.log(erro)
        })
    }

    onChangeInputValueNome = event => {
        this.setState({nome: event.target.value})
    }

    onChangeInputValueEmail = event => {
        this.setState({email: event.target.value})
    }

    render () {
        return (
        <div>
            <div>
                <button onClick={this.props.irParaPaginaDeLista}>Ir Para Página de Lista</button>
            </div>
            <div>
                <div>
                    <label>Nome:</label>
                    <input
                    value={this.state.nome}
                    onChange={this.onChangeInputValueNome}
                    />
                </div>
                <div>
                    <label>E-mail:</label>
                    <input
                    value={this.state.email}
                    onChange={this.onChangeInputValueEmail}
                    />
                </div>
                <button onClick={this.criaUsuario}>Salvar</button>
            </div>
        </div>
        )
    }
}

export default PaginaDeRegistro;