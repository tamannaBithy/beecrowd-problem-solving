// Write a program that reads two integer numbers X and Y. Print all numbers between X and Y which dividing it by 5 the rest is equal to 2 or equal to 3.

const x = 10;
const y = 18;

const min = Math.min(x, y);
const max = Math.max(x, y);

for (i = min + 1; i < max; i++) {
  if (i % 5 === 2 || i % 5 === 3) {
    console.log(i);
  }
}

/// 2nd way to find out the minimum value & maximum value

function solveProblem() {
  var x = 18;
  var y = 10;

  if (x > y) {
    var temp = x;
    x = y;
    y = temp;
  }

  for (var i = x + 1; i < y; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
      console.log(i);
    }
  }
}

solveProblem();
