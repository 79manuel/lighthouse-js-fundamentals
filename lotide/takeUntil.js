const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let newArray = []
  for (let item of array) {
    if (!callback(item)){
      newArray.push(item);
    } else {
      return newArray;
    }
  }
}

module.exports = takeUntil;
