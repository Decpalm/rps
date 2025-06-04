const hand = ['rock', 'paper', 'scissors']
let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    return hand[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
    return prompt("Rock, Paper, or Scissors?").toLowerCase();
}

function playRound(humanChoice, computerChoice){


    if(humanChoice === computerChoice){
        return "It's a tie!"
    }
    else if(humanChoice.toLowerCase() === "rock"){
        if(computerChoice === "paper"){
            computerScore++
            return "You lose! " + computerChoice + " beats " + humanChoice
        }
        else if(computerChoice === "scissors"){
            humanScore++
            return "You win! " + humanChoice + " beats " + computerChoice
        }
    }
    else if(humanChoice.toLowerCase() === "paper"){
        if(computerChoice === "rock"){
            humanScore++
            return "You win! " + humanChoice + " beats " + computerChoice
        }
        else if(computerChoice === "scissors"){
            computerScore++
            return "You lose! " + computerChoice + " beats " + humanChoice
        }
    }
    else if(humanChoice.toLowerCase() === "scissors"){
        if(computerChoice === "paper"){
            humanScore++
            return "You win! " + humanChoice + " beats " + computerChoice
        }
        else if(computerChoice === "rock"){
            computerScore++
            return "You lose! " + computerChoice + " beats " + humanChoice
        }
    }
    else{
        return "oops"
    }   
}

/*function playGame(){
    
    for(let i = 0; i < 5; i++){
        console.log(playRound(getHumanChoice(), getComputerChoice()))
        
        //console.log(humanScore)
        //console.log(computerScore)
    }
    if(humanScore > computerScore){
        let output = "You win the game! Comnputer: " + computerScore + ", You: " + humanScore;
        humanScore=0;
        computerScore=0;
        return output;
    }
    else if ( computerScore > humanScore){
        let output = "You lose the game! Comnputer: " + computerScore + ", You: " + humanScore;
        humanScore=0;
        computerScore=0;
        return output;
    }
    else{
      let output = "It's a tie! Comnputer: " + computerScore + ", You: " + humanScore;
      humanScore=0;
      computerScore=0;
      return output;
    }
}
*/

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

  button.addEventListener("click", () => {
    console.log(playRound(button.getAttribute("class"), getComputerChoice()));
  });
});