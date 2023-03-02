const getName = 'TaskCollection';
class TodoStorage {
    static taskName = `${getName}`;

    static saveTask = (TaskCollection) => {
      window.localStorage.setItem(this.taskName, JSON.stringify(TaskCollection));
    };

    static loadTask = () => {
      if (window.localStorage.getItem(this.taskName) === null) {
        return [];
      }
      return JSON.parse(window.localStorage.getItem(this.taskName));
    }
}

export default TodoStorage;