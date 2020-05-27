function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let index = 0;

  return function() {
    let rollDice = list[index]
    index++
    return rollDice;
  }
}

const rollLoadedDice = makeLoadedDie();

console.log(rollLoadedDice());  // 5
console.log(rollLoadedDice());  // 4
console.log(rollLoadedDice());  // 6
console.log(rollLoadedDice());  // 1
console.log(rollLoadedDice());  // 6
console.log(rollLoadedDice());  // 4
console.log(rollLoadedDice());  // 2
console.log(rollLoadedDice());  // 3
console.log(rollLoadedDice());  // 3
console.log(rollLoadedDice());  // 5
