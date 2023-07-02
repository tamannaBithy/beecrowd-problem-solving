// Read an integer N. Print all numbers between 1 and 10000, which divided by N will give the rest = 2.

// Input
// The input is an integer N (N < 10000)

const n = 13;

for (let i = 1; i <= 100; i++) {
  if (i % n === 2) {
    console.log(i);
  }
}