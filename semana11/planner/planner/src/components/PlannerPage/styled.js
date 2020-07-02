import styled from "styled-components";

/* 
#F8FFE5 - branco amarelado
#06D6A0 - verde
#1B9AAA - azul
#EF476F - rosa
#FFC43D - amarelo
#242038 - roxo escurão
#725AC1 - roxo
*/

export const MainContainer = styled.div`
  background-color: #06D6A0; /*caribbean green*/
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

export const BoxTask = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.label`
    font-family: Roboto;
    font-size: 16px;
    padding: 0 10px;
    color: #242038;
`;

export const Input = styled.input`
    outline: none;
    border: none;
    border-radius: 5px;
    height: 24px;
    width: 20vw;
`;

export const Select = styled.select`
    font-family: Roboto;
    font-size: 16px;
    height: 26px;
    outline: none;
    border: none;
    border-radius: 5px;
    margin: 0 10px;
`;

export const SendButton = styled.button`
    border: none;
    border-radius: 5px;
    font-family: Roboto;
    color: #242038;
    width: 10vw;
    font-size: 16px;
    height: 24px;
    background: #FFC43D;
    box-shadow: 0px 0px 6px #725AC1;
    cursor: pointer;

    :hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        background-color: #1B9AAA;
    }

    :active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
`;

export const Hr = styled.hr`
    margin: 15px 0;
`;

export const Main = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    div {
        background-color: #EF476F; /*paradise pink*/
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
        height: 50vh;
        width: 20vw;
        height: 38.6vh;
        font-family: Roboto;
        font-size: 16px;
        color: #242038;
        box-shadow: 0 0 6px;

        :hover {
            box-shadow: 0 0 12px #725AC1;
            transition: 200ms;
        }
    }
`;

export const Task = styled.li`
    text-align: left;
    text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;