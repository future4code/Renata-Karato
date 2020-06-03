import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const axiosConfig = {
    headers: {
        Authorization: "renata-karato-mello"
    }
}

class PaginaDeRegistro extends React.Component {
    state = {
        name: "",
        email: "",
    };

    criaUsuario = () => {
        const body = {
            name: this.state.name,
            email: this.state.email,
        };

        axios.post(
            'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, axiosConfig 
        ).then(() => {
            alert("Usuário criado com sucesso!")
            this.setState({name: "", email: ""})
        }).catch(erro => {
            alert("Erro ao criar usuário!")
        })
    }

    onChangeInputValueName = event => {
        const newNameValue = event.target.value
        this.setState({name: newNameValue})
    }

    onChangeInputValueEmail = event => {
        const newEmailValue = event.target.value
        this.setState({email: newEmailValue})
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
                        type="text"
                        value={this.state.name}
                        onChange={this.onChangeInputValueName}
                        />
                    </div>
                    <div>
                        <label>E-mail:</label>
                        <input
                        type="email"
                        value={this.state.email}
                        onChange={this.onChangeInputValueEmail}
                        />
                    </div>
                    <button onClick={this.criaUsuario}>Criar Usuário</button>
                </div>
            </div>
        )
    }
}

export default PaginaDeRegistro;