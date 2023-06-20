// Input
// The input file contains two integer numbers X and Y. X is the product code and Y is the quantity of this item according to the above table.

// Output
// The output must be a message "Total: R$ " followed by the total value to be paid, with 2 digits after the decimal point.

const productCode = 3;
const quantity = 2;

if (productCode === 1) {
  console.log(quantity * 4);
} else if (productCode === 2) {
  console.log(quantity * 4.5);
} else if (productCode === 3) {
  console.log(quantity * 5);
} else if (productCode === 4) {
  console.log(quantity * 2);
} else if (productCode === 5) {
  console.log(quantity * 1.5);
}


////  2nd way ////


const priceList = [4.00, 4.50, 5.00, 2.00, 1.50];

// Calculate the total price
const totalPrice = priceList[productCode - 1] * quantity

console.log(totalPrice);