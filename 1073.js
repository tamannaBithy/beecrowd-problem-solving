// Read an integer N. Print the square of each one of the even values from 1 to N including N if it is the case.

// Input
// The input contains an integer N (5 < N < 2000).


const n = 6;

for (let i = 1; i <= n; i++){
    if (i % 2 === 0) {
        console.log(i * i);
    }
}