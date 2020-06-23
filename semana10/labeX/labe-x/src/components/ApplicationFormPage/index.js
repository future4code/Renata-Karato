import React from "react";
import { useHistory } from "react-router";

const ApplicationFormPage = () => {
    const history = useHistory();
    
    const goToHomePage = () => {
        history.push("/")
    };

    return (
        <div>
            <p>FORMULÁRIO</p>
            <p>Página para usuário se inscrever em uma viagem</p>
            <button onClick={goToHomePage}>Voltar Para HomePage</button>
        </div>
    )
}

export default ApplicationFormPage;
