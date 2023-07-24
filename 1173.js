// Read a number and make a program which puts this number in the first position of an array N[10]. In each subsequent position, put the double of the previous position. For example, if the input number is 1, the array numbers ​​must be 1,2,4,8, and so on.

// Input
// The input contains an integer number V (V < 50).

let v = 1;

let arr = [v];

for (let i = 1; i < 10; i++) {
  v *= 2;
  arr.push(v);
  // console.log(arr[i - 1] * 2);
  // arr.push(arr[i - 1] * 2);
}

console.log(arr);
