import React, { useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import axios from "axios";

import useProtectedPage from "../../hooks/useProtectedPage";
import useForm from "../../hooks/useForm";

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #DBCDF0;
`;

const InputDescription = styled.input`
    width: 15vw;
    height: 15vh;
`;

const InputWithoutArrows = styled.input`
    /*hide arrows from number input */
    ::-webkit-inner-spin-button, 
    ::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
    }
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/renata-karato-mello";

const CreateTripPage = () => {
    useProtectedPage();
    
    const history = useHistory();

    const { form, onChange } = useForm ({ name:"", planet:"", date:"", description:"", durationInDays:"" })

    useEffect(() => {

    }, [])
       
    const goToLoggedPage = () => {
        history.push("/logged")
    }

    const mySubmitHandler = async (event) => {
        event.preventDefault();

        const token = localStorage.getItem("token");

        const axiosConfig = {
            headers: {
                auth: token,
            }
        };
         
         try {
             const response = await axios.post(`${baseUrl}/trips`, form, axiosConfig);
             console.log(response.data.trip)
             alert("Viagem criada com sucesso!")
         } catch (error) {
             console.log(error)
             alert("Ocorreu um erro ao criar a viagem.")
         }
    }
 
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        onChange(name, value);
    };

    return (
        <MainContainer>
            <button onClick={goToLoggedPage}>Voltar</button>
            <p>CRIAR VIAGEM</p>
            <p>Página para criar uma viagem</p>
            <form onSubmit={mySubmitHandler}>
                <div>
                    <label forhtml="name">Nome</label>
                    <input
                        id="name"
                        type="text"
                        required
                        name="name"
                        value={form.name}
                        pattern="[A-Za-zÀ-ú0-9., - ]{5,}"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label forhtml="planet">Planeta</label>
                    <select
                        id="planet"
                        type="select"
                        required
                        name="planet"
                        value={form.planet}
                        onChange={handleInputChange}
                    >
                            <option value={""}></option>
                            <option>Mercúrio</option>
                            <option>Vênus</option>
                            <option>Terra</option>
                            <option>Marte</option>
                            <option>Saturno</option>
                            <option>Júpiter</option>
                            <option>Urano</option>
                            <option>Netuno</option>
                            <option>Plutão</option>
                    </select>
                </div>
                <div>
                    <label forhtml="date">Data</label>
                    <input
                        id="date"
                        type="date"
                        required
                        name="date"
                        value={form.date}
                        onChange={handleInputChange}
                        min={new Date().toJSON().split("T")[0]}
                    />
                </div>
                <div>
                    <label forhtml="description">Descrição</label>
                    <InputDescription
                        id="description"
                        type="text"
                        required
                        name="description"
                        value={form.description}
                        onChange={handleInputChange}
                        minLength="30"
                    />
                </div>
                <div>
                    <label forhtml="durationInDays">Duração(em dias - mínimo 50 dias)</label>
                    <InputWithoutArrows
                        id="durationInDays"
                        type="number"
                        required
                        name="durationInDays"
                        value={form.durationInDays}
                        onChange={handleInputChange}
                        min="50"
                    />
                </div>
                <div>
                    <button type="submit">Criar Viagem</button>
                </div>
            </form>
        </MainContainer>
    )
}

export default CreateTripPage;