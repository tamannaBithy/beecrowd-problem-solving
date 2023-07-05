// Read an undetermined number of pairs of integer values. Write a message for each pair indicating if this two numbers are in ascending or descending order.

// Input
// The input file contains several test cases. Each test case contains two integer numbers X and Y. The input will finished when X = Y.


const a = 5;
const b = 4;

if (a === b) {
    console.log("equal");
} else if (a < b) {
    console.log("ascending");
} else {
    console.log("descending");
}