const Task = require("../models/task");
const { getData, saveData, deleteData } = require("../helpers/fileManager");

class TaskRepository {
  _tasks = null;

  constructor() {
    const data = getData();
    if (data) {
      this._tasks = data;
    } else {
      this._tasks = [];
    }
  }

  getAllTask() {
    return this._tasks;
  }

  /**
   *
   * @param {String} title
   *
   * TODO: Nos falta persistir datos en archivo
   *
   */
  createTask(title) {
    const task = new Task(title);
    this._tasks.push(task);
    saveData(this._tasks);
  }

  deleteTask(title) {
    const taskToDelete = this._tasks.find((x) => x.title === title);
    const deleteTask = this._tasks.filter((x) => x !== taskToDelete);
    this._tasks = deleteTask;
    deleteData(this._tasks);
  }
}

module.exports = TaskRepository;
