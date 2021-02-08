const assertEqual = require('./assertEqual');

const head = (array) => {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([9]), 9);
assertEqual(head([]), undefined);