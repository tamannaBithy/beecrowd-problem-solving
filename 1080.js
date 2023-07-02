// Read 100 integer numbers. Print the highest read value and the input position.

// Input
// The input file contains 100 distinct positive integer numbers.

const arr = [2, 113, 45, 34565, 6, 8];

let max = 0;
let position = 0;

for (let i = 0; i < arr.length; i++) {
  const num = arr[i];

  if (num > max) {
    max = num;
    position = i + 1;
  }
}

console.log(max);
console.log(position);


//// 2nd way ///////



function highest(numbers) {
    const max = Math.max(...numbers);
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === max) {
        return `${max}, ${i + 1}`;
      }
    }
  }
  
  const numbers = [2, 113, 45, 34565, 6, 8];
  const result = highest(numbers);
  
  console.log(result);
