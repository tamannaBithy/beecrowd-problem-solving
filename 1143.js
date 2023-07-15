// Write a program that reads an integer N (1 < N < 1000). This N is the number of output lines printed by this program.

const n = 5;
for (var i = 1; i <= n; i++) {
  var square = i * i;
  var cube = square * i;

  console.log(i + " " + square + " " + cube);
}
