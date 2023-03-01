/* eslint-disable no-console */
import TodoStorage from './saveToDB.js';
// import TaskTodo from '../index.js';
// import TaskList from './render.js';

let TaskCollection = TodoStorage.loadTask();
class DeleteTodo {
    static removeTask(id) {
        TaskCollection = TaskCollection.filter((item) => item.id !== +id);
        TodoStorage.saveTask(TaskCollection);
        // console.log(TaskCollection);
    }
}

export default DeleteTodo;