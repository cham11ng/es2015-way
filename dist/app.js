"use strict";

/*
  rest operator
  used for destructuring arrays and objects.
 */
function sum() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (before, after) {
    return before + after;
  });
}

/*
  spread operator
 */
function subtract(first, second) {
  return first - second;
}

var numbers = [5, 2];

console.log(sum(1, 2, 3, 4, 5));
console.log(subtract.apply(undefined, numbers));