const head = require('../head');
const assertEqual = require('../assertEqual');

// tests below
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([9]), 9);
assertEqual(head([]), undefined);