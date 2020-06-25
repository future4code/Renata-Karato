import React from "react";
import { useHistory } from "react-router";

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
        <div>
            <h3>HOMEPAGE</h3>
            <p>Página para usuário escolher entre fazer login e formulário de aplicação</p>
            <button onClick={goToLoginPage}>Fazer Login</button>
            <button onClick={goToPublicListTripsPage}>Ver Viagens Disponíveis</button>
            <button onClick={goToApplicationFormPage}>Candidatar-se</button>
        </div>
    )
}

export default HomePage;