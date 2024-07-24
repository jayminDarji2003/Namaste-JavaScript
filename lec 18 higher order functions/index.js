console.log("Higher order function");

// Definition : A function takes another function as argument or returns a function from it, it is called higher order function.

// basic example
function x() {
    console.log("x")
}
function y(x) {
    x();
}
y(x);



// Problem : calculate area,circumference of all the given radius in the array
// this is how normal people write code.

const radiusArray = [2, 5, 3, 6];

const calculateArea = (radiusArray) => {
    const circleAreas = [];
    for (let i = 0; i < radiusArray.length; i++) {
        circleAreas.push(Math.PI * radiusArray[i] * radiusArray[i]);
    }
    return circleAreas;
}

console.log("------------------------ not optimize code --------------------")
const result = calculateArea(radiusArray);
console.log(result);

const calculateCircumference = (radiusArray) => {
    const circumference = [];
    for (let i = 0; i < radiusArray.length; i++) {
        circumference.push(2 * Math.PI * radiusArray[i]);
    }
    return circumference;
}

const res = calculateCircumference(radiusArray);
console.log(res);

const calculateDiameter = (radiusArray) => {
    const diameter = [];
    for (let i = 0; i < radiusArray.length; i++) {
        diameter.push(2 * radiusArray[i]);
    }
    return diameter;
}

const output = calculateDiameter(radiusArray);
console.log(output);


// this is how we should write code.
const r = [2, 5, 3, 6];

function area(radius) {
    return Math.PI * radius * radius;
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}

function diameter(radius) {
    return 2 * radius;
}

// called generic function
function calculate(fnx, radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(fnx(radius[i]));
    }
    return output;
}

console.log("------------------------ optimize code --------------------")
console.log(calculate(area, r))
console.log(calculate(circumference, r))
console.log(calculate(diameter, r))