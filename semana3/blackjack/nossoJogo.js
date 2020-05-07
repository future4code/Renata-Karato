console.log("Bem vind@ ao jogo de blackjack!") // imprime mensagem de boas vindas no console

let cartaUsuario1 = comprarCarta() // para sortear carta1 ao usuário
let cartaUsuario2 = comprarCarta() // para sorter carta2 ao usuário
let cartaComputador1 = comprarCarta() // para sortear carta1 ao computador
let cartaComputador2 = comprarCarta() // para sortear carta2 ao computador

if (confirm("Gostaria de iniciar um nova rodada?")) { // envia um confirm para perguntar ao usuário se gostaria de iniciar uma rodada
   const carta = comprarCarta(); // se ele apertar OK, irá sortear 2 cartas e imprimir no console as cartas do usuário e do computador
   console.log("Usuário - cartas:", cartaUsuario1.texto, cartaUsuario2.texto, "- pontuação", cartaUsuario1.valor + cartaUsuario2.valor) // imprime o texto da carta do usuário + pontuação
   console.log("Computador - cartas:", cartaComputador1.texto, cartaComputador2.texto, "- pontuação", cartaComputador1.valor + cartaComputador2.valor)// imprime o texto da carta do computador + pontuação
 } else { // mas se usuário apertar Cancelar, 
   console.log("O jogo terminou!") // aparecerá a mensagem de que o jogo terminou
 } 

// RESULTADO
let pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor // soma da carta1 + carta2 usuário
let pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor // soma da carta1 + carta2 computador

if ((pontuacaoUsuario > pontuacaoComputador) && pontuacaoUsuario <=21) { // condição se pontuação do usuário for maior que a pontuação do computador e for menor ou igual a 21
      console.log ("O usuário ganhou!") // aparecerá a mensagem que o usuário ganhou
   } else if ((pontuacaoComputador > pontuacaoUsuario) && pontuacaoComputador <=21) { // condição se pontuação do computador for maior que a pontuação do usuário e for menor ou igual a 21
      console.log ("O computador ganhou!") //aparecerá a mensagem que o computador ganhou
   } else if (pontuacaoUsuario === pontuacaoComputador) { // condição se pontuação do usuário for igual a pontuação do computador
      console.log ("Empate!") // aparecerá a mensagem de empate
   } 
