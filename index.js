// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('../professional-readme/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ["Project title", "Brief description of project", "What was your motivation", "Why did you build this project", "What problem does it solve?", "What did you learn?", "Installation directions", "Usage instructions", "Collaborators", "Third party assests", "Links to tutorials", "License", "Screenshot directory", "Github username", "Email"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(`../professional-readme/generate/${fileName}`, generateMarkdown(data), (err) => 
    err ? console.error(err) : console.log("Yippee!")
    );
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'motivation',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'why',
            message: questions[3]
        },
        {
            type: 'input',
            name: 'problem',
            message: questions[4]
        },
        {
            type: 'input',
            name: 'learn',
            message: questions[5]
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[6]
        },
        {
            type: 'input',
            name: 'instructions',
            message: questions[7]
        },
        {
            type: 'input',
            name: 'collab',
            message: questions[8]
        },
        {
            type: 'input',
            name: 'third',
            message: questions[9]
        },
        {
            type: 'input',
            name: 'tutorials',
            message: questions[10]
        },
        {
            type: 'input',
            name: 'license',
            message: questions[11]
        },
        {
            type: 'input',
            name: 'screenshot',
            message: questions[12]
        },
        {
            type: 'input',
            name: 'github',
            message: questions[13]
        },
        {
            type: 'input',
            name: 'gmail',
            message: questions[14]
        },
    ])
    .then((data) => {
        writeToFile("README.md", data);
    })
    
    
    
}

// Function call to initialize app
init();
