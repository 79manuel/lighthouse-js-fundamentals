const findWaldo = function (names, found) {
  names.forEach ((name, index) => {
      if (name === "Waldo") {
        found(name, index);
      }
  })
}
findWaldo(["Alice", "Bob", "Winston", "Waldo"], function(name, index) {
  console.log(`I found ${name} at index ${index}`);
});