// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
     
         {
          type: "input",
          name: "title",
          message: "What is the title of this project?",
        },

        {
          type: "input",
          name: "description",
          message: "Please provide a short description of your project",
        },

        {
          type: "confirm",
          name: "table of contents",
          message: "Do you want to include a Table of Contents for this project?",
        },

        {
          type: "input",
          name: "installation",
          message: "What are the steps required to install your software?",
        },

        {
          type: "input",
          name: "usage",
          message: "What does the user need to know about using the repo?",
        },

        {
          type: "input",
          name: "credits",
          message: "Please provide references and credits for this project?",
        },

        {
          type: "list",
          name: "license",
          message: "Please select a license for your project",
          choices: ["MIT", "APACHE(2.0)", "GPL(3.0)", "BSD(3)", "MPL(2.0)", "None"],
        },
       
        {
          type: "input",
          name: "contributing",
          message: "What does the user need to know about contributing to the repo?",
      
        },

        {
          type: "input",
          name: "test",
          message: "What type of software test(s) would you perform to test this application?",
          
        },
       
        {
            type: "input",
            name: "questions",
            message: "Please provide your GitHub username",
         
          },

          {
            type: "input",
            name: "github",
            message: "What is your GitHub hyperlink?",
          
          },

        {
          type: "input",
          name: "email",
          message: "What is your email address where users can reach out to you for more information?",
        
        },
        
      ]);
    }
// Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
      fs.writeFile("./generatedREADME.md", data, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: "File created!",
        });
      });
    });
  };



// TODO: Create a function to initialize application
function init() {
    questions()
    // obtain answers
    .then((answers) => generateMarkdown(answers))
    .then((res) => {
      writeToFile(res);
      console.log("Success! Great job! Check out your generatedREADME.md");
    });
}

// if line 

// Function call to initialize app
init();
