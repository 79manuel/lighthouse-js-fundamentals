const _ = require('../index');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("should return [[1, 2, 3] = [1, 2, 3]", () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return [[1, 2, 3] != [3, 2, 1]", () => {
    assert.deepEqual(_.eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("should return [\"1\", \"2\", \"3\"] = [\"1\", \"2\", \"3\"]", () => {
    assert.deepEqual(_.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it("should return [\"1\", \"2\", \"3\"] = [\"1\", \"2\", 3]", () => {
    assert.deepEqual(_.eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
})