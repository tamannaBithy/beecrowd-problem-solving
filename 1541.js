function calculateLandSize(A, B, C) {
  const houseArea = A * B;
  const maxAllowedArea = (houseArea * 100) / C;
  return Math.trunc(Math.sqrt(maxAllowedArea));
}

const A = 1;
const B = 10;
const C = 100;

while (A !== 0 && B !== 0 && C !== 0) {
  const landSize = calculateLandSize(A, B, C);
  console.log(landSize);
}
