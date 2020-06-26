import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router";
import axios from "axios";

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #C9E4DE;
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/renata-karato-mello";

const PublicListTripsPage = () => {
    const { id } = useParams();
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
    
    const goToApplicationFormPage = () => {
        history.push(`/trips/${id}/form`)
    }

    const goToHomePage = () => {
        history.push("/")
    };

    return (
        <MainContainer>
            <button onClick={goToHomePage}>Voltar Para Home</button>
            <button onClick={goToApplicationFormPage}>Candidatar-se</button>
            <p>VIAGENS DISPONÍVEIS</p>
            <p>Página para usuários ver as viagens espaciais disponíveis</p>
            <div>
                <ul>
                    {trips.length === 0 && <div>Carregando...</div>}
                    {trips && trips.map(trip => {
                        return (
                            <li key={trip.name}>
                                <p>VIAGEM: {trip.name}</p>
                                <p>PLANETA: {trip.planet}</p>
                                <p>DESCRIÇÃO: {trip.description}</p>
                                <p>DATA: {trip.date} | DURAÇÃO: {trip.durationInDays} dias</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </MainContainer>
    )
}

export default PublicListTripsPage;