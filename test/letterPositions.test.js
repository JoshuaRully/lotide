const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("letterPositions function tests", () => {
  it("should return return [1] for 'hello'", () => {
    assert.deepEqual(letterPositions('hello').e, [1]);
  });

  it("should return return [2, 3] for 'coffee'", () => {
    assert.deepEqual(letterPositions('coffee').f, [2, 3]);
  });
});