function getComputerChoice() {
    choice = Math.random();
    if (choice < 0.333) {
        return "rock";
    } else if (choice < 0.667) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    console.log("Choose one of the following: ");
    console.log("1. Rock");
    console.log("2. Paper");
    console.log("3. Scissors");

    let choice;

    while (true) {
        choice = prompt("Enter choice: ").toLowerCase();
        if (choice == "1" || choice == "rock") {
            return "rock";
        } else if (choice == "2" || choice == "paper") {
            return "paper";
        } else if (choice == "3" || choice == "scissors") {
            return "scissors";
        } else {
            console.log("Bruh");
            alert("Come on, man. Enter a valid option.");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    result = (choices.indexOf(humanChoice) - choices.indexOf(computerChoice))%3;
    switch (result) {
        case 1:
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            break;
        case 0:
            console.log(`Tie! You both chose ${humanChoice}.`);
            break;
        case -1:
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            break;
        default:
            console.log("lmao error");
    }
}

choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

playRound("scissors", "paper");
