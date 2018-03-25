class TaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  log() {
    this.tasks.forEach(task => console.log(task));
  }

  dump() {
    console.log(this.tasks);
  }
}

export default TaskCollection;
