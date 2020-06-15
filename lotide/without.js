const without = function(source, itemsToRemove) {
  newArray = source.filter(item => !itemsToRemove.includes(item));
  console.log(newArray)
}

module.exports = without;

