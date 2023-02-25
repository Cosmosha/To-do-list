/* eslint-disable no-console */
import './style.css';
import addTask from './modules/addTask.js';
import saveTask from './modules/saveToDB.js';
import render from './modules/render.js';
import editTask from './modules/editInput.js';

class TaskTodo {
    taskName = 'TaskCollection';

    constructor() {
      this.inputTask = document.getElementById('todoInput');
      this.addButton = document.getElementById('addButton');
      this.itemList = document.getElementById('itemList');
      this.clearBtn = document.getElementById('clearAll');
      this.TaskCollection = this.getTodoTask();
      this.removeBtn = document.querySelectorAll('.fa-trash');

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
        this.showTodoTasks();
      });

      // Clear All Compelted Tasks on click
      this.clearBtn.addEventListener('click', () => {
        this.TaskCollection = this.TaskCollection.filter((task) => !task.completed);
        saveTask(this.TaskCollection, this.taskName);
        this.showTodoTasks();
      });

      // Clear Task on click
    }

    // ─── Methods ─────────────────────────────────────────────────────────

    addTodoTask = () => {
      if (this.inputTask.value !== '') {
        addTask(this.inputTask, this.TaskCollection);
        saveTask(this.TaskCollection, this.taskName);
      } else {
        // eslint-disable-next-line no-alert
        alert('Field is empty. Please enter a task');
      }
    }

    // Save Task To LocalStorage =================================
    getTodoTask = () => {
      if (localStorage.getItem(this.taskName) === null) {
        return [];
      }
      return JSON.parse(localStorage.getItem(this.taskName));
    }

    // showTask - editTask To LocalStorage =================================
    showTodoTasks = () => {
      render(this.itemList, this.TaskCollection);
      editTask(this.TaskCollection, this.taskName);
    }

    // Remove Task From LocalStorage =================================

    deleteTodoTask = (item) => {
      this.TaskCollection = this.TaskCollection.filter((todo, index) => item !== index);
      saveTask(this.TaskCollection, this.taskName);
      this.showTodoTasks();
    }

    remeTodoTasks = () => {
      // removeTask(this.TaskCollection, this.taskName);
    }
}

export default TaskTodo;

window.onload = () => {
  const action = new TaskTodo();
  action.showTodoTasks();
};