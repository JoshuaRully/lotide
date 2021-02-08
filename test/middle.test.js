const assert = require('chai').assert;
const middle = require('../middle');

describe("middle function tests", () => {
  it("should return [3, 4] from [1, 2, 3, 4, 5, 6]", () => {
    assert(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("should return [4] from [1, 2, 3, 4, 5, 6, 7]", () => {
    assert(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });

  it("should return [] from []", () => {
    assert(middle([]), []);
  });
});