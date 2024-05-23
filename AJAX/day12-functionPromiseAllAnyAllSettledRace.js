// 17th April 2024
// day13.js

function getUserbyId(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response.data) // This will give us id 1, id 2 and id 3
        return response.data 
    })
}
function raceP(){ // This will only use while dealing with promise.race()
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('refresh')// Since the case is resolve 'referesh' will get displayed in console block
        },1)
    })
}
function renderHtml(element) {
    document.write(`<h1>${element.first_name}<h1>`)
    document.write(`<h1>${element.last_name}<h1>`)
    document.write(`<h1>${element.email}<h1>`)
    document.write(`<h1>${element.id}<h1>`)
    document.write(`<img src = ${element.avatar}>`)
    // till previous day we were not able solve this we were getting error
    // With Promise we get the proper ans

}
// // //1...... Promise.all
// Promise.all([
//     getUserbyId(1),
//     getUserbyId(2),
//     getUserbyId(3)
// ])
// .then(function(users){
//     console.log(users) // This will return us array of 3 elements
//     // Ans as below
//     // 0:{id: 1, email: 'george.bluth@reqres.in', first_name: 'George', last_name: 'Bluth', avatar: 'https://reqres.in/img/faces/1-image.jpg'}
//     //1:{id: 2, email: 'janet.weaver@reqres.in', first_name: 'Janet', last_name: 'Weaver', avatar: 'https://reqres.in/img/faces/2-image.jpg'}
//     //2:{id: 3, email: 'emma.wong@reqres.in', first_name: 'Emma', last_name: 'Wong', avatar: 'https://reqres.in/img/faces/3-image.jpg'}
//     //length:3
//     //[[Prototype]]:Array(0)
//     users.forEach(function(element){
//         renderHtml(element) // Here will give ans in display ....show us on webpage
//     })
// })
// .catch(function(err){
//     console.log(err)
// })

// // 2......... Promise.allSettled
// Promise.allSettled([
//     getUserbyId(3), // this will run only if we give console instruction in function getUserbyId ===> id 3 will be displayed in console block
//     getUserbyId(2), // This will run only if we give console instruction in function getUserbyId ===> id 2 will be displayed in console block
//     getUserbyId(111) // This will shown as error "GET" 404(Not Found)
// ])
// .then(function(arr){
//     console.log(arr) // This will return the array 
//     // will get ans as below for this console
// // 0: {status: 'fulfilled', value: {…}}
// // 1: {status: 'fulfilled', value: {…}}
// // 2: {status: 'fulfilled', value: undefined}
// // length: 3
// })

// // 3..... Promise.race()
// Promise.race([
//     getUserbyId(2), 
//     getUserbyId(111), 
//     raceP() 
// ])
// .then(function(str){
//     console.log(str)
//     // for id 2====> {id: 2, email: 'janet.weaver@reqres.in', first_name: 'Janet', last_name: 'Weaver', avatar: 'https://reqres.in/img/faces/2-image.jpg'} 
//     // for id 111======> for this will get the error ===> GET https://reqres.in/api/users/111 404 (Not Found)
//     // for raceP()=====> referesh...since the time here is 1 it will get resolve first
// })

// 4..... Promise.any()
Promise.any([
    Promise.reject("Bye"),
    raceP(),
    getUserbyId(3),
    getUserbyId(111)
])
.then(function(str){
    console.log(str)
    // for raceP() ...since delay time 1 ...ans ----- refresh
    // for reject("Bye") ----- GET https://reqres.in/api/users/111 404 (Not Found)
    // for id 3 ----- {id: 3, email: 'emma.wong@reqres.in', first_name: 'Emma', last_name: 'Wong', avatar: 'https://reqres.in/img/faces/3-image.jpg'}
    // for id 111 ---- undefined
})



// node AJAX\day12-functionPromiseAllAnyAllSettledRace.js