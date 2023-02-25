/* eslint-disable no-console */
import { inputTask } from './domSelector.js';
// import TaskTodo from '../index.js';

const addTask = (TaskCollection) => {
    if (inputTask.value !== '') {
        const task = {
            discription: inputTask.value,
            completed: false,
        };
        TaskCollection.push(task);
        inputTask.value = '';
        inputTask.focus();
    } else {
        // eslint-disable-next-line no-alert
        alert('Field is empty. Please enter a task');
    }
};

export default addTask;