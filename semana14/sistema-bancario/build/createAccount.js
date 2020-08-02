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
const bufferArchive = fs.readFileSync("./data.json");
const textArchive = bufferArchive.toString();
const allAccounts = textArchive ? JSON.parse(textArchive) : [];
const createAccount = (newAccountName = process.argv[3], newAccountCPF = Number(process.argv[4]), newAccountBirthday = moment_1.default(process.argv[5])) => {
    try {
        const today = moment_1.default();
        const checkAge = today.diff(newAccountBirthday, "years");
        const data = JSON.parse(fs.readFileSync('./data.json').toString());
        if (!newAccountName || !newAccountCPF || !newAccountBirthday) {
            console.log("Necessário preencher todos os campos!");
            return;
        }
        for (let client of data) {
            if (client.CPF === newAccountCPF) {
                console.log("CPF já cadastrado!");
                return;
            }
        }
        if (checkAge < 18) {
            console.log("Cliente precisa ter mais de 18 anos para criar uma conta.");
            return;
        }
        if (newAccountName && newAccountBirthday && newAccountBirthday) {
            allAccounts.push({
                name: newAccountName,
                CPF: newAccountCPF,
                birthday: newAccountBirthday,
                balance: 0,
                operations: []
            });
            const updateListAccounts = JSON.stringify(allAccounts, null, 2);
            fs.writeFileSync("./data.json", updateListAccounts);
            console.log("Conta criada com sucesso!");
            return;
        }
    }
    catch (error) {
        console.log(`Erro: ${error.message}`);
    }
};
createAccount("Hello Kitty", 32073755887, moment_1.default("09/01/1995", "DD/MM/YYYY"));
