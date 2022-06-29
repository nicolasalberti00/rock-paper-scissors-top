function computerPlay() {
  let selectionArray = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random() * selectionArray.length);
  return selectionArray[randomNumber];
}

function loseOutput(computerSelection) {
  console.log('You Lose. Computer selected: ', computerSelection);
  return false;
}

function winOutput() {
  console.log('You win!');
  return true;
}

function playRound(computerSelection, playerSelection) {
  if (playerSelection == computerSelection) {
    console.log('Equal');
  } else {
    if (playerSelection == 'rock') {
      if (computerSelection == 'paper') {
        return loseOutput(computerSelection);
      } else {
        return winOutput();
      }
    } else if (playerSelection == 'paper') {
      if (computerSelection == 'scissors') {
        return loseOutput(computerSelection);
      } else {
        return winOutput();
      }
    } else {
      if (computerSelection == 'rock') {
        return loseOutput(computerSelection);
      } else {
        return winOutput();
      }
    }
  }
}

let playerMove = 0;
function game() {
  let computerScore = 0;
  let playerScore = 0;
  for (let i = 0; i < 5; i++) {
    playerMove = prompt(`Insert the move for the round ${i}`, '');
    playerMove.toLowerCase();
    if (playRound(computerPlay(), playerMove)) {
      playerScore++;
    } else computerScore++;
  }
  return playerScore > computerScore
    ? console.log(`Player won with score ${playerScore})`)
    : console.log(`Computer won with score ${computerScore}`);
}

game();
