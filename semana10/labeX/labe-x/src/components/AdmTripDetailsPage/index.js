import React from "react";
import { useHistory } from "react-router";

import useProtectedPage from "../../hooks/useProtectedPage"

import styled from "styled-components";

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #DBCDF0;
`;

const TripDetailsPage = () => {
    useProtectedPage();

    const history = useHistory();
    
    const goToListTripsPage = () => {
        history.push("/trips/list")
    };

    return (
        <MainContainer>
            <p>DETALHES DE UMA VIAGEM</p>
            <p>Página para ver os detalhes de uma viagem</p>
            <p>Listar, aprovar e rejeitar inscrições</p>
            <button onClick={goToListTripsPage}>Voltar</button>
        </MainContainer>
    )
}

export default TripDetailsPage;