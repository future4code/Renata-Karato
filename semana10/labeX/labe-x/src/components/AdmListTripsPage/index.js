import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import UseProtectedPage from "../../hooks/UseProtectedPage"

import styled from "styled-components";

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #DBCDF0;
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/renata-karato-mello";

const ListTripsPage = () => {
    UseProtectedPage();

    const history = useHistory();
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        getListTrips();
    }, []);

    const getListTrips = async () => {
        try {
            const response = await axios.get(`${baseUrl}/trips`);
            setTrips(response.data.trips)
            console.log(response.data.trips)
        } catch (error) {
            console.log(error)
        }
    }

    const goToLoggedPage = () => {
        history.push("/logged")
    }
    
    const goToTripDetailsPage = () => {
        history.push("/trips/details")
    }

    return (
        <MainContainer>
            <h3>LISTA DE VIAGENS</h3>
            <p>Página para ver todas as viagens</p>
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
            <button onClick={goToLoggedPage}>Voltar</button>
            <button onClick={goToTripDetailsPage}>Ver detalhes de uma viagem</button>
        </MainContainer>
    )
}

export default ListTripsPage;