import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FAEDCB;;
`;

const HomePage = () => {
    const history = useHistory();
    
    const goToLoginPage = () => {
        history.push("/login")
    };

    const goToPublicListTripsPage = () => {
        history.push("/trips/public-list")
    }

    const goToApplicationFormPage = () => {
        history.push("/application-form")
    }

    return (
        <MainContainer>
            <h3>HOMEPAGE</h3>
            <p>Página para usuário escolher entre fazer login e formulário de aplicação</p>
            <button onClick={goToLoginPage}>Fazer Login</button>
            <button onClick={goToPublicListTripsPage}>Ver Viagens Disponíveis</button>
            <button onClick={goToApplicationFormPage}>Candidatar-se</button>
        </MainContainer>
    )
}

export default HomePage;