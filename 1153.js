// Read a value N. Calculate and write its corresponding factorial. Factorial of N = N * (N-1) * (N-2) * (N-3) * ... * 1.

// Input
// The input contains an integer value N (0 < N < 13).

const n = 4;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}

console.log(factorial);