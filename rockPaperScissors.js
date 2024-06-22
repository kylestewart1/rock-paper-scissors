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

    const results = document.querySelector("#results-div");
    results.textContent = "";

    const scoreBoard = document.createElement("div");
    document.querySelector("body").appendChild(scoreBoard);
    const humanTally = document.createElement("p");
    const computerTally = document.createElement("p");
    scoreBoard.appendChild(humanTally);
    scoreBoard.appendChild(computerTally);

    const finalMessage = document.createElement("div");

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
                results.textContent=`You win! ${humanChoice} beats ${computerChoice}.`;
                humanScore++;
                break;
            case 0:
                results.textContent=`Tie! You both chose ${humanChoice}.`;
                break;
            case -1:
                results.textContent=`You lose! ${computerChoice} beats ${humanChoice}.`;
                computerScore++;
                break;
            default:
                results.textContent="lmao error";
        }
    }

    function gameOver() { 
        finalMessage.textContent = "Final results: ";
        if (humanScore > computerScore) {
            finalMessage.textContent += "You win. " 
            finalMessage.textContent += "Probably cheated though.";
        } else if (computerScore > humanScore) {
            finalMessage.textContent += "Skynet wins, obviously. ";
            finalMessage.textContent += "Loser";
        } else {
            finalMessage.textContent += "It's a tie. ";
            finalMessage.textContent += "You're still a loser though.";
        }
        document.querySelector("body").appendChild(finalMessage);
    }
    

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.addEventListener("click", () => {
        if (humanScore < 5 && computerScore < 5) {
            const humanChoice = button.value;
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
            humanTally.textContent = `Human: ${humanScore} rounds`;
            computerTally.textContent =`Skynet: ${computerScore} rounds`;
        } else {
            gameOver();
        }
    }));


    
    
}

playGame();

