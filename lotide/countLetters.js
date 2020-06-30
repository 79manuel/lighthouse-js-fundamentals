const assertEqual = require('./assertEqual');

function countLetters(string) {
  let count = {};
  for (let item of string){
    if (count[item]){
      count[item] += 1;
    } else {
      count[item] = 1;
    }
  }
  return count;
}

module.exports = countLetters;

// let sentence = "lighthouse in the house";
// let result = countLetters(sentence);
//
// assertEqual(result.l, 1);
// assertEqual(result.i, 2);
// assertEqual(result.g, 1);
// assertEqual(result.h, 4);
