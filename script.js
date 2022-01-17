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

  const btnRock = document.querySelector(".rock");
  const btnPaper = document.querySelector(".paper");
  const btnScissors = document.querySelector(".scissors");

  const textBox = document.querySelector(".text-box");
  const textBoxContent = document.querySelector(".text-content");
  const scoreText = document.createElement("p");
  const scoreContent = document.createElement("p");
  textBox.appendChild(scoreText);
  textBox.appendChild(scoreContent);

  btnRock.addEventListener('click', () => playRound('rock'));

  btnPaper.addEventListener('click', () => playRound('paper'));

  btnScissors.addEventListener('click', () => playRound('scissors'));

  function playRound(weapon) {
    if (playerScore < 5 && computerScore < 5){
      scoreText.textContent = "Current score is:"
      roundOutcomes = getRoundOutcome(weapon);
      if (roundOutcomes[0] === "player") playerScore++;
      else if (roundOutcomes[0] === "computer") computerScore++;
      console.log(playerScore, computerScore);
      showRoundWinner(...roundOutcomes);
      scoreContent.innerHTML = `&nbsp;&nbsp;` + `Player ${playerScore}:${computerScore} Computer`;
      if (playerScore === 5) showGameWinner('player');
      else if (computerScore === 5) showGameWinner('computer');
    }
  }

  function showGameWinner(winner) {
    scoreText.textContent = "Final score is:";
    const rematchButton = document.createElement('button');
    if (winner === 'player') {
      textBox.style.backgroundColor = "#0CCE6B";
      textBoxContent.textContent = "Congrats you won the match!";
      rematchButton.textContent = "Wanna beat me again?";
    } else {
      textBox.style.backgroundColor = "#FE4A49"
      textBoxContent.textContent = "Too bad! You lost man..";
      rematchButton.textContent = "Wanna get defeated again?";
    }
    rematchButton.setAttribute('style', `background-color: #283044; color: #5386E4; padding: 20px 32px;
     border: none; border-radius: 20px; cursor: pointer; font-size: 24px`);
    rematchButton.addEventListener('click', () => window.location.reload());
    textBox.appendChild(rematchButton);
  }

  function showRoundWinner(winner, winningWeapon, losingWeapon){
    console.log(winner);
    if (winner === "player") {
      textBoxContent.textContent = `You win! ${capitalize(winningWeapon)} beats ${capitalize(losingWeapon)}`;
    } else if (winner === "computer") {
      textBoxContent.textContent = `You lose! ${capitalize(winningWeapon)} beats ${capitalize(losingWeapon)}`;
    } else if (winner === "tie") {
      textBoxContent.textContent = `It's a tie! You both chose ${capitalize(winningWeapon)}`;
    } else {
      alert("Unknown error occured!");
      throw "Unknown error";
    }
  }
}


game();