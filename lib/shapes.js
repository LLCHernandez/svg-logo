class Shape {
    constructor(logoName, colorName, shape, shapeColor) {
        this.logoName = logoName;
        this.colorName = colorName;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    render() {
    }

    //function to generate the text str portion of the SVG string
    name(colorName, logoName) {
        const nameStr = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${colorName}">${logoName}</text>`;
        return nameStr;
    }
}

//triangle class
class Triangle extends Shape {
    constructor(logoName, colorName, shape, shapeColor) {
        super(logoName, colorName, shape, shapeColor);
    }

    //overriding the shape render() function for creating a Triangle
    render() {
        console.log('triangle called')
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150 10, 50 190, 250 190" fill="${this.shapeColor}" />${this.name(this.colorName, this.logoName)}</svg>`;
    }

}

//circle class
class Circle extends Shape {
    constructor(logoName, colorName, shape, shapeColor) {
        super(logoName, colorName, shape, shapeColor);
    }

    //overriding the shape render() function for creating a Circle
    render() {
        console.log('circle called')
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><${this.shape} cx="150" cy="100" r="80" fill="${this.shapeColor}" />${this.name(this.colorName, this.logoName)}</svg>`;
    }

}

//square class
class Square extends Shape {
    constructor(logoName, colorName, shape, shapeColor) {
        super(logoName, colorName, shape, shapeColor);
    }

    //overriding the shape render() function for creating a Square
    render() {
        console.log('square called');
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" x="50" y="0" fill="${this.shapeColor}" />${this.name(this.colorName, this.logoName)}</svg>`;
    }

}

//export shapes
module.exports = { Triangle, Circle, Square };