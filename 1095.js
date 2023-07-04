// Make a program that prints the sequence like the following example.

// Input
// This problem doesn't have input.

// Output Sample
// I=1 J=60
// I=4 J=55
// I=7 J=50
// ...
// I=? J=0

let j = 60;
let i = 1;

for (; j >= 0; i += 3, j -= 5) {
  console.log(j);
  console.log(i);
}
