let options = {
    'rock': 'paper',
    'paper': 'scissors',
    'scissors': 'rock'
};
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let randIndex = Math.floor(Math.random()*3);
    return Object.keys(options)[randIndex];
};

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return `Tie! Both players used ${playerSelection}`;
    } else if (options[playerSelection] === computerSelection) {
        computerScore += 1;
        return `Sorry, you lose ${computerSelection} beats ${playerSelection}.`
    } else {
        playerScore += 1;
        return `Congrats you win, ${playerSelection} beats ${computerSelection}.`
    }
};

function game(playerSelection) {
    let userInput = playerSelection;
    let computerInput = computerPlay();
    let results = playRound(userInput, computerInput);
    document.getElementById("result-box").textContent = results;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
};