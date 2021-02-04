const eqObjects = (obj1, obj2) => {
  let arr1 = Object.keys(obj1);
  let arr2 = Object.keys(obj2);
  
  if (arr1.length !== arr2.length) {
    return false;
  }

  const eqArrays = (arrayOne, arrayTwo) => {
    return Array.isArray(arrayOne) && Array.isArray(arrayTwo) && arrayOne.length === arrayTwo.length && arrayOne.every((val, index) => val === arrayTwo[index]);
  };
  
  for (let key in obj1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});
assertObjectsEqual({a: 2, b: ["5", 2]}, {a: 1, b: 2});