// Read two floating points' values of double precision A and B, corresponding to two student's grades. After this, calculate the student's average, considering that grade A has weight 3.5 and B has weight 7.5. Each grade can be from zero to ten, always with one digit after the decimal point

// Input
// The input file contains 2 floating points' values with one digit after the decimal point.

// Output
// Print the message "MEDIA"(average in Portuguese) and the student's average according to the following example, with 5 digits after the decimal point and with a blank space before and after the equal signal.


const A = 5.00
const B = 7.1

const weightA = 3.5;
const weightB = 7.5;

const modifiedA = parseFloat(A.toFixed(1))
const modifiedB = parseFloat(B.toFixed(1))

const average = (modifiedA * weightA + modifiedB * weightB) / (weightA + weightB);
const MEDIA = parseFloat(average.toFixed(5))

console.log(MEDIA);