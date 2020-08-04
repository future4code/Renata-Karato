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

const payBill = (
    accountName: string = process.argv[3],
    accountCPF: number = Number(process.argv[4]),
    valueBill: number,
    descriptionBill: string,
    datePayment: moment.Moment 
): void => {
    try {
        const data: account[] = JSON.parse(fs.readFileSync('./data.json').toString());
    
        const accountIndex = data.findIndex(client => client.name === accountName && client.CPF === accountCPF)
        
        data.forEach((account) => {
            if (accountIndex > -1 && account.name === accountName && account.CPF === accountCPF) {    
                if (valueBill <= account.balance && datePayment >= moment()) {
                    data[accountIndex] = {
                        ...data[accountIndex],
                        balance: data[accountIndex].balance - valueBill,
                        operations: [...data[accountIndex].operations, {
                            value: valueBill,
                            date: datePayment,
                            description: (`Pagamento de ${descriptionBill} no valor de R$${valueBill}`)
                        }]}

                        const updateListAccounts: string = JSON.stringify(data, null, 2);
                        fs.writeFileSync("./data.json", updateListAccounts);
                        console.log(`Conta de R$${valueBill} paga com sucesso!`)
                } else if (valueBill > account.balance) {
                    console.log ("Não foi possível realizar transação. Saldo insuficiente.")
                } else if (datePayment < moment()) {
                    console.log ("Não é possível realizar pagamentos em data anterior ao dia de hoje.")
                    
                } 
            } else if ((account.name === accountName && account.CPF !== accountCPF) || (account.name !== accountName && account.CPF === accountCPF)) {
                console.log("Dados não conferem: nome e/ou CPF inválido.")
            } else {
                console.log("Dados não conferem: nome e/ou CPF inválido.")
            }
        }) 
    } catch (error) {
        console.log(`Erro: ${error.message}`)
    }
}

payBill("Renata Karatoo", 361376628021, 50, "almoço", moment("03/08/2020", "DD/MM/YYYY"))