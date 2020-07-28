"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post5 = exports.post4 = exports.post3 = exports.post2 = exports.post1 = void 0;
exports.post1 = {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
};
exports.post2 = {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
};
exports.post3 = {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
};
exports.post4 = {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
};
exports.post5 = {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
};
const arrayDePosts = [exports.post1, exports.post2, exports.post3, exports.post4, exports.post5];
console.log(arrayDePosts);
function buscarPostsPorAutor(posts, autorInformado) {
    return posts.filter((post) => {
        return post.autor === autorInformado;
    });
}
//# sourceMappingURL=exercicio3.js.map