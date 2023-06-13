// Make a program that reads a seller's name, his/her fixed salary and the sale's total made by himself/herself in the month (in money). Considering that this seller receives 15% over all products sold, write the final salary (total) of this seller at the end of the month , with two decimal places.


// Input
// The input file contains a text (employee's first name), and two double precision values, that are the seller's salary and the total value sold by him/her.

// Output
// Print the seller's total salary, according to the given example.



const name = "rahim";
const salary = 500;
const totalSale = 1230.30;

const percentage = (totalSale * 15) / 100;

const totalSalary = salary + percentage;

console.log(totalSalary.toFixed(2));