/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */

import './style.css';
import editTask from './modules/editInput.js';
import TaskList from './modules/render.js';
import addTask from './modules/addTask.js';
import RemoveTask from './modules/deleteTask.js';

class TaskTodo {
  constructor(description, completed, id) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }

    static getTodoTask = () => {
      TaskList.render();
      RemoveTask.removeTodo();
      editTask();
      addTask();
    }
}
export default TaskTodo;

window.onload = () => {
  TaskTodo.getTodoTask();
};