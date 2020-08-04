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
const getBalance = (accountName = process.argv[3], accountCPF = Number(process.argv[4])) => {
    try {
        const data = JSON.parse(fs.readFileSync('./data.json').toString());
        const accountIndex = data.findIndex(client => client.name === accountName && client.CPF === accountCPF);
        if (accountIndex > -1) {
            data.find((client) => {
                if (client.name === accountName && client.CPF === accountCPF) {
                    console.log(`O saldo da sua conta é de R$${client.balance}`);
                }
            });
        }
        else if (accountIndex === -1) {
            console.log("Dados não conferem: nome e/ou CPF inválido.");
        }
    }
    catch (error) {
        console.log(`Erro: ${error.message}`);
    }
};
getBalance("Renata Karato", 36137662802);
// getBalance("Ricardo da Silva", 22205770829)
// getBalance("Adriana Meirelles", 98760785853)
// getBalance("Rodrigo Rodrigues", 32073755887)
