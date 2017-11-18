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

function getPerson() {
  let name = 'John';
  let age = 25;

  return {
    name,
    age,
    greet() {
      return `Hello, ${this.name}`;
    }
  }
}

console.log(getPerson().greet());

function getData({
  results,
  count
}) {
  console.log(results, count);
}

getData({
  name: 'John Doe',
  age: 23,
  results: ['foo', 'bar'],
  count: 30
});