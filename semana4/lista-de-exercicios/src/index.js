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

// 1. 
let notas = [9, 10, 7, 8, 6]
let i = 0

//percorrendo notas com for
for (let i=0; i<notas.length; i++) {
    console.log(notas[i])
}

//percorrendo notas com while
while (i<notas.length) {
    console.log(notas[i]) 
    i++
}

//pegam um item do array de index 2
console.log(notas[2])

/* 
2.A. false
2.B. false
2.C. true
2.D. true
2.E. true */

// 3. 

/* const quantidadeDeNumerosPares
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
} */

//O código acima não funciona, pq a primeira const quantidadeDeNumerosPares não tem valor declarado

function calculaNumerosPares (numeroN) {
    let quantidadeDeNumerosPares=0
    for (let j=0; j<=quantidadeDeNumerosPares; j++) {
        quantidadeDeNumerosPares += quantidadeDeNumerosPares[j*2]
    }
}
console.log(calculaNumerosPares(numeroN=3))

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

let ordemCrescente = numeros.sort((a,b) => {
    return a - b
})
console.log(`O segundo menor número é ${ordemCrescente[1]}`)

let ordemDecrescente = numeros.sort((a, b) => {
    return b - a
})
console.log(`O segundo maior número é ${ordemDecrescente[1]}`)

/* //2.

const paraDarHello = () => {
    alert ("Hello, Labenu!")
}

paraDarHello() */

// EXERCÍCIOS DE OBJETOS

/* 1. Objetos são estruturas onde é possível representar dados. Deve ser utilizado quando queremos detalhar um objeto com seus valores.
Arrays são estruturas utilizadas para guardar e acessar mais de uma informação ao mesmo tempo. Array deve ser utilizado para guardarmos
e acessarmos infos com mais facilidade */

//2.

function criaRetangulo (lado1, lado2) {
    retangulo = {
        largura: lado1,
        altura: lado2,
        perímetro: 2*(lado1+lado2),
        área: lado1*lado2    
    }
}
criaRetangulo(2,5)
console.log (retangulo)

//3. 
const meuFilmeFavorito ={
    titulo: "Intocáveis",
    ano: 2012,
    diretor: "Olivier Nakache",
    atores: ["Osmar Sy", "François Cluzet", "Audrey Fleurot"]
}

console.log (`Venha assistir ao filme ${meuFilmeFavorito.titulo}, de ${meuFilmeFavorito.ano}, dirigido por ${meuFilmeFavorito.diretor} e estrelado por ${meuFilmeFavorito.atores[0]}, ${meuFilmeFavorito.atores[1]} e ${meuFilmeFavorito.atores[2]}.`)

//4.
const pessoaQualquer = {
    nome: "Renata",
    idade: "31",
    email: "rmkarato@gmail.com",
    endereço: "São Caetano do Sul/SP"
}
console.log(pessoaQualquer)

function anonimizarPessoa () {
    const pessoaAnonima = {
        ...pessoaQualquer,
        nome: "ANÔNIMO"
    }
    return pessoaAnonima
}

console.log(anonimizarPessoa())

//EXERCÍCIOS DE FUNÇÕES DE ARRAY

const people = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

//1.A.
const adultos = people.filter ((pessoa, index, pessoas) => {
    if (pessoa.idade >= 20) {
        return true
    }
    return false
    })
console.log(adultos)

//1.B.
const criancasEAdolescentes = people.filter ((pessoa, index, pessoas) => {
    if (pessoa.idade < 20) {
        return true
    }
    return false
    })
console.log(criancasEAdolescentes)

const array = [1, 2, 3, 4, 5, 6]

//2.a.
const dobroArray = array.map ((numero, index, array) => {
    return numero*2
})
console.log(dobroArray)

//2.b. 
const triploArray = array.map((numero, index, array) => {
    return String(numero*3)
})
console.log(triploArray)

//2.c.
const paridadeArray = array.filter ((numero, index, array) => {
    if (numero % 2 === 0) {
        console.log (`${numero} é par`)
    } else if (numero % 2 !== 0) {
        console.log (`${numero} é impar`)
    }
})

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

//3.a. 
const quemPodeIr = pessoas.filter ((pessoa, index, pessoas) => {
    if (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.50) {
        return true
    }
    return false
}) 
console.log (quemPodeIr)

//3.b.
const naoPodeIr = pessoas.filter((pessoa, index, pessoas) => {
    if (pessoa.idade < 14 || pessoa.idade > 60 || pessoa.altura < 1.50) {
        return true
    }
    return false
})
console.log (naoPodeIr)

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

//4.

const generoPessoa = consultas.map ((consulta, index, consultas) => {
    if(consulta.genero === "masculino") {
        return `Sr.`
    } 
    return `Sra.`
    
})

const generoLembrar = consultas.map ((consulta, index, consultas) => {
    if(consulta.genero === "masculino") {
        return `lembrá-lo`
    } 
    return `lembrá-la`
}) 

const confirmarConsultas = consultas.map((consulta, index, consultas) => {
    if (consulta.cancelada === true) {
        return `Olá, ${generoPessoa[index]} ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
    } else {
        return `Olá, ${generoPessoa[index]} ${consulta.nome}. Estamos enviando esta mensagem para ${generoLembrar[index]} da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
    }
    })
    console.log(confirmarConsultas)

const contas = [
    { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]
    console.log(contas)

//5.
//PARAa atualizar saldototal
/* const atualizaTotal = contas.reduce (getTotal, 0)
function getTotal (atualizaTotal, conta) {
    return atualizaTotal + (conta.saldoTotal - conta.compras)
}
console.log(atualizaTotal)
 */
const arrayCompras = contas.forEach ((conta, index, array) => {
    console.log (conta.compras)
})

//NÃO CONSEGUI RESOLVER - depcionada :(