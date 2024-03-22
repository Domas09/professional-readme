// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('requirer');
const generateMarkdown = require('../professional-readme/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ["Project name", "Brief description of project", "What was your motivation", "Why did you build this project", "What problem does it solve?", "What did you learn?", "Instalation directions", "Directory for screenshot", "Collaborators", "Third party assests", "Links to tutorials", "License", "Github username", "Email"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(`../professional-readme/generate/${fileName}`, generateMarkdown(data), (err) => 
    err ? console.error(err) : console.log("Yippee!")
    );

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
