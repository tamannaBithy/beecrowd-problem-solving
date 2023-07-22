// A Prime Number is a number that is divisible only by 1 (one) and by itself. For example the number 7 is Prime, because it can be divided only by 1 and by 7.

const x = 51;

let isPrime = true;

for (let j = 2; j <= Math.sqrt(x); j++) {
  if (x % j === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`${x} eh primo`);
} else {
  console.log(`${x} nao eh primo`);
}
