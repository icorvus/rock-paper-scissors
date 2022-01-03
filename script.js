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
    return ["tie", playerSelection, computerSelection];
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper"){
      return ["computer", computerSelection, playerSelection];
    } else if (computerSelection === "scissors") {
      return ["player", playerSelection, computerSelection];
    } else {
      throw "Unknown error";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return ["computer", computerSelection, playerSelection];
    } else if (computerSelection === "rock") {
      return ["player", playerSelection, computerSelection];;
    } else {
      throw "Unknown error";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return ["computer", computerSelection, playerSelection];
    } else if (computerSelection === "paper") {
      return ["player", playerSelection, computerSelection];;
    } else {
      throw "Unknown error";
    }
  } else {
    throw "Unknown error";
  }
}

function playRound () {
  let playerAttempt = prompt('Rock, paper or scissors. What are you choosing? ');
  return getRoundOutcome(playerAttempt, computerPlay());
}


function capitalize (word) {
  word = word.toString();
  return word[0].toUpperCase() + word.slice(1);
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundOutcomes;
  let roundWinner;
  for (let i = 0; i <= 4; i++) {
    roundOutcomes = playRound();
    if (roundOutcomes[0] === "player") {
      playerScore++;
      console.log(`You win! ${capitalize(roundOutcomes[1])} beats ${capitalize(roundOutcomes[2])}`);
      console.log(`The score is now:\n${playerScore} for You\n${computerScore} for Computer`);
    } else if (roundOutcomes[0] === "computer") {
      computerScore++;
      console.log(`You lose! ${capitalize(roundOutcomes[1])} beats ${capitalize(roundOutcomes[2])}`);
      console.log(`The score is now:\n${playerScore} for You\n${computerScore} for Computer`);
    } else if (roundOutcomes[0] === "tie") {
      playerScore++;
      computerScore++;
      console.log(`It's a tie! You both chose ${capitalize(roundOutcomes[1])}`);
      console.log(`The score is now:\n${playerScore} for You\n${computerScore} for Computer`);
    } else {
      alert("Unknown error occured!");
      throw "Unknown error";
    }
  }

  if (playerScore > computerScore){
    console.log("Congrats you won the match!");
  } else if (playerScore === computerScore) {
    console.log("This time it's a draw! Maybe next time?");
  } else if (playerScore < computerScore) {
    console.log("Too bad! You lost man...");
  } else {
    throw "Unknown error";
  }
}



game();