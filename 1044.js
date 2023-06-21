// Read two integer values (A and B). After, the program should print the message "Sao Multiplos" (are multiples) or "Nao sao Multiplos" (aren’t multiples), corresponding to the read values.

// Input
// The input has two integer numbers.


const a = 6;
const b = 25;

if (b % a === 0) {
    console.log("are multiples");
} else {
    console.log("aren’t multiples");
}