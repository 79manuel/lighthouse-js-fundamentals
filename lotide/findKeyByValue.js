const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅ ✅ ✅  Assertion passed: ${actual} === ${expected}`)
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${actual} !== ${expected}`)
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function (obj, value){
  let keys = Object.keys(obj);
  let result = '';
  for (const key of keys) {
    if (value === obj[key]){
      result = key;
      return key;
    }
  }
}
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);