function computerPlay() {
  // Returns pseudorandomly 'Rock' or 'Paper' or 'Scissors'

  const possibleResults = ['rock', 'paper', 'scissors'];

  // This math expression below takes values from 0 to 2
  // and uses it to choose the final result
  return possibleResults[Math.floor(Math.random() * possibleResults.length)];
}

function getRoundOutcome(playerSelection) {
  // Selects the winner in a single round of the game
  
  const computerSelection = computerPlay();

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

function capitalize(word) {
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

  const textBox = document.querySelector(".text-box");
  const scoreText = document.createElement("p");
  const scoreContent = document.createElement("p");
  scoreText.textContent = "Current score is:"

  btnRock.addEventListener('click', () => playRound('rock'));

  btnPaper.addEventListener('click', () => playRound('paper'));

  btnScissors.addEventListener('click', () => playRound('scissors'));

  function playRound(weapon) {
    if (playerScore < 5 && computerScore < 5){
      roundOutcomes = getRoundOutcome(weapon);
      if (roundOutcomes[0] === "player") playerScore++;
      else if (roundOutcomes[0] === "computer") computerScore++;
      console.log(playerScore, computerScore);
      showRoundWinner(...roundOutcomes);
      scoreContent.textContent = `Player ${playerScore}:${computerScore} Computer`;
      textBox.appendChild(scoreText);
      textBox.appendChild(scoreContent);
     // if (playerScore === 5) showGameWinner('player');
     // else if (computerScore === 5) showGameWinner('computer');
    }
  }

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


function showRoundWinner(winner, winningWeapon, losingWeapon){
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