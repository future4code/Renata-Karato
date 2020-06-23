import React from "react";
import { useHistory } from "react-router";

const CreateTripPage = () => {
    const history = useHistory();

    const goToLoggedPage = () => {
        history.push("/logged")
    }

    return (
        <div>
            <p>CRIAR VIAGEM</p>
            <p>Página para criar uma viagem</p>
            <button onClick={goToLoggedPage}>Voltar</button>
        </div>
    )
}

export default CreateTripPage;