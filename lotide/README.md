# Lotide
A clone of the lodash JavaScript library to practice creating various types of functions using JS.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gorrinoloco/lotide`

**Require it:**

`const _ = require('@gorrinoloco/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
- [eqArrays()](https://github.com/79manuel/lighthouse-js-fundamentals/blob/master/lotide/eqArrays.js) -> Implements a function that can compare two arrays. It takes in two arrays and returns true or false, based on a perfect match.
- [assertArraysEqual()](https://github.com/79manuel/lighthouse-js-fundamentals/blob/master/lotide/assertArraysEqual.js) -> It takes in two arrays and console.log an appropriate message to the console.
- [without()](https://github.com/79manuel/lighthouse-js-fundamentals/blob/master/lotide/without.js) -> It returns a subset of a given array, removing unwanted elements.
- [flatten()](https://github.com/79manuel/lighthouse-js-fundamentals/blob/master/lotide/flatten.js) -> It takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
- [middle()](https://github.com/79manuel/lighthouse-js-fundamentals/blob/master/lotide/middle.js) -> It returns an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
- [countOnly()](https://github.com/79manuel/lighthouse-js-fundamentals/blob/master/lotide/countOnly.js) -> Given an object and a list of values, it returns the number of occurrences of each.
- [countLetters()](https://github.com/79manuel/lighthouse-js-fundamentals/blob/master/lotide/countLetters.js) -> Given a string of letters, it returns an object with the number of occurrences for each.
- [letterPositions()](https://github.com/79manuel/lighthouse-js-fundamentals/blob/master/lotide/letterPositions.js) -> It returns all the indices (zero-based positions) in the string where each character is found.
- [findKeyByValue()](https://github.com/79manuel/lighthouse-js-fundamentals/blob/master/lotide/findKeyByValue.js) -> It scans the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
- [eqObjects()](https://github.com/79manuel/lighthouse-js-fundamentals/blob/master/lotide/eqObjects.js) -> assesses whether two objects are equal (returns true or false).
- [assertObjectsEqual()](https://github.com/79manuel/lighthouse-js-fundamentals/blob/master/lotide/assertObjectsEqual.js) -> It takes in two objects and console.log an appropriate message to the console.
- [takeUntil()](https://github.com/79manuel/lighthouse-js-fundamentals/blob/master/lotide/takeUntil.js) -> It collects items from a provided array until the callback provided returns a truthy value.
- [findKey()](https://github.com/79manuel/lighthouse-js-fundamentals/blob/master/lotide/findKey.js) -> It takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
