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
        results.textContent += "Final results: ";
        results.textContent +=`Player: ${humanScore} rounds`;
        results.textContent +=`Skynet: ${computerScore} rounds`;
        if (humanScore > computerScore) {
            results.textContent += "You win." 
            results.textContent += "Probably cheated though.";
        } else if (computerScore > humanScore) {
            results.textContent += "Skynet wins, obviously.";
            results.textContent += "Loser";
        } else {
            results.textContent += "It's a tie.";
            results.textContent += "You're still a loser though.";
    }
    }
    

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.addEventListener("click", () => {
        const humanChoice = button.value;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        if (humanScore >= 5 || computerScore >= 5) {
            gameOver();
        }
    }));


    
    
}

playGame();

