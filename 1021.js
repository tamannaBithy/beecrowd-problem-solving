// Read a value of floating point with two decimal places. This represents a monetary value. After this, calculate the smallest possible number of notes and coins on which the value can be decomposed. The considered notes are of 100, 50, 20, 10, 5, 2. The possible coins are of 1, 0.50, 0.25, 0.10, 0.05 and 0.01. Print the message “NOTAS:” followed by the list of notes and the message “MOEDAS:” followed by the list of coins.

// Input
// The input file contains a value of floating point N (0 ≤ N ≤ 1000000.00).



let value = 576.73;

const notesArr = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05, 0.01];
// const coinsArr = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

for (const note of notesArr) {
    const noteNumber = Math.floor(value / note)
    value -= noteNumber * note;
    value = parseFloat(value.toFixed(2))
    console.log(noteNumber);
}