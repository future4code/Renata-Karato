import axios from "axios";

const baseUrl = 
  "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

/* ----- EXERCÍCIO 4.A. ----- */
//É uma função nomeada assíncrona

/* ----- EXERCÍCIO 4.B. ----- */
async function createNews (title: string, content: string, date: number ): Promise<void> {
    try {
        await axios.put(`${baseUrl}/news`, {
            title: title,
            content: content, 
            date: date
        });
    } catch (error) {
        console.log(error.message)
    }
    
}

createNews("Nota de R$200 será lançada no BR", "Simpsons 'previu' nota de R$200 em episódio de 2014", Date.now());