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

const without = (arr, filterArr) => {
  if (eqArrays(arr, filterArr)) {
    return arr;
  } else if (eqArrays(arr, filterArr) === false) {
    const filtered = arr.filter(
      function(e) {
        return this.indexOf(e) < 0;
      },
      filterArr
    );
    return filtered;
  }
};

module.exports = without;

// tests below
assertArraysEqual(without([1, 2, 3, 4, 5, 3, 1, 4], [3, 1]), [2, 4, 5, 4]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);