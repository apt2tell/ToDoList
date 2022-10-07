import storage from './storage.js';

const editTask = (index, newDesc) => {
  storage[index].description = newDesc;
};

export default editTask;