let pegarValor = document.getElementById("valor");
let pegarDespesa = document.getElementById("tipoDeDespesa");
let pegarDescricao = document.getElementById("descricao");
let listaDespesas = []
let imprimeDespesa = document.getElementById("despesaCadastrada")

function cadastrarDespesa () { 
    const guardaDespesa = {
        valor: pegarValor.value, 
        tipo: pegarDespesa.value, 
        descricao: pegarDescricao.value 
    }
    
    if (pegarValor.value !== 0 || "" || pegarDespesa.value !== "" || pegarDescricao.value !== ""){
        listaDespesas.push(guardaDespesa)
    } alert("Preencha todos os campos!")
     
    pegarValor.value = "";
    pegarDespesa.value = "";
    pegarDescricao.value = ""

    imprimeDespesa.innerHTML += listaDespesas
}

 