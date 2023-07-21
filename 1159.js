// The program must read an integer X indefinite times (stop when X=0). For each X, print the sum of five consecutive even numbers from X, including it if X is even. If the input number is 4, for example, the output must be 40, that is the result of the operation: 4+6+8+10+12. If the input number is 11, for example, the output must be 80, that is the result of 12+14+16+18+20.

// Input
// The input file contains many integer numbers. The last one is zero.

const arr = [4, 11, 0];

let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i < arr.length; i++) {
  const value = arr[i];

  if (value === 0) {
    break;
  }

  for (let j = 0; j < 5; j++) {
    if (value % 2 === 0) {
      // console.log(value + j * 2);
      sumEven += value + j * 2;
    } else {
      sumOdd += value + 1 + j * 2;
      //   console.log(value + 1 + j * 2);
    }
  }
}

console.log(sumEven);
console.log(sumOdd);



////// 2nd way ///////



const X = 11; 

// if (X === 0) {
//   break; // If X is 0, exit the loop
// }

let sum = 0;
let count = 0;

for (let i = X; count < 5; i++) {
  if (i % 2 === 0) {
    console.log(i);
    sum += i;
    count++;
  }
}

console.log(sum);
