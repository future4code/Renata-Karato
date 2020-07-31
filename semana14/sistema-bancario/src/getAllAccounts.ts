import moment from "moment";
import * as fs from 'fs'

moment.locale("pt-br");

type newClient = {
    name: string,
    CPF: number,
    birthday: moment.Moment,
}

const bufferArchive: Buffer = fs.readFileSync("./data.json");
const textArchive: string = bufferArchive.toString();
const allAccounts: newClient[] = textArchive ? JSON.parse(textArchive) : [];

const getAllAccounts = (allAccounts: newClient[]): void => {

    allAccounts.forEach((client: newClient) => {

        const date: moment.Moment = moment(client.birthday)

        console.log(`
        Nome: ${client.name};
        CPF: ${client.CPF}
        Data de Nascimento: ${date.format("DD/MM/YYYY")}
        `)
    })
}

getAllAccounts(allAccounts)