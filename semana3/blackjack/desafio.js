console.log("Bem vind@ ao jogo de blackjack!") 

if (confirm("Gostaria de iniciar um nova rodada?")) {
   const cartasUsuario = [comprarCarta(), comprarCarta()], cartasComputador = [comprarCarta(), comprarCarta()]; 
   let pontosUsuario=0,
   primeiraPergunta=confirm(`Suas cartas são ${cartasUsuario[0].texto} ${cartasUsuario[1].texto}.
   A carta revelada do computador é ${cartasComputador[0].texto}. Deseja comprar mais uma carta?`);
      for (;primeiraPergunta;) {
         const pontosComputador = comprarCarta();
         cartasUsuario.push(pontosComputador), pontosUsuario=0;
            for (let cartasComputador of cartasUsuario) 
               pontosUsuario += cartasComputador.valor;
            if (pontosUsuario<21) {
               let PrimeirasCartas="";
               for (let cartasComputador of cartasUsuario) PrimeirasCartas+=cartasComputador.texto + " ";
                  segundaPergunta=confirm(`Suas cartas são ${PrimeirasCartas}.
                  A carta revelada do computador é ${cartasComputador[0].texto}. Deseja comprar mais uma carta?`)
            } else 
            primeiraPergunta = false}

            pontosComputador=0;
            for (let cartasComputador of cartasUsuario) 
            pontosUsuario += cartasComputador.valor;
            for (let cartasUsuario of cartasComputador) 
            pontosComputador += cartasUsuario.valor;
            let end= pontosUsuario<=21&&pontosComputador<=pontosUsuario;

      for (;end;) {
         const cartasUsuario = comprarCarta();
         cartasComputador.push(cartasUsuario), pontosComputador=0;
         for (let cartasUsuario of cartasComputador) 
            pontosComputador+=cartasUsuario.valor;
         end=pontosUsuario<=21&&pontosComputador<=pontosUsuario}
      
      if (pontosUsuario>21) {
         resultado = "O computador ganhou!"
      } else if (pontosComputador>21) {
         resultado = "O usuário ganhou!"
      } else if (pontosComputador>pontosUsuario) {
         resultado = "O computador ganhou!"
      } else if (pontosComputador<pontosUsuario) {
         resultado = "O usuário ganhou!"
      } else {
         resultado = "Empate!" }

   let descricaoCartasUsuario="", descricaoCartasComputador=""

   for(let cartasComputador of cartasUsuario)
   descricaoCartasUsuario+=cartasComputador.texto+" "
   for(let cartasUsuario of cartasComputador)
   descricaoCartasComputador+=cartasUsuario.texto+" "
   alert(`Suas cartas são ${descricaoCartasUsuario}. Sua pontuação é ${pontosUsuario}.
   As cartas do computador são ${descricaoCartasComputador}.
   A pontuação do computador é ${pontosComputador}. ${resultado}`)

} else { 
      console.log("O jogo terminou!")} 