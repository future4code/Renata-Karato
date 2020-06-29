import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import { MainContainer, Header, ImgLogo, Title, Subtitle, Label, Input, ButtonLogin, Footer, MessageFooter } from "./styled";

import LogoHome from "../../imgs/logoHome.png"

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
            <Header>
                <div class="header-left" onClick={goToHomePage}>
                    <ImgLogo src={LogoHome} alt="Logo" />
                </div>
                <div class="header-right">
                    <a href="/">Home</a>
                    <a class="active" href="/login">Login</a>
                    <a href="/trips/public-list">Quero Viajar</a>
                    <a href="/contact">Contato</a>
                    <a href="/about">Sobre</a>
                    
                </div>
            </Header>
            <Title>LOGIN</Title>
            <Subtitle>Área exclusiva para administradores</Subtitle>
            <Label>E-mail:</Label>
            <Input
                value={email}
                type="email"
                required
                onChange={e => setEmail(e.target.value)}
            />
            <Label>Senha:</Label>
            <Input
                value={password}
                type="password"
                required 
                onChange={e => setPassword(e.target.value)}
            />
            <div>
                <ButtonLogin onClick={handleLogin}>Fazer Login</ButtonLogin>
            </div>
            <Footer>
                <MessageFooter><strong>AGRADECEMOS A VISITA... VOLTE SEMPRE!</strong> </MessageFooter>
                <p>By Renata Karato - Turma Mello</p>
            </Footer>
        </MainContainer>
    )
}

export default LoginPage;