const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅ ✅ ✅  Assertion passed: ${actual} === ${expected}`)
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${actual} !== ${expected}`)
  }
};

const findKey = function (obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

const obj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }

assertEqual(findKey(obj, x => x.stars === 2), 'noma'); // => "noma"