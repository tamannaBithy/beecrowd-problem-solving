function game(option) {
    if (option[0] === "paper" && option[1] === "rock") {
      return "Caso #1: Bazinga!";
    }
  
    if (option[0] === "lizard" && option[1] === "scissors") {
      return "Caso #2: Raj cheated!";
    }
  
    if (option[0] === "spock" && option[1] === "spock") {
      return "Caso #3: Again!";
    }
  }
  
  const option = ["spock", "spock"];
  console.log(game(option));