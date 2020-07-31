"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";
/* ----- EXERCÍCIO 2.A. ----- */
//Sintaxe de uma função nomeada assíncrona (declaramos uma function)
/* async function nome(){
    instruções
} */
//Sintaxe de uma arrow function assíncrona (declaramos uma const)
/* const nomeFunction = async() => {
    instruções
} */
/* ----- EXERCÍCIO 2.B. ----- */
const getSubscribers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
    return users.data;
});
getSubscribers().then((res => {
    console.log(res);
}));
