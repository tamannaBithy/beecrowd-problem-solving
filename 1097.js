// Make a program that prints the sequence like the following exemple.


// Output Sample
// I=1 J=7
// I=1 J=6
// I=1 J=5
// I=3 J=9
// I=3 J=8
// I=3 J=7
// ...
// I=9 J=15
// I=9 J=14
// I=9 J=13


var i = 1;
var j = 7;

for (; i <= 9; i += 2) {
    for (var count = 0; count < 3; count++) {
        console.log(i);
        console.log(j);
        j -= 1;
    }

    console.log(j);
    j += 5;
}