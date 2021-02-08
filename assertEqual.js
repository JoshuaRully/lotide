// Function implementation
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

// tests below
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("coffee", "tea");
// assertEqual("crimp", "sloper");
// assertEqual(456, 456);
// assertEqual("dog", "dog");