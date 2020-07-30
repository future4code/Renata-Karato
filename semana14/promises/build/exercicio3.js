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
/* const getSubscribers = async(): Promise<User[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data;
};
  
getSubscribers().then((res => {
    console.log(res)
})); */
/* ----- EXERCÍCIO 3.A. ----- */
//Não teremos nenhum erro de tipagem, os subscribers serão descritos normalmente.
/* ----- EXERCÍCIO 3.B. ----- */
//Fazemos o mapeamento do resultado de uma promise, para garantir que os dados retornados estarão da forma esperada.
/* ----- EXERCÍCIO 3.C. ----- */
const getSubscribers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
    return users.data.map((res) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        };
    });
});
getSubscribers().then((res => {
    console.log(res);
}));
