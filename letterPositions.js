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

const letterPositions = (string) => {
  const results = {};
  string = string.toLowerCase().split("");

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      return results;
    } else if (results[string[i]]) {
      results[string[i]].push(i);
    } else {
      results[string[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;

// tests below
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("coffee").f, [2, 3]);