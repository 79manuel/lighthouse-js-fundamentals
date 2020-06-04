const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅ ✅ ✅  Assertion passed: ${actual} === ${expected}`)
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${actual} !== ${expected}`)
  }
};

function countLetters(string) {
  let count = {};
  for (let item of string){
    if (count[item]){
      count[item] += 1;
    } else {
      count[item] = 1;
    }
  } console.log(count);
  return count;
}

let sentence = "lighthouse in the house";
let result = countLetters(sentence);

assertEqual(result.l, 1);
assertEqual(result.i, 2);
assertEqual(result.g, 1);
assertEqual(result.h, 4);
