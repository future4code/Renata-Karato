import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #C9E4DE;
`;

const PublicListTripsPage = () => {
    const history = useHistory();
    
    const goToApplicationFormPage = () => {
        history.push("/application-form")
    }

    const goToHomePage = () => {
        history.push("/")
    };

    return (
        <MainContainer>
            <button onClick={goToHomePage}>Voltar Para Home</button>
            <p>VIAGENS DISPONÍVEIS</p>
            <p>Página para usuários ver as viagens espaciais disponíveis</p>
            <button onClick={goToApplicationFormPage}>Candidatar-se</button>
        </MainContainer>
    )
}

export default PublicListTripsPage;