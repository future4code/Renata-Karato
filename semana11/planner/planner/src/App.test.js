import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

const createTask = async(day) => {
    //Renderiza o componente
    const utils = render( <App /> )

    //Encontrar input pelo texto do placeholder
    const input = utils.getByPlaceholderText("O Que Fazer?")
    const select = utils.getByTestId("select")

    await userEvent.type(input, "Café")

    userEvent.selectOptions(select, [day].value)

    //Encontra o botão pelo texto "Criar Tarefa!"
    const button = utils.getByText(/Criar Tarefa/)

    //Clica no botão
    userEvent.click(button)

     // Retorna o objeto com as funções de busca. Os testes que vão usar 
    // essa função precisam de acesso a elas para fazer as verificações
    return utils
}

//Testes sobre a renderização inicial
describe("Initial renderization", () => {

  //Verifica se o input existe na renderização inicial
  test("if input exists on the screen", () => {
    //Renderiza o App, e desestrutura o retorno pegando a função "getByPlaceholderText"
    const {
      getByPlaceholderText } = render( <App /> )

    // Encontra o input pelo texto do placeholder
    const input = getByPlaceholderText("O Que Fazer?")

    // Verifica se o input está no documento
    expect(input).toBeInTheDocument()
  })

  // Verifica se o botão existe na renderização inicial
  test("if button exists on the screen", () => {
    // Renderiza o App, e desestrutura o retorno pegando a função "getByText"
    const {
      getByText } = render( <App /> )

    // Verifica se existe algo com o texto "Adicionar" no document
    expect(getByText(/Criar Tarefa/)).toBeInTheDocument()
  })
})

describe("Create a task", () => {
  test("when user types, text must appear in the input", async () => {
    // Renderiza o App, e desestrutura o retorno pegando a função "getByPlaceholderText"
    const {
      getByPlaceholderText } = render( <App /> )

      // Encontra o input pelo texto do placeholder
      const input = getByPlaceholderText("O Que Fazer?")

      // Dispara um evento de "type" para o input. Passa o valor "tarefa teste" para entrar no input
      await userEvent.type(input, "Café 2")

      // Verifica se o input possui o "value" de "tarefa teste"
      expect(input).toHaveValue("Café 2")
  })

  test("user chooses any day of the week on select", () => {
    const {
      getByTestId
    } = render( <App /> )

    const select = getByTestId("select")
    userEvent.selectOptions(select, getByTestId("segunda").value)

    expect(select).toHaveValue("Segunda")
  })

  test("when user types and clicks create task, input must be cleared", async() => {
    const {
      getByPlaceholderText,
      getByText,
      getByTestId
    } = render( <App /> )

    const input = getByPlaceholderText("O Que Fazer?")

    await userEvent.type(input, "Café 3")

    const select = getByTestId("select")
    userEvent.selectOptions(select, getByTestId("segunda").value)

    const button = getByText(/Criar Tarefa/)
    userEvent.click(button)

    expect(input).toHaveValue("")
  }) 
})

describe("Mark task as complete", () => {
  test("when clicking on the task, it should be line-through", () => {
    const utils = createTask()

    const task = utils.getByTestId("item-task")

    userEvent.click(task)

    expect(task).toHaveStyle("text-decoration:line-through")
  })
})
