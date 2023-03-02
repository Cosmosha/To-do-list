/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
// import TaskTodo from '../index.js';
import TodoStorage from './saveToDB.js';
import DeleteTodo from './removeTask.js';

const itemList = document.getElementById('itemList');
const taskCol = TodoStorage.loadTask();
class TaskList {
  static render() {
    // const taskCol = TodoStorage.loadTask();
    const displayTask = taskCol.map((task) => ` <li class="items" data-id="${task.id}">
        <input class="check" type="checkbox"/>
        <input type="text" name="addTask" placeholder="${task.description}" class="edit" id="edit"/>
        <span class="icon">
        <i class="iconImg fa fa-ellipsis-v"></i>
       </span>
       <span class="icon" id="trash">
       <i class="iconImg fa fa-trash"></i>
      </span>
        </li>`);
    itemList.innerHTML = displayTask.join('');
  }

    static reTodo = () => {
      let id = 0;
      itemList.addEventListener('click', (event) => {
        if (event.target.classList.contains('items')) {
          id = event.target.getAttribute('data-id');
          console.log(id);
          DeleteTodo.removeTask(id);
          // TaskTodo.getTodoTask();
        }
      });
    };
}

export default TaskList;