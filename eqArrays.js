const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arrayOne, arrayTwo) => {
  return Array.isArray(arrayOne) && Array.isArray(arrayTwo) && arrayOne.length === arrayTwo.length && arrayOne.every((val, index) => val === arrayTwo[index]);
};

// tests below
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 6, 3], [1, 2, 3]), false);
assertEqual(eqArrays([2, 5, 3], [2, "5", 3]), false);
assertEqual(eqArrays([9, 6, 4], [9, 6, 4]), true);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
