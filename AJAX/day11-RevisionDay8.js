// 17th April 2024
// Day11.js

// getUsersPageWise
function getUsers(pageNumber){
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response.data[0].id
    })
}

// getUsersid
function getID(id){
    fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response.data
    })
}

//renderHTML
function renderHtml(element){
    document.write(`<h1>${element.first_name}</h1>`)
    document.write(`<h1>${element.last_name}</h1>`)
    document.write(`<h1>${element.email}</h1>`)
    document.write(`<h1>${element.id}</h1>`)
    document.write(`<img src = ${element.avatar}>`)// this will always go with document.querySelector then only we can resolve the error below
    //ReferenceError: document is not defined
}

// getUsers(2) // Here we are getting ans for getUser
// .then(function(id){ // Here we are consuming id
//     return getID(id) // returning id here
// })
// .then(function(element){ // here we are consuming element
//     renderHtml(element) // getting element /// since we don't have to return again therefore we didn't write return here
// })

// async await
async function getUserInfo(pageNumber){
    let id = await getUsers(pageNumber)
    let user = await getID(id)
    renderHtml(user)
}
getUserInfo(2)

// node AJAX\day11-RevisionDay8.js
