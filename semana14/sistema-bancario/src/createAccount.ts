import moment from "moment";
import * as fs from 'fs'

moment.locale("pt-br");

type transactions = {
    value: number,
    date: moment.Moment,
    description: string
};

type account = {
    name: string,
    CPF: number,
    birthday: moment.Moment,
    balance: number,
    operations: transactions[]
}

const bufferArchive: Buffer = fs.readFileSync("./data.json");
const textArchive: string = bufferArchive.toString();
const allAccounts: account[] = textArchive ? JSON.parse(textArchive) : [];

const createAccount = (
    newAccountName: string = process.argv[3],
    newAccountCPF: number = Number(process.argv[4]),
    newAccountBirthday: moment.Moment = moment(process.argv[5]),
) : void => {
    try {

        const today: moment.Moment = moment();
        const checkAge = today.diff(newAccountBirthday, "years")

        const data: account[] = JSON.parse(fs.readFileSync('./data.json').toString());

        if(!newAccountName || !newAccountCPF || !newAccountBirthday) {
            console.log("Necessário preencher todos os campos!");
            return;
        } 

        for (let client of data) {
            if (client.CPF === newAccountCPF) {
                console.log("CPF já cadastrado!")
                return;
            }
        }

        if (checkAge < 18) {
            console.log("Cliente precisa ter mais de 18 anos para criar uma conta.")
            return;
        } 

        if(newAccountName && newAccountBirthday && newAccountBirthday) {

            allAccounts.push({
                name: newAccountName,
                CPF: newAccountCPF,
                birthday: newAccountBirthday,
                balance: 0,
                operations: []
            });

            const updateListAccounts: string = JSON.stringify(allAccounts, null, 2);
            fs.writeFileSync("./data.json", updateListAccounts);
            console.log("Conta criada com sucesso!")
            return;
        }
    } catch (error) {
        console.log(`Erro: ${error.message}`)
    }
};

createAccount(
    "Rodrigo Rodrigues",
    32073755887,
    moment("09/01/1995", "DD/MM/YYYY")
)