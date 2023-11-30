// Write a program that reads an employee's number, his/her worked hours number in a month and the amount he received per hour. Print the employee's number and salary that he/she will receive at end of the month, with two decimal places.

// Input
// The input file contains 2 integer numbers and 1 value of floating point, representing the number, worked hours amount and the amount the employee receives per worked hour.

// Output
// Print the number and the employee's salary, according to the given example, with a blank space before and after the equal signal.


const number = parseInt(6);
const hour = parseInt(145);
const salary = 15.553;
const newSalary = parseFloat(salary.toFixed(2))

const totalSalary = hour * newSalary;

console.log(totalSalary);