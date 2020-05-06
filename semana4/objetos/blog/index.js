let post = {
    titulo: "",
    autor: "",
    conteudo: ""
}

const postTitulo = document.getElementById('titulo')
const postAutor = document.getElementById('autor')
const postConteudo = document.getElementById('conteudo')

let novoPost = {
    ...post,
    titulo: postTitulo.value,
    autor: postAutor.value,
    conteudo: postConteudo.value
}

console.log (novoPost)

function criarPost (event) {
    postTitulo.value = ""
    postAutor.value= ""
    postConteudo.value = ""
}

