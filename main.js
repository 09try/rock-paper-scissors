window.onload = () => {
  let rps = new RPS();

  let rock = document.getElementById("rock");
  let paper = document.getElementById("paper");
  let scissors = document.getElementById("scissors");

  let playAgainBtn = document.getElementById("playAgain");

  rock.addEventListener("click", function () {
    rps.playRound("Rock");
  });

  paper.addEventListener("click", function () {
    rps.playRound("Paper");
  });

  scissors.addEventListener("click", function () {
    rps.playRound("Scissors");
  });

  playAgainBtn.addEventListener("click", function () {
    rps.restartGame();
  });
};

class RPS {
  choices = ["Rock", "Paper", "Scissors"];
  playerScore = 0;
  computerScore = 0;

  playerScoreLabel;
  computerScoreLabel;
  resultLabel;
  instructionLabel;
  playAgainBtn;

  isWinner = false;

  constructor() {
    this.playerScoreLabel = document.getElementById("playerScore");
    this.computerScoreLabel = document.getElementById("computerScore");
    this.resultLabel = document.getElementById("result");
    this.playAgainBtn = document.getElementById("playAgain");
    this.playAgainBtn.innerHTML = 'Play Again';
    this.playAgainBtn.style.visibility = "hidden";

    this.instructionLabel = document.getElementById("instruction");
    this.instructionLabel.innerHTML = 'Make your selection';
    this.instructionLabel.style.visibility = "visible";
  }

  computerSelection() {
    let randomChoice = parseInt(Math.random() * this.choices.length);
    return this.choices[randomChoice];
  }

  endGame() {
    this.instructionLabel.style.visibility = "hidden";
    this.playAgainBtn.style.visibility = "visible";
  }

  restartGame() {
    this.playerScore = 0;
    this.computerScore = 0;
    this.isWinner = false;
    this.instructionLabel.style.visibility = "visible";
    this.instructionLabel.innerHTML = 'Make your selection';
    this.playAgainBtn.style.visibility = "hidden";
    this.resultLabel.innerHTML = '';
  }

  playRound(playerChoice) {
    if (this.isWinner === false) {
      let computerChoice = this.computerSelection();

      if (computerChoice == "Rock" && playerChoice == "Rock") {
        this.resultLabel.innerText = "Draw! You both chose Rock";
      }

      if (computerChoice == "Rock" && playerChoice == "Paper") {
        this.playerScore += 1;
        this.resultLabel.innerText = "You win! Paper beats Rock";
      }

      if (computerChoice == "Rock" && playerChoice == "Scissors") {
        this.computerScore += 1;
        this.resultLabel.innerText = "You lose! Rock beats Paper";
      }

      if (computerChoice == "Paper" && playerChoice == "Rock") {
        this.computerScore += 1;
        this.resultLabel.innerText = "You lose! Paper beats Rock";
      }

      if (computerChoice == "Paper" && playerChoice == "Paper") {
        this.resultLabel.innerText = "Draw! You both chose Paper";
      }

      if (computerChoice == "Paper" && playerChoice == "Scissors") {
        this.playerScore += 1;
        this.resultLabel.innerText = "You win! Scissors beat Paper";
      }

      if (computerChoice == "Scissors" && playerChoice == "Rock") {
        this.playerScore += 1;
        this.resultLabel.innerText = "You win! Rock beats Scissors";
      }

      if (computerChoice == "Scissors" && playerChoice == "Paper") {
        this.computerScore += 1;
        this.resultLabel.innerText = "You lose! Scissors beat Paper";
      }

      if (computerChoice == "Scissors" && playerChoice == "Scissors") {
        this.resultLabel.innerText = "Draw! You both chose Scissors";
      }

      this.playerScoreLabel.innerText = this.playerScore;
      this.computerScoreLabel.innerText = this.computerScore;

      if (this.playerScore >= 5) {
        this.resultLabel.innerText = "You have won! Computer lost.";
        this.isWinner = true;
        this.endGame();
      } else if (this.computerScore >= 5) {
        this.resultLabel.innerText = "You lost! Computer have won.";
        this.isWinner = true;
        this.endGame();
      }
    }
  }
}
