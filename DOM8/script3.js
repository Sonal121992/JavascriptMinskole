//11th March 2024

// DOM8 ===> script3.js

let headOne = document.querySelector('h1')
let buttonOne = document.querySelector('button')
let inputT = document.querySelector('input')

console.log(headOne)
console.log(buttonOne)
console.log(inputT)

buttonOne.addEventListener('click',function(){
    let colorText = inputT.value
    headOne.style.color = colorText
    inputT.value = ""
})