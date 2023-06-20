// Read three point floating values (A, B and C) and verify if is possible to make a triangle with them. If it is possible, calculate the perimeter of the triangle and print the message:

// Perimetro = XX.X

// If it is not possible, calculate the area of the trapezium which basis A and B and C as height, and print the message:

// Area = XX.X

const a = 6.0;
const b = 4.0;
const c = 2.0;

if (a + b > c && b + c > a && a + c > b) {
  const perimeter = a + b + c;
  console.log(perimeter);
} else {
  const area = ((a + b) / 2) * c;
  console.log(area);
}
