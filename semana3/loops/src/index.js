// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//EXERCÍCIO 1
let sum = 0
for(let i = 0; i < 15; i++) {
    // Executa 15 vezes, com os valores de i de 0 a 14
  sum += i
  // o valor de sum é somado a ele mesmo + o valor de i
  // logo, quando sum=0+0(i)=0 | sum=0(ultimo resultado de sum)+1(i)=1 | sum=1(ultimo resultado)+2(i)=3 | sum=3+3=6 etc etc etc
}
console.log(sum) 
// o resultado final impresso no console é de sum = 91 + 14(i) = 105


//EXERCÍCIO 2
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista) { 
  if(item%numero === 0) { //todos os números da array são divididos pelo numero 5, os que forem divisíveis, seguirá em uma nova lista
    novaLista.push(item) //o comando .push serve para adicionar elementos em um array
  }
}
console.log(novaLista) //valor impresso: [10, 15, 25, 30]
//valor impresso se numero = 3 [12, 15, 18, 21, 27, 30] -> são os núeros divisíveis por 3
//valor impresso se numero = 4 [12] -> somente ele é divisível por 4

//DESAFIO 1
// valor impresso para quantidadeTotal=4:
//0
//00
//000
//0000

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0 //quantidade atual de linhas=0
while(quantidadeAtual < quantidadeTotal){ //enquanto a quantidade atual for menor que a quantidade total
  let linha = "" //será vazio
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0" //linha = linha + 0
  }
  console.log(linha)
  quantidadeAtual++
}

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//EXERCÍCIO 3

const arrayOriginal = [60, 25, 50, 140, 96, 22, 33, 110, 40, 180, 165, 170]


//Resposta a.
//"O maior numero é 180 e o menor é 22."

let maiorNumero = 0
let menorNumero = 0

for (let i=0; i<=arrayOriginal.length; i++) {
    if (arrayOriginal[i] > maiorNumero) {
        maiorNumero = arrayOriginal[i]
    } if (menorNumero === 0) {
        menorNumero = arrayOriginal[i]
    } else if (arrayOriginal[i] < menorNumero) {
        menorNumero = arrayOriginal[i]
    }
}
console.log("O maior número é", maiorNumero, "e o menor é", menorNumero, ".")


//Resposta b.
const newArray = []
const divisao = 10

for (const item of arrayOriginal) {
    newArray.push(item/divisao)
}
console.log (newArray)


//Resposta c.
//[60, 50, 140, 96, 22, 110, 40, 180, 170]

const paresArray = []
const par = 0

for (const number of arrayOriginal) {
    if (number %2 === 0) {
       paresArray.push(number)
    }
}
console.log (paresArray)

//Resposta d.
//O elemento do index 0 é 60
// O elemento do index 1 é 25
// O elemento do index 2 é 50
// O elemento do index 3 é 140
// O elemento do index 4 é 96
// O elemento do index 5 é 22
// O elemento do index 6 é 33
// O elemento do index 7 é 110
// O elemento do index 8 é 40
// O elemento do index 9 é 180
// O elemento do index 10 é 165
// O elemento do index 11 é 170

let i=0

for (const number of arrayOriginal) {
    if (number %1 === 0) {
        console.log(`O elemento do index ${i++} é ${number}`)
    }
}