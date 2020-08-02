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

const getBalance = (
    accountName: string = process.argv[3],
    accountCPF: number = Number(process.argv[4]),
): void => {
    try {
        const data: account[] = JSON.parse(fs.readFileSync('./data.json').toString());

        const accountIndex = data.findIndex(client => client.name === accountName && client.CPF === accountCPF)
        if (accountIndex > -1) {
            data.find((client) => {
                if (client.name === accountName && client.CPF === accountCPF) {
                    console.log(`O saldo da sua conta é de R$${client.balance}`)
                } 
            })
        } else if (accountIndex === -1) {
            console.log("Dados não conferem: nome e/ou CPF inválido.")
        }
        
    } catch (error) {
        console.log(`Erro: ${error.message}`)
    }
}

getBalance("Renata Karato", 36137662802)
// getBalance("Ricardo da Silva", 22205770829)
// getBalance("Adriana Meirelles", 98760785853)
// getBalance("Rodrigo Rodrigues", 32073755887)