const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("removes [1] from [1, 2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]));
  });
  it("removes [1, 2, \"3\"] from [\"1\", \"2\", \"3\"]", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]));
  });
})
