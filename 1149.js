// Write an algorithm to read a value A and a value N. Print the sum of N numbers from A (inclusive). While N is negative or ZERO, a new N (only N) must be read. All input values are in the same line.

function solveProblem() {
  let a = 3;
  let n = 2;

  let sum = 0;

  for (let i = 0; i < n; i++) {
    console.log(i);
    sum += a + i;
  }

  console.log(sum);
}

solveProblem();
