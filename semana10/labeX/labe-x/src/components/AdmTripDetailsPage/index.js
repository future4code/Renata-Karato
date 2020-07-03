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

    const token = localStorage.getItem("token");

    const [candidates, setCandidates] = useState([])
    const [approved, setApproved] = useState([])
    const [approve, setApprove] = useState(true)
    const [newToken, setNewToken] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem("token");
        setNewToken(token)
        getListDetails();
    }, []);

    const getListDetails = async() => {
        const axiosConfig = {
            headers:{
                auth: token,
            }
        };

        try {
            const response = await axios.get(`${baseUrl}/trip/${id}`, axiosConfig);
            setCandidates(response.data.trip.candidates)
            setApproved(response.data.trip.approved)
        } catch (error) {
            console.log(error)
        }
    }

    const decideCandidate = async(candidateId) => {
        const axiosConfig = {
            headers:{
                auth: token,
            }
        };

        const body = {
            approve: approve,
        };

        try {
            const response = await axios.put(`${baseUrl}/trips/${id}/candidates/${candidateId}/decide`, body, axiosConfig)
            setApprove(response.data.message)
            alert("Candidatura aprovada com sucesso!")
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
            <p>CANDIDATOS A APROVAR</p>
            <p>Aprovar e rejeitar inscrições</p>
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
                                <button onClick={() => decideCandidate(candidate.id)}>Aprovar</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <p>CANDIDATOS APROVADOS</p>
                <ul>
                    {approved && approved.map(candidate => {
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
        </MainContainer>
    )
}

export default TripDetailsPage;