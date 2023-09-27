const a = 4;
const b = 10;
const c = 20;

if (a > b && b <= c) {
  console.log("happy");
}
if (a < b && b >= c) {
  console.log("sad");
}
if (a < b && b < c && (c - b) < (b - a)) {
  console.log("sad");
}
if (a < b && b < c && (c - b) > (b - a)) {
  console.log("happy");
}

if (a > b && b > c && (b - c) < (a - b)) {
  console.log("happy");
}
if (a > b && b > c && (b - c) > (a - b)) {
  console.log("sad");
}
if (a === b && b < c) {
  console.log("happy");
}
if (a === b && b > c) {
  console.log("sad");
}
