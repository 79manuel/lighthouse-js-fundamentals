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

function assertArraysEqual(arrA, arrB){
  let arrayEq = eqArrays(arrA, arrB);
  if (arrayEq){
    console.log(`✅ ✅ ✅  Assertion passed: ${arrA} === ${arrB}`)
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${arrA} !== ${arrB}`)
  }
}

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
  console.log(results);
  return results;
};

assertArraysEqual(letterPositions('Lighthouse labs').s, [8, 14]);