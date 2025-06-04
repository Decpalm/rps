const hand = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    return hand[Math.floor(Math.random()*3)];
}

function getHumanChoice(){
    return prompt("Rock, Paper, or Scissors?").toLowerCase();
}