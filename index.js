// Import packages needed
const inquirer = require("inquirer");
const fs = require("fs");

// 
const licenseArr = [
  { name: "None", badge: "" },
  { name: "Apache License 2.0", badge: "https://img.shields.io/badge/License-Apache_2.0-blue.svg" },
  { name: "GNU General Public License v3.0", badge: "https://img.shields.io/badge/License-GPLv3-blue.svg" },
  { name: "MIT License", badge: "https://img.shields.io/badge/License-MIT-yellow.svg" },
  { name: "BSD 2-Clause 'Simplified' License", badge: "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg" },
  { name: "BSD 3-Clause 'New' or 'Revised' License", badge: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg" },
  { name: "Boost Software License 1.0", badge: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg" },
  { name: "Creative Commons Zero v1.0 Universal", badge: "https://licensebuttons.net/l/zero/1.0/80x15.png" },
  { name: "Eclipse Public License 2.0", badge: "https://opensource.org/licenses/EPL-1.0" },
  { name: "GNU Affero General Public License v3.0", badge: "https://img.shields.io/badge/License-AGPL_v3-blue.svg" },
  { name: "GNU General Public License v2.0", badge: "https://img.shields.io/badge/License-GPL_v2-blue.svg" },
  { name: "Mozilla Public License 2.0", badge: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg" },
  { name: "The Unlicense", badge: "https://img.shields.io/badge/license-Unlicense-blue.svg" }
];




// Define the Contents of README.md
const generateFile = answers => {
  return ""
};


inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "Project Title: " 
  },
  {
    type: "input",
    name: "description",
    message: "Description:   (Provide a short description explaining the what, why, and how of your project.) \n "
  },
  {
    type: "input",
    name: "installation",
    message: "Installation:   (Provide a step-by-step description of how to install your project.) \n "
  },
  {
    type: "input",
    name: "usage",
    message: "Usage:   (Provide usage instructions, including examples and screenshots as needed. Example syntax for screenshots `![alt_text](./assets/images/screenshot.png)`.) \n "
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license: ",
    // choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v3.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
    choices: licenseArr,
    default: 3
  },  
  {
    type: "input",
    name: "tests",
    message: "Tests:   (If applicable, provide instructions for how to run tests.) \n "
  },
  {
    type: "input",
    name: "credits",
    message: "Credits:   (As applicable, list any collaborators (with GitHub profile links), third-party assets (with their creators and web links), and tutorials (with web links). Example syntax for links: `![link](https://www.link.com)`.) \n "
  },
  {
    type: "input",
    name: "contributing",
    message: "How to Contribute:   (If you would like other developers to contribute, include guidelines for how to do so. [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, or provide your own custom guidelines.) \n "
  },
  {
    type: "input",
    name: "gitHubUserName",
    message: "Your GitHub Username: "
  },
  {
    type: "input",
    name: "email",
    message: "Your Email Address: "
  }
]).then(answers => {
  const readmeContent = generateFile(answers);
  
  fs.writeFile("README.md", readmeContent, (err) => {
    err ? console.log(err) : console.log("Successfully created README.md");
  });
});