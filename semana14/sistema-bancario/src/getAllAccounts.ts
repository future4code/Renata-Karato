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

const data: account[] = JSON.parse(fs.readFileSync('./data.json').toString());

const getAllAccounts = (): void => {

    data.forEach((client: account) => {

        const date: moment.Moment = moment(client.birthday)
        
            console.log(`
                Nome: ${client.name}
                CPF: ${client.CPF}
                Data de Nascimento: ${date.format("DD/MM/YYYY")}
                Saldo Bancário: R$${client.balance}
                Extrato: ${client.operations}
            `)
        
    })
}

getAllAccounts()