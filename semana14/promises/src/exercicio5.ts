import axios from "axios";

const baseUrl = 
  "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

type User = {
    id: string;
    name: string;
    email: string;
}

/* ----- EXERCÍCIO 5.A. ----- */

/* ----- EXERCÍCIO 5.B. ----- */
const sendNotifications = async (
    users: User[],
    message: string
  ): Promise<void> => {
    const promiseArray: Promise<any>[] = [];
    for (const user of users) {
      await axios.post(`${baseUrl}/notifications/send`, {
        subscriberId: user.id,
        message: message,
      });
    }
  
    console.log("All notifications sent!");
  };
