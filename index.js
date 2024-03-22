// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('../professional-readme/utils/generateMarkdown');
// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(`../professional-readme/generate/${fileName}`, generateMarkdown(data), (err) => 
    err ? console.error(err) : console.log("Yippee!")
    );
    
}

// TODO: Create a function to initialize app
function init() {
    let data = {
        title: "",
        description: "",
        motivation: "",
        why: "",
        problem: "",
        learn: "",
        installation: "",
        instructions: "",
        collab: "",
        third: "",
        tutorials: "",
        license: false,
        screenshot: "",
        github: "",
        gmail: ""
    }

    inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0]
        },
    ])
    .then((response) => {
        data.title = response.title;
    })
    
    
    
    writeToFile("README.md", data);
}

const questions = ["Project title", "Brief description of project", "What was your motivation", "Why did you build this project", "What problem does it solve?", "What did you learn?", "Installation directions", "Usage instructions", "Collaborators", "Third party assests", "Links to tutorials", "License", "Screenshot directory", "Github username", "Email"];
// Function call to initialize app
init();
