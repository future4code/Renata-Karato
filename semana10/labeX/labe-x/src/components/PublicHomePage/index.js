import React from "react";
import { useHistory } from "react-router";
import { MainContainer, Header, Footer, BoxButtons, ButtonOrange, ButtonGreen, ImgLogo, ImgBanner, MessageFooter } from "./styled";

import LogoHome from "../../imgs/logoHome.png"
import CallHome from "../../imgs/callHome.png"

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#FC9F5B"
      },
      secondary: {
        main: "#33CA7F"
      }
    }
  });

  
const HomePage = () => {
    const history = useHistory();

    const goToLoginPage = () => {
        history.push("/login")
    };

    const goToPublicListTripsPage = () => {
        history.push("/trips/public-list")
    };

    return (
        <MuiThemeProvider theme={theme}>
            <MainContainer>
                <Header>
                    <div class="header-right">
                        <a class="active" href="/">Home</a>
                        <a href="/login">Login</a>
                        <a href="/trips/public-list">Quero Viajar</a>
                        <a href="/contact">Contato</a>
                        <a href="/about">Sobre</a>
                        
                    </div>
                </Header>
                <ImgLogo src={LogoHome} alt="Logo" />
                <ImgBanner src={CallHome} alt="Banner" />
                <BoxButtons>
                    <ButtonOrange color="primary" variant="contained" size="large" onClick={goToLoginPage}>Login</ButtonOrange>
                    <ButtonGreen color="secondary" variant="contained" size="large" onClick={goToPublicListTripsPage}>Viagens Disponíveis</ButtonGreen>
                </BoxButtons>
                <Footer>
                    <MessageFooter><strong>AGRADECEMOS A VISITA... VOLTE SEMPRE!</strong> </MessageFooter>
                    <p>By Renata Karato - Turma Mello</p>
                </Footer>
            </MainContainer>
        </MuiThemeProvider>
    )
}

export default HomePage;