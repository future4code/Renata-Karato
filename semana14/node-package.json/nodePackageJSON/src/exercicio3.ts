import * as fs from "fs";

try {
    const updateTasks: string = process.argv[2].toString();
    fs.appendFileSync("./src/tarefas.txt", updateTasks);
    console.log("Tarefa adicionada com sucesso!")
} catch (error) {
    console.log("Erro ao criar tarefa!")
}