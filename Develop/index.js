//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs)');
const util = require('util');

//Array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile)
function promptUser(){
    return inquirer.prompt([
{
    type:"input",
    message: "What is the title of your project",
    name:"title"
},
{   type:"input",
    message: "Write a descrption of your project",
    name:"Description"
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
    type:"input",
    message: "Are there any Contributors",
    name:"Contributons"
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
])
}


const generateREADME = (answers) =>
`
# ${answers.title}
[![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})
## Description
${answers.description}
## Table of Contents
[Installation](#Installation)  
[Usage](#Usage)  
[License](#License)  
[Contributions](#Contributions)  
[Testing](#Testing)  
[Questions](#Questions)
## Installation
${answers.install}
## Usage
${answers.usage}
## License
${answers.license}
## Contributions
${answers.contribution}
## Testing
${answers.test}
## Questions
[GitHub](https://github.com/${answers.github})  
Feel free to reach out to me by [email](mailto:${answers.email}) with any questions you may have.
`;

function init() {
  promptUser()
    .then(function(answers) {
        writeFileAsync('README.md', generateREADME(answers));
    })
    .then(function() {
        console.log('Successfully wrote to README.md');
    })
    .catch(function(err) {
        console.error(err);
    });
};

init();