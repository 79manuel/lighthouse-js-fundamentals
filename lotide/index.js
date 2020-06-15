const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const without = require('./without');
const flatten = require('./flatten');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const takeUntil = require('./takeUntil');
const findKey = require('./findKey');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  without: without,
  flatten: flatten,
  countOnly: countOnly,
  countLetters: countLetters,
  letterPositions: letterPositions,
  findKeyByValue: findKeyByValue,
  takeUntil: takeUntil,
  findKey: findKey,
  eqObjects: eqObjects,
  assertObjectsEqual: assertObjectsEqual
};

