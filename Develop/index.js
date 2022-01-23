// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "what is the title of this project?",
  },
  {
    type: "input",
    name: "Description",
    message: "Please give a detail description of the application.",
  },
  {
    type: "input",
    name: "Table of Contents ",
    message: "Table of Contents ",
  },
  {
    type: "input",
    name: "Installation",
    message: "What would the user need to install to run the application",
  },
  {
    type: "input",
    name: "Usage",
    message: "How is this application used?",
  },
  {
    type: "list",
    name: "license",
    message: " Which license would you like to use?",
    choices: ["MIT", "Apache", "Boost"],
  },
  {
    type: "input",
    name: "Contributing",
    message: "Who contributed for this application?",
  },
  {
    type: "input",
    name: "Tests",
    message: "What is needed to test this application?",
  },
  {
    type: "input",
    name: "Questions",
    message: "Questions?",
  },

  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // console.log(data);
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("yay you made a README.md file!");
  });
  //return fs.writeFileSync(path.join(process.cwd(), "/utils"));
}

//console.log(path.join(process.cwd(), "/utils/index.js"))
// TODO: Create a function to initialize app
// function init() {
//   inquirer.prompt(questions).then((answers) => {
//     console.log(answers);
//     writeToFile();
//   });
// }

const init = async () => {
  let answers = await inquirer.prompt(questions);
  console.log(answers);
  writeToFile("readme.md", generateMarkdown(answers));
};

// Function call to initialize app
init();
