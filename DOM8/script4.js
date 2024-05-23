// 11th MArch 2024

// DOM8 ===> script4.js


let ulList = document.querySelector('ul')
console.log(ulList)

let inputText = document.querySelector('input')
console.log(inputText)

let buttonA = document.querySelector('button')
console.log(buttonA)

buttonA.addEventListener('click',function(){
    let txt = inputText.value
    let newEle = document.createElement('li') // <li></li>
    newEle.textContent = txt // <li>Papaya</li>
    ulList.appendChild(newEle)
    inputText.value = ""
    
})