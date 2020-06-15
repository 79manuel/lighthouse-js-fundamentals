const _ = require('../index');
const expect = require('chai').expect;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("@findKeyByValue", () => {
  it("return genre 'drama' from 'The Wire TV Show'", () => {
    expect(_.findKeyByValue(bestTVShowsByGenre,"The Wire")).to.equal("drama");
  });
  it("return 'undefined' from 'That '70s Show' ", () => {
    expect(_.findKeyByValue(bestTVShowsByGenre,"That '70s Show")).to.equal(undefined);
  });
})
