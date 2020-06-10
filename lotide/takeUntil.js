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

function eqArrays(array1, array2){
  let boolean = true;
  if (array1.length !== array2.length){
    boolean = false;
  }
  for (let item of array1){
    if (array1[item] !== array2[item]){
      boolean = false;
    }
  } return boolean;
}

function assertArraysEqual(array1, array2, expected){
  let arrayEq = eqArrays(array1, array2);
  if (arrayEq === expected){
    console.log(`✅ ✅ ✅  Assertion passed: ${arrayEq} === ${expected}`)
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${arrayEq} !== ${expected}`)
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual([1, 2, 5, 7, 2], takeUntil(data1, x => x < 0), true);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual( takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"], true);
