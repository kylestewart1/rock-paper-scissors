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

console.log(getComputerChoice());