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





function playGame() {
    choices = ["rock", "paper", "scissors"];
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        let value;
        switch (humanChoice) {
            case "rock":
                switch (computerChoice) {
                    case "rock":
                        value=0;
                        break;
                    case "paper":
                        value=-1;
                        break;
                    case "scissors":
                        value=1;
                        break;                       
                }
                break;
            case "paper":
                switch (computerChoice) {
                    case "rock":
                        value=1;
                        break;
                    case "paper":
                        value=0;
                        break;  
                    case "scissors":
                        value=-1;
                        break;                     
                }
                break;
            case "scissors":
                switch (computerChoice) {
                    case "rock":
                        value=-1;
                        break;
                    case "paper":
                        value=1;
                        break;  
                    case "scissors":
                        value=0;
                        break;                     
                }
                break;
        }

        switch (value) {
            case 1:
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
                humanScore++;
                break;
            case 0:
                console.log(`Tie! You both chose ${humanChoice}.`);
                break;
            case -1:
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
                computerScore++;
                break;
            default:
                console.log("lmao error");
        }
    }

    let humanChoice;
    let computerChoice;
    for (let i=0; i < 5; i++) {
        console.log(`Round ${i+1}`);
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    
    console.log("Final results: ");
    console.log(`Player: ${humanScore} rounds`);
    console.log(`Skynet: ${computerScore} rounds`);
    if (humanScore > computerScore) {
        console.log("You win. Probably cheated though.");
    } else if (computerScore > humanScore) {
        console.log("Skynet wins, obviously.");
        console.log("Loser");
    } else {
        console.log("It's a tie.");
        console.log("You're still a loser though.");
    }
}

playGame();

