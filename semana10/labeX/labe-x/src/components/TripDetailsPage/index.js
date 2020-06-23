import React from "react";
import { useHistory } from "react-router";

const TripDetailsPage = () => {
    const history = useHistory();
    
    const goToListTripsPage = () => {
        history.push("/trips/list")
    };

    return (
        <div>
            <p>DETALHES DE UMA VIAGEM</p>
            <p>Página para ver os detalhes de uma viagem</p>
            <p>Listar, aprovar e rejeitar inscrições</p>
            <button onClick={goToListTripsPage}>Voltar</button>
        </div>
    )
}

export default TripDetailsPage;