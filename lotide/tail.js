const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅ ✅ ✅  Assertion passed: ${actual} === ${expected}`)
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${actual} !== ${expected}`)
  }
};

function tail(array) {
  return array.slice(array[0]);
}

assertEqual(tail([5,6,7]), [6, 7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);