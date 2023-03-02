import './style.css';
import editTask from './modules/editInput.js';
import TaskList from './modules/render.js';
import TaskAdd from './modules/addTask.js';
import DeleteTodo from './modules/removeTask.js';

class TaskTodo {
    static getTodoTask = () => {
      TaskList.render();
      DeleteTodo.reTodo();
      editTask();
      TaskAdd.addTask();
    }
}
export default TaskTodo;

window.onload = () => {
  TaskTodo.getTodoTask();
};