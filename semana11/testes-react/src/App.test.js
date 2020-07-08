import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("Cria um post", () => {
    test("Quando usuario cria um novo post, quer curtir e apagar", () => {
        //preparação criar post
        const {
            getByPlaceholderText,
            getByText, 
            getByTestId
        } = render( <App /> )

        const input = getByPlaceholderText("Novo post")

        //execução criar post
        fireEvent.change(input, {
            target: {
                value:"post teste"
            }
        })

        //verificação criar post
        const button = getByText(/Adicionar/)

        fireEvent.click(button)
        
        wait(() => {
            let post = getByTestId(/post-content/i)
            expect(post).toBeInTheDocument()
        })
       
        //preparação botão Curtir 
        const botaoCurtir = getByTestId(/like-button/i);

        //execução botão Curtir 
        fireEvent.click(botaoCurtir);

        //verificação botão Curtir 
        expect(botaoCurtir).toHaveTextContent(/Descurtir/i)

        //preparação botão Apagar 
        const botaoApagar = getByText(/Apagar/i);

        //execução botão Apagar 
        fireEvent.click(botaoApagar);

        //verificação botão Apagar 
        wait(() => {
            expect(botaoApagar).toBeNull()
        })
    })
})

