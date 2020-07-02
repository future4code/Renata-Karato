import React, { useState, useEffect } from 'react';
import axios from "axios";

import { MainContainer, BoxTask, Label, Input, Select, SendButton, Hr, Main, Task } from "./styled";

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
            console.log(response.data)
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

    const createTask = () => {
        const body = {
            text: inputText,
            day: day,
            completed: false
        }

        axios.post(`${baseUrl}`, body).then(() => {
            setInputText("")
            getTasks()
        })
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

 /*    const { allDays, monday, tuesday, wednesday, thursday, friday, saturday, sunday } = []

    tasks.forEach((select) => {
        if(select.day === "allDays") {
           allDays.push(select)
        } else if(select.day === "monday") {
            monday.push(select)
        } else if(select.day === "tuesday") {
            tuesday.push(select)
        } else if(select.day === "wednesday") {
            wednesday.push(select)
        } else if(select.day === "thursday") {
            thursday.push(select)
        } else if(select.day === "friday") {
            friday.push(select)
        } else if(select.day === "saturday") {
            saturday.push(select)
        } else if(select.day === "sunday") {
            sunday.push(select)
        }
    }) */
    
  return (
    <MainContainer>
        <BoxTask>
            <Label htmlfor="newTask">Nova Tarefa:</Label>
            <Input 
                onChange={onChangeInput}
                type="text"
                name="newTask"
                id="newTask"
                required
            />
            <Select 
                onChange={onChangeSelect} 
                name="weekDay" 
                id="weekDay" 
                value= {day} 
                required
            >
                <option value="" />
                {tasks && tasks.map((day) => {
                    return (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    )
                })}
            </Select>
            <SendButton onClick={createTask}>Criar Tarefa!</SendButton>
        </BoxTask>
        <Hr />
        <Main>
            <div id="allDays" name="allDays">
                Todos os Dias
                <ul className="content"></ul>
            </div>
            <div id="monday" name="monday">
                Segunda-Feira
                {tasks.map((item, index) => {
                    return (
                        <ul className="content">
                            <Task 
                                completed={item.completed}
                                onClick={() => selectTask(item.id)}
                                key={index}
                            >
                                {item.text}
                            </Task>
                        </ul>
                    )
                })}
            </div>
            <div id="tuesday">
                Terça-Feira
                <ul className="content"></ul>
            </div>
            <div id="wednesday">
                Quarta-Feira
                <ul className="content"></ul>
            </div>
            <div id="thursday">
                Quinta-Feira
                <ul className="content"></ul>
            </div>
            <div id="friday">
                Sexta-Feira
                <ul className="content"></ul>
            </div>
            <div id="saturday">
                Sábado
                <ul className="content"></ul>
            </div>
            <div id="sunday">
                Domingo
                <ul className="content"></ul>
            </div>
        </Main>
    </MainContainer>
  );
}

export default PlannerPage;