import * as fs from "fs";

const fileData: string = fs.readFileSync("./src/events.json").toString(); 
console.log(fileData);