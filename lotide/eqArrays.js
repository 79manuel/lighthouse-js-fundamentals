const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;