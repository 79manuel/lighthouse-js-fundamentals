const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let objEqual = eqObjects(actual, expected);
  if(objEqual) {
    console.log(`✅ ✅ ✅  Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ ❌ ❌  Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

const obj1 = {
  val1: ["hi", "hey"],
  val2: ["hey", "hola"]
}
const obj2 = {
  val1: ["hi", "hey"],
  val2: ["hey", "hola"]
}
