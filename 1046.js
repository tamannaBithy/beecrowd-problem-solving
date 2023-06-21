// Read the start time and end time of a game, in hours. Then calculate the duration of the game, knowing that the game can begin in a day and finish in another day, with a maximum duration of 24 hours. The message must be printed in portuguese “O JOGO DUROU X HORA(S)” that means “THE GAME LASTED X HOUR(S)”

// Input
// Two integer numbers representing the start and end time of a game.




function gameTime(startTime, endTime) {
    let duration = endTime - startTime;
  
    if (duration <= 0) {
      duration = duration + 24;
    }
  
    return `O JOGO DUROU ${duration} HORA(S)`;
  }
  
  console.log(gameTime(11, 1));