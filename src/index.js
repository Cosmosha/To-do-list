import './style.css';
import addTask from './modules/addTask.js';
import saveTask from './modules/saveToDB.js';

import render from './modules/render.js';

class TaskTodo {
    taskName = 'TaskCollection';

    constructor() {
      this.TaskCollection = [];
      this.inputTask = document.getElementById('todoInput');
      this.addButton = document.getElementById('addButton');
      this.itemList = document.getElementById('itemList');
      this.clearBtn = document.getElementById('clear');

      // Add Task on press Enter
      this.inputTask.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          this.addTodoTask();
          this.showTodoTasks();
        }
      });

      // Add Task on icon click
      this.addButton.addEventListener('click', () => {
        this.addTodoTask();
      });

      // Clear Task on icon click
      this.clearBtn.addEventListener('click', () => {
        this.itemList.innerHTML = '';
      });
    }

    // ─── Methods ─────────────────────────────────────────────────────────

    addTodoTask = () => {
      if (this.inputTask.value !== '') {
        addTask(this.inputTask, this.TaskCollection);
        saveTask(this.TaskCollection, this.taskName);
      }
    }

    showTodoTasks = () => {
      render(this.itemList);
    }
}

window.onload = () => {
  const action = new TaskTodo();
  action.showTodoTasks();
};