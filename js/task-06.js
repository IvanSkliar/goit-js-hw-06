const input = document.querySelector('#validation-input');

input.addEventListener('change', addInputValue);

input.addEventListener('blur', addInputValue);

function addInputValue(even) {
    let addValue = input.dataset.length
    addValue = Number(addValue);

    if (even.currentTarget.value.length !== addValue) {

               input.classList.add('invalid');
     return    input.classList.remove('valid')
    }
    input.classList.add('valid');
    input.classList.replace('invalid', 'valid');
    return input;

}