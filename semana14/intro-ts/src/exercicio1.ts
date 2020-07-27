// Exercício 1.a.
const minhaString: string = "bom dia" //5 
//Dá um erro, dizendo que a minhaString aceita apenas valores do tipo string e o 5 é um number;

// Exercício 1.b.
const meuNumero: number = 8
//Para também aceitar strings... Colocamos a barra | entre os tipos number e string (union type)
const meuNumero2: number | string = 8

// Exercício 1.c.
export type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
};

// Exercício 1.d.
export const renata: pessoa = {
    nome: "Renata",
    idade: 31,
    corFavorita: "azul"
};

export const lucas: pessoa = {
    nome: "Lucas",
    idade: 32,
    corFavorita: "preto"
};

export const lucila: pessoa = {
    nome: "Lucila",
    idade: 30,
    corFavorita: "rosa"
};

// Exercício 1.e.
enum ARCOIRIS {
    VERMELHO= "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    CIANO = "ciano",
    VIOLETA = "violeta"
}

export type novaPessoa = {
    nome: string,
    idade: number,
    corFavorita: ARCOIRIS
};

export const arthur: pessoa = {
    nome: "Arthur",
    idade: 3,
    corFavorita: ARCOIRIS.VERMELHO
};

const arrayDePessoas: (pessoa | novaPessoa )[] = [renata, lucas, lucila, arthur]
console.log(arrayDePessoas)