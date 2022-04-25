const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const addNameEl = ingredients.map(option => {
  const newEl = document.createElement('li');
  newEl.classList.add('item');
  newEl.textContent = option;
  
  return newEl;
});


const addItemsEl = document.querySelector('#ingredients');
addItemsEl.append(...addNameEl);