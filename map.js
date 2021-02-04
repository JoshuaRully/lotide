const words = ['crimp', 'sloper', 'pinch', 'jug', 'gaston'];

const map = (arr, callback) => {
  const results = [];
  for (let element of arr) {
    results.push(callback(element));
  }
  return results;
}
// test functions below
const eqArrays = (arrayOne, arrayTwo) => {
  return Array.isArray(arrayOne) && Array.isArray(arrayTwo) && arrayOne.length === arrayTwo.length && arrayOne.every((val, index) => val === arrayTwo[index]);
};

const assertArraysEqual = (arrayOne, arrayTwo) => {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

// test cases below
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.charAt(1));
const results3 = map(words, word => word.concat('s'));
const results4 = map(words, word => word);
assertArraysEqual(results1, ['c', 's', 'p', 'j', 'g']);
assertArraysEqual(results2, ['r', 'l', 'i', 'u', 'a']);
assertArraysEqual(results3, ['crimps', 'slopers', 'pinchs', 'jugs', 'gastons']);
assertArraysEqual(results4, ['crimp', 'sloper', 'pinch', 'jug', 'gaston']);