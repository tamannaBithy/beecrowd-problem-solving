// Make a program that reads three floating point values: A, B and C. Then, calculate and show:
// a) the area of the rectangled triangle that has base A and height C.
// b) the area of the radius's circle C. (pi = 3.14159)
// c) the area of the trapezium which has A and B by base, and C by height.
// d) the area of ​​the square that has side B.
// e) the area of the rectangle that has sides A and B.

// Input
// The input file contains three double values with one digit after the decimal point.

const a = parseFloat(3.0);
const b = parseFloat(4.0);
const c = parseFloat(5.2);

const triangleArea = (a * c) / 2;

const pi = 3.14159;
const circleArea = pi * Math.pow(c, 2);

const trapeziumArea = ((a + b) * c) / 2;

const squareArea = b * b;

const rectangleArea = a * b;

console.log(triangleArea.toFixed(3), circleArea.toFixed(3), trapeziumArea, squareArea, rectangleArea);
