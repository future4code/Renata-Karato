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
        completeList: []
    }

    getUserById = IdUser => {
        axios
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${IdUser}`,
                axiosConfig
            )
            .then(answ => {
            this.setState({completeList: answ.data});
        });
    };

    render () {
        return (
           
        )
    }
}

export default UserDetailsPage;