const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) return key;
  }
};

// test function below
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// test cases below
const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

const results2 = findKey({
  "John":       { trophies: 1 },
  "Mark":       { trophies: 3 },
  "Bridget":    { trophies: 2 },
  "Stephanie":  { trophies: 5 },
  "Magnus":     { trophies: 2 },
  "Olga":       { trophies: 3 }
}, x => x.trophies === 5);

const results3 = findKey({
  "Imogen": { treesPlanted: 2500 },
  "Marcus": { treesPlanted: 3000 },
  "Sara":   { treesPlanted: 2200 },
  "Emil":   { treesPlanted: 1500 },
  "Magnus": { treesPlanted: 1200 },
  "Britta": { treesPlanted: 1000 }
}, x => x.treesPlanted > 2500);

assertEqual(results1, 'noma');
assertEqual(results2, 'Stephanie');
assertEqual(results3, 'Marcus');