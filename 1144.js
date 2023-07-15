// Write a program that reads an integer N. N * 2 lines must be printed by this program according to the example below. For numbers with more than 6 digits, all digits must be printed (no cientific notation allowed).


const n = 5;

for (let i = 1; i <= n; i++){
    const square = i * i;
    const cube = square * i;

    console.log(i, square, cube);
    console.log(i, square +1, cube+1);
}