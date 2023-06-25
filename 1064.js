// Read 6 values that can be floating point numbers. After, print how many of them were positive. In the next line, print the average of all positive values typed, with one digit after the decimal point.

// Input
// The input consist in 6 numbers that can be integer or floating point values. At least one number will be positive.

const numbers = [7, -5, 6, -3.4, 4.6, 12];

let positives = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positives.push(numbers[i]);
  }
}

const total = positives.reduce((a, b) => a + b, 0);

const average = total / positives.length;

console.log(positives);
console.log(average);
