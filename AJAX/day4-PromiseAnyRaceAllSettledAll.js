// // 12th April 2024

// // Program 1
// function getInfo(){
//     setTimeout(function(){
//         console.log("User Created")
//     },3000)
//     setTimeout(function(){
//         console.log("Get ID")
//     },2000)
//     setTimeout(function(){
//         console.log("Get Info")
//     })
// }
// getInfo()
// // Get Info
// // Get ID
// // User Created

// // Program 2
// function getInfo1(){
//     setTimeout(function(){
//         console.log("User Created")
//         setTimeout(function(){
//             console.log("Get ID")
//             setTimeout(function(){
//                 console.log("Get Info")
//             },4000)
//         },4500)
//     },5000)
// }
// getInfo1()
// // User Created
// // Get ID
// // Get Info

// // Program 3
// // with Consume Promise

// function userCreated(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve("Execute A first")
//         },3000)
//     })
// }
// function getID(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve("Execute B second")
//         },2000)
//     })
// }
// function getInfo(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve("Execute C 3rd")
//         })
//     })
// }
// // userCreated()
// // .then(function(sent1){
// //     console.log(sent1)
// //     return getID()
// // })
// // .then(function(sent2){
// //     console.log(sent2)
// //     return getInfo()
// // })
// // .then(function(sent3){
// //     console.log(sent3)
// // })
// // Execute A first
// // Execute B second
// // Execute C 3rd

// // Async Await
// async function userInfo(){
//     let a = await userCreated()
//     console.log(a)
//     let b = await getID()
//     console.log(b)
//     let c = await getInfo()
//     console.log(c)
// }
// userInfo()
// // Execute A first
// // Execute B second
// // Execute C 3rd

// // async code --------------- sync
// // user create ------ get id ------ get info

// //================================================================================
// // Promise ===== Promise Combinations ======> 4 methods
// //================================================================================

// // promise.race()
// // promise.any()
// // promise.allSettled()
// // promise.all()

// Program 1 =====> Promise.all()
Promise.all([
    Promise.resolve("Hello"),
    Promise.resolve("Hello 2"),
    Promise.reject("Bye")
])
.then(function(arr){
    console.log(arr)
})
.catch(function(){
    console.log("all not resolved")
})
// if any one of the above case in reject state then it give us catch block
// [ 'Hello', 'Hello 2', 'Bye' ] this will be ans if all is in resolve state no one is in reject state

// Program 2 ======> Promise.allSettled()
Promise.allSettled([
    Promise.resolve("Hello 1"),
    Promise.resolve("Hello 2"),
    Promise.reject("Bye")
])
.then(function(arr1){
    console.log(arr1)
})
// [
//     { status: 'fulfilled', value: 'Hello 1' },
//     { status: 'fulfilled', value: 'Hello 2' },
//     { status: 'rejected', reason: 'Bye' }
//  ]
// In allSettled case we will get all the state (resolve and reject) as answer

// Program 3 =====> Promise.race()
function proOne(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Hello")
        },3000)
    })
}
function proTwo(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            reject("Bye")
        },2000)
    })
}
Promise.race([
    proOne(),
    proTwo()
])
.then(function(arr1){
    console.log(arr1)
})
.catch(function(arr2){
    console.log(arr2)
})
// whatever state comes 1st will execute first
// if reject is coming first then ans will be reject state
// if resolve is coming first then and will be resolve state
// Here in the above code reject state block is executing first therefore answer will be "Bye"

// Bye

// Program 4 ======> Promise.any()

Promise.any([
    Promise.reject("Hello 1"),
    Promise.reject("Bye 1"),
    Promise.reject("Bye 2"),
    Promise.reject("Hello 2")
])
.then(function(state){
    console.log(state)
})
.catch(function(state){
    console.log(state)
})
// if all are in reject state then only all will execute
// if all are in resolve state then only all will execute

// if any of them in mix then we will not get ans



// node AJAX\day4-PromiseAnyRaceAllSettledAll.js