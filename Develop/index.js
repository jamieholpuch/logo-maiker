const { writeFile } = require('fs/promises')
const inquirer = require('inquirer')
//const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const createSvg = require('./lib/createSvg')
//clearinquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)

const run = () => {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter the text for your logo',
          maxLength: 3, 
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Enter a text color',
        },
        {
          type: 'list',
          name: 'shape',
          choices: ['square', 'circle', 'triangle'],
          message: 'Select a shape',
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Enter a shape color',
        },
      ])
}

function init() {
  run()
  .then((data) => writeFile(`logo.svg`, createSvg(data)))
  .then(() => console.log("Generate logo.svg"))
  .catch((err) => console.error(err))
}

init()


// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
module.exports = init;
