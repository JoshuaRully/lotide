const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// tests below
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 6, 3], [1, 2, 3]), false);
assertEqual(eqArrays([2, 5, 3], [2, "5", 3]), false);
assertEqual(eqArrays([9, 6, 4], [9, 6, 4]), true);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);