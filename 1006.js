// Read three values (variables A, B and C), which are the three student's grades. Then, calculate the average, considering that grade A has weight 2, grade B has weight 3 and the grade C has weight 5. Consider that each grade can go from 0 to 10.0, always with one decimal place.

// Input
// The input file contains 3 values of floating points (double) with one digit after the decimal point.

// Output
// Print the message "MEDIA"(average in Portuguese) and the student's average according to the following example


const A = 5.00
const B = 7.1
const C = 4.55

const weightA = 2;
const weightB = 3;
const weightC = 5;

const modifiedA = parseFloat(A.toFixed(1))
const modifiedB = parseFloat(B.toFixed(1))
const modifiedC = parseFloat(C.toFixed(1))

const average = (modifiedA * weightA + modifiedB * weightB + modifiedC * weightC) / (weightA + weightB + weightC);
const MEDIA = parseFloat(average.toFixed(1))

console.log(MEDIA);