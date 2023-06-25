// Make a program that reads five integer values. Count how many   of these values are even, odd, positive and negative. Print these information like following example

const values = [-5, 0, -3, -4, 12];

let even = 0;
let odd = 0;
let positive = 0;
let negative = 0;

for (let i = 0; i < values.length; i++) {
  if (values[i] > 0) {
    positive++;
  } else if (values[i] < 0) {
    negative++;
  }

  if (values[i] % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}

console.log(even, odd, positive, negative);
