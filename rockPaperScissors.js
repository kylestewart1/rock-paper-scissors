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

console.log(getHumanChoice());