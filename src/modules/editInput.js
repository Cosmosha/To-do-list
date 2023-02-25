/* eslint-disable no-console */
import saveTask from './saveToDB.js';
// import removeTask from './removeTask.js';

const editTask = (task, taskName) => {
  const editInput = document.querySelectorAll('.edit');
  const iconImg = document.querySelectorAll('.iconImg');

  for (let i = 0; i < editInput.length; i += 1) {
    editInput[i].addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        task[i].description = editInput[i].value;
        saveTask(task, taskName);
      }
    });
    editInput[i].addEventListener('focus', (e) => {
      e.stopPropagation();
      editInput[i].parentElement.style.backgroundColor = 'rgb(231, 227, 142) ';
      iconImg[i].classList.remove('fa-ellipsis-v');
      iconImg[i].classList.add('fa-trash');
    });
    editInput[i].addEventListener('blur', () => {
      editInput[i].parentElement.style.backgroundColor = 'white';
      iconImg[i].classList.add('fa-ellipsis-v');
      iconImg[i].classList.remove('fa-trash');
    });
    editInput[i].addEventListener('click', (e) => {
      e.stopPropagation();
      e.stopImmediatePropagation();
      // removeTask();
    });
  }
};

export default editTask;