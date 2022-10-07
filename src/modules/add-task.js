import getItems from './storage.js';

const addToLists = (newTask) => {
  const eachTask = {
    description: newTask,
    completed: false,
    index: getItems.length + 1,
  };

  getItems.push(eachTask);
};

export default addToLists;