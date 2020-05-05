//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//EXERCÍCIO 1
const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}

//1.a.
console.log (minhaFuncao(2)) //resultado: []

//1.b.
console.log (minhaFuncao(5)) //resultado: [0, 1, 0, 1, 2, 3]

//1.c.
console.log (minhaFuncao(8)) //resultado: [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]



//EXERCÍCIO 2
let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

//2.a.
console.log(funcao(arrayDeNomes, "Darvas")); //resultado: 0 => posição na array
console.log(funcao(arrayDeNomes, "João")); //resultado: 2 => posição na array
console.log(funcao(arrayDeNomes, "Paula")); //resultado: undefined => retorna undefined, pois nao tem "Paula" na array


let arrayDeNumeros = [1, 2, 3, 4, 5];

const funcao2 = (lista, numero) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numero) {
      return i;
    }
  }
};

//2.b.
console.log(funcao(arrayDeNumeros, 1)); //resultado: 0 => posição na array
console.log(funcao(arrayDeNumeros, 3)); //resultado: 2 => posição na array
console.log(funcao(arrayDeNumeros, 44)); //resultado: undefined => retorna undefined, pois nao tem o número 44 na array
//Sim, o código funciona se a lista de string anterior for substituída por números. Os resultados são os mesmos.

//EXERCÍCIO 3

function metodo(array) {
    let resultadoA = 0; 
    let resultadoB = 1; 
    let arrayFinal = [];
  
    for (let x of array) {
      resultadoA += x;
      resultadoB *= x;
    }

    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;
  }

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//EXERCÍCIO 4  

//4.a.

function idadeCachorro (anosHumanos) {
    const idadeCachorro = anosHumanos*7
    console.log (idadeCachorro)
}

idadeCachorro (5)  //retorna valor 35, pois 5x7=35

/* //4.b.
function infoPessoa (nome, idade, endereço, estudante) {
    let nome = " "
    let idade = 0
    let endereço = " "
    
    if (estudante = true) {
    console.log ("sou")
    } else (!estudante)
    console.log ("não sou")

return console.log ("Eu sou", nome, "tenho", idade, "anos, moro em", endereço, "e", estudante, "estudante")
}

//EXERCÍCIO 5
let arrayDeSeculos = ["X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"]

const qualSeculo = () => 
console.log ("O ano", ano, "pertence ao seculo", século) */

//EXERCÍCIO 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//6.a.
function elementosArray (array) {
  for (let elementos of array) {
   return array.length
  }
}

console.log(array.length)

//6.b.
function parOuImpar (item) {
  if (item%2===0){
    console.log("O número", item, "é par")
  } else {
    console.log("O número", item, "é ímpar")
  }
}

console.log(array(item))

  //6.c.