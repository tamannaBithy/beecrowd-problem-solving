// Make a program that calculates and shows the volume of a sphere being provided the value of its radius (R) . The formula to calculate the volume is: (4/3) * pi * R3. Consider (assign) for pi the value 3.14159.

// Tip: Use (4/3.0) or (4.0/3) in your formula, because some languages (including C++) assume that the division's result between two integers is another integer. :)

// Input
// The input contains a value of floating point (double precision).


const radius = 3;

const volume = (4.0 / 3) * Math.PI * (radius ** 3)

console.log(parseFloat(volume.toFixed(3)));