import storedArray from './storage.js';

const clearCompleted = () => {
  const filteredTasks = storedArray.filter((item) => item.completed === false);
  storedArray.splice(0, storedArray.length, ...filteredTasks);
};

export default clearCompleted;