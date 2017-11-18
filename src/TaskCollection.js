class TaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  log() {
    this.tasks.forEach(task => console.log(task));
  }
}

class Task {}

new TaskCollection([
    new Task, new Task, new Task
  ]).log();

function defaultDiscountRate() {
  return .10;
}

function applyDiscount(cost, discount = defaultDiscountRate()) {
  return cost - (cost * discount);
}

console.log(applyDiscount(100));