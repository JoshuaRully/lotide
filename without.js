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

// tests below
assertArraysEqual(without([1, 2, 3, 4, 5, 3, 1, 4], [3, 1]), [2, 4, 5, 4]);