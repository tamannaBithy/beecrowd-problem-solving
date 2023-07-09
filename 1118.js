// Write an program to read two scores of a student. Calculate and print the semester average. The program must accept only valid scores (a score must fit in the range [0.10]). Each score must be validated separately.

// The program must print a message "novo calculo (1-sim 2-nao)" that means "new calculate (1-yes 2-no)". After, the input will be (1 or 2). 1 means a new calculation, 2 means that the execution must be finished.

// Input
// The input file contains several positive or negative floating-point (double) values​. After the input of 2 valid scores, an integer number X will be read. Your program must stop when X = 2.

function solveProblem() {
  var totalScores = 0;
  var totalGrades = 0;

  const arr = [-3.5, 3.5, 11.0, 10.0];

  while (totalGrades < 3) {
    for (let i = 0; i < arr.length; i++) {
      const score = arr[i];

      if (score >= 0 && score <= 10) {
        totalScores += score;
        totalGrades++;
      } else {
        console.log(score, "nota invalida");
      }
    }
  }

  var average = totalScores / 2;
  console.log("media = " + average.toFixed(2));

  while (true) {
    console.log("novo calculo (1-sim 2-nao)");
    var option = 2;

    if (option === 1 || option === 2) {
      if (option === 2) {
        return;
      } else {
        break;
      }
    }
  }
}

solveProblem();
