// Read an integer value X and print the 6 consecutive odd numbers from X, a value per line, including X if it is the case.

// Input
// The input will be a positive integer value.



const value = 8;

let count = 0;

for (let i = value; count < 6; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        count++;
    }
}