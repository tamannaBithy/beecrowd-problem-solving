// Calculate a car's average consumption being provided the total distance traveled (in Km) and the spent fuel total (in liters).

// Input
// The input file contains two values: one integer value X representing the total distance (in Km) and the second one is a floating point number Y  representing the spent fuel total, with a digit after the decimal point.


const X = 2254;
const Y = 124.4;

const consumption = X / Y;

console.log(consumption.toFixed(3));