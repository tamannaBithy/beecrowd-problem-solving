// Write a program that reads 6 numbers. These numbers will only be positive or negative (disregard null values). Print the total number of positive numbers.

// Input
// Six numbers, positive and/or negative.


const numbers = [7, -5, 6, -3.4, 4.6, 12]

let positives = [];

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > 0) {
        positives.push(numbers[i]);
    }
}

console.log(positives.length);