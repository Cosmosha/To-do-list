import './style.css';
import editTask from './modules/editInput.js';
import TaskList from './modules/render.js';
import TaskAdd from './modules/addTask.js';
import DeleteTodo from './modules/removeTask.js';
import TodoNotification from './modules/taskStatus.js';

class TaskTodo {
    static getTodoTask = () => {
      TaskList.render();
      DeleteTodo.reTodo();
      DeleteTodo.deleteCompleted();
      editTask();
      TaskAdd.addTask();
      TodoNotification.statusBadge();
    }
}
export default TaskTodo;

window.onload = () => {
  TaskTodo.getTodoTask();
};