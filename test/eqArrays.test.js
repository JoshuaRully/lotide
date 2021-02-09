const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("eqArrays function tests", () => {
  it("should return true for ([1, 2, 3] [1, 2, 3])", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("should return false for ([1, 6, 3] [1, 2, 3])", () => {
    assert.deepEqual(eqArrays([1, 6, 3], [1, 2, 3]), false);
  });

  it("should return false for ([2, 5, 3] [2, '5', 3])", () => {
    assert.deepEqual(eqArrays([2, 5, 3], [2, '5', 3]), false);
  });

  it("should return false for ([1, 2] [1, 2, 3])", () => {
    assert.deepEqual(eqArrays([1, 2], [1, 2, 3]), false);
  });

  it("should return false for ([] [1, 2, 3])", () => {
    assert.deepEqual(eqArrays([], [1, 2, 3]), false);
  });

  it("should return true for ([] [])", () => {
    assert.deepEqual(eqArrays([], []), true);
  });
});







// tests below
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 6, 3], [1, 2, 3]), false);
// assertEqual(eqArrays([2, 5, 3], [2, "5", 3]), false);
// assertEqual(eqArrays([9, 6, 4], [9, 6, 4]), true);
// assertEqual(eqArrays([1, 2], [1, 2, 3]), false);