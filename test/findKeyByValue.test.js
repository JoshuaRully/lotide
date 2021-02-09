const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("findKeyByValue tests", () => {
  const showsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it("should return 'drama' for 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(showsByGenre, 'The Wire'), 'drama');
  });

  it("should return 'undefined' for 'That `70s Show'", () => {
    assert.strictEqual(findKeyByValue(showsByGenre, 'That `70s Show'), undefined);
  });
});