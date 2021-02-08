# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install joshuarully/lotide`

**Require it:**

`const _ = require('joshuarully/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Returns the first element of an inputted array.
* `tail`: Returns all of the elements except the first in the inputted array.
* `middle`: Returns the middle element(s) of the inputted array.
* `countLetters`: Returns the number a specified letter appears in a string.
* `countOnly`: Returns the number a specified value occurs in an array.
* `eqArrays`: Verifies if two input arrays are strictly equal.
* `eqObjects`: Verfifies if two input objects are strictly equal.
* `findKey`: Finds a key in an object and allows a callback on that key:value.
* `findKeyByValue`: Returns a key when given an object and a value.
* `letterPositions`: Returns an array with specified letters indices in a given string.
* `map`: Loops through array applying any specified callback functions operations and returning a new modified array.
* `takeUntil`: Performs a callback on an arrays values until specified parameter is met and then returns a new modified array.
* `without`: Takes in two arrays and removes any specified values in the second from the first array and returns a modified array.