import TodoStorage from './saveToDB.js';
import TaskList from './render.js';
import editTask from './editInput.js';

const itemList = document.getElementById('itemList');
class DeleteTodo {
  static removeTask(id) {
    let TaskCollection = TodoStorage.loadTask();
    TaskCollection = TaskCollection.filter((item) => item.id !== +id);
    TaskCollection = TaskCollection.map((todo, index) => ({ ...todo, id: index + 1 }));
    TodoStorage.saveTask(TaskCollection);
  }

    static reTodo = () => {
      let id = 0;
      itemList.addEventListener('click', (event) => {
        if (event.target.classList.contains('items')) {
          id = event.target.getAttribute('data-id');
          DeleteTodo.removeTask(id);
          TaskList.render();
          editTask();
        }
      });
    };
}

export default DeleteTodo;