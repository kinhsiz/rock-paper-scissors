function playRound(playerSelection, computerSelection) {
  
    let plaSelect = playerSelection;
    let compSelect = computerSelection;
   
    if(plaSelect == compSelect) {
      console.log("Nobody wins, try again!")
    }
    else if(plaSelect == "rock" && compSelect == "paper") {
     return "compSelect wins!, paper beats rock!";
    }
    else if(plaSelect == "paper" && compSelect == "rock") {
      return "plaSelect wins!, paper beats rock!";
    }
    else if(plaSelect == "scissors" && compSelect == "rock") {
      return "compSelect wins! rock beats scissor!";
    }
    else if(plaSelect == "rock" && compSelect == "scissors") {
      return "plaSelect wins! rock beats scissor!";
    }
    else if(plaSelect == "paper" && compSelect == "scissors") {
      return "compSelect wins! scissors beats paper!";
    }
    else if(plaSelect == "scissor" && compSelect == "paper") {
      return "plaSelect wins! scissors beats paper!";
    }
  };
  
  
  /*const playerSelection = function() {
    let playerChoice = prompt("type rock, paper OR scissors").toLowerCase(); 
    
    if(playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
      return playerChoice;
    };
    
   console.log("Type a valid selection");
  };
  */
  
  const playerSelection = prompt("type rock, paper OR scissors").toLowerCase();
  
  const computerSelection = function() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
  };
  
  computerSelection();
  
  console.log(playRound(playerSelection, computerSelection()));

  /* was having a hard time understanding why computerSelection value and playerSelection value
  was not being passed as paramentes to playRound function. I needed to do activate function
  inside playRound as an argument by adding "()" at the end */