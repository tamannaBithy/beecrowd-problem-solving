// Read an integer value X (1 <= X <= 1000).  Then print the odd numbers from 1 to X, each one in a line, including X if is the case.

// Input
// The input will be an integer value.

const value = 8;

for (let i = 1; i <= value; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}