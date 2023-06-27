// Read an integer N. This N will be the number of integer numbers X that will be read.

// Print how many these numbers X are in the interval [10,20] and how many values are out of this interval.

// Input
// The first line of input is an integer N (N < 10000), that indicates the total number of test cases.
// Each case is an integer number X (-107 < X < 107).

const totalNumber = 4;
const arr = [14, 123, 10, -25];

let inside = 0;
let outside = 0;

for (let i = 0; i < arr.length; i++) {
  const x = arr[i];

  if (x >= 10 && x <= 20) {
    inside++;
  } else {
    outside++;
  }
}

console.log(inside, outside);
