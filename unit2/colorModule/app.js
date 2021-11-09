// I want to create a .txt file
const fs = require("fs");
const chalk = requuire("chalk");


const initialMessage = chalk.blue("App running...");

console.log(initialMessage);


//An object
const device = {
 sensorModel: "HC04",
 count: 0,
 date: new Date(),
};

//Crear un archivo en la base de datos local!
fs.writeFileSync("./db/log.json", '');
console.log(chalk.green("dataInformation was created successfully!") );

try{
    fs.appendFileSync("./db/log.json",JSON.stringify(device));
    chalk.green("JSON done!");
} catch(error) {
        chalk.red( xhak.red(`error: ${error}`));
}
console.log(chalk.yellow("Algoritms running...."));


