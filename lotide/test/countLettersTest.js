const _ = require('../index');
const expect  = require('chai').expect;

let sentence = "lighthouse in the house";

describe("#countLetters", () => {
  it("returns an object with the number of occurrences for each", () => {
    expect(_.countLetters(sentence, {"l": true, "i": true, "g": true, "h": true})).to.be.an('object');
  });
  it ("return value 1 for letter 'l", () => {
    expect(_.countLetters(sentence, {"l": true, "i": true, "g": true, "h": true})['l']).to.equal(1);
  });
  it ("return value 2 for letter 'i", () => {
    expect(_.countLetters(sentence, {"l": true, "i": true, "g": true, "h": true})['i']).to.equal(2);
  });
  it ("return value 1 for letter 'g", () => {
    expect(_.countLetters(sentence, {"l": true, "i": true, "g": true, "h": true})['g']).to.equal(1);
  });
  it ("return value 4 for letter 'h", () => {
    expect(_.countLetters(sentence, {"l": true, "i": true, "g": true, "h": true})['h']).to.equal(4);
  })
})