// In this problem, your task is to read an array A[100]. At the end, print all array positions that store a number less or equal to 10 and the number stored in that position.

// Input
// The input contains 100 numbers. Each number can be integer, floating-point number, positive or negative.

const array = [0, -5, 63, -8.5, 9, 0, -6.3];

for (let i = 0; i < array.length; i++) {
  if (array[i] <= 10) {
    console.log(array[i]);
  }
}
