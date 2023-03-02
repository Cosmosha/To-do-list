import TodoStorage from './saveToDB.js';

class TaskList {
  static render() {
    const itemList = document.getElementById('itemList');
    const taskCol = TodoStorage.loadTask();
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
}

export default TaskList;