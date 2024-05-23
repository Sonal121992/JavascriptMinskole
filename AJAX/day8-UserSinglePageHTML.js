// 13th April 2024

function getUserPage(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        console.log(response) // Here we ans in the console of inspect element on webpage
        return response.json() // Here we will return 7 for pageNumber 2
    })
    .then(function(response){
        console.log(response.data[0].id)
        return response.data[0].id
    })
}

function getUserById(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        console.log(response.data) // Here the ans we get in the console of inspect element on webpage
        return response.data // It will return 1 for id 1
    })
}

function renderHTML(el){ //ReferenceError: el is not defined
    document.write(`<h1>${el.first_name}</h1>`) // TypeError: Cannot read properties of undefined (reading 'first_name')
    document.write(`<h1>${el.last_name0}</h1>`)
    document.write(`<p>${el.email}</p>`)
    document.write(`<h1>${el.id}</h1>`)
    document.write(`<img src=${el.avatar}>`)
}

getUserPage(1)
.then(function(id){
    return getUserById(id) // 7
})
.then(function(obj){
    console.log(el) 
    renderHTML(obj)
})

// We are using async await function because we want the ans in sync one by one
async function getUserInfo(pageNumber){
    let id = await getUserPage(pageNumber)
    let user = await getUserById(id)
    renderHTML(user)
}

getUserInfo(2)


// node AJAX\day8-UserSinglePageHTML.js