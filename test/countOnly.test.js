const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("countOnly function tests", () => {
  const firstNames = [
    'Karl',
    'Salima',
    'Agouhanna',
    'Fang',
    'Kavith',
    'Jason',
    'Salima',
    'Fang',
    'Joe'
  ];
  it("returns { 'Jason': 1 } for { 'Jason': true }", () => {
    assert.deepEqual(countOnly(firstNames, { 'Jason': true } ), { 'Jason': 1 });
  });

  it("returns {} for { 'Karima': true }", () => {
    assert.deepEqual(countOnly(firstNames, { 'Karima': true } ), {});
  });

  it("returns { 'Fang': 2 } for { 'Fang': true }", () => {
    assert.deepEqual(countOnly(firstNames, { 'Fang': true } ), { 'Fang': 2 });
  });

  it("returns {} for { 'Agouhanna': true }", () => {
    assert.deepEqual(countOnly(firstNames, { 'Agouhanna': false } ), {});
  });
});