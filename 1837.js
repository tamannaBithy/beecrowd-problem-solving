// we shall ask you to write a program which calculates the quotient and the remainder of the division of two integers, can that be? Recall that the quotient and the remainder of the division of an integer a by a non-zero integer b are respectively the only integers q and r such that 0 ≤ r < |b| and:

// a = b × q + r

// In case you don't know it, the theorem that guarantees the existence and the uniqueness of the integers q and r is known as ‘Euclidean Division Theorem’ or ‘Division Algorithm’.

// Input
// The input consists of two integers a and b (-1,000 ≤ a, b < 1,000).

// Output
// Print the quotient q followed by the remainder r of the division of a by b.

const a = -7;
const b = 3;

let quotient = Math.trunc(a / b);
let remainder = a % b;

// Adjust the quotient and remainder if the remainder is negative
if (remainder < 0) {
  remainder += Math.abs(b);
  quotient = Math.trunc((a - remainder) / b);
}

console.log(quotient, remainder);
