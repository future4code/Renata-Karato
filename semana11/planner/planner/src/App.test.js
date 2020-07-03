import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

const createTask = (text) => {
    //Renderiza o componente
    const utils = render( <App /> )

    //Encontrar input pelo texto do placeholder
    const input = utils.getByPlaceholderText("O Que Fazer")
    const select = utils.getByTestId("select")

    userEvent.type(input, text)
    userEvent.selectOptions(select, getByText("Segunda-Feira").value)

    //Encontra o botão pelo texto "Criar Tarefa!"
    const button = utils.getByText(/Criar Tarefa/)

    //Clica no botão
    fireEvent.click(button)

     // Retorna o objeto com as funções de busca. Os testes que vão usar 
    // essa função precisam de acesso a elas para fazer as verificações
    return utils
}

//Testes sobre a renderização inicial
describe("Initial renderization", () => {

  //Verifica se o input existe na renderização inicial
  test("If input exists on the screen", () => {
    //Renderiza o App, e desestrutura o retorno pegando a função "getByPlaceholderText"
    const {
      getByPlaceholderText } = render( <App /> )

    // Encontra o input pelo texto do placeholder
    const input = getByPlaceholderText("O Que Fazer?")

    // Verifica se o input está no documento
    expect(input).toBeInTheDocument()
  })

  // Verifica se o botão existe na renderização inicial
  test("If button exists on the screen", () => {
    // Renderiza o App, e desestrutura o retorno pegando a função "getByText"
    const {
      getByText } = render( <App /> )

    // Verifica se existe algo com o texto "Adicionar" no document
    expect(getByText(/Criar Tarefa/)).toBeInTheDocument()
  })
})

describe("Create a task", () => {
  test("when user types, text must appear", () => {
    // Renderiza o App, e desestrutura o retorno pegando a função "getByPlaceholderText"
    const {
      getByPlaceholderText } = render( <App /> )

      // Encontra o input pelo texto do placeholder
      const input = getByPlaceholderText("O Que Fazer?")

      // Dispara um evento de "change" para o input. Passa o valor "tarefa teste" para entrar no input
      fireEvent.change(input, {
        target: {
          value: "task test"
        }
      })

      // Verifica se o input possui o "value" de "tarefa teste"
      expect(input).toHaveValue("task test")
  })

  test("user chooses any day of the week on select", () => {
    const {
      getByTestId
    } = render( <App /> )

    const select = getByTestId("select")
    userEvent.selectOptions(select, getByTestId("segunda").value)

    expect(select).toHaveValue("Segunda")
  })

  /* test("when user types, select a day and clicks create task", () => {

    const {
      getByPlaceholderText,
      getByText,
      getByTestId
    } = render( <App /> )

    const input = getByPlaceholderText("O Que Fazer?")

    fireEvent.change(input, {
      target: {
        value: "task test"
      }
    })

    const select = getByTestId("select")
    userEvent.selectOptions(select, getByTestId("segunda").value)

    const button = getByText(/Criar Tarefa/)
    fireEvent.click(button)

    expect(getByText(/task test/)).toBeInTheDocument()
  })  */

})
