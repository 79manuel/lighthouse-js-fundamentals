const _ = require('../index');
const assert = require('chai').assert;
const expect = require('chai').expect;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = _.takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = _.takeUntil(data2, x => x === ',');

describe("#takeUntil", () => {
  it("should return an array", () => {
    expect(results1).to.be.an('array');
  });
  it("return [1, 2, 5, 7, 2] from [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    assert.deepEqual(results1, [1, 2, 5, 7, 2])
  });
  it("should return an array", () => {
    expect(results2).to.be.an('array');
  });
  it("should return [\"I've\", \"been\", \"to\", \"Hollywood\"] from " +
      "[\"I've\", \"been\", \"to\", \"Hollywood\", \",\", \"I've\", \"been\", \"to\", \"Redwood\"]", () => {
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"])
  })
})
