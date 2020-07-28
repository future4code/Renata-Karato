const operate = (operation: string, ...numbers:string[]) :void=> {
    switch(operation) {
        case "add":
            return console.log("\x1b[33m",`${Number(numbers[0]) + Number(numbers[1])}`);
            
        case "sub":
            return console.log("\x1b[34m",`${Number(numbers[0]) - Number(numbers[1])}`);
            
        case "mult":
            return console.log("\x1b[32m",`${Number(numbers[0]) * Number(numbers[1])}`);
            
        case "div":
            return console.log("\x1b[36m",`${Number(numbers[0]) / Number(numbers[1])}`);
        
        default:
            console.log("Operação inválida");
            break;
    } 
};

operate(process.argv[2], process.argv[3], process.argv[4]);

/* let result = 0;

for (let i=2; i < process.argv.length; i++) {
    result += Number(process.argv[i]);
}

console.log(result) */