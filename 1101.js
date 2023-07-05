// Read an undetermined number of pairs values M and N (stop when any of these values is less or equal to zero). For each pair, print the sequence from the smallest to the biggest (including both) and the sum of consecutive integers between them (including both).

// Input
// The input file contains pairs of integer values M and N. The last line of the file contains a number zero or negative, or both.

const m = 5;
const n = 2;

const min = Math.min(m, n);
const max = Math.max(m, n);

let sum = 0;

if (min <= 0 || max <= 0) {
  console.log("invalid input");
} else {
  for (let i = min; i <= max; i++) {
    sum += i;
    console.log(i);
  }
}

console.log(sum);