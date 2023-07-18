// Write an algorithm to calculate and write the value of S, S being given by:
// S = 1 + 3/2 + 5/4 + 7/8 + ... + 39/?

let sum = 0;
let first = 1;
let second = 1;

for (let i = 1; i <= 20; i++) {
  sum += first / second;
  first += 2;
  second *= 2;
}

console.log(sum.toFixed(2));

/// 2nd way //////

let s = 1;
let d = 2;

for (let i = 3; i <= 39; i = i + 2) {
  s = s + i / d;
  d = d * 2;
}

console.log(s.toFixed(2));
