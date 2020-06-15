const expect = require('chai').expect;
const _ = require('../index');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {
  it("should return boolean", () => {
    expect(_.eqObjects(ab, ba)).to.be.a('boolean');
  })
  it("returns true for ab = { a: \"1\", b: \"2\" } and ba = { b: \"2\", a: \"1\" }", () => {
    expect(_.eqObjects(ab, ba));
  });
  it("returns false for ab = { a: \"1\", b: \"2\" } and abc = { a: \"1\", b: \"2\", c: \"3\" }", () => {
    expect(_.eqObjects(ab, abc));
  });
  it("returns true for cd = { c: \"1\", d: [\"2\", 3] } and dc = { d: [\"2\", 3], c: \"1\" }", () => {
    expect(_.eqObjects(cd, dc));
  });
  it("returns false for cd = { c: \"1\", d: [\"2\", 3] } and cd2 = { c: \"1\", d: [\"2\", 3, 4] }", () => {
    expect(_.eqObjects(cd, cd2));
  });
})

