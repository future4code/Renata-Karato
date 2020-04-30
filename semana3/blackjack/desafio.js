alert ("Bem vind@ ao jogo de blackjack!") // imprime mensagem de boas vindas no console

const carta = comprarCarta()
let cartaUsuario1 = comprarCarta() // para sortear carta1 ao usuário
let cartaUsuario2 = comprarCarta() // para sorter carta2 ao usuário
let cartaUsuario3 = comprarCarta() // para sorter carta2 ao usuário
let cartaComputador1 = comprarCarta() // para sortear carta1 ao computador
let cartaComputador2 = comprarCarta() // para sortear carta2 ao computador

if (confirm("Gostaria de iniciar um nova rodada?")) { // envia um confirm para perguntar ao usuário se gostaria de iniciar uma rodada
      
   if (confirm (`Suas cartas são ${cartaUsuario1.texto} e ${cartaUsuario2.texto}. A carta revelada do computador é ${cartaComputador1.texto}.
   Deseja comprar mais uma carta?`)) {
      let pontosComputador = cartaComputador1.valor + cartaComputador2.valor
      let pontosUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   } else {(alert (`Suas cartas são ${cartaUsuario1.texto} e ${cartaUsuario2.texto}. Sua pontuação é ${pontosUsuario}. 
   As cartas do computador são ${cartaComputador1} e ${cartaComputador2}. 
   A pontuação do computador é ${pontosComputador}.`))} 