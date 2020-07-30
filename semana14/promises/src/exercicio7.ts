import axios from "axios";

const baseUrl = 
  "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

type User = {
    id: string;
    name: string;
    email: string;
}

const getSubscribers = async(): Promise<any[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data;
};

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

/* ----- EXERCÍCIO 7.A. ----- */
const createSubscriber = async (name: string, email: string) => {
    await axios.put(`${baseUrl}/subscribers`, {
      name,
      email
    });
  };

/* ----- EXERCÍCIO 7.B. ----- */
const createAndSendNotifications = async () => {
    try {
      await createNews(
        "Novidade a caminho",
        "Labenu: uma nova escola de programação",
        1590522289000
      );
  
      const users = await getSubscribers();
  
      await sendNotifications(users, "Testando mensagens");
    } catch (err) {
      console.log("err: ", err.message);
    }
  };

/* ----- EXERCÍCIO 7.C. ----- */
const getAllNotifications = async (): Promise<any> => {
    const users = await getSubscribers();
  
    const notificationPromises = [];
    for (const user of users) {
      notificationPromises.push(
        axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)
      );
    }
  
    const result = await Promise.all(notificationPromises);
  
    const dataFromResult = result.map((res) => res.data);
  
    return dataFromResult;
  };