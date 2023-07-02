// Read an integer value N. After, read these N values and print a message for each value saying if this value is odd, even, positive or negative. In case of zero (0), although the correct description would be "EVEN NULL", because by definition zero is even, your program must print only "NULL", without quotes.

// Input
// The first line of input is an integer N (N < 10000), that indicates the total number of test cases. Each case is a integer number X (-107 < X <107)

const n = 5;

const arr = [4, -5, 0, 3, -4];

for (let i = 0; i < arr.length; i++) {
  const num = arr[i];

  let isPositive = num > 0;
  let isEven = num % 2 === 0;

  if (num === 0) {
    console.log(num, "null");
  } else if (isEven && !isPositive) {
    console.log(num, "even negative");
  } else if (!isEven && !isPositive) {
    console.log(num, "odd negative");
  } else if (!isEven && isPositive) {
    console.log(num, "odd positive");
  } else {
    console.log(num, "even positive");
  }
}
