import TodoStorage from './saveToDB.js';

const checkBox = document.getElementById('check');
const TaskCol = TodoStorage.loadTask();
class TaskStatus {
    static checkTask() {
        const id = 0;
        checkBox.addEventListener('click', () => {
            console.log('worling');
        });
    }
}
export default TaskStatus;