// Read an integer N and compute all its divisors.

// Input
// The input file contains an integer value.

// Output
// Write all positive divisors of N, one value per line.


const n = 6;


for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        console.log(i);
    }
}