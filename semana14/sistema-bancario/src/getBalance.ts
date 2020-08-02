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
    operations: transactions[],
}

const bufferArchive: Buffer = fs.readFileSync("./data.json");
const textArchive: string = bufferArchive.toString();
const allAccounts: account[] = textArchive ? JSON.parse(textArchive) : [];

const getBalance = (
    accountName: string = process.argv[3],
    accountCPF: number = Number(process.argv[4]),
): void => {
    try {
        const data: account[] = JSON.parse(fs.readFileSync('./data.json').toString());
        
        const accountIndex = allAccounts.findIndex(client => client.name === accountName && client.CPF === accountCPF)
        if (accountIndex > -1) {

            for (let client of data) {
                if (client.name === accountName && client.CPF === accountCPF) {
                    console.log(`O saldo da sua conta é de R$${client.balance}`)
                    return;
                } 
            }
        }
    } catch (error) {
        console.log(`Erro: ${error.message}`)
    }
}

getBalance("Adriana Meirelles", 98760785853)