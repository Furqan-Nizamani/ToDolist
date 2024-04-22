#! /usr/bin/env node

import inquirer from "inquirer"

let ToDoList = []
let condition = true

while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "List",
            type: "input",
            message: "Please let me knwo what do you want to add in ToDoList."
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want add something extra?",
            default: "false"
        }
    ])

    ToDoList.push(addTask.List);
    condition = addTask.addMore
    console.log(ToDoList);
}