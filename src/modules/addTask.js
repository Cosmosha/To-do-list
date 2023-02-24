const addTask = (inputTask, TaskCollection) => {
  const task = {
    description: inputTask.value,
    completed: false,
  };
  TaskCollection.push(task);
  inputTask.value = '';
  inputTask.focus();
};
export default addTask;