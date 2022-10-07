import storedArray from './storage.js';

const removeTask = (index) => {
  storedArray.splice(index, 1);
};

export default removeTask;