import axios from "axios";

const baseUrl = 
  "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

type User = {
	id: string;
	name: string;
	email: string;
}

/* const getSubscribers = async(): Promise<User[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data;
};
  
getSubscribers().then((res => {
    console.log(res)
})); */

/* ----- EXERCÍCIO 3.A. ----- */
//Não teremos nenhum erro de tipagem, os subscribers serão descritos normalmente.

/* ----- EXERCÍCIO 3.B. ----- */
//Fazemos o mapeamento do resultado de uma promise, para garantir que os dados retornados estarão da forma esperada.

/* ----- EXERCÍCIO 3.C. ----- */
const getSubscribers = async (): Promise<User[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };

getSubscribers().then((res => {
    console.log(res)
}));