//15th April 2024
// day10.js

let buttonA = document.querySelector('button')

function getUsers(pageNumber){
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(response){
        console.log(response)
        response.data.forEach(el =>{
            document.write(`<h1>${el.first_name}</h1>`)
            document.write(`<h1>${el.last_name}</h1>`)
            document.write(`<h1>${el.email}</h1>`)
            document.write(`<h1>${el.id}</h1>`)
            document.write(`<img src=${el.avatar}>`)
        }); // ReferenceError: document is not defined
    })
}
buttonA.addEventListener('click',function(){
    getUsers(2)
})

// node AJAX\day10-buttonDocumentWrite.js