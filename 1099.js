// Read an integer N that is the number of test cases. Each test case is a line containing two integer numbers X and Y. Print the sum of all odd values between them, not including X and Y.

// Input
// The first line of input is an integer N that is the number of test cases that follow. Each test case is a line containing two integer X and Y.

const a = 3;
const b = 8;

const max = Math.max(a, b);
const min = Math.min(a, b);

let sum = 0;

for (let i = min + 1; i < max; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}

console.log(sum);
