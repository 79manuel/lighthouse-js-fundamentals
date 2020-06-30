function middle (array) {
  if (array.length === 1 || array.length === 2) {
    console.log([]);
  } else if (array.length > 2 && array.length % 2 !== 0 ) {
    let middleIndex =  Math.floor(array.length / 2);
    let value = array[middleIndex];
     console.log(`Middle value is ${value}`);
  } else if (array.length > 2 && array.length % 2 === 0 ) {
    let firstIndex = Math.floor((array.length - 1) / 2);
    let secondIndex = Math.floor(array.length / 2);
    let firstValue = array[firstIndex];
    let secondValue = array[secondIndex];
    console.log(`Middle values are: ${firstValue} and ${secondValue}`);
  }
}

module.exports = middle;
