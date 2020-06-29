import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import { MainContainer, Header, ImgLogo, Title, Subtitle, Loading, Grid, Card, Description, CardButton, ButtonForm, Footer, MessageFooter } from "./styled";

import LogoHome from "../../imgs/logoHome.png"

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/renata-karato-mello";

const PublicListTripsPage = () => {
    const history = useHistory();

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        getListTrips();
    }, []);

    const getListTrips = async() => {
        try {
            const response = await axios.get(`${baseUrl}/trips`);
            setTrips(response.data.trips)
            console.log(response.data.trips)
        } catch (error) {
            console.log(error)
        }
    }
    
    const goToApplicationFormPage = (id) => {
        history.push(`/trips/form/${id}`)
    }

    const goToHomePage = () => {
        history.push("/")
    }

    return (
        <MainContainer>
            <Header>
                <div class="header-left" onClick={goToHomePage}>
                    <ImgLogo src={LogoHome} alt="Logo" />
                </div>
                <div class="header-right">
                    <a href="/">Home</a>
                    <a href="/login">Login</a>
                    <a class="active" href="/trips/public-list">Quero Viajar</a>
                    <a href="/contact">Contato</a>
                    <a href="/about">Sobre</a>
                </div>
            </Header>
            <Title>VIAGENS DISPONÍVEIS</Title>
            <Subtitle>Estas são nossas viagens ativas. Basta clicar em tenho interesse, preencher o formulário e aguardar nosso contato!</Subtitle>
            <div>
                {trips.length === 0 && <Loading>Carregando...</Loading>}
                <Grid>
                {trips && trips.map((trip) => {
                    return (
                        <Card id={trip.id}>
                            <Description>
                                <p><strong>VIAGEM:</strong> {trip.name}</p>
                                <p><strong>PLANETA:</strong> {trip.planet}</p>
                                <p><strong>DESCRIÇÃO:</strong> {trip.description}</p>
                                <p><strong>DATA:</strong> {trip.date}</p> 
                                <p><strong>DURAÇÃO:</strong> {trip.durationInDays} dias</p>
                                <CardButton>
                                    <ButtonForm onClick={() => goToApplicationFormPage(trip.id)}>Tenho Interesse</ButtonForm>
                                </CardButton>
                            </Description>
                        </Card>
                    )
                })}
                </Grid>
            </div>
            <Footer>
                <MessageFooter><strong>AGRADECEMOS A VISITA... VOLTE SEMPRE!</strong> </MessageFooter>
                <p>By Renata Karato - Turma Mello</p>
            </Footer>
        </MainContainer>
    )
}

export default PublicListTripsPage;