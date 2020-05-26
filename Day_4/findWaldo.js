const findWaldo = function(names, found) {
  for(let i = 0; i < names.length; i++) {
    let name = names[i];
    let index = [i];
    if (name === "Waldo") {
      found(name, index);
    }
  }
}

const actionWhenFound = function(name, index){
  console.log(`I found ${name} at index ${index}`);
}

findWaldo(["Alice", "Bob", "Winston", "Waldo"], actionWhenFound);

const findWaldo2 = function (names, found) {
  names.forEach ((name, index, arr) => {
      if (name === "Waldo") {
        found(name, index, arr);
      }
  })
}
findWaldo2(["Alice", "Bob", "Winston", "Waldo"], actionWhenFound)