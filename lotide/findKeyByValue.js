const assertEqual = require('./assertEqual');

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

module.exports = findKeyByValue;
