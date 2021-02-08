// Function implementation
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function below
const countLetters = (string) => {
  let str = string.split(" ").join("");
  const results = {};

  for (let i = 0; i < str.length; i++) {
    if (results[str[i]]) {
      results[str[i]] += 1;
    } else {
      results[str[i]] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
 
// test cases below
console.log(countLetters("lighthouse in the house"));
const testStr2 = "ddddfffjjooooo";

const result1 = countLetters(testStr2);

assertEqual(result1['d'], 4);
assertEqual(result1['f'], 3);
assertEqual(result1['j'], 2);
assertEqual(result1['o'], 5);