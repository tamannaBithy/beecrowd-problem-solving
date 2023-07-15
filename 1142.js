// Write a program that reads an integer N. This N is the number of output lines printed by this program.

const n = 7;
let count = 1;

for (let i = 0; i < n; i++) {
  let output = "";

  for (let j = 0; j < 3; j++) {
    output += count + " ";
    count++;
  }

  output += "pum";
  count++;
  console.log(output);
}
