import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const UserListBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ListConfig = styled.ul`
    list-style-type: none;
`;

const UsersList = styled.li`
    font-size: 20px;
    padding: 5px;
`;

const DeleteButton = styled.button`
    margin-left: 15px;
    color: red;
    cursor: pointer;
    border-radius: 10px;
    outline: none;
    border: none;
    padding: 5px;
`;

const axiosConfig = {
    headers: {
        Authorization: "renata-karato-mello"
    }
}

class UserListPage extends React.Component {
    state = {
        userList: []
    }

    componentDidMount = () => {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios
            .get(
                'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
                axiosConfig
            )
            .then(resp => {
            this.setState({userList: resp.data});
        });
    };

    deleteUser = userId => {
        axios
            .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
                axiosConfig
             )
             .then(() => {
                this.confirmDelete();
                this.getAllUsers();
             })
             .catch (e=> {
                 alert("Erro ao excluir usuário!");
             }) ;
    };

    confirmDelete = () => {
        if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
            alert("Usuário excluído com sucesso!")
        } else {
            alert("Usuário não foi excluído!")
        }
    }

    render () {
        return (
            <div>
                <GoToPageXButton onClick={this.props.goToRegisterUserPage}><u>Ir Para Página de Registro de Usuário</u></GoToPageXButton>
                <UserListBox>
                    <h2>Usuários Cadastrados</h2>
                    <ListConfig>
                        {this.state.userList.length === 0 && <div>Carregando....</div>}
                        {this.state.userList.map(user => {
                            return (
                                <UsersList>
                                    {user.name}
                                    <DeleteButton onClick={() => this.deleteUser(user.id)}>X</DeleteButton>
                                </UsersList>
                            )
                        })}
                    </ListConfig>
                </UserListBox>
            </div>
        )
    }
}

export default UserListPage;