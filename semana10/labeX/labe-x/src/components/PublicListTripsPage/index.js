import React from "react";
import { useHistory } from "react-router";

const PublicListTripsPage = () => {
    const history = useHistory();
    
    const goToApplicationFormPage = () => {
        history.push("/application-form")
    }

    const goToHomePage = () => {
        history.push("/")
    };

    return (
        <div>
            <p>VIAGENS DISPONÍVEIS</p>
            <p>Página para usuários ver as viagens espaciais disponíveis</p>
            <button onClick={goToHomePage}>Voltar Para HomePage</button>
            <button onClick={goToApplicationFormPage}>Candidatar-se</button>
        </div>
    )
}

export default PublicListTripsPage;