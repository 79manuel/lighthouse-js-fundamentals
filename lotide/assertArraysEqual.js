function eqArrays(array1, array2){
  let boolean = true;
  if (array1.length !== array2.length){
    boolean = false;
  }
  for (let item in array1){
    if (array1[item] !== array2[item]){
      boolean = false;
    }
  } return boolean;
}

const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅ ✅ ✅  Assertion passed: ${actual} === ${expected}`)
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${actual} !== ${expected}`)
  }
};

function assertArraysEqual(array1, array2, expected){
  let arrayEq = eqArrays(array1, array2);
  if (arrayEq === expected){
    console.log(`✅ ✅ ✅  Assertion passed: ${arrayEq} === ${expected}`)
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${arrayEq} !== ${expected}`)
  }
}
assertArraysEqual([1,2,3], [1,2,3], true);
assertArraysEqual([1,2,3], [1,2,'3'], true);

