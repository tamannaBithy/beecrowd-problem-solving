// Maria has just started as graduate student in a medical school and she's needing your help to organize a laboratory experiment which she is responsible about. She wants to know, at the end of the year, how many animals were used in this laboratory and the percentage of each type of animal is used at all.

// This laboratory uses in particular three types of animals: frogs, rats and rabbits. To obtain this information, it knows exactly the number of experiments that were performed, the type and quantity of each animal is used in each experiment.

// Input
// The first line of input contains an integer N indicating the number of test cases that follows. Each test case contains an integer Amount (1 ≤ Amount ≤ 15) which represents the amount of animal used and a character Type ('C', 'R' or 'S'), indicating the type of animal:
// - C: Coelho (rabbit in portuguese)
// - R: Rato (rat  in portuguese)
// - S: Sapo (frog in portuguese)

// Output
// Print the total of animals used, the total of each type of animal and the percentual of each one in relation of the total of animals used. The percentual must be printed with 2 digits after the decimal point.

function percentage(total, count) {
  const percent = (count * 100) / total;
  return percent.toFixed(2);
}

function animalCount(n) {
  let total = 0;
  let rabbit = 0;
  let rat = 0;
  let frog = 0;

  const animals = [
    "10 C",
    "6 R",
    "15 S",
    "5 C",
    "14 R",
    "9 C",
    "6 R",
    "8 S",
    "5 C",
    "14 R",
  ];

  if (n === 0 || n > 15 || animals.length < n) {
    return "invalid";
  }

  for (let i = 0; i < animals.length; i++) {
    const x = animals[i];

    const count = x.split(" ");
    const animalNum = parseInt(count[0]);
    const animalName = count[1];

    total += animalNum;

    if (animalName === "C") {
      rabbit += animalNum;
    } else if (animalName === "R") {
      rat += animalNum;
    } else {
      frog += animalNum;
    }
  }

  console.log(total);
  console.log(rabbit);
  console.log(rat);
  console.log(frog);

  console.log("rabbit Percentage:" + percentage(total, rabbit));
  console.log("rat Percentage:" + percentage(total, rat));
  console.log("frog Percentage:" + percentage(total, frog));
}

animalCount(10);
