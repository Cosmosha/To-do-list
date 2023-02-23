import './style.css';

const tasks = [{
  description: 'Coding milestone projects',
  completed: false,
  index: 1,
},
{
  description: 'Learning JS ES6',
  completed: false,
  index: 2,
},
{
  description: 'Attending morning session meeting',
  completed: false,
  index: 3,
},
{
  description: 'Going for lunch break',
  completed: false,
  index: 4,
},
];

const itemList = document.getElementById('addItem');

function item() {
  itemList.innerHTML = tasks.map((task) => `<li class="items">
    <label for="items"><input class="check" type="checkbox">${task.description}<span class="icon"><i class="fa fa-ellipsis-v" id="addicon"></i></span></label>
</li>`).join();
}
window.onload = () => {
  item();
};