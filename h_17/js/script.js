console.log(document.getElementById('age-table'))

console.log(document.querySelectorAll('#age-table label'))

console.log(document.querySelector('td'))

console.log(document.querySelector('form[name="search"]'))

console.log(document.querySelector('form [name="search"]'))// с пробелом - первый элемент
// console.log(document.querySelector('input')

console.log(document.querySelector('form > input:last-Child'))
// let lastInput = document.querySelectorAll('input')
//     console.log(lastInput[lastInput.length-1])