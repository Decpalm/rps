const hand = ['rock', 'paper', 'scissors'];
let humanScore = 0, computerScore = 0;
const hScore = document.querySelector(".hScore");
const cScore = document.querySelector(".cScore");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");
reset.addEventListener("click", () =>{
    humanScore = 0; computerScore = 0;
    hScore.textContent = "You: " + humanScore;
    cScore.textContent = "Comnputer: " + computerScore;
    result.textContent = "";
    reset.style.cssText = "display: none;";
})

function getComputerChoice(){
    return hand[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
    return prompt("Rock, Paper, or Scissors?").toLowerCase();
}

function playRound(humanChoice, computerChoice){

    if(humanScore == 5){
        result.textContent = "You win the Game!!"  
    }
    else if(computerScore == 5){
        result.textContent = "You lose the game :("
    }
    else if(humanChoice === computerChoice){
        hScore.textContent = "You: " + humanScore;
        cScore.textContent = "Comnputer: " + computerScore;
        result.textContent = "It's a Tie!";
    }
    else if(humanChoice.toLowerCase() === "rock"){
        if(computerChoice === "paper"){
            computerScore++
            hScore.textContent = "You: " + humanScore;
            cScore.textContent = "Comnputer: " + computerScore;
            result.textContent =  "You lose! " + computerChoice + " beats " + humanChoice
        }
        else if(computerChoice === "scissors"){
            humanScore++
            hScore.textContent = "You: " + humanScore;
            cScore.textContent = "Comnputer: " + computerScore;
            result.textContent =  "You win! " + humanChoice + " beats " + computerChoice
        }
    }
    else if(humanChoice.toLowerCase() === "paper"){
        if(computerChoice === "rock"){
            humanScore++
            hScore.textContent = "You: " + humanScore;
            cScore.textContent = "Comnputer: " + computerScore;
            result.textContent =  "You win! " + humanChoice + " beats " + computerChoice
        }
        else if(computerChoice === "scissors"){
            computerScore++
            hScore.textContent = "You: " + humanScore;
            cScore.textContent = "Comnputer: " + computerScore;
            result.textContent =  "You lose! " + computerChoice + " beats " + humanChoice
        }
    }
    else if(humanChoice.toLowerCase() === "scissors"){
        if(computerChoice === "paper"){
            humanScore++
            hScore.textContent = "You: " + humanScore;
            cScore.textContent = "Comnputer: " + computerScore;
            result.textContent =  "You win! " + humanChoice + " beats " + computerChoice
        }
        else if(computerChoice === "rock"){
            computerScore++
            hScore.textContent = "You: " + humanScore;
            cScore.textContent = "Comnputer: " + computerScore;
            result.textContent =  "You lose! " + computerChoice + " beats " + humanChoice
        }
    }
    if(humanScore == 5){
        result.textContent = "You win the Game!!";
        reset.style.cssText = "display: block;";  
    }
    else if(computerScore == 5){
        result.textContent = "You lose the game :(";
        reset.style.cssText = "display: block;";
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