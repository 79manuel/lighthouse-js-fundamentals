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

const without = function(source, itemsToRemove) {
  newArray = source.filter(item => !itemsToRemove.includes(item));
  console.log(newArray)
}

without([1, 2, 3], [1])
without(["1", "2", "3"], [1, 2, "3"])