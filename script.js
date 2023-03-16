const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

document.addEventListener('keydown', event => {
    if ((event.key).match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) calc(event.key)
})

calc.addEventListener('click', function(event) {

    

  if(!event.target.classList.contains('calc__btn')) return;

  let value = event.target.innerText;

  switch(value) {
    case 'C':
        result.innerText = '';
        break;  

    case '=':

        result.innerText = eval(result.innerText).toFixed(2);
        break;    

    case '--':

        result.innerText = result.innerText.substring(0, result.innerText.length-1);
        break;  

    default:
        result.innerText += value;
  }
});