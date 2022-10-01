const input = document.querySelector('.input-event');
const list = document.querySelector('.list');
const ellipse = document.querySelectorAll('.fa-ellipsis-vertical');

const data = JSON.parse(localStorage.getItem('data')) || [];

// ToDoList object class
class EventObj {
  constructor(task, done, index) {
    this.task = task;
    this.done = done;
    this.index = index;
  }

  // Create event list
   static createEvent = () => {
     const showEvent = data.map((e, i) => `<li><input type="checkbox" class="tick"><input type="text" class="list-input" id="edit" value="${e.task}" >
    <i class="fa-solid fa-ellipsis-vertical"></i><i id="${i}" class="fa-solid fa-trash-can delete"></i></li>`).join('');
     list.innerHTML = showEvent;

     const del = document.querySelectorAll('.delete');
     del.forEach((e, i) => {
       e.addEventListener('click', () => {
         EventObj.delEvent(i);
       });
     });
     const tick = document.querySelectorAll('.tick');
     // Edit added event on UI
     const listData = document.querySelectorAll('.list-input');
     listData.forEach((e, i) => {
       e.addEventListener('change', () => {
         data[i].task = e.value;
         localStorage.setItem('data', JSON.stringify(data));
       });
     });

     for (let i = 0; i < ellipse.length; i += 1) {
       ellipse[i].addEventListener('click', () => {
         del[i].style.display = 'inline';
         ellipse[i].style.display = 'none';
       });
     }

     tick.forEach((e, i) => {
       e.addEventListener('change', () => {
         if (e.checked === true) {
           data[i].done = true;
         } else {
           data[i].done = false;
         }
         localStorage.setItem('data', JSON.stringify(data));
       });
     });
   };

   static addList = () => {
     const event = new EventObj(input.value, false, data.length + 1);
     if (input.value !== '') {
       data.push(event);
       localStorage.setItem('data', JSON.stringify(data));
     }
   };

   static delEvent = (i) => {
     data.splice(i, 1);
     data.forEach((e, i) => {
       e.index = i + 1;
     });
     localStorage.setItem('data', JSON.stringify(data));
     EventObj.createEvent();
   };
}

export default EventObj;
export { data, input };