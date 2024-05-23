//15th March 2024

// DOMR2


//  <h1  id = "one" class ="two" name = "nm">hello</h1>

// tagName
let byTagName = document.querySelector('h1')
console.log(byTagName)
// id 
let byid = document.querySelector('#one')
console.log(byid)
// class
let byClass = document.querySelector('.two')
console.log(byClass)
// attribute
// tagName[attribute="value"]
let byAttribute = document.querySelector('h1[id="one"]')
console.log(byAttribute)
byAttribute.addEventListener('click',function(){
    byAttribute.textContent = "bye"
    byAttribute.style.color = "blue"
    byAttribute.style.backgroundColor = "yellow"

})





//console.log(byAttribute.textContent)
//byAttribute.textContent = "bye"
// let info = {
//     firstName:"sonal",
//     lastName:"khante"
// }
// info['firstName'] = "novika"

// console.log(info.firstName)
// info.firstName = "novika"

let info = {
    fullName:"sonal khante",
    parent:{
        mother:"lalita lambat",
        father:"vijay lambat"
    }
}
console.log(info.parent.father)
info.parent.father = "vijay d lambat"