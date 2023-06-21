// Read 3 double numbers (A, B and C) representing the sides of a triangle and arrange them in decreasing order, so that the side A is the biggest of the three sides. Next, determine the type of triangle that they can make, based on the following cases always writing an appropriate message:
// if A ≥ B + C, write the message: NAO FORMA TRIANGULO
// if A2 = B2 + C2, write the message: TRIANGULO RETANGULO
// if A2 > B2 + C2, write the message: TRIANGULO OBTUSANGULO
// if A2 < B2 + C2, write the message: TRIANGULO ACUTANGULO
// if the three sides are the same size, write the message: TRIANGULO EQUILATERO
// if only two sides are the same and the third one is different, write the message: TRIANGULO ISOSCELES
// Input
// The input contains three double numbers, A (0 < A) , B (0 < B) and C (0 < C).

const sides = [7.0, 5.0, 7.0];

const sideSorting = sides.sort((a, b) => b - a);

const a = sideSorting[0];
const b = sideSorting[1];
const c = sideSorting[2];

if (a >= b + c) {
  console.log("NAO FORMA TRIANGULO");
} else {
  if (Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2)) {
    console.log("TRIANGULO RETANGULO");
  }
  if (Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2)) {
    console.log("TRIANGULO OBTUSANGULO");
  }
  if (Math.pow(a, 2) < Math.pow(b, 2) + Math.pow(c, 2)) {
    console.log("TRIANGULO ACUTANGULO");
  }
  if ((a === b) === c) {
    console.log("TRIANGULO EQUILATERO");
  }
  if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
    console.log("TRIANGULO ISOSCELES");
  }
}
