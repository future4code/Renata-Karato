import axios from "axios";

const baseUrl = 
  "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

/* ----- EXERCÍCIO 2.A. ----- */

//Sintaxe de uma função nomeada assíncrona (declaramos uma function)
/* async function nome(){
    instruções
} */

//Sintaxe de uma arrow function assíncrona (declaramos uma const)
/* const nomeFunction = async() => {
    instruções
} */

/* ----- EXERCÍCIO 2.B. ----- */
const getSubscribers = async(): Promise<any[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data;
};
  
getSubscribers().then((res => {
    console.log(res)
}));