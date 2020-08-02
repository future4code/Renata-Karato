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
const addBalance = (accountName = process.argv[3], accountCPF = Number(process.argv[4]), deposit = Number(process.argv[6])) => {
    try {
        const data = JSON.parse(fs.readFileSync('./data.json').toString());
        const accountIndex = data.findIndex(client => client.name === accountName && client.CPF === accountCPF);
        if (accountIndex > -1 && deposit > 0) {
            data[accountIndex] = Object.assign(Object.assign({}, data[accountIndex]), { balance: data[accountIndex].balance + deposit, operations: [...data[accountIndex].operations, {
                        value: deposit,
                        date: moment_1.default(),
                        description: (`Depósito de R$${deposit}`)
                    }] });
            const updateListAccounts = JSON.stringify(data, null, 2);
            fs.writeFileSync("./data.json", updateListAccounts);
            console.log(`Saldo de R$${deposit} adicionado com sucesso!`);
        }
        else if (accountIndex === -1) {
            console.log("Não foi possível realizar o depósito. Nome e/ou CPF inválido.");
        }
    }
    catch (error) {
        console.log(`Erro: ${error.message}`);
    }
};
addBalance("Renata Karato", 361376628021, 50);
// addBalance("Ricardo da Silva", 22205770829, 100)
// addBalance("Adriana Meirelles", 98760785853, 125)
// addBalance("Rodrigo Rodrigues", 32073755887, 25)
