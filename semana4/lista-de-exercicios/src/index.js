// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

/* 1. a função é um conversor de moedas (converte valor em dolar para reais), tem como parâmetro o valor em dólar.
const cotacao - usuario deve colocar valor da cotação do dólar
return será o valor em dolar multiplicado pela cotação colocada acima 
cont meuDinheiro dá o valor do dólar para que a função o execute, no caso é 100
console.log(meuDinheiro) será impresso o valor de 100 multiplicado pela cotação do dólar colocada pelo usuário */

/* 2.  esta função é um simulador de valores ao investir dinheiro. Tem como parâmetros po tipo de investimento e
o valor a investir. Em seguida é mostrado uma condicional do tipo switch case, que é utilizada para simplificar o
código e evitar o uso de vários "else if".
O case é a condição, ou seja, a condição são os tipos de investimentos e o retorno é o valor investido multiplicado por
um índice dado pela função. Este resultado é o valorAposInvestimento.
O default, que é chamado quando o valor não bater com nenhuma das opções dos cases, irá mostrar um alerta dizendo ao
usuário que o tipo de investimento informado é incorreto.
const novoMontante - executa a função na condição do investimento ser do tipo "Ações" e o valor a investir é 150
const segundoMontante - executa a função na condição do investimento ser do tipo "Tesouro Direto" e o valor a investir é 200 
console.log novoMontante = 150 * 1.1 => o resultado será impresso no console como 165
console.log segundoMontante - será emitido um alert "TIPO DE INVESTIMENTO INFORMADO INCORRETO" */

/* 3. const numeros - mostra um array de numeros
const array1 - mostra um array vazio
const array2 - mostra um array vazio

A seguir é descrito um laço do tipo "for...of", onde numero é o idex da array numeros.
Logo abaixo tem uma condição: se o numero (index) for par, ele deverá integrar o array1;
Se o número nao atender a condição acima, ou seja, for ímpar, integrará a array2.
console.log("Quantidade total de numeros", numeros.length) - imprimirá no console o tamanho(quantidade de numeros) do array, ou seja, o resultado será 14 
console.log(array1.length) - imprimirá no console o tamanho do array1 - resultado, 6
console.log(array2.length) - imprimirá no console o tamanho do array2 - resultado, 8 */

/* 4. const numeros - mostra um array de numeros
let numero 1 = infinity, mostra que é um valor que representa infinito, mas de números positivos
let numero2 = 0, mostra que o valor dessa variável é 0
A seguir é presentado um laço do tipo "for of", onde numero é o index do array e numeros é a array
Então existe uma condição dentro do laço, se numero for menor que a variavel numero1(que representa infinito), então
numero1 será igual ao numero do array
Se numero for maior que o numero2(que é igual 0), então numero2 será igual ao numero do array
console.log(numero1) - como infinity agrega apenas numeros positivos, então será impresso no console o -10 
console.log(numero2) - resultado, 1590, pois é maior que 0 e é o maior numero do array*/

// EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO

/* 1. */

/* 
2.A. false
2.B. false
2.C. true
2.D. true
2.E. true */

/* 3. 
const quantidadeDeNumerosPares
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
}

O código não funciona, pq a primeira const quantidadeDeNumerosPares não tem valor declarado

let arrayDeNumerosPares = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
let quantidadeDeNumerosPares = 5
let i = 0

while (i <= arrayDeNumerosPares.length) {
    console.log(arrayDeNumerosPares[i])
    i++
} */
  
// 4. 
let valorA = 10
let valorB = 10
let valorC = 10

if (valorA===valorB && valorB===valorC)  {
    console.log ("O triângulo é equilátero!") 
} else if (valorA !== valorB && valorB !== valorC && valorC !==valorA) {
    console.log ("O triângulo é escaleno!") 
} else {
    console.log ("O triângulo é isósceles!")
}
    
//5.
let numero1 = 15
let numero2 = 30

//5.i.
if (numero1 > numero2) {
    console.log (`O maior é: ${numero1}`)
} console.log (`O maior é: ${numero2}`)

// 5.ii.
let resultado = numero1 / numero2
if(numero1 % numero2 === 0) {
    console.log (`${numero1} é divisível por ${numero2}`)
} console.log (`${numero1} não é divisível por ${numero2}`)

if(numero2 % numero1 === 0) {
    console.log (`${numero2} é divisível por ${numero1}`)
} else {
    console.log (`${numero2} não é divisível por ${numero1}`)}

// 5.ii. 
let diferencaNumeros = numero1 - numero2
console.log (`A diferença entre eles é ${diferencaNumeros*-1}`)

// EXERCÍCIOS DE FUNÇÕES

// 1. 
numeros = [5, 8, 23, 10, 68, 11, 13, 15, 20, 2, 42, 25, 30, 33, 50, 58]

/* const segundoMaiorNumero = numeros.forEach ((numero, index, array) => {
    if(numero )
})
 */

/* //2.

const paraDarHello = () => {
    alert ("Hello, Labenu!")
}

paraDarHello() */