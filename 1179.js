// In this problem you need to read 15 numbers and must put them into two different arrays: par if the number is even or impar if this number is odd. But  the size of each of the two arrrays is only 5 positions. So every time you fill one of two arrays, you must print the entire array to be able to use it again for the next numbers that are read. At the end, all remaining numbers of each one of these two arrays must be printed beggining with the odd array. Each array can be filled how many times are necessary.

const array = [1, 3, 4, -4, 2, 3, 8, 2, 5, -7, 54, 76, 789, 23, 98];
const evenNumbers = [];
const oddNumbers = [];

for (let i = 0; i < array.length; i++) {
  const number = array[i];

  if (number % 2 === 0) {
    evenNumbers.push(number);
  } else {
    oddNumbers.push(number);
  }

  if (evenNumbers.length === 5) {
    printNumbers("par", evenNumbers);
    evenNumbers.length = 0;
  }

  if (oddNumbers.length === 5) {
    printNumbers("impar", oddNumbers);
    oddNumbers.length = 0;
  }
}

printNumbers("impar", oddNumbers);
printNumbers("par", evenNumbers);

function printNumbers(type, numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(`${type}[${i}] = ${numbers[i]}`);
  }
}
