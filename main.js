window.onload = () => {

  let rps = new RPS();

  let rock = document.getElementById("rock");
  let paper = document.getElementById("paper");
  let scissors = document.getElementById("scissors");

  rock.addEventListener("click", function () {
    console.log(rps.playRound("Rock"));
  });

  paper.addEventListener("click", function () {
    console.log(rps.playRound("Paper"));
  });

  scissors.addEventListener("click", function () {
    console.log(rps.playRound("Scissors"));
  });
};

class RPS {

  choices = ["Rock", "Paper", "Scissors"];

  computerSelection() {
    let randomChoice = parseInt(Math.random() * this.choices.length);
    return this.choices[randomChoice];
  }

  playRound(playerChoice) {
    let computerChoice = this.computerSelection();

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
}
