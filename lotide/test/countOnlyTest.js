const expect = require('chai').expect;
const lotide = require('../index');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it("return value should be an object when countOnly is called", () => {
    expect(lotide.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })).to.be.an('object');
  });
  it("firstNames['Fang'] should equal 2", () => {
    expect(lotide.countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true})["Fang"]).to.equal(2);
  });
  it("firstNames['Karima'] should be undefined", () => {
    expect(lotide.countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true})["Karima"]).to.equal(undefined);
  });
  it("firstNames['Jason'] should equal 1", () => {
    expect(lotide.countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true})["Jason"]).to.equal(1);
  })
})

