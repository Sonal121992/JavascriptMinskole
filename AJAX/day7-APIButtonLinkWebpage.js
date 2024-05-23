//13th APril 2024
//day7.js

let addUsers = document.querySelector('button')

addUsers.addEventListener('click', function(){
    fetch(`https://reqres.in/api/users?page=2`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response.data)
        response.data.forEach(el=>{
            document.write(`<h1>${el.first_name}</h1>`)
            document.write(`<h1>${el.last_name}</h1>`)
            document.write(`<p>${el.email}</p>`)
            document.write(`<h1>${el.id}</h1>`)
            document.write(`<img src=${el.avatar}>`)
        });
    })
})