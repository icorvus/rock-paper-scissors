function computerPlay() {
  // Returns pseudorandomly 'Rock' or 'Paper' or 'Scissors'

  const possibleResults = ['Rock', 'Paper', 'Scissors'];

  // This math expression below takes values from 0 to 2
  // and uses it to choose the final result
  return possibleResults[Math.floor(Math.random() * possibleResults.length)];
}

function isLegalMove(move){
  // Checks if move is legal, case sensitive, so have to be passed lowercase moves
  const legalMoves = ['rock', 'paper', 'scissors'];
  if (legalMoves.includes(move)) return true;
  else return false;
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
      alert("Unknown error occured!");
      throw "Unknown error";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return ["computer", computerSelection, playerSelection];
    } else if (computerSelection === "rock") {
      return ["player", playerSelection, computerSelection];;
    } else {
      alert("Unknown error occured!");
      throw "Unknown error";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return ["computer", computerSelection, playerSelection];
    } else if (computerSelection === "paper") {
      return ["player", playerSelection, computerSelection];;
    } else {
      alert("Unknown error occured!");
      throw "Unknown error";
    }
  } else {
    alert("Unknown error occured!");
    throw "Unknown error";
  }
}

function playRound () {
  // Takes input from player, checks if it's legal (to prevent bugs), asks till valid move is passed
  // then calls other function that calculates the round outcome and returns it
  let playerAttempt = prompt('Rock, paper or scissors. What are you choosing? ').toString().toLowerCase();
  while (isLegalMove(playerAttempt) === false) {
    console.log("That's not a valid move");
    playerAttempt = prompt('Rock, paper or scissors. What are you choosing? ').toString().toLowerCase();
  }
  console.log(playerAttempt);
  return getRoundOutcome(playerAttempt, computerPlay());
}


function capitalize (word) {
  // Capitalizes first letter of a string
  word = word.toString();
  return word[0].toUpperCase() + word.slice(1);
}

function game() {
  // Main game loop, keeps track of scores, chooses final winner

  
  let playerScore = 0;
  let computerScore = 0;
  let roundOutcomes;
  let roundWinner;

  const btnRock = document.querySelector(".rock");
  const btnPaper = document.querySelector(".paper");
  const btnScissors = document.querySelector(".scissors");

  btnRock.addEventListener('click', () => {
    roundOutcomes = getRoundOutcome('rock', computerPlay());
    showWinner(roundOutcomes[0], roundOutcomes[1], roundOutcomes[2]);
  });

  btnPaper.addEventListener('click', () => {
    roundOutcomes = getRoundOutcome('paper', computerPlay());
    showWinner(roundOutcomes[0], roundOutcomes[1], roundOutcomes[2]);
  });

  btnScissors.addEventListener('click', () => {
    roundOutcomes = getRoundOutcome('scissors', computerPlay());
    showWinner(roundOutcomes[0], roundOutcomes[1], roundOutcomes[2]);
  });


  /*
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
*/

/*  if (playerScore > computerScore){
    console.log("Congrats you won the match!");
  } else if (playerScore === computerScore) {
    console.log("This time it's a draw! Maybe next time?");
  } else if (playerScore < computerScore) {
    console.log("Too bad! You lost man...");
  } else {
    alert("Unknown error occured!");
    throw "Unknown error";
  }
*/
}




function showWinner(winner, winningWeapon, losingWeapon){
  const textBox = document.querySelector(".text-box");
  console.log(winner);
  if (winner === "player") {
    //console.log(`You win! ${capitalize(winningWeapon)} beats ${capitalize(losingWeapon)}`);
    textBox.textContent = `You win! ${capitalize(winningWeapon)} beats ${capitalize(losingWeapon)}`;
  } else if (winner === "computer") {
    //console.log(`You lose! ${capitalize(winningWeapon)} beats ${capitalize(losingWeapon)}`);
    textBox.textContent = `You lose! ${capitalize(winningWeapon)} beats ${capitalize(losingWeapon)}`;
  } else if (winner === "tie") {
    //console.log(`It's a tie! You both chose ${capitalize(winningWeapon)}`);
    textBox.textContent = `It's a tie! You both chose ${capitalize(winningWeapon)}`;
  } else {
    alert("Unknown error occured!");
    throw "Unknown error";
  }
}



game();