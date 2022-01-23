// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      // code block
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache":
      // code block
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost":
      // code block
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    default:
      // code block
      console.log("Invalid case");
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var warning = "This project is licensed under: ";

  switch (license) {
    case "MIT":
      // code block
      return warning + "MIT";
      break;
    case "Apache":
      // code block
      return warning + "Apache";
      break;
    case "Boost":
      // code block
      return warning + "Boost";
      break;
    default:
      // code block
      console.log("Invalid case");
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# <u> ${data.title} </u> 
${renderLicenseBadge(data.license)}
  ## Description
${data.Description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
These have to be installed to run the application properly: ${data.Installation}
# Usage
 ${data.Usage}
## License
${renderLicenseSection(data.license)}
# Contributing
${data.Contributing}
# Tests
${data.Tests}
# Questions
If you have any questions please contact https://github.com/${data.github} directly at : ${data.email}.
`;
}

module.exports = generateMarkdown;
