import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import useProtectedPage from "../../hooks/useProtectedPage"

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #DBCDF0;
`;

const CreateTripPage = () => {
    useProtectedPage();
    
    const history = useHistory();

    const goToLoggedPage = () => {
        history.push("/logged")
    }

    return (
        <MainContainer>
            <p>CRIAR VIAGEM</p>
            <p>Página para criar uma viagem</p>
            <button onClick={goToLoggedPage}>Voltar</button>
        </MainContainer>
    )
}

export default CreateTripPage;