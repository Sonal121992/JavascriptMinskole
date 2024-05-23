//11th March 2024

// DOM8 ===> script6.js

// create element 
// retrive element 
// update element 
// delete element 
{/* <h1 id = "one" class = "two" name = "nm">Heading</h1>
    <ul>
        <li class = "fruits" name = "fr">Apple</li>
        <li class = "fruits" name = "fr">Mango</li>
        <li class = "fruits" name = "fr">Grapes</li>
        <li class = "fruits" name = "fr">Chikoo</li>
</ul> */}

// css -selector
// program 1
let headOne = document.querySelector('#one')
console.log(headOne)
let byId2 = document.getElementById('one')
console.log(byId2)

console.log(typeof headOne)
console.log(typeof byId2)

// li element 
// program 2

let firstElement = document.querySelector('li')
console.log(firstElement)

let liELements = document.querySelectorAll('li')
console.log(liELements)

let buttonOne = document.querySelector('button')

// all li element to upperCase()
// even - green // odd red

// for(let i  = 0 ; i < liELements.length ; i++){
//     // console.log(i)
//     // console.log(liELements[i].textContent)
//     liELements[i].textContent = liELements[i].textContent.toUpperCase()
//     if(i % 2 == 0){
//         liELements[i].style.color = "green" 
//     }
//     else {
//         liELements[i].style.color = "red" 
//     }
// }

buttonOne.addEventListener('click', function () {
    for (let i = 0; i < liELements.length; i++) {
        // console.log(i)
        // console.log(liELements[i].textContent)
        liELements[i].textContent = liELements[i].textContent.toUpperCase()
        if (i % 2 == 0) {
            liELements[i].style.color = "green"
        }
        else {
            liELements[i].style.color = "red"
        }
    }
})

let liElement = document.getElementsByTagName("li")
console.log(liElement)
let liElement2 = document.querySelectorAll("li")
console.log(liElement2)

// program 3

let className  = document.querySelectorAll('.fruits')
let className2 = document.getElementsByClassName('fruits')
console.log(className)
console.log(className2)

// program 4
let name1 = document.querySelectorAll('li[name= "fr"]')
let name2 = document.getElementsByName('fr')

console.log(name1)
console.log(name2)






// update attribute of element
// retrive value of attribute
// update value for attribute
// add new value to attribute

// based on user action