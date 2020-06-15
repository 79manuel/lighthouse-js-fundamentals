const _ = require('../index');
const expect = require('chai').expect;

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

describe("#findKey", () => {
  it("should return an object", () => {
    expect(_.findKey(obj, x => x.stars === 2)).to.be.an('string');
  })
  it("should return 'noma' from object when stars = 2", () => {
    expect(_.findKey(obj, x => x.stars === 2)).to.equal('noma');
  });
})
