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

const addBalance = (
    accountName: string = process.argv[3],
    accountCPF: number = Number(process.argv[4]),
    deposit: number = Number(process.argv[6])
): void => {
    try {
        const data: account[] = JSON.parse(fs.readFileSync('./data.json').toString());
        
        const accountIndex = allAccounts.findIndex(client => client.name === accountName && client.CPF === accountCPF)
        if (accountIndex > -1 && deposit > 0) {
            data[accountIndex] = {
                ...data[accountIndex],
                balance: data[accountIndex].balance + deposit,
                operations: [...data[accountIndex].operations, {
                    value: deposit,
                    date: moment(),
                    description: (`Depósito de R$${deposit}`)
                }]
            }
       
        const updateListAccounts: string = JSON.stringify(data, null, 2);
        fs.writeFileSync("./data.json", updateListAccounts);
        console.log(`Saldo de R$${deposit} adicionado com sucesso!`)
        } else {
            console.log("Dados não conferem.")
        }
    } catch (error) {
        console.log(`Erro: ${error.message}`)
    }
}

addBalance("Rodrigo Rodrigues", 32073755887, 25)