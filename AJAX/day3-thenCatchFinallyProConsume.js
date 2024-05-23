// // 11th April 2024

// // Async vs Sync

// // Program 1
// function additionA(){
//     console.log("A")
// }
// function additionB(){
//     console.log("B")
// }
// additionA()
// additionB()
// // A
// // B

// // Async()
// // Program 2
// function addC(){
//     setTimeout(function(){
//         console.log("C Execute")
//     })
// }
// function addE(){
//     console.log("E Execute")
// }
// addC()
// addE()
// // C Execute
// // E execute

// // Program 3
// // UserCreate =====> GetID ======> GetInfo

// function getInfo(){
//     setTimeout(function(){
//         console.log("User Created")
//     },3000)

//     setTimeout(function(){
//         console.log("Get ID")
//     },2000)

//     setTimeout(function(){
//         console.log("Get Info")
//     },1000)
// }
// getInfo()
// // Get Info
// // Get ID
// // User Created

// // Program 4
// // Call Back Hell
// // Async ---------- call ---------- synchronously

// function getInfo1(){
//     setTimeout(function(){
//         console.log("User Created")
//         setTimeout(function(){
//             console.log("Get ID")
//             setTimeout(function(){
//                 console.log("Get Info")
//             },1000)
//         },2000)
//     },3000)
// }
// getInfo1()
// // User Created
// // Get ID
// // Get Info

// console.log("----------------")

// // Program 5
// // promises

// // promises --- pending, resolve and reject

let pro = new Promise(function(resolve, reject){
    let x = 10
    let y = 20
    if(x == y){
        resolve("Hello")
    }
    else{
        reject("Bye")
    }
})
console.log("---------------")

// Program 1
pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})
console.log("---------------")
// if x!=y then we will get Bye
// if x==y then we will get Hello 

// Program 2
pro.then(function(str){
    console.log(str)
})
.catch(function(str){ // reject always goes in catch method
    console.log(str)
})
console.log("-----------------")
// if x==y then it will have resolve state and will be executed in  .then block
// if x!=y then it will have reject state and will be executed in .catch block

// generic error hai to catch me daalo
// lekin agar specific error batana hai to .then me daalo

// Program 3
pro
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("I will always run")
})
console.log("------------------")
// since x!=y therefore ans will be Bye and I will always execute

// if x==y then it will give resolve state 
// if x!=y then it will give reject state
// and .finally block will always execute

// Program 4
pro
.then(function(str){
    console.log(str)
    return "Hello 2"
})
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("I will always run")
})

// for x==y
// Hello 
// Hello 2
// I will always run

// for x!=y
// Bye
// I will always run

///--------------------------------------------------------------------

function userCreated(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("User Created")
        },3000)
    })
}
function getID(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Get ID")
        },2000)
    })
}
function getInfo(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Get Info")
        },1000)
    })
}
// // consume promise

// userCreated() // defining 1st promise
// .then(function(str){
//     console.log(str) // consuming 1st promise
//     return getID() // return 2nd promise
// })
// .then(function(str){
//     console.log(str) // consuming 2nd promise
//     return getInfo() // return 3rd promise
// })
// .then(function(str){
//     console.log(str) // consuming 3rd promise
// })

// // User Created
// // Get ID
// // Get Info

// // with proper time delay the code with execute
// // Here in the first as we are consuming usercreated() therefore it is displayed first
// // in that code we return the 2nd instruction which we are consuming in the 3rd instruction
// // like wise we are returning and consuming the instruction

// same above code we will execute with async function

async function getUserInfo(){
    let a = await userCreated()
    console.log(a)
    let b = await getID()
    console.log(b)
    let c = await getInfo()
    console.log(c)
}
getUserInfo()

// User Created
// Get ID
// Get Info

// with async and await all the code will execute one by one
// 2nd code will wait till the 1st code execute
// first it will execute 1st instruction then 2nd then 3rd as per the time delay it is provided to it

