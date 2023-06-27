// Read two integer values X and Y. Print the sum of all odd values between them.

// Input
// The input file contain two integer values.

const x = 6;
const y = -5;

const min = Math.min(x, y);
const max = Math.max(x, y);

let sum = 0;

for (let i = min + 1; i < max; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}

console.log(sum);