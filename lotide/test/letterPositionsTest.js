const _ = require('../index');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("return index '[8, 14]' of letter 's' from 'Lighthouse Labs' ", () => {
    assert.deepEqual(_.letterPositions('Lighthouse labs').s, [8, 14]);
  });
})