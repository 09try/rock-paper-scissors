let choices = ["Rock", "Paper", "Scissors"];

window.onload = function () {
  for (let i = 0; i < 5; i++) {
    game();
  }
};

function game() {
  let computerChoice = computerSelection();
  let playerChoice = playerSelection();
  let result = playRound(computerChoice, playerChoice);
  console.log(result);
}

function computerSelection() {
  let randomChoice = parseInt(Math.random() * choices.length);
  return choices[randomChoice];
}

function playerSelection() {
  let playerChoise = parseInt(prompt("Choose Rock 0, Paper 1, Scissors 2"));
  return choices[playerChoise];
}

function playRound(computerChoice, playerChoice) {
  if (computerChoice == "Rock" && playerChoice == "Rock") {
    return "Draw! You both chose Rock";
  }

  if (computerChoice == "Rock" && playerChoice == "Paper") {
    return "You win! Paper beats Rock";
  }

  if (computerChoice == "Rock" && playerChoice == "Scissors") {
    return "You lose! Rock beats Paper";
  }

  if (computerChoice == "Paper" && playerChoice == "Rock") {
    return "You lose! Paper beats Rock";
  }

  if (computerChoice == "Paper" && playerChoice == "Paper") {
    return "Draw! You both chose Paper";
  }

  if (computerChoice == "Paper" && playerChoice == "Scissors") {
    return "You win! Scissors beat Paper";
  }

  if (computerChoice == "Scissors" && playerChoice == "Rock") {
    return "You win! Rock beats Scissors";
  }

  if (computerChoice == "Scissors" && playerChoice == "Paper") {
    return "You lose! Scissors beat Paper";
  }

  if (computerChoice == "Scissors" && playerChoice == "Scissors") {
    return "Draw! You both chose Scissors";
  }
}
