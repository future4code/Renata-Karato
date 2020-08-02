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
const internTransfer = (accountName, accountCPF, sendName, sendCPF, sendValue) => {
    try {
        const data = JSON.parse(fs.readFileSync('./data.json').toString());
        const accountIndex = data.findIndex(client => client.name === accountName && client.CPF === accountCPF);
        const accountIndex2 = data.findIndex(sendAccount => sendAccount.name === sendName && sendAccount.CPF === sendCPF);
        data.forEach((account) => {
            if (accountIndex > -1 && account.name === accountName && account.CPF === accountCPF) {
                if (sendValue <= account.balance) {
                    data[accountIndex] = Object.assign(Object.assign({}, data[accountIndex]), { balance: data[accountIndex].balance - sendValue, operations: [...data[accountIndex].operations, {
                                value: sendValue,
                                date: moment_1.default(),
                                description: (`Transferência de R$${sendValue} enviada para a conta de ${sendName}`)
                            }] });
                    const updateListAccounts = JSON.stringify(data, null, 2);
                    fs.writeFileSync("./data.json", updateListAccounts);
                    console.log(`Transferência de R$${sendValue} realizada com sucesso!`);
                }
                else if (sendValue > account.balance) {
                    console.log("Não foi possível realizar transação. Saldo insuficiente.");
                }
            }
            else if ((account.name === accountName && account.CPF !== accountCPF) || (account.name !== accountName && account.CPF === accountCPF)) {
                console.log("Dados não conferem: nome e/ou CPF inválido.");
            }
            if (accountIndex2 > -1 && account.name === sendName && account.CPF === sendCPF) {
                if (sendValue > 0 && sendValue <= data[accountIndex].balance) {
                    data[accountIndex2] = Object.assign(Object.assign({}, data[accountIndex2]), { balance: data[accountIndex2].balance + sendValue, operations: [...data[accountIndex2].operations, {
                                value: sendValue,
                                date: moment_1.default(),
                                description: (`Transferência de R$${sendValue} recebida de ${accountName}`)
                            }] });
                    const updateListAccounts = JSON.stringify(data, null, 2);
                    fs.writeFileSync("./data.json", updateListAccounts);
                    console.log(`Transferência de R$${sendValue} recebida!`);
                }
                else if (sendValue > data[accountIndex].balance) {
                    console.log(`Não foi possível receber transferência de ${accountName}`);
                }
            }
            else if ((account.name === sendName && account.CPF !== sendCPF) || (account.name !== sendName && account.CPF === sendCPF)) {
                console.log("Dados não conferem: nome e/ou CPF inválido.");
            }
        });
    }
    catch (error) {
        console.log(`Erro: ${error.message}`);
    }
};
internTransfer("Ricardo da Silva", 22205770829, "Renata Karato", 36137662802, 200);
