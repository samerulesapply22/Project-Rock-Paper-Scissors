function choice() {
    let choice = ["rock", "paper", "scissors"];
    let x = Math.floor(Math.random() * 3);
    return choice[x];
}

function round(player, computer) {
    if (player == computer) {
        result.textContent = "Tie!"; 
    } else if ((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")) {
        result.textContent = "You win!!";
    } else {
        result.textContent = "You lose.";
    } 
}  


let result = document.querySelector("#result");
const rock_button = document.querySelector("#rock");
const paper_button = document.querySelector("#paper");
const scissors_button = document.querySelector("#scissors");

rock_button.addEventListener("click", () => round("rock", choice()));
paper_button.addEventListener("click", () => round("paper", choice()));
scissors_button.addEventListener("click", () => round("scissors", choice()));