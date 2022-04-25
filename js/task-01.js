
const navMenuRef = document.querySelector('#categories');
console.log(`Number of categories: ${navMenuRef.children.length}`);
const itemsMenuRef = document.querySelectorAll('li.item');
itemsMenuRef.forEach((itemMenu) => {
    console.log(`Categories : ${itemMenu.firstElementChild.textContent}`);
    console.log(`Elements: ${itemMenu.lastElementChild.children.length}`);
});