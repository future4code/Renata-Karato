import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const axiosConfig = {
    headers: {
        Authorization: "renata-karato-mello"
    }
}

class UserDetailsPage extends React.Component {
    state = {
       userDetails: [],
       id: "",
    }

    componentDidMount() {
        this.getUserById(this.state.id)
    }

    getUserById = IdUser => {
        axios
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${IdUser}`,
                axiosConfig
            )
            .then(answ => {
            this.setState({userDetails: answ.data});
        }).cath ((error) => {
            alert("Não foi possível buscar usuário")
        })
    };

    render () {
        return (
            <div>
                <p>Oi!</p>
            </div>
        )
    }
}

export default UserDetailsPage;