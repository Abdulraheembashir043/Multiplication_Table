const input1 = document.querySelector('#user-input');
const input2 = document.querySelector('#range');
const btn = document.querySelector('#generate');
const clear = document.querySelector('#clear');
const title = document.querySelector('#title');
const result = document.querySelector('#result');

// focus on first input
// to be ready for user input
input1.focus();

// clear the fields and output
function refresh() {
  input1.value = '';
  input1.focus();
  input2.value = '';
  title.textContent = '';
  result.innerHTML = '';
}

function calculate(number, range) {
  result.innerHTML = '';

  for(let i = 1; i <= range; i++) {
    result.innerHTML += `${number} * ${i} = ${number * i} <br>`;
  }
 
  title.textContent = `Multiplication Table of ${number}`;
  result.style.display = 'block';
}

// generate times-tale after click
btn.addEventListener('click', () => {
  let number = input1.value;
  let range = input2.value;
  
  calculate(number, range);
})

clear.addEventListener('click', () => {
  refresh()
  result.style.display = 'none';
})

window.addEventListener('load', function() {
  refresh();
})