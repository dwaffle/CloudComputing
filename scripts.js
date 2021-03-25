function rollDice(){
    document.getElementById("dice-display").innerHTML = `You rolled: ${Math.floor(Math.random() * 6) + 1}`
}