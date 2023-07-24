// Write a program that reads a number and print the Fibonacci number corresponding to this read number. Remember that the first elements of the Fibonacci series are 0 and 1 and each next term is the sum of the two preceding it. All the Fibonacci numbers calculated in this program must fit in a unsigned 64 bits number.

// Input
// The first line of the input contains a single integer T, indicating the number of test cases. Each test case contains a single integer N (0 ≤ N ≤ 60), corresponding to the N-th term of the Fibonacci series.



const n = 4;

let fib = [0, 1];

for (let i = 2; i <= n; i++) {
   fib[i] = fib[i-1] + fib[i -2]
}

console.log(fib);





var f0 = 0; 
console.log("f0", f0);

var f1 = 1; 
console.log("f1",f1);

for (var i = 2; i <= 4; i++) {
    var fi = f1 + f0;
    console.log("fiii", fi);

    f0 = f1;
    f1 = fi;
}
