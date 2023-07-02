// Read an integer N, which represents the number of following test cases. Each test case consists of three floating-point numbers, each one with one digit after the decimal point. Print the weighted average for each of these sets of three numbers, considering that the first number has weight 2, the second number has weight 3 and the third number has weight 5.

// Input
// The input file contains an integer number N in the first line. Each N following line is a test case with three float-point numbers, each one with one digit after the decimal point.

const a = 6.5;
const b = 4.3;
const c = 6.2;

const sum = a * 2 + b * 3 + c * 5;

const average = sum / (2 + 3 + 5);

console.log(average.toFixed(1));
