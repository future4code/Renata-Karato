import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Clear from '@material-ui/icons/Clear';

/* 
#F8FFE5 - branco amarelado
#06D6A0 - verde
#1B9AAA - azul
#EF476F - rosa
#FFC43D - amarelo
#242038 - roxo escurão
#725AC1 - roxo
*/

const MyTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#FFC43D',
      },
    },
  });

const MainContainer = styled.div`
  background-color: #06D6A0; /*caribbean green*/
  max-width: 100vw;
  min-height: 100vh;
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
        padding: 5px;
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

const WeekName = styled.p`
    text-align: center;
    font-weight: bold;
`;

const Task = styled.li`
    text-align: left;
    font-family: Roboto;
    font-size: 14px;
    text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const DeleteButton = styled.span`
  color: #FFC43D;
  cursor: pointer;
  padding: 0 5px;
  position: relative;
  top: 5px;
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

    const deleteTask = async(taskId) => {
        if(window.confirm("Tem certeza que deseja apagar esta tarefa?")) {
            await axios.delete(`${baseUrl}/${taskId}`)
            .then(() => {
                alert("Tarefa apagada com sucesso!")
                getTasks();
            })
            .catch(error => {
                alert("Não foi possível apagar a tarefa!")
            })
        }
    }

    const selectTask = (id) => {
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
    } 

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
            <MuiThemeProvider theme={MyTheme}>
                <div id="allDays" name="allDays">
                    <WeekName>Todos os Dias</WeekName>
                    {tasks && tasks.map((task, index) => {
                        if (task.day === "Todos os Dias") {
                            return ( 
                                <ul>
                                    <Task 
                                        completed={task.completed} 
                                        onClick={() => selectTask(task.id)} 
                                        key={index}
                                        data-testid="item-task"
                                    >
                                        {task.text}
                                        <DeleteButton data-testid="delete" onClick={() => deleteTask(task.id)}>
                                            <Clear color="primary"/>
                                        </DeleteButton>
                                    </Task>
                                </ul>
                            )
                        } else {
                            return null
                        }
                    })}
                </div>
            
                <div id="monday" name="monday">
                    <WeekName>Segunda-Feira</WeekName>
                    {tasks && tasks.map((task, index) => {
                        if (task.day === "Segunda") {
                            return ( 
                                <ul>
                                    <Task 
                                        completed={task.completed} 
                                        onClick={() => selectTask(task.id)} 
                                        key={index}
                                        data-testid="item-task"
                                    >
                                        {task.text}
                                        <DeleteButton data-testid="delete" onClick={() => deleteTask(task.id)}>
                                            <Clear color="primary"/>
                                        </DeleteButton>
                                    </Task>
                                </ul>
                            )
                        } else {
                            return null
                        }
                    })}
                </div>
                <div id="tuesday">
                    <WeekName>Terça-Feira</WeekName>
                    {tasks && tasks.map((task, index) => {
                        if (task.day === "Terça") {
                            return ( 
                                <ul>
                                    <Task 
                                        completed={task.completed} 
                                        onClick={() => selectTask(task.id)} 
                                        key={index}
                                        data-testid="item-task"
                                    >
                                        {task.text}
                                        <DeleteButton data-testid="delete" onClick={() => deleteTask(task.id)}>
                                            <Clear color="primary"/>
                                        </DeleteButton>
                                    </Task>
                                </ul>
                            )
                        } else {
                            return null
                        }
                    })}
                </div>
                <div id="wednesday">
                    <WeekName>Quarta-Feira</WeekName>
                    {tasks && tasks.map((task, index) => {
                        if (task.day === "Quarta") {
                            return ( 
                                <ul>
                                    <Task 
                                        completed={task.completed} 
                                        onClick={() => selectTask(task.id)} 
                                        key={index}
                                        data-testid="item-task"
                                    >
                                        {task.text}
                                        <DeleteButton data-testid="delete" onClick={() => deleteTask(task.id)}>
                                            <Clear color="primary"/>
                                        </DeleteButton>
                                    </Task>
                                </ul>
                            )
                        } else {
                            return null
                        }
                    })}
                </div>
                <div id="thursday">
                    <WeekName>Quinta-Feira</WeekName>
                    {tasks && tasks.map((task, index) => {
                        if (task.day === "Quinta") {
                            return ( 
                                <ul>
                                    <Task 
                                        completed={task.completed} 
                                        onClick={() => selectTask(task.id )}
                                        key={index}
                                        data-testid="item-task" 
                                    >
                                        {task.text}
                                        <DeleteButton data-testid="delete" onClick={() => deleteTask(task.id)}>
                                            <Clear color="primary"/>
                                        </DeleteButton>
                                    </Task>
                                </ul>
                            )
                        } else {
                            return null
                        }
                    })}
                </div>
                <div id="friday">
                    <WeekName>Sexta-Feira</WeekName>
                    {tasks && tasks.map((task, index) => {
                        if (task.day === "Sexta") {
                            return ( 
                                <ul>
                                    <Task 
                                        completed={task.completed} 
                                        onClick={() => selectTask(task.id)}
                                        key={index}
                                        data-testid="item-task" 
                                    >
                                        {task.text}
                                        <DeleteButton data-testid="delete" onClick={() => deleteTask(task.id)}>
                                            <Clear color="primary"/>
                                        </DeleteButton>
                                    </Task>
                                </ul>
                            )
                        } else {
                            return null
                        }
                    })}
                </div>
                <div id="saturday">
                    <WeekName>Sábado</WeekName>
                    {tasks && tasks.map((task, index) => {
                        if (task.day === "Sábado") {
                            return ( 
                                <ul>
                                    <Task 
                                        completed={task.completed} 
                                        onClick={() => selectTask(task.id)} 
                                        key={index}
                                        data-testid="item-task"
                                    >
                                        {task.text}
                                        <DeleteButton data-testid="delete" onClick={() => deleteTask(task.id)}>
                                            <Clear color="primary"/>
                                        </DeleteButton>
                                    </Task>
                                </ul>
                            )
                        } else {
                            return null
                        }
                    })}
                </div>
                <div id="sunday">
                    <WeekName>Domingo</WeekName>
                    {tasks && tasks.map((task, index) => {
                        if (task.day === "Domingo") {
                            return ( 
                                <ul>
                                    <Task 
                                        completed={task.completed} 
                                        onClick={() => selectTask(task.id )} 
                                        key={index}
                                        data-testid="item-task"
                                    >
                                        {task.text}
                                        <DeleteButton data-testid="delete" onClick={() => deleteTask(task.id)}>
                                            <Clear color="primary"/>
                                        </DeleteButton>
                                    </Task>
                                </ul>
                            )
                        } else {
                            return null
                        }
                    })}
                </div>
            </MuiThemeProvider>
        </Main>
    </MainContainer>
  );
}

export default PlannerPage;