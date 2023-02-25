const render = (item, TaskCollection) => {
  item.innerHTML = TaskCollection.map((task) => `<li class="items">
    <input class="check" type="checkbox"/>
    <input type="text" name="addTask" placeholder="${task.description}" class="edit"/>
    <span class="icon">
    <i class="iconImg fa fa-ellipsis-v"></i></span>
    </li>
    `).join('');
};
export default render;