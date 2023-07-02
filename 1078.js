// Read an integer N (2 < N < 1000). Print the multiplication table of N.
// 1 x N = N      2 x N = 2N        ...       10 x N = 10N

// Input
// The input is an integer N (1 < N < 1000).

const n = 140;

for (let i = 1; i <= 10; i++) {
  const multiplier = i * n;
  console.log(multiplier);
}
