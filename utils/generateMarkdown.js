function licenseChecker(license, licenses){
  if(license === "MIT"){
    return licenses.mit;
  } else if(license === "APACHE 2.0"){
    return licenses.apache;
  } else if(license === "GPL 3.0"){
    return licenses.gpl;
  } else if(license === "BSD 3"){
    return licenses.bsd;
  } 
}
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenses = {
    mit: "[MIT](https://opensource.org/licenses/MIT)",
    apache: "[APACHE 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    gpl: "[GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    bsd: "[BSD 3](https://opensource.org/licenses/BSD-3-Clause)"
  };
  return licenseChecker(license, licenses);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenses = {
    mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    apache: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    gpl: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    bsd:"[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  };
  return licenseChecker(license, licenses);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "NONE"){
    return "";
  } else {
  return `## License
  
${renderLicenseBadge(license)}
${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
  
${data.description}
  
- ${data.motivation}
- ${data.why}
- ${data.problem}
- ${data.learn}
  
## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#howtocontribute)
- [Tests](#tests)
- [Screenshot](#screenshot)
- [Questions](#questions)

## Installation
  
${data.installation}
  
## Usage
  
${data.instructions}
  
## Credits

- Collaborators
${data.collab}

- Third-party assets
${data.third}

- Helpful Links Used
${data.tutorials}
  
${renderLicenseSection(data.license)}
  
---
  
## How to Contribute
  
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
## Tests
  
Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Screenshot

![screenshot](${data.screenshot})

## Questions

- My contact info

[GitHub](${data.github})
[Gmail](${data.gmail})

`;
}

module.exports = generateMarkdown;
