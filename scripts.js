let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = getRandomNumber(3);
    switch(randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "error";
    }

}

function getRandomNumber(maximum) {
    return Math.floor(maximum * Math.random());
}

function getHumanChoice() {
    userInput = prompt("What is your choice?");
    return userInput;
}

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice().toLowerCase();

    console.log(`computerChoice ${computerChoice}`);
    console.log(`humanChoice ${humanChoice}`);

    let result = compareScores(computerChoice, humanChoice);


    let humanChoiceCap = capitalise(humanChoice);
    let computerChoiceCap = capitalise(computerChoice);

    console.log(`result: ${result}`);

    let output = "";

    if (result == "win")
        output = `You win! ${humanChoiceCap} beats ${computerChoiceCap}.`;
        
    else if (result == "lose")
        output = `You lose! ${computerChoiceCap} beats ${humanChoiceCap}.`;
    else
        output = `Draw! You both chose ${humanChoiceCap}.`;
    
    console.log(output);

    updateScore(result);
}

function compareScores(computerChoice, humanChoice) {
    if (computerChoice == humanChoice)
        return "draw";
    else if (computerChoice == "rock")
        if (humanChoice == "paper")
            return "win";
        else
            return "lose";
    else if (computerChoice == "paper")
        if (humanChoice == "scissors")
            return "win";
        else
            return "lose";
    else if (computerChoice == "scissors")
        if (humanChoice == "rock")
            return "win";
        else
            return "lose";
    else
        return "error";
}

function capitalise(string) {
    let firstLetterCaps = string.at(0).toUpperCase();
    let stringRemainder = string.slice(1);

    return (firstLetterCaps + stringRemainder);
}

function playGame() {
    let numRounds = 5;
    let roundsPlayed = 0;

    while (roundsPlayed < numRounds) {
        playRound();
        roundsPlayed++;
    }
    
}

function updateScore(result) {
    if (result == "win")
        humanScore++;
    else if (result == "lose")
        computerScore++;

    console.log(`humanscore ${humanScore}`);
    console.log(`computerscore ${computerScore}`);
}

playGame();