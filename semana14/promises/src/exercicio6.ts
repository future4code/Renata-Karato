import axios from "axios";

const baseUrl = 
  "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

type User = {
    id: string;
    name: string;
    email: string;
}

/* ----- EXERCÍCIO 6.A. ----- */

/* ----- EXERCÍCIO 6.B. ----- */

/* ----- EXERCÍCIO 6.C. ----- */
const sendNotifications = async (
    users: User[],
    message: string
  ): Promise<void> => {
    const promiseArray = [];
    for (const user of users) {
      promiseArray.push(
        axios.post(`${baseUrl}/notifications/send`, {
          subscriberId: user.id,
          message: message,
        })
      );
    }
  
    await Promise.all(promiseArray);
  };