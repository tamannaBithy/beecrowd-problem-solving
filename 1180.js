// Write a program that reads a number N. This N is the size of a array X[N]. Next, read each of the numbers of X, find the smallest element of this array and its position within the array, printing this information.

// Input
// The first line of input contains one integer N (1 < N <1000), indicating the number of elements that should be read to an array X[N] of integer numbers. The second row contains each of the N values, separated by a space. Remember that no input will have repeated numbers.

const arr = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10];

let temp = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i + 1]) {
    temp = arr[i + 1];
  }
}

console.log(temp);
console.log(arr.indexOf(temp));

////// 2nd way /////////

const numbers = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10];

let smallest = numbers[0];
let position = 0;

for (let i = 0; i < numbers.length; i++) {
  if (smallest > numbers[i]) {
    smallest = numbers[i];
    position = i;
  }
}

console.log(smallest);
console.log(position);
