import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const TotalBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const UserRegisterBox = styled.div`
    border-radius: 20px;
    background-color: steelblue;
    padding: 20px;
    width: 25vw;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    outline: none;
    height: 20px;
    margin: 5px;
`;

const CreateUserButton = styled.button`
    height: 30px;
    margin: 10px;
    cursor: pointer;
    outline: none;

    :hover {
        background-color: grey;
    }
`;

const GoToPageXButton = styled.button`
    height: 30px;
    margin: 10px;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;

    :hover {
        color: grey;
    }
`;

const axiosConfig = {
    headers: {
        Authorization: "renata-karato-mello"
    }
}

class RegisterUserPage extends React.Component {
    state = {
        name: "",
        email: "",
    };

    createUser = () => {
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
                    <GoToPageXButton onClick={this.props.goToUserListPage}><u>Ir Para Lista de Usuários Cadastrados</u></GoToPageXButton>
                </div>
                <TotalBox>
                    <h2>Registrar Usuário</h2>
                    <UserRegisterBox>
                        <div>
                            <label>Nome:</label>
                            <Input
                            type="text"
                            value={this.state.name}
                            onChange={this.onChangeInputValueName}
                            />
                        </div>
                        <div>
                            <label>E-mail:</label>
                            <Input
                            type="email"
                            value={this.state.email}
                            onChange={this.onChangeInputValueEmail}
                            />
                        </div>
                        <CreateUserButton onClick={this.createUser}>Criar Usuário</CreateUserButton>
                    </UserRegisterBox>
                </TotalBox>
                
            </div>
        )
    }
}

export default RegisterUserPage;