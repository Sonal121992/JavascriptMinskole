//11th March 2024

// DOM8 ===> script5.js

let addButton = document.querySelector("#one")
let inputT = document.querySelector('input')
let ulList = document.querySelector('ul')

addButton.addEventListener('click',function(){
    let text = inputT.value
    let newE = document.createElement('li') // <li></li>
    newE.textContent = text // <li>Papaya</li>
    createButtons(newE)
    ulList.appendChild(newE)
    inputT.value = ""
    
})

{/* <button class = "remove">Remove</button>
<button class = "up">Up</button>
<button class = "down">Down</button> */}

function createButtons(li){

    let r = document.createElement("button") // <button></button>
    r.textContent = "Remove" // <button>Remove</button>
    r.classList.add("remove") // <button class = "remove">Remove</button>
    li.appendChild(r)

    let u = document.createElement("button") // <button></button>
    u.textContent = "Up" // <button>Up</button>
    u.classList.add("up") // <button class = "up">Up</button>
    li.appendChild(u)

    let d = document.createElement("button") // <button></button>
    d.textContent = "Down" // <button>Down</button>
    d.classList.add("down") // <button class = "down">Down</button>
    li.appendChild(d)

}
