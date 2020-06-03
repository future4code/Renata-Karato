import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const axiosConfig = {
    headers: {
        Authorization: "renata-karato-mello"
    }
}

class PaginaDeLista extends React.Component {
    state = {
        listadeUsuarios: []
    }

    componentDidMount = () => {
        this.fetchUserList()
    }

    fetchUserList = () => {
        axios
        .get(
            'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', axiosConfig
        )
        .then(resp => {
            this.setState({listadeUsuarios: resp.data})
        })
    }

    handleUserDeletion = (userId) => {
        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, axiosConfig
             ).then(() => {
                alert("Usuario apagado com sucesso")
                this.fetchUserList()
             }).catch (e=> {
                 alert("Erro ao apagar usuário!")
             }) 
    }

    render () {
        return (
            <div>
                 <div>
                    <button onClick={this.props.irParaPaginaDeRegistro}>Ir Para Página de Registro</button>
                </div>
                <div>
                    <h2>Usuários Cadastrados:</h2>
                </div>
                <div>
                    <ul>
                        {this.state.listadeUsuarios.map(usuario => {
                            return (
                                <li>
                                    {usuario.name}
                                    <button onClick={() => this.handleUserDeletion(usuario.id)}>X</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default PaginaDeLista;