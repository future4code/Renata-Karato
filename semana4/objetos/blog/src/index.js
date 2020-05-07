let post = {
    Título: "",
    Autor: "",
    Conteúdo: ""
}

const postTitulo = document.getElementById("qualTitulo")
const postAutor = document.getElementById("quemAutor")
const postConteudo = document.getElementById("oQueConteudo")

function publicaPost() {
    let postArray = []
    const boraPublicar = document.getElementById("blogConteudo")

    let novoPost = {
        ... post,
        Título: postTitulo.value,
        Autor: postAutor.value,
        Conteúdo: postConteudo.value
    }
    postArray.push(novoPost)
    console.log(postArray)

    let postAll = JSON.stringify(novoPost)

    if (postTitulo.value === "" || postAutor.value === "" || postConteudo.value === "") {
        alert("Você deve preecher todos os campos!")
    } else {
        boraPublicar.innerHTML += `${postAll}`
    }

    postTitulo.value = ""
    postAutor.value = ""
    postConteudo.value = ""
}

