/* eslint-disable no-console */
import TodoStorage from './saveToDB.js';
// import TaskTodo from '../index.js';
// import TaskList from './render.js';

let TaskCollection = TodoStorage.loadTask();
class DeleteTodo {
  static removeTask(id) {
    TaskCollection = TaskCollection.filter((item) => item.id !== +id);
    TaskCollection = TaskCollection.map((todo, index) => ({ ...todo, id: index + 1 }));
    TodoStorage.saveTask(TaskCollection);
    window.location.reload();
    // console.log(TaskCollection);
  }
}

export default DeleteTodo;