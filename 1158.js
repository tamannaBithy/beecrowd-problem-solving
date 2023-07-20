// Read an integer N that is the number of test cases that follows. Each test case contains two integers X and Y. Print one output line for each test case that is the sum of Y odd numbers from X including it if is the case. For example:
// for the input 4 5, the output must be 45, that is: 5 + 7 + 9 + 11 + 13
// for the input 7 4, the output must be 40, that is: 7 + 9 + 11 + 13

// Input
// The first line of the input is an integer N that is the number of test cases that follow. Each test case is a line containing two integer X and Y.

// Output
// Print the sum of all consecutive odd numbers from X.



function calculateSum(x, y) {
  let sum = 0;
  for (let i = 0; i < y; i++) {
    if (x % 2 === 0) {
      sum += x + 2 * i + 1;
    } else {
      sum += x + 2 * i;
    }
  }
  return sum;
}

// console.log(calculateSum(4, 5));
console.log(calculateSum(7, 4));
// console.log(calculateSum(4, 3));
// console.log(calculateSum(11, 2));