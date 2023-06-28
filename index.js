// inquirer import
const inquirer = require('inquirer');
// fs import
const fs = require('fs');
// Questions user needs to answer in command line
function prompts() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What text would you like in your logo? (Up to 3 characters allowed)',
            name: 'text',
            validate: (input) => input.length <= 3,
        },
        {
            type: 'input',
            message: 'What color would you like the text to be? (Enter color keyword OR hex number)',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'What shape would you like your logo to be?',
            choices: [
                "Triangle",
                "Circle",
                "Square"
            ],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'What color would you like your logo to be? (Enter color keyword OR hex number)',
            name: 'shapeColor',
        },
    ])
    .then((response) => {
        createNewFile("logo.svg", response);
        // fs.writeFile('README.md', readMeData, (err) =>
        //     err ? console.error(err) : console.log('Success! Your logo has been generated.')
        //     )
    });
};

prompts();

function createNewFile(fileName, response) {
    let string = "";
    string =  '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    string += `${response.shape}`;
    string += "<g>"
}
