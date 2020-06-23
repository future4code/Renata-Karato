import React from "react";
import { useHistory } from "react-router";

const LoginPage = () => {
    const history = useHistory();

    const goToHomePage = () => {
        history.push("/")
    };
    
    const goToLoggedPage = () => {
        history.push("/logged")
    }

    return (
        <div>
            <p>LOGIN</p>
            <p>Página para administrador se logar</p>
            <p>Página para administrador navegar na área privada</p>
            <button onClick={goToHomePage}>Voltar Para HomePage</button>
            <button onClick={goToLoggedPage}>Entrar</button>
        </div>
    )
}

export default LoginPage;