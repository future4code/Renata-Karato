const inputNovaTarefa = document.getElementById("novaTarefa")

const minhaTarefa = document.getElementsByTagName("ul")[0]

function adicionaTarefa () {
    let tarefa = inputNovaTarefa.value
    let escolherDia = document.getElementById("diaDaSemana").value   
    
    if (inputNovaTarefa != "") {
        document.getElementById(escolherDia).innerHTML += `<li>${tarefa}</li>`;
    } else if (inputNovaTarefa = "") {
        alert(`Vocë deve escrever alguma coisa!`)
    }
    inputNovaTarefa.value = ""
}

minhaTarefa.innerHTML //conecta com a ul do html
 
