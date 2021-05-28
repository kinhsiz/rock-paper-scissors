let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');
const reloadButton = document.querySelector('button');


// Return what the computer pick between rock, paper, or scissors
const computerPlay = function() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};
function disabledButtons() {
  buttons.forEach(button => {
    button.disabled = true;
  })
}

// Play one round of rock, paper, or scissors 
let userSelection;

function playRound(playerSelection) {
  
    let computerSelection = computerPlay();
    let result = "";
   
    if((playerSelection == "rock" && computerSelection == "paper") || 
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors")) {
  
      computerScore += 1
      result = (`you lose! ${computerSelection} beats ${playerSelection}!` + 
      '<br><br>Computer Score: ' + computerScore + '<br>Player Score: ' + playerScore);

      if(computerScore == 5) {
        result += "<br><br><span style= 'color: red'>You lose the game, reload the game to play again!"
        disabledButtons();
        reloading();
      }
    }

    else if(playerSelection == computerSelection) {
      result = ('It\'s a tie! You both chose ' + playerSelection + '!' + 
      '<br><br>Computer Score: ' + computerScore + '<br>Player Score: ' + playerScore) 
    }

    else {
      playerScore += 1
      result = (`you win! ${playerSelection} beats ${computerSelection}` + 
      '<br><br>Computer Score: ' + computerScore + '<br>Player Score: ' + playerScore)

      if (playerScore == 5) {
        result += "<br><br><span style= 'color: green'>Yay, you win the game! reload to play again!</span>"
        disabledButtons();
        reloading();
      }
    }
    document.getElementById('result').innerHTML = result
    return
  }

  buttons.forEach(button => {
    button.addEventListener('click', function(){
      playRound(button.value);
  });
})

/********RELOADING GAME**************/
function reload() {
  location.reload();
} 
function reloading() {
  reloadButton.addEventListener('click', reload);
  }

