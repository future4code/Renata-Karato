type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// Exercício 4.a.
//Na pasta raiz, digita tsc. Depois utiliza-se o comando node "nomeDoArquivo.js" para criar a pasta build, onde o arquivo .js é gerado. D

// Exercício 4.b.
//Se o arquivo está dentro de uma pasta src, quando utilizar o comando node, deverá colocar node build/nomeDoArquivo.js

// Exercício 4.c.
//Ao digitar tsc nomeDoArquivo.ts - compila-se apenas o arquivo desejado. Mas digitando somente tsc, compula-se todos os arquivos.