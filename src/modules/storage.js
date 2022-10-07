const getItems = JSON.parse(localStorage.getItem('TODO')) || [];

export const setItems = (tasks) => {
  localStorage.setItem('TODO', JSON.stringify(tasks));
};

export default getItems;