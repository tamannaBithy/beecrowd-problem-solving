// In an imaginary country called Lisarb, all the people are very happy to pay their taxes because they know that doesn’t exist corrupt politicians and the taxes are used to benefit the population, without any misappropriation. The currency of this country is Rombus, whose symbol is R$.

// Read a value with 2 digits after the decimal point, equivalent to the salary of a Lisarb inhabitant. Then print the due value that this person must pay of taxes, according to the table below.

const salary = 4520;

let taxPercent;
let taxAmount;

if (salary <= 2000) {
  console.log("Isento");
} else {
  if (salary <= 3000) {
    taxPercent = 0.08;
    taxAmount = (salary - 2000) * taxPercent;
  } else if (salary <= 4500) {
    taxPercent = 0.18;
    taxAmount = 1000 * 0.08 + (salary - 3000) * taxPercent;
  } else {
    taxPercent = 0.28;
    taxAmount = 1000 * 0.08 + 1500 * 0.18 + (salary - 4500) * taxPercent;
  }
}

console.log(taxAmount);
