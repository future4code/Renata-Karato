import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router";
import axios from "axios";

import useProtectedPage from "../../hooks/useProtectedPage"


const MainContainer = styled.div`
    background-color: #DBCDF0;
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/renata-karato-mello";

const TripDetailsPage = () => {
    useProtectedPage();

    const { id } = useParams();
    
    const history = useHistory();

    const [candidates, setCandidates] = useState([])
    const [approved, setApproved] = useState([])

    useEffect(() => {
        getListDetails();
    }, );

    const getListDetails = async() => {
        const token = localStorage.getItem("token");

        const axiosConfig = {
            headers:{
                auth: token,
            }
        };

        try {
            const response = await axios.get(`${baseUrl}/trip/${id}`, axiosConfig);
            setCandidates(response.data.trip.candidates)
            setApproved(response.data.trip.approved)
            console.log(response.data.trip.candidates)
        } catch (error) {
            console.log(error)
        }
    }
    
    const goToListTripsPage = () => {
        history.push("/trips/list")
    };

    return (
        <MainContainer>
            <button onClick={goToListTripsPage}>Voltar</button>
            <p>DETALHES DE UMA VIAGEM</p>
            <p>Página para ver os detalhes de uma viagem</p>
            <p>Listar, aprovar e rejeitar inscrições</p>
            <div>
                <ul>
                    {candidates.length === 0 && <div>Carregando...</div>}
                    {candidates && candidates.map(candidate => {
                        return (
                            <li key={candidate.name}>
                                <p>NOME: {candidate.name}</p>
                                <p>IDADE: {candidate.age} | PAÍS: {candidate.country}</p>
                                <p>PROFISSÃO: {candidate.profession}</p>
                                <p>MOTIVO: {candidate.applicationText}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <ul>
                    {approved && approved.map(person => {
                        return (
                            <li key={person.name}>
                                <p>NOME: {person.name}</p>
                                <p>IDADE: {person.age} | PAÍS: {person.country}</p>
                                <p>PROFISSÃO: {person.profession}</p>
                                <p>MOTIVO: {person.applicationText}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </MainContainer>
    )
}

export default TripDetailsPage;