const inputNovaTarefa = document.getElementById("novaTarefa") //input nova tarefa

const minhaTarefa = document.getElementsByTagName("ul")[0] //pegando a ul do html

function adicionaTarefa () {
    let tarefa = inputNovaTarefa.value //input da tarefa
    let escolherDia = document.getElementById("diaDaSemana").value //seleção de dia da semana 
    
    if (inputNovaTarefa.length < 1) {
        alert(`Vocë deve escrever alguma coisa!`)
    } else  {
        document.getElementById(escolherDia).innerHTML          += `<li>${tarefa}</li>`
    }
    inputNovaTarefa.value = ""
}

 //conecta com a ul do html
 minhaTarefa.innerHTML
