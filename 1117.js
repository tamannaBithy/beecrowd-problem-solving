// Write a program that reads two scores of a student. Calculate and print the average of these scores. Your program must accept just valid scores [0..10]. Each score must be validated separately.

// Input
// The input file contains many floating-point numbers​​, positive or negative. The program execution will be finished after the input of two valid scores.


var totalScores = 0;
var totalGrades = 0;

const lines = [-3.5, 3.5, 11.0, 10.0];

for (let i = 0; i < lines.length; i++) {
  const score = lines[i];
  if (score >= 0 && score <= 10) {
    console.log(score);
    totalScores += score;
    totalGrades++;
  } else {
    console.log(score, "nota invalida");
  }
}

var average = totalScores / 2;
console.log("media = " + average.toFixed(2));
