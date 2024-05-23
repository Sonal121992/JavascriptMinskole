//14th March 2024

// DOM10

let ulList = document.querySelector('ul')
let buttonA = document.querySelector('#one')
let inputText = document.querySelector('input')

console.log(ulList)
console.log(buttonA)
console.log(inputText)

buttonA.addEventListener('click',function(){
    let text = inputText.value
    let newLi = document.createElement('li') // <li></li> 
    newLi.textContent = text // <li>Papaya</li>
    createButtons(newLi)
    // <li>Papaya
        // <button class = "remove">Remove</button>
        // <button class = "up">Up</button>
        // <button class = "down">Down</button>
    //</li>
    ulList.appendChild(newLi)
    inputText.value = " "

})

function createButtons(li){
   let r =  document.createElement('button') // <button></button>
   r.textContent = "Remove"  // <button>Remove</button>
   r.classList.add('remove') // <button class = "remove">Remove</button>
   li.appendChild(r) 
   
   let u =  document.createElement('button') // <button></button>
   u.textContent = "Up"  // <button>Up</button>
   u.classList.add('up') // <button class = "up">Up</button>
   li.appendChild(u)   
   
   let d =  document.createElement('button') // <button></button>
   d.textContent = "Down"  // <button>Down</button>
   d.classList.add('down') // <button class = "down">Down</button>
   li.appendChild(d)   
}
// event

ulList.addEventListener('click',function(event){
    //console.log(event.target)
    //console.log(event.target.tagName)
    //console.log(event.target.className)

    if(event.target.tagName == "BUTTON"){
        if(event.target.className === "remove"){
            let li = event.target.parentElement
            let ulList = li.parentElement
            ulList.removeChild(li)
        }
        else if(event.target.className === "up"){
            let li = event.target.parentElement
            let ulList  = li.parentElement
            let prev = li.previousElementSibling
            if(prev){
                ulList.insertBefore(li,prev)
            }

        }
        else if(event.target.className === "down"){

            let li = event.target.parentElement
            let ulList  = li.parentElement
            let next = li.nextElementSibling
            if(next){
                ulList.insertBefore(next,li)
            }
        }

    }
})