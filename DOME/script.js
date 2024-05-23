// 10th March 2024

// DOME

// selecting the element
// <h1 id = "one" class = "two" name = "nm">Learning js</h1>

// byTagName
let byTagName = document.querySelector('h1')
console.log(byTagName)
// byId
let byId = document.querySelector('#one')
console.log(byId)
//byClassName
let byClassName = document.querySelector('.two')
console.log(byClassName)
//byAttribute
let byAttribue = document.querySelector('h1[class="two"]')
console.log(byAttribue)

//   <p id = "three" class = "four" name = "five">para</p>

// tagName
let bytagName = document.querySelector('p')
console.log(bytagName)

// id 
let byIde = document.querySelector('#three')
console.log(byIde)

// class
let byClass  =document.querySelector('.four')
console.log(byClass)
//byAny attribute

let byA  = document.querySelector('p[name="five"]')
// console.log(byA)
// console.log(byA.textContent)
// byA.textContent = "para2"

byA.addEventListener('mouseover',function(){
    byA.textContent = "para2"
})








// info = {
//     firstName:"sonal",
//     lastName:"khante"
// }

// console.log(info.firstName)
// info.firstName = "novika"