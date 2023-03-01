/* eslint-disable no-console */
import TaskTodo from '../index.js';
import DeleteTodo from './removeTask.js';
import TaskList from './render.js';

const itemList = document.getElementById('itemList');
class RemoveTask {
    static removeTodo = () => {
        let id = 0;
        itemList.addEventListener('click', (event) => {
            if (event.target.classList.contains('items')) {
                id = event.target.getAttribute('data-id');
                console.log(id);
                DeleteTodo.removeTask(id);
                TaskTodo.getTodoTask();
            }
        });
    };
}
export default RemoveTask;