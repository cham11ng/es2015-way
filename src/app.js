/*
  rest operator
  used for destructuring arrays and objects.
 */
function sum(...numbers) {
  return numbers.reduce((before, after) => before + after);
}

/*
  spread operator
 */
function subtract(first, second) {
  return first - second;
}

let numbers = [5, 2];

console.log(sum(1, 2, 3, 4, 5));
console.log(subtract(...numbers));