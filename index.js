#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgBlueBright("\n\t\t++++===== Wellcome To The FaizCode-Todolist =====++++\n"));
console.log(`\t\t======                    ||`);
console.log(`\t\t  ||   __    ___    __    ||        ____  ____     `);
console.log(`\t\t  || ||  || ||  | ||  ||  ||     || ||__   ||`);
console.log(`\t\t  || ||__|| ||__/ ||__||  ||____ || ___||  || \n`);
let TodoListItem = [];
let myloop = true;
while (myloop) {
    let userInput = await inquirer.prompt([
        {
            type: "input",
            name: "todoitem",
            message: "Enter Your Task which you do:",
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to more add task in todolist ?",
            default: false,
        },
        {
            type: "confirm",
            name: "seelist",
            message: "Do you want to see the todolist ?",
            default: false,
            when(userInput) {
                return userInput.addmore === false;
            },
        },
    ]);
    let { todoitem, addmore, seelist } = userInput;
    if (todoitem) {
        TodoListItem.push(todoitem);
    }
    if (seelist) {
        console.log(chalk.yellow(`\nHere is your Todolist:\n`));
        TodoListItem.forEach((item, index) => {
            console.log(`${index + 1}.${item}`);
        });
    }
    myloop = addmore;
}
