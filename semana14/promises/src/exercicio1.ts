import axios from "axios";

const baseUrl = 
  "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

/* ----- EXERCÍCIO 1.A. ----- */
//Endpoint get subscribers
//https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all

/* ----- EXERCÍCIO 1.B. ----- */
// depois de nomear a função, coloca-se "async function nomeDaFuncao(): Promise<any[]>"

/* ----- EXERCÍCIO 1.C. ----- */
async function getSubscribers(): Promise<any[]> {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data;
};

getSubscribers().then((res => {
    console.log(res)
}));