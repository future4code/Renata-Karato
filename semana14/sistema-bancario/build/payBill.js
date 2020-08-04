"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const fs = __importStar(require("fs"));
moment_1.default.locale("pt-br");
const payBill = (accountName = process.argv[3], accountCPF = Number(process.argv[4]), valueBill, descriptionBill, datePayment) => {
    try {
        const data = JSON.parse(fs.readFileSync('./data.json').toString());
        const accountIndex = data.findIndex(client => client.name === accountName && client.CPF === accountCPF);
        data.forEach((account) => {
            if (accountIndex > -1 && account.name === accountName && account.CPF === accountCPF) {
                if (valueBill <= account.balance && datePayment >= moment_1.default()) {
                    data[accountIndex] = Object.assign(Object.assign({}, data[accountIndex]), { balance: data[accountIndex].balance - valueBill, operations: [...data[accountIndex].operations, {
                                value: valueBill,
                                date: datePayment,
                                description: (`Pagamento de ${descriptionBill} no valor de R$${valueBill}`)
                            }] });
                    const updateListAccounts = JSON.stringify(data, null, 2);
                    fs.writeFileSync("./data.json", updateListAccounts);
                    console.log(`Conta de R$${valueBill} paga com sucesso!`);
                }
                else if (valueBill > account.balance) {
                    console.log("Não foi possível realizar transação. Saldo insuficiente.");
                }
                else if (datePayment < moment_1.default()) {
                    console.log("Não é possível realizar pagamentos em data anterior ao dia de hoje.");
                }
            }
            else if ((account.name === accountName && account.CPF !== accountCPF) || (account.name !== accountName && account.CPF === accountCPF)) {
                console.log("Dados não conferem: nome e/ou CPF inválido.");
            }
            else {
                console.log("Dados não conferem: nome e/ou CPF inválido.");
            }
        });
    }
    catch (error) {
        console.log(`Erro: ${error.message}`);
    }
};
payBill("Renata Karatoo", 361376628021, 50, "almoço", moment_1.default("03/08/2020", "DD/MM/YYYY"));
