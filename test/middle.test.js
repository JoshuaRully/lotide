const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// test cases below
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([]), []);