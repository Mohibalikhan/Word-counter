#! /usr/bin/env node
import inquirer from "inquirer"

let user_ans = await inquirer.prompt({
    type : "input",
    name: "words",
    message:"Please Enter your Sentence =" 
})

let word_count = user_ans.words.trim().split(" ").length
let characters_count = user_ans.words.replace(/\s/g, '').length;

console.log(`=> Your Sentence has "${word_count}" words.`);
console.log(`=> And "${characters_count}" characters(without whitespaces).`);

