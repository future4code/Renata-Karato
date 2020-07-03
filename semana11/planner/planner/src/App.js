import React, { useState, useEffect } from 'react';
import axios from "axios";
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

const MainContainer = styled.div`
  background-color: #06D6A0; /*caribbean green*/
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const BoxTask = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Label = styled.label`
    font-family: Roboto;
    font-size: 16px;
    padding: 0 10px;
    color: #242038;
`;

const Input = styled.input`
    outline: none;
    border: none;
    border-radius: 5px;
    height: 24px;
    width: 20vw;
`;

const Select = styled.select`
    font-family: Roboto;
    font-size: 16px;
    height: 26px;
    outline: none;
    border: none;
    border-radius: 5px;
    margin: 0 10px;
`;

const SendButton = styled.button`
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

const Hr = styled.hr`
    margin: 15px 0;
`;

const Main = styled.main`
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

const Task = styled.li`
    text-align: left;
    text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const baseUrl = 
    "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-renata-karato"

const PlannerPage = () => {
    const [tasks, setTasks] = useState([]);
    const [inputText, setInputText] = useState("");
    const [day, setDay] = useState("")
    
    const getTasks = async() => {
        try {
            const response = await axios.get(`${baseUrl}`);
            setTasks(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTasks();
    }, []);
    
    const onChangeInput = (event) => {
        setInputText(event.target.value)
    }

    const onChangeSelect = (event) => {
        setDay(event.target.value)
    }

    const createTask = async(event) => {
        event.preventDefault();

        const body = {
            text: inputText,
            day: day,
            completed: false
        }

        await axios.post(`${baseUrl}`, body).then(() => {
            setInputText("");
            getTasks();
        })
    }

    /* const selectTask = (id) => {
        const newTaskList = tasks.map((task) => {
            if(task.id === id) {
                return {
                    ...task,
                    completed: !task.completed
                }
            }
            return task
        })
        setTasks(newTaskList)
    } */

    let organizeByDay = ({
        allDays: [], monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] });

    tasks.forEach((task) => {
        switch(task.day) {
            case "Todos os Dias":
                organizeByDay.allDays.push(task.text)
                break;
            case "Segunda":
                organizeByDay.monday.push(task.text)
                break;
            case "Terça":
                organizeByDay.tuesday.push(task.text)
                break;
            case "Quarta":
                organizeByDay.wednesday.push(task.text)
                break;
            case "Quinta":
                organizeByDay.thursday.push(task.text)
                break;
            case "Sexta":
                organizeByDay.friday.push(task.text)
                break;
            case "Sábado":
                organizeByDay.saturday.push(task.text)
                break;
            case "Domingo":
                organizeByDay.sunday.push(task.text)
                break;
            default:
                organizeByDay.allDays.push(null)
        }
    })
    
   /*  {tasks && tasks.map ((data, index) => {
        return (
        )
    })} */

  return (
    <MainContainer>
        <BoxTask>
            <Label htmlfor="newTask">Nova Tarefa:</Label>
            <Input
                value={inputText}
                onChange={onChangeInput}
                type="text"
                name="newTask"
                id="newTask"
                placeholder="O Que Fazer?"
                required
            />
            <Select
                data-testid="select" 
                onChange={onChangeSelect} 
                name="weekDay" 
                id="weekDay" 
                value= {day} 
                required
            >
                <option value="" disabled>Que Dia?</option>
                <option value="Todos os Dias">Todos os Dias</option>
                <option value="Segunda" data-testid="segunda">Segunda-Feira</option>
                <option value="Terça">Terça-Feira</option>
                <option value="Quarta">Quarta-Feira</option>
                <option value="Quinta">Quinta-Feira</option>
                <option value="Sexta">Sexta-Feira</option>
                <option value="Sábado">Sábado</option>
                <option value="Domingo">Domingo</option>
            </Select>
            <SendButton onClick={createTask}>Criar Tarefa!</SendButton>
        </BoxTask>
        <Hr />
        <Main>
            <div id="allDays" name="allDays">
                Todos os Dias
                {organizeByDay.allDays.map((item) => {
                    return (
                        <ul className="content">
                            <Task 
                                /* completed={data.completed}
                                onClick={() => selectTask(data.id)}
                                key={index}  */
                            >
                                {item}
                            </Task>
                        </ul>
                    )
                })}
            </div>
        
            <div id="monday" name="monday">
                Segunda-Feira
                {organizeByDay.monday.map((item) => {
                    return (
                        <ul className="content">
                            <Task 
                                
                            >
                                {item}
                            </Task>
                        </ul>
                    )
                })}
            </div>
            <div id="tuesday">
                Terça-Feira
                {organizeByDay.tuesday.map((item) => {
                    return (
                        <ul className="content">
                            <Task 
                                
                            >
                                {item}
                            </Task>
                        </ul>
                    )
                })}
            </div>
            <div id="wednesday">
                Quarta-Feira
                {organizeByDay.wednesday.map((item) => {
                    return (
                        <ul className="content">
                            <Task 
                                
                            >
                                {item}
                            </Task>
                        </ul>
                    )
                })}
            </div>
            <div id="thursday">
                Quinta-Feira
                {organizeByDay.thursday.map((item) => {
                    return (
                        <ul className="content">
                            <Task 
                                
                            >
                                {item}
                            </Task>
                        </ul>
                    )
                })}
            </div>
            <div id="friday">
                Sexta-Feira
                {organizeByDay.friday.map((item) => {
                    return (
                        <ul className="content">
                            <Task 
                                
                            >
                                {item}
                            </Task>
                        </ul>
                    )
                })}
            </div>
            <div id="saturday">
                Sábado
                {organizeByDay.saturday.map((item) => {
                    return (
                        <ul className="content">
                            <Task 
                                
                            >
                                {item}
                            </Task>
                        </ul>
                    )
                })}
            </div>
            <div id="sunday">
                Domingo
                {organizeByDay.sunday.map((item) => {
                    return (
                        <ul className="content">
                            <Task 
                                
                            >
                                {item}
                            </Task>
                        </ul>
                    )
                })}
            </div>
        </Main>
    </MainContainer>
  );
}

export default PlannerPage;