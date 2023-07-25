// Write a program that reads a number T and fill a vector N[1000] with the numbers from 0 to T-1 repeated times, like as the example below.

// Input
// The input contains an integer number T (2 ≤ T ≤ 50).

const t = 3;

for (let i = 0; i < t * t; i++) {
  const j = i % t;

  console.log(i);
  console.log(i % t);

  console.log(`N${i} = ${j}`);
}
