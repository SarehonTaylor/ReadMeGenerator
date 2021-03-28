// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const utli = require('util');
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
{
    type:"input",
    message: "What is the title of your project",
    name:"Title"
},
{   type:"input",
    message: "Write a decrption of your project",
    name:"description"
},
{
    type:"input",
    message: "Installation Instructions",
    name:"Install"
},
{   
    type:"input",
    message: "Please Explain How To Use The Application Created",
    name:"Usage"
},
{   
    type:"list",
    message:"Which license are you using?",
    name:"License",
    choices: ["MIT License", "GVL GPL License", "Apache License","No License"]
},
{   
    type:"input",
    message: "Are there any Contributors",
    name:"Contributors"
},
{   
    type:"input",
    message: "How to test the app",
    name:"Test"
},
{   
    type:"input",
    message: "Any Questions?",
    name:"Questions"
},
{   
    type:"input",
    message: "Enter Your GitHub Username?",
    name:"GitHub"
},
{   
    type:"input",
    message: "Enter Your Email Address?",
    name:"Email"
},


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) => {
    if (err) {
        throw err;
    }
        console.log("The ReadMe Was Created Sucessfully")
    });
};

// Function to write file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          throw err;
        }
        console.log("ReadMe was created");
      });
    }


// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        
        const response = generateMarkdown(answers);
        console.log(answers);
       
        writeToFile("README.md", response);
      
    })
    

}


// function call to initialize program
init();