// Read an array X[10]. After, replace every null or negative number of X ​by 1. Print all numbers stored in the array X.

// Input
// The input contains 10 integer numbers. These numbers ​​can be positive or negative.

// Output
// For each position of the array, print "X [i] = x", where i is the position of the array and x is the number stored in that position.

let arr = [0, -5, 63, 0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= 0) {
    arr[i] = 1;
  }
}

console.log(arr);