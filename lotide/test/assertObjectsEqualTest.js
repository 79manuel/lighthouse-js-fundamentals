const _ = require('../index');
const assert = require('chai').assert;

const obj1 = {
  val1: ["hi", "hey"],
  val2: ["hey", "hola"]
}
const obj2 = {
  val1: ["hi", "hey"],
  val2: ["hey", "hola"]
}

describe("#assertObjectsEqual", () => {
  it("should return obj1 === obj2", () => {
    assert.strictEqual(_.assertObjectsEqual(obj1, obj2));
  })
})