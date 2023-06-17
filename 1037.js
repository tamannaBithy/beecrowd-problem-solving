// You must make a program that read a float-point number and print a message saying in which of following intervals the number belongs: [0,25] (25,50], (50,75], (75,100]. If the read number is less than zero or greather than 100, the program must print the message “Fora de intervalo” that means "Out of Interval".

// The symbol '(' represents greather than. For example:
// [0,25] indicates numbers between 0 and 25.0000, including both.
// (25,50] indicates numbers greather than 25 (25.00001) up to 50.0000000.

// Input
// The input file contains a floating-point number.


const value = 25.01;

if (value >= 0 && value <= 25) {
    console.log("[0, 25]");
} else if (value > 25 && value <= 50) {
    console.log("[25, 50]");
} else if (value > 50 && value <= 75) {
    console.log("[50, 75]");
} else if (value > 75 && value <= 100) {
    console.log("[75, 100]");
} else {
    console.log("Out of Interval");
}