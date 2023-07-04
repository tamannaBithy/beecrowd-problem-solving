// Make a program that prints the sequence like the following exemple.

// Input
// This problem doesn't have input.

// Output Sample
// I=1 J=7
// I=1 J=6
// I=1 J=5
// I=3 J=7
// I=3 J=6
// I=3 J=5
// ...
// I=9 J=7
// I=9 J=6
// I=9 J=5


for (let i = 1; i <= 9; i += 2) {
    for (let j = 7; j >= 5; j--) {
        console.log('I=' + i + ' J=' + j);
    }
}

