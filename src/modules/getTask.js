const getTasks = (taskName) => {
  const saveTodo = window.localStorage.getItem(taskName);
  if (saveTodo) {
    return JSON.parse(saveTodo);
  }
  return [];
};
export default getTasks;