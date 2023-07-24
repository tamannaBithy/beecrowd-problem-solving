// Write a program that reads an array N [20]. After, change the first element by the last, the second element by the last but one, etc.., Up to change the 10th to the 11th. print the modified array.

// Input
// The input contains 20 integer numbers, positive or negative.

const arr = [0, -5, 63, 230];
const newArr = arr.reverse();

for (let i = 0; i < arr.length; i++) {
  arr[i] = newArr[i];

  console.log(arr[i]);
}

///// 2nd way /////

const N = [5, -9, 0, 456];

for (let i = 0; i < N.length / 2; i++) {
  const temp = N[i];
  // console.log(temp);
  N[i] = N[N.length - 1 - i];
  N[N.length - 1 - i] = temp;
}

console.log(N);
