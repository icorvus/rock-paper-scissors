function computerPlay() {
  // Returns pseudorandomly 'Rock' or 'Paper' or 'Scissors'

  const possibleResults = ['Rock', 'Paper', 'Scissors'];

  // This math expression below takes values from 0 to 2
  // and uses it to choose the final result
  return possibleResults[Math.floor(Math.random() * possibleResults.length)];
}

function getRoundOutcome(playerSelection, computerSelection) {
  // Selects the winner in a single round of the game

  // Makes function inputs case-insensitive to prevent bugs
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${playerSelection}`;
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper"){
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "scissors") {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      throw "Unknown error";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "rock") {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      throw "Unknown error";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "paper") {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      throw "Unknown error";
    }
  } else {
    throw "Unknown error";
  }
}

