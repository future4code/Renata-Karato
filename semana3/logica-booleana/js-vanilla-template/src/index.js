// Exercício de INTERPRETAÇÃO 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
/* foi utilizado o operador "E" simbolizado por "&&", que retorna TRUE se todos os booleanos envolvidos também forem TRUE.
Logo, bool1 é V, bool2 é F e bool3 é V. Ao serem concatenados pelo operador "&&", vemos que o resultado é F */

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
/* foi utilizado o operador "OU" simbolizado por "||", que retorna FALSE se todos os booleanos envolvidos também forem FALSE.
Logo,bool2 é F e bool1 é V, então bool2 || bool 1 é V.
!bool3 - a exclamação indica que o resultado booleano será o oposto. Então, se bool3 = true, !bool3 = false.
(bool2 || bool 1) && !bool3 -> tem como resultado V && F, sendo portanto, falso */

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
/* bool1 = true, assim bool1 || bool1 = TRUE 
Assim, resultado é igual a F -> !resultado é igual a V. V && V = true */


resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
/* !bool1 = false, bool2 = false, assim !bool1 || bool2 = FALSE
Resultado é igual a F e !bool3 é igual a F. Assim, F && (F) && F = FALSE  */

console.log("e. ", typeof resultado)
/* a variável "typeof" indica o tipo do valor da variável indicada. Assim, resultado é uma variável do tipo booleana */

// Exercício de INTERPRETAÇÃO 2

let array //não foi declarado valor para o array, portando o resultado será undefined
console.log('I. ', array)

array = null //foi associado o valor null diretamento na variável, portando o resultado é null
console.log('II. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] //declaração do array em JS
console.log('III. ', array.length) //determina do tamanho do array

let i = 0
console.log('IV. ', array[i], " e ", array[i+1]) //array[i] = array[0], assim array[i+1] = array[0+1] = array [1]
//array de índice 0 é o primeiro elemento (3) e array de índice 1 é o segundo elemento (4)

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)

/* 2. a. O que é array e como se declara em JS?
Array é uma forma de guardar/acessar mais de uma informação ao mesmo tempo.
É declarado como array [], onde os valores são declarados dentro dos colchetes

2. b. Qual o index inicial de um array?

2. c. Como se determina o tamanho do array?
array.length

2. d. Indique todas as mensagens impressas no console.
I. undefined
II. null
III. 11
IV. 3 e 4
V. 19 e 9
VI. 3
VII.1 */

// Exercícios de ESCRITA DE CÓDIGO

/* 1. a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.*/
const Fahrenheit1 = 77
const Kelvin1 = (Fahrenheit1 - 32)*5/9 + 273.15
console.log('1.a.', Kelvin1)

/*1. b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.*/
const Celsius1 = 80
const Fahrenheit2 = (Celsius1)*9/5 + 32
console.log('1.b.', Fahrenheit2)
30
/*1. c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.*/
const Celsius2 = 30
const Fahrenheit3 = (Celsius2)*9/5 + 32
const Kelvin2 = (Fahrenheit3 -32)*5/9 + 273.15
console.log('1.c.', "30 graus Celsius é igual a", Fahrenheit3, "graus Fahrenheit e", Kelvin2, "Kelvin")

/*1. d. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.*/
const temperatura = prompt ("Qual é o valor em graus Celsius?")
const Fahrenheit4 = (temperatura)*9/5 + 32
const Kelvin3 = (Fahrenheit4 -32)*5/9 + 273.15
console.log("30 graus Celsius é igual a", Fahrenheit4, "graus Fahrenheit")
console.log("30 graus Celsius corresponde a", Kelvin3, "Kelvin")

// 2. Faça um programa que faça 5 perguntas para o usuário. 

const nomeCompleto = prompt("Escreva seu nome.")
console.log ("1. Escreva seu nome.")
console.log ("Resposta: Renata")

const cidade = prompt("E a cidade de onde está falando.")
console.log ("1. E a cidade de onde está falando.")
console.log ("Resposta: São Caetano do Sul")

const pergunta1 = prompt("Gosta de programar?")
console.log ("1. Gosta de programar?")
console.log ("Resposta: SIM!")

const pergunta2 = prompt("Gosta de posicionar as coisas no CSS?")
console.log ("1. Gosta de posicionar as coisas no CSS?")
console.log ("Resposta: NÃO! :(")

const pergunta3 = prompt("Eu também não. Quer ser meu amigo? :)")
console.log ("1. Eu também não. Quer ser meu amigo? :)")
console.log ("Resposta: SIM!!^^")

/* 3. a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;*/
const Kwh = 0.05
const consumo = 280
console.log('3.a.', "R$", Kwh*consumo, ".00")

/*3. b. Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.*/
const desconto = 0.85
const valorComDesconto = (Kwh*consumo)*desconto
console.log('3.b.', "R$", valorComDesconto)

// DESAFIOS

/*1. a. Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg.*/
const lb1 = 20
const divisao1 = 2.20462
const kg1 = lb1/divisao1
console.log('1.a.', lb1, "lb equivalem a", kg1, "kg")

/*1. b. Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg.*/
const oz1 = 10.5
const multiply1 = 0.0283495
const kg2 = oz1*multiply1
console.log('1.b.', oz1, "oz equivalem a", kg2, "kg")

/*1. c. Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m.*/
const mi1 = 100
const multiply2 = 1609.34
const m1 = mi1*multiply2
console.log('1.c.', mi1, "mi equivalem a", m1, "m")

/*1. d. Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m.*/
const ft1 = 50
const multiply3 = 0.3048
const m2 = ft1*multiply3
console.log('1.d.', ft1, "ft equivalem a", m2, "m")

/*1. e.Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro.*/
const gal1= 103.56
const multiply4 = 378.5
const l1 = gal1*multiply4
console.log('1.e.', gal1, "gal equivalem a", l1, "l")

/*1. f. Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro.*/
const xic1 = 450
const multiply5 = 0.24
const l2= xic1*multiply5
console.log('1.f.', xic1, "xic equivalem a", l2, "l")

/*1. g. Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter. */
const libras = prompt ("Digite o valor em libras para conversão em quilogramas.")
const divisao2 = 2.20462
const kg3 = libras/divisao2
console.log('1.g.', libras, "equivalem a", kg3, "kg")