import React from "react";
import { useHistory } from "react-router";

const LoggedPage = () => {
    const history = useHistory();

    const goToHomePage = () => {
        history.push("/")
    };
    
    const goToListTripsPage = () => {
        history.push("/trips/list")
    };

    const goToCreateTripPage = () => {
        history.push("/trips/create")
    }

    return (
        <div>
            <p>LOGADO</p>
            <p>Página para administrador navegar na área privada</p>
            <button onClick={goToHomePage}>Voltar Para HomePage</button>
            <button onClick={goToListTripsPage}>Ir para lista de viagens</button>
            <button onClick={goToCreateTripPage}>Criar novas viagens</button>
        </div>
    )
}

export default LoggedPage;