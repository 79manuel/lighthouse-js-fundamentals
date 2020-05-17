let timesDiceRolls = process.argv.slice(2);

function DiceRoller (num){
  let joinRolledNum = [ ];
  for (let i = 0; i < num; i++){ // Loops over the number provided
    let dice = Math.floor(Math.random() * (6 - 1 + 1) + 1); // for each number of times the dice is rolled,
    // get a random number between 1 and 6
    joinRolledNum.push(dice);
  }
  return `Rolled ${num} dice: ${(joinRolledNum.join(', '))}` // Print out the number rolled
}

console.log(DiceRoller(timesDiceRolls));