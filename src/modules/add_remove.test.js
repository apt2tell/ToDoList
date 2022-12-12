import addTask from './add-task.js';
import storedArray from './storage.js';
import removeTask from './remove-task.js';

describe('test addTask and removeTask', () => {
  // Testing add task function
  test('test add task function', () => {
    addTask('first task');
    addTask('second task');
    addTask('third task');
    expect(storedArray[0].description).toBe('first task');
    expect(storedArray[1].description).toBe('second task');
    expect(storedArray.length).toEqual(3);
  });
  // Testing remove task function
  test('test remove task function', () => {
    removeTask(0);
    expect(storedArray).toHaveLength(2);
    expect(storedArray[0].description).toBe('second task');
  });
});