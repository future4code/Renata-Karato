// EXERCÍCIO 5.b.
const question1 = "Possui ossos?"
const question2 = "Tem pelos?"
const question3 = "É racional?"
const question4 = "Possui penas?"
const question5 = "É terrestre?"
const question6 = "Vive em ambiente aquático?"

const answer1 = prompt (question1)

if (answer1 == "Não") {
    console.log ("É um invertebrado!")
} else if (answer1 == "Sim") {
    const answer2 = prompt (question2)
} else if (answer2 == "Sim") {
    const answer3 = prompt (question3)
} else if (answer3 == "Sim") {
    console.log ("É um ser humano!")
} else if (answer3 == "Não") {
    console.log ("É um mamífero não humano!")
} else if (answer2 == "Não") {
    const answer4 = prompt (question4)
} else if (answer4 == "Sim") {
    console.log ("É uma ave!")
} else if (answer4 == "Não") {
    const answer5 = prompt (question5)
} else if (answer5 == "Não") {
    console.log ("É um peixe!")
} else if (answer5 == "Sim") {
    const answer6 = prompt (question6)
} else if (answer6 == "Sim") {
    console.log ("É um anfíbio!")
} else if (answer6 == "Não") {
    console.log ("É um réptil!")
}