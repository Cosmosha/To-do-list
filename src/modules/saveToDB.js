const saveTask = (TaskCollection, taskName) => {
  window.localStorage.setItem(taskName, JSON.stringify(TaskCollection));
};

export default saveTask;