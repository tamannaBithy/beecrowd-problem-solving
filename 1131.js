// The Federação Gaúcha de Futebol invited you to write a program to present a statistical result of several GRENAIS. Write a program that read the number of goals scored by Inter and the number of goals scored by Gremio in a GRENAL. Write the message "Novo grenal (1-sim 2-nao)" and request a response. If the answer is 1, two new numbers must be read (another input case) asking the number of goals scored by the teams in a new departure, otherwise the program must be finished, printing:

// - How many GRENAIS were part of the statistics.
// - The number of victories of Inter.
// - The number of victories of Gremio.
// - The number of Draws.
// - A message indicating the team that won the largest number of GRENAIS (or the message: "Não houve vencedor" if both team won the same quantity of GRENAIS).

// Input
// The input contains two integer values​​, corresponding to the goals scored by both teams. Then there is an integer (1 or 2), corresponding to the repetition of the algorithm.

function solveProblem() {
  const gameData = [
    [3, 2],
    [2, 3],
    [3, 1],
  ];
  const userInput = [1, 1, 2];

  let victoriesInter = 0;
  let victoriesGremio = 0;
  let draws = 0;
  let totalMatches = gameData.length;

  for (let j = 0; j < userInput.length; j++) {
    const element = userInput[j];
    if (element === 1) {
      console.log("New Game (1-yes 2-no)");
    } else if (element === 2) {
      break;
    }
  }

  for (let i = 0; i < gameData.length; i++) {
    const [x, y] = gameData[i];
    if (x > y) {
      victoriesInter += 1;
    } else if (x < y) {
      victoriesGremio += 1;
    } else if (x === y) {
      draws += 1;
    }
  }

  console.log(totalMatches + " grenais");
  console.log("Inter:" + victoriesInter);
  console.log("Gremio:" + victoriesGremio);
  console.log("Empates:" + draws);

  if (victoriesInter > victoriesGremio) {
    console.log("Inter venceu mais");
  } else if (victoriesInter < victoriesGremio) {
    console.log("Gremio venceu mais");
  } else {
    console.log("Nao houve vencedor");
  }
}

solveProblem();
