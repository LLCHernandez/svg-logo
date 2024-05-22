const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Square, Circle} = require('./lib/shapes.js');


//use inquirer to get input from user from cmd line
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter up to 3 characters for your logo name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter a color for the logo name(color name or HEX value):',
            name: 'nameColor',
        },
        {
            type: 'list',
            message: 'Please select a shape:',
            name: 'shape',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            message: 'Enter a color for the shape (color name or HEX value):',
            name: 'shapeColor',
        },
    ])
    .then((data) => {
        //destructuring the data values
        const {name, nameColor, shape, shapeColor} = data;
        
        //creating an empty string var, then checking the shape the user selected, creating a new object of that shape,
        //and calling the render function to return the SVG string
        let logoStr = '';
        if(shape === 'circle'){
            const logo = new Circle(name, nameColor, shape, shapeColor);
            logoStr = logo.render();
        }else if(shape === 'triangle'){
            const logo = new Triangle(name, nameColor, shape, shapeColor);
            logoStr = logo.render();
        }else{
            const logo = new Square(name, nameColor, shape, shapeColor);
            logoStr = logo.render();
        }
        
    //writing the SVG string to an .svg file
    fs.writeFile("./examples/logo.svg", logoStr, function(err){
        if(err){
            console.log(err);
        }
        console.log("Generated logo.svg");
    });
});