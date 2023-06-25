// Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.

// Input
// The input will be 5 integer values.

const values = [7, -5, 6, -4, 12];

let even = []

for (let i = 0; i < values.length; i++){
    if (values[i] % 2 === 0) {
        even.push(values[i]);
    }
}

console.log(even.length);