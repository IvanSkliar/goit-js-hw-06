const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')

function createLi(ingredients) {
  
  return ingredients.map(ingredient => {
    
    const li = document.createElement('li');
    li.textContent = ingredient;   
   
    return li;
  });
};


ingredientsEl.append(...createLi(ingredients));