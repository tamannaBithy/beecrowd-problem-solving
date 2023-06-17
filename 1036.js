// Read 3 floating-point numbers. After, print the roots of bhaskara’s formula. If it's impossible to calculate the roots because a division by zero or a square root of a negative number, presents the message “Impossivel calcular”.

// Input
// Read 3 floating-point numbers (double) A, B and C.


const a = 10.0;
const b = 20.1;
const c = 5.1;

const firstStep = Math.pow(b , 2) - 4 * a * c;



if (a === 0 || firstStep < 0) {
    console.log("Impossivel calcular");
}
else {
    const R1 = (-b + Math.sqrt(firstStep)) / (2 * a);
    const R2 = (-b - Math.sqrt(firstStep)) / (2 * a);
    console.log(R1.toFixed(5), R2.toFixed(5));
}

