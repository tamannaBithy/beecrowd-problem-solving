// Write a program that reads two integer numbers X and Y and calculate the sum of all number not divisible by 13 between them, including both.


let sum = 0;

for (let i = 100; i <= 200; i++) {
    if (i % 13 !== 0) {
        sum += i
    }
}

console.log(sum);