import './style.css';

const list = document.querySelector('.list');
const toDos = [
  {
    task: 'Join morning session meeting',
    done: false,
    index: 1,
  },
  {
    task: 'Join my coding partners',
    done: false,
    index: 2,
  },
  {
    task: 'Have a lunch break',
    done: false,
    index: 3,
  },
];

function addTask(toDos) {
  let tasks = '';
  toDos.forEach((item) => {
    tasks += `<li><input type="checkbox" class="tick"><input type="text" class="list-input" value="${item.task}" disabled >
    <i class="fa fa-ellipsis-vertical"></i></li>`;
  });
  list.innerHTML = tasks;
}

addTask(toDos);