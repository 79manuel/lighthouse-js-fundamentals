const assertEqual = require('./assertEqual');

function tail(array) {
  return array.slice(array[0]);
}

module.exports = tail;
