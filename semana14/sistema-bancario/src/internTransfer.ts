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

const internTransfer = (
    accountName: string,
    accountCPF: number,
    sendName: string,
    sendCPF: number,
    sendValue: number
) : void => {
    try {
        const data: account[] = JSON.parse(fs.readFileSync('./data.json').toString());
    
        const accountIndex = data.findIndex(client => client.name === accountName && client.CPF === accountCPF)
        const accountIndex2 = data.findIndex(sendAccount => sendAccount.name === sendName && sendAccount.CPF === sendCPF)

        data.forEach((account) => {
            if (accountIndex > -1 && account.name === accountName && account.CPF === accountCPF) {    
                if (sendValue <= account.balance) {
                    data[accountIndex] = {
                        ...data[accountIndex],
                        balance: data[accountIndex].balance - sendValue,
                        operations: [...data[accountIndex].operations, {
                            value: sendValue,
                            date: moment(),
                            description: (`Transferência de R$${sendValue} enviada para a conta de ${sendName}`)
                        }]}

                        const updateListAccounts: string = JSON.stringify(data, null, 2);
                        fs.writeFileSync("./data.json", updateListAccounts);
                        console.log(`Transferência de R$${sendValue} realizada com sucesso!`)
                    } else if (sendValue > account.balance) {
                        console.log ("Não foi possível realizar transação. Saldo insuficiente.")
                    }
            } else if ((account.name === accountName && account.CPF !== accountCPF) || (account.name !== accountName && account.CPF === accountCPF)) {
                console.log("Dados não conferem: nome e/ou CPF inválido.")
            } 

            if (accountIndex2 > -1 && account.name === sendName && account.CPF === sendCPF) {    
                if (sendValue > 0 && sendValue <= data[accountIndex].balance) {
                    data[accountIndex2] = {
                        ...data[accountIndex2],
                        balance: data[accountIndex2].balance + sendValue,
                        operations: [...data[accountIndex2].operations, {
                            value: sendValue,
                            date: moment(),
                            description: (`Transferência de R$${sendValue} recebida de ${accountName}`)
                        }]}

                        const updateListAccounts: string = JSON.stringify(data, null, 2);
                        fs.writeFileSync("./data.json", updateListAccounts);
                        console.log(`Transferência de R$${sendValue} recebida!`)
                } else if (sendValue > data[accountIndex].balance) {
                    console.log (`Não foi possível receber transferência de ${accountName}`)
                }
            } else if ((account.name === sendName && account.CPF !== sendCPF) || (account.name !== sendName && account.CPF === sendCPF)) {
                console.log("Dados não conferem: nome e/ou CPF inválido.")
            } 
        }) 
    } catch (error) {
        console.log(`Erro: ${error.message}`)
    }
}

internTransfer("Ricardo da Silva", 22205770829, "Renata Karato", 36137662802, 200)