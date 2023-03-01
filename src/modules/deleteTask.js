import DeleteTodo from './removeTask.js';

const itemList = document.getElementById('itemList');
class RemoveTask {
    static removeTodo = () => {
      let id = 0;
      itemList.addEventListener('click', (event) => {
        if (event.target.classList.contains('items')) {
          id = event.target.getAttribute('data-id');
          DeleteTodo.removeTask(id);
        }
      });
    };
}
export default RemoveTask;