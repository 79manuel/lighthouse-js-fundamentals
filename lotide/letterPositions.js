const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  const indexArray = sentence.split('').join('').toLowerCase();
  for (let i = 0; i < indexArray.length; i++) {
    if(results[indexArray[i]]){
      results[indexArray[i]].push(i);
    } else {
      results[indexArray[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;
