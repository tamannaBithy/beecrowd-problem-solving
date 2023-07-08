// Write a program that read two numbers X and Y and print the result of dividing the X by Y. If it's not possible, print the message "divisao impossivel".

// Input
// The input contains an integer number N. This N is the quantity of pairs of integer numbers X and Y read (dividend and divisor).

const x = 3;
const y = -2;

if (y === 0) {
  console.log("divisao impossivel");
} else {
  const divide = x / y;
  console.log(divide);
}
