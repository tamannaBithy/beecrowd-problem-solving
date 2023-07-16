// Your program must read an integer X indefinited times (the program must stop when X is equal to zero). For each X print the sequence from 1 to X, with one space between each one of these numbers.

// PS: Be carefull. Don't leave any space after the last number of each line, otherwise you'll get Presentation Error.

// Input
// The input file contains many integer numbers. The last one is zero.

const arr = [5, 10, 3, 0];

for (let i = 0; i < arr.length; i++) {
  const value = arr[i];

  if (value === 0) {
    break;
  }

  let output = "";

  for (let j = 1; j <= value; j++) {
    output += j + " ";
  }

  console.log(output);
}
