// Exercício 3.a.

export type posts = {
    autor: string,
    texto: string
}

export const post1: posts = {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
}

export const post2: posts = {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
}

export const post3: posts = {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
}

export const post4: posts = {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
}

export const post5: posts = {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
}

const arrayDePosts: posts[] = [post1, post2, post3, post4, post5]
console.log(arrayDePosts)

// Exercício 3.b.
// A função tem como entrada o array de posts e o nome do autor. A saída será se o nome do auto informado for igual ao nome do autor que consta no array.

function buscarPostsPorAutor(posts: posts[], autorInformado: string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }