// In this problem, the task is to read a code of a product 1, the number of units of product 1, the price for one unit of product 1, the code of a product 2, the number of units of product 2 and the price for one unit of product 2. After this, calculate and show the amount to be paid.

// Input
// The input file contains two lines of data. In each line there will be 3 values: two integers and a floating value with 2 digits after the decimal point.

// Output
// The output file must be a message like the following example where "Valor a pagar" means Value to Pay. Remember the space after ":" and after "R$" symbol. The value must be presented with 2 digits after the point.

const code1 = parseInt(12);
const units1 = parseInt(1);
const price1 = parseFloat(5.3);

const code2 = parseInt(16);
const units2 = parseInt(2);
const price2 = parseFloat(5.1);

const totalBill = units1 * price1 + units2 * price2;

console.log(parseFloat(totalBill.toFixed(2)));
