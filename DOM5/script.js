//10th MArch 2024

// DOM5


let buttonOne = document.querySelector('button')
let inputText = document.querySelector('input')
let headOne = document.querySelector('h1')

console.log(buttonOne)
console.log(inputText)
console.log(headOne)

buttonOne.addEventListener('click',function(){
    let colorText = inputText.value
    headOne.style.color = colorText
    inputText.value = ""
})