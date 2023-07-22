// In mathematics, a perfect number is an integer for which the sum of all its own positive divisors (excluding itself) is equal to the number itself. For example the number 6 is perfect, because 1+2+3 is equal to 6. Your task is to write a program that read integer numbers and print a message informing if these numbers are perfect or are not perfect.

// Input
// The input contains several test cases. The first contains the number of test cases N (1 ≤ N ≤ 100). Each one of the following N lines contains an integer X (1 ≤ X ≤ 108), that can be or not a perfect number.

const x = 28;

let sum = 0;

for (let i = 1; i < x; i++) {
  if (x % i === 0) {
    sum += i;
  }
}

if (sum === x) {
  console.log("perfect");
} else {
  console.log("imperfect");
}
