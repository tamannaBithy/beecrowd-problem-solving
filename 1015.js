// Read the four values corresponding to the x and y axes of two points in the plane, p1 (x1, y1) and p2 (x2, y2) and calculate the distance between them, showing four decimal places after the comma, according to the formula:


// Input
// The input file contains two lines of data. The first one contains two double values: x1 y1 and the second one also contains two double values with one digit after the decimal point: x2 y2.


const x1 = 1.0;
const y1 = 7.0;
const x2 = 5.0;
const y2 = 9.0;

const distance = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)
const finalDistance = Math.sqrt(distance)

console.log(finalDistance.toFixed(4));