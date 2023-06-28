// inquirer import
const inquirer = require('inquirer');
// fs import
const fs = require('fs');
const {Square, Triangle, Circle} = require('./lib/shapes');

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
        let svgData;
        switch (response.shape) {
            case "Triangle":
                const triangle = new Triangle(response.shapeColor, response.text, response.textColor);
                svgData = triangle.render();
                break;
            case "Circle":
                const circle = new Circle(response.shapeColor, response.text, response.textColor);
                svgData = circle.render();
                break;
            case "Square":
                const square = new Square(response.shapeColor, response.text, response.textColor);
                svgData = square.render();
                break; 
            default: 
            console.log("Invalid Input")
            break;    
        }

        fs.writeFile('logo.svg', svgData, (err) =>
            err ? console.error(err) : console.log('Success! Your SVG has been generated.')
        );
    });
};

prompts();