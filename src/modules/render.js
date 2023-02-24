const render = (item, inputTask, task) => {
  item.innerHTML += `<li class="items">
<label for="items"><input class="check" type="checkbox">${task.description}<span class="icon">
<i class="fa fa-ellipsis-v" id="addicon"></i></span></label>
</li>`;
  inputTask.value = '';
  inputTask.focus();
};
export default render;