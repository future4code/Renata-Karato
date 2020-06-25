import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import axios from "axios";

import useProtectedPage from "../../hooks/useProtectedPage"

const MainContainer = styled.div`
    background-color: #DBCDF0;
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/renata-karato-mello";

const ListTripsPage = () => {
    useProtectedPage();

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

    const goToLoggedPage = () => {
        history.push("/logged")
    }
    
    const goToTripDetailsPage = (id) => {
        history.push(`/trips/details/${id}`)
    }

    return (
        <MainContainer>
            <button onClick={goToLoggedPage}>Voltar</button>
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
                                <button onClick={() => goToTripDetailsPage(trip.id)}>Ver Detalhes</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </MainContainer>
    )
}

export default ListTripsPage;