// Write an program that reads two numbers X and Y (X < Y). After this, show a sequence of 1 to y, passing to the next line to each X numbers.


function printSequence(x, y) {
  if (x < 1 || (x > 20 && x > y) || y > 100000) {
    console.log("invalid number");
    return;
  }

  const max = Math.max(x, y);

  for (let i = 1; i <= max; i++) {
    process.stdout.write(i + " ");
    if (i % 3 === 0) {
      console.log();
    }
  }
}

printSequence(3, 99);
