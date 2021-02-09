const eqObects = require('../eqObjects');
const assert = require('chai').assert;

describe("eqObjects function tests", () => {
  it("should return true for (ab, ba)", () => {
    const ab = { a: "1", b: "2"};
    const ba = { b: "2", a: "1"};
    assert.deepEqual(eqObects(ab, ba), true);
  });

  it("should return false for (ab, abc)", () => {
    const ab = { a: "1", b: "2"};
    const abc = {a: "1", b: "2", c: "3"}
    assert.deepEqual(eqObects(ab, abc), false);
  });

  it("should return true for (cd, dc)", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.deepEqual(eqObects(cd, dc), true);
  });

  it("should return true for (cd, dc)", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3] };
    assert.deepEqual(eqObects(cd, cd2), true);
  });
});