// const assertEqual = require('assertEqual');
// const eqArrays = require('eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let equivalent = false;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let property in object1) {
      for (let property2 in object2) {
        if (property === property2) {   //both keys are the same
          if (typeof object1[property] === "object" || typeof object2[property] === "object") { //when either obj1 or obj2 value is equal to non-primitive type (array or obj)
            if (object1[property].length === object2[property].length) {  //if array/ objects are equal length
              for (let value of object1[property]) {
                for (let value2 of object2[property]) {
                  if (value === value2) { //if array element is the same
                    equivalent = true;
                  } else {
                    equivalent = false;
                  }
                }
              }
            } else {
              equivalent = false;
            }
          } else {  //when equal to primitive type
            if (object1[property] === object2[property]) {  //both values are the same
              equivalent = true;
            } else {
              equivalent = false;
            }
          }
        }
      }
    }
  } return equivalent;
};

module.exports = eqObjects;

