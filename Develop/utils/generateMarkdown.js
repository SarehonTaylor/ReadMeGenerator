// function to generate markdown for README
function generateMarkdown(response) {
  return `
# ${response.Title}
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)
## Description
${response.Description}
## Installation
${response.Install}
## Usage
${response.Usage}
## License
${response.License}
## Contributors
${response.Contributors}
## Test
${response.Test}
## Questions
If you would like to contact me I can be reached at:
Github:[${response.Git}]
Email:[${response.Email}]
`;}

module.exports = generateMarkdown