// // 13th April 2024
// // day5.js

// // Promise.all()
// // Promise.race()
// // Promise.allSettled()
// // Promise.any()

// //.then()

// // async await

// // Promise.all() ///////////////////////////////////////////////////////

// Promise.all([
//     Promise.resolve("Hello 1"),
//     Promise.resolve("Hello 2"),
//     Promise.resolve("Hello 3"),
//     Promise.reject("Bye")
// ])
// .then(function(a){
//     console.log(a)
// })
// .catch(function(str){
//     console.log("rejected")
//     console.log(str)
// })
// // if any one of the above case in reject state then it give us catch block ===> rejected Bye
// // [ 'Hello 1', 'Hello 2', 'Hello 3' ] this will be ans if all is in resolve state no one is in reject state

// Promise.allSettled() //////////////////////////////////////////////////

Promise.allSettled([
    Promise.resolve("Hello 1"),
    Promise.resolve("Hello 2"),
    Promise.resolve("Hello 3"),
    Promise.reject("Bye")
])
.then(function(a){
    console.log(a)
})
// Answer
// [
//     { status: 'fulfilled', value: 'Hello 1' },
//     { status: 'fulfilled', value: 'Hello 2' },
//     { status: 'fulfilled', value: 'Hello 3' },
//     { status: 'rejected', reason: 'Bye' }
// ]
// In allSettled case we will get all the state (resolve and reject) as answer

// Promise.race() ////////////////////////////////////////////////////////////

function promiseOne(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject('Hello')
        },1000)
    })
}
function promiseTwo(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            reject("Bye")
        },1500)
    })
}
Promise.race([
    promiseOne(),
    promiseTwo()
])
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
// whatever state comes 1st will execute first
// if reject is coming first then ans will be reject state
// if resolve is coming first then and will be resolve state

// Promise.any() //////////////////////////////////////////////////

Promise.any([
    Promise.resolve("Hello 1"),
    Promise.resolve('Hello 2'),
    Promise.reject("Bye 1"),
    Promise.reject("Bye 2")
])
.then(function(str){
    console.log(str)
})
function additionC(){
    console.log("A")
}
function additionD(){
    console.log("B")
}
additionC()
additionD() 
// if all are in reject state then only all will execute
// if all are in resolve state then only all will execute
// if any of them in mix then we will not get ans

// node AJAX\day5-PromiseCombinationR.js






// node AJAX\day5-PromiseCombinationR.js