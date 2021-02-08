const tail = require('../tail');
const assert = require('chai').assert;

describe("tail function tests", () => {
  it("should return two elements from 3 element array", () => {
    assert.strictEqual(tail(['Hello', 'Lighthouse', 'Labs']).length, 2);
  });

  it("should return an array with its first element being 'Lighthouse'", () => {
    assert.strictEqual(tail(['Hello', 'Lighthouse', 'Labs'])[0], 'Lighthouse');
  });

  it("should return an array with its second element being 'Labs'", () => {
    assert.strictEqual(tail(['Hello', 'Lighthouse', 'Labs'])[1], 'Labs');
  });

  it("should return an array with its first element being 'Lighthouse'", () => {
    assert.strictEqual(tail(['Hello', 'Lighthouse', 'Labs'])[0], 'Lighthouse');
  });
});