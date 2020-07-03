import React from "react";
import { useHistory } from "react-router";

import useProtectedPage from "../../hooks/useProtectedPage";

import styled from "styled-components";

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #DBCDF0;
`;

const LoggedPage = () => {
    useProtectedPage();

    const history = useHistory();

    const handleLogout = () => {
        localStorage.clear();
        history.push("/login");
    };
  
    const goToListTripsPage = () => {
        history.push("/trips/list")
    };

    const goToCreateTripPage = () => {
        history.push(`/trips/create/`)
    }

    const goToHomePage = () => {
        history.push("/")
    };

    return (
        <MainContainer>
            <button onClick={goToHomePage}>Voltar Para Home</button>
            <h3>LOGADO</h3>
            <p>Página para administrador navegar na área privada</p>
            <button onClick={goToListTripsPage}>Ir para lista de viagens</button>
            <button onClick={goToCreateTripPage}>Criar novas viagens</button>
            <button onClick={handleLogout}>Fazer Logout</button>
        </MainContainer>
    )
}

export default LoggedPage;