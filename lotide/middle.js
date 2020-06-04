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

function assertArraysEqual(array1, array2, expected){
  let arrayEq = eqArrays(array1, array2);
  if (arrayEq === expected){
    console.log(`✅ ✅ ✅  Assertion passed: ${arrayEq} === ${expected}`)
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${arrayEq} !== ${expected}`)
  }
}

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
middle([1,2,3,4]);
middle([1,2,3]);
middle([1,2]);