function choice() {
    let choice = ["rock", "paper", "scissors"];
    let x = Math.floor(Math.random() * 3);
    return choice[x]
}

function round(player, computer) {
    if (player == computer){
            return("Tie!");
    } else if ((player == "rock" && computer == "scissors") || (player == "paper" && computer == "rock") || (player == "scissors" && computer == "paper")) {
        return("You win!!");
    } else {
        return("You lose.");
    }        
}   

for (let i = 0; i < 5; i++) {
    player = prompt("Rock, Paper or Scissors?...");
    computer = choice();
    console.log(round(player.toLowerCase(), computer))
}
