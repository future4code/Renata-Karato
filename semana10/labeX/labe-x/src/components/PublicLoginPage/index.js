import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import axios from "axios";

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #C9E4DE;
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/renata-karato-mello";

const LoginPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        
    }, []); 

    const handleLogin = async () => {
        const body = {
            email: email,
            password: password,
        };

        try {
            const response = await axios.post(`${baseUrl}/login`, body);
            localStorage.setItem("token", response.data.token);
            history.push("/logged");
        } catch (error) {
            alert("E-mail ou senha incorretos. Tente novamente.")
        }
    };

    const goToHomePage = () => {
        history.push("/")
    };

    return (
        <MainContainer>
            <button onClick={goToHomePage}>Voltar Para Home</button>
            <h3>LOGIN</h3>
            <label>E-mail</label>
            <input
                value={email}
                placeholder="E-mail"
                type="email"
                required
                onChange={e => setEmail(e.target.value)}
            />
            <label>Senha</label>
            <input
                value={password}
                placeholder="Senha"
                type="password"
                required 
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Fazer Login</button>
        </MainContainer>
    )
}

export default LoginPage;