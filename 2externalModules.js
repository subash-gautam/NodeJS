// Using external modules.
// const colors = require("colors");
import colors from "colors";
import chalk from "chalk";

console.log("Hello World !!".green.bgBlue);
console.log(
    chalk.blue.bgRed.bold("Hello world! ") +
        chalk.bgBlue(" and How are you my babe?")
);
