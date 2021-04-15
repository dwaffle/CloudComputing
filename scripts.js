function rollDice(){
    let sides = Number(document.getElementById("noofsides"))
    document.getElementById("dice-display").innerHTML = `You rolled: ${Math.floor(Math.random() * sides) + 1}`
}