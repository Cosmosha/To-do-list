import TodoStorage from './saveToDB.js';
import TaskList from './render.js';
import editTask from './editInput.js';

const inputTask = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
let id = 0;

class TaskAdd {
    static addTask = () => {
      if (inputTask.value !== '') {
        const description = inputTask.value;
        const completed = false;

        let TaskCollection = [];
        TaskCollection = TodoStorage.loadTask();

        id = TaskCollection.length + 1;
        const task = { description, completed, id };
        TaskCollection.push(task);
        TodoStorage.saveTask(TaskCollection);
        inputTask.value = '';
        inputTask.focus();
      }
    };
}

inputTask.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    TaskAdd.addTask();
    TaskList.render();
    editTask();
  }
});

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  TaskAdd.addTask();
  TaskList.render();
  editTask();
});

export default TaskAdd;