// Write a program to read the coordinates (X, Y) of an indeterminate number of points in Cartesian system. For each point write the quadrant to which it belongs. The program finish when at least one of two coordinates is NULL (in this situation without writing any message).

// Input
// The input contains several tests cases. Each test case contains two integer numbers.

const x = 3;
const y = -6;

if (x === 0 || y === 0) {
  console.log("null");
  // break
} else if (x > 0 && y > 0) {
  console.log("primeiro");
} else if (x < 0 && y > 0) {
  console.log("segundo");
} else if (x < 0 && y < 0) {
  console.log("terceiro");
} else if (x > 0 && y < 0) {
  console.log("quarto");
}

// as same prob 1041