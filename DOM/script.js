// 8th March 2024

// DOM


//<h2 id  = "four" class = "five">Chinmay</h2>

// by tagName

let q1 = document.querySelector('h2')
console.log(q1)

// by id 
let q2 = document.querySelector('#four')
console.log(q2)
// by class 
let q3 = document.querySelector(".five")
console.log(q3)

// byAttribue
// tagName[attribute = "value"]

let q4 = document.querySelector('h2[id="four"]')
console.log(q4)