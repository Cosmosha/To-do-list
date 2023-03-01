/* eslint-disable import/no-cycle */

import TodoStorage from './saveToDB.js';
import TaskTodo from '../index.js';
import TaskList from './render.js';
import editTask from './editInput.js';

const inputTask = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
let id = 0;
const addTask = () => {
  if (inputTask.value !== '') {
    const getInput = inputTask.value;
    const completed = false;

    let TaskCollection = [];
    TaskCollection = TodoStorage.loadTask();
    let get = 0;

    for (let i = 0; i < TaskCollection.length; i += 1) {
      get += 1;
    }
    id = get + 1;
    const task = new TaskTodo(getInput, completed, id);
    TaskCollection.push(task);
    TodoStorage.saveTask(TaskCollection);
    inputTask.value = '';
    inputTask.focus();
  }
};

inputTask.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addTask();
    TaskList.render();
    editTask();
  }
});

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  addTask();
  TaskList.render();
  editTask();
});

export default addTask;