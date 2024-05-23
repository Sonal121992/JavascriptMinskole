//15th March 2024

//DOM11

let buttonA = document.querySelector('button')
let ulList = document.querySelector('ul')
let liList = document.querySelector('li')
console.log(liList)
let nodelistLi = document.querySelectorAll('li')
console.log(nodelistLi)

buttonA.addEventListener('click',function(){
    ulList.style.color = "red"

})


for(let i = 0 ; i < nodelistLi.length ; i++){
   // console.log(nodelistLi[i].textContent)
    if(i % 2 == 0){
        nodelistLi[i].style.color = "red"
        nodelistLi[i].textContent =  nodelistLi[i].textContent.toUpperCase()
       
    }
    else {
        nodelistLi[i].style.color = "green"
        nodelistLi[i].textContent =  nodelistLi[i].textContent.toUpperCase()
    }
}

let info = {
    "firstName":"chinmay",
    "lastName":"deshpande"
}