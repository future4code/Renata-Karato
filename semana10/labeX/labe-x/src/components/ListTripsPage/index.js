import React from "react";
import { useHistory } from "react-router";

const ListTripsPage = () => {
    const history = useHistory();

    const goToLoggedPage = () => {
        history.push("/logged")
    }
    
    const goToTripDetailsPage = () => {
        history.push("/trips/details")
    }

    return (
        <div>
            <p>LISTA DE VIAGENS</p>
            <p>Página para ver todas as viagens</p>
            <button onClick={goToLoggedPage}>Voltar</button>
            <button onClick={goToTripDetailsPage}>Ver detalhes de uma viagem</button>
        </div>
    )
}

export default ListTripsPage;