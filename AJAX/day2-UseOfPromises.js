// // 9th April 2024

// // Program 1 =======> sync
// function additionA(){
//     console.log("Execute A")
// }
// function additionB(){
//     console.log("Execute B")
// }
// additionA()
// additionB()
// // It is executing with sync
// // As we have written the program
// // Execute A
// // Execute B

// // Progra 2 =====> async
// function addA(){
//     setTimeout(function(){
//         console.log("A is executed")
//     },3000)
// }
// function addB(){
//     console.log("B is executed")
// }
// addA()
// addB()
// // This will executed asynchronusly as per the time delay we have provided
// // B is executed
// // A is executed

// // Program 3 =====> create user ---- get id --- get info
// // Write a async code to get the details in sync

// function getInfo(){
//     setTimeout(function(){
//         console.log("Create User")
//     },3000)
//     setTimeout(function(){
//         console.log("Get Id")
//     },2000)
//     setTimeout(function(){
//         console.log("Get Info")
//     },1000)
// }
// getInfo()
// // Async code is ececuted in sync with setTimeout function
// // As per the time
// // minimum time will execute first 
// // Create User
// // Get ID
// // Get Info

// // But as soon the time get change create user has 3000 
// // So ans will be
// // Get Info
// // Get ID
// // Create User

// // Program 4 =====> Call Back Hell

// function getInfo1(){
//     setTimeout(function(){
//         console.log("Create User")
//         setTimeout(function(){
//             console.log("Get ID")
//             setTimeout(function(){
//                 console.log("Get Info")
//             },3500)
//         },4000)
//     },5000)
// }
// getInfo1()

// // even though we have written in async....it will be called synchronously 
// // it will delay within time
// // only drawback it is tightly coupled....unabled to do any changes
// // Not reusable
// // Not Readable
// // Ans
// // Create User
// // Get ID
// // Get Info

// Program 5 =====> write the program using promises

let pro = new Promise(function(resolve, reject){
    let a = 45
    let b = 45
    if(a==b){
        resolve("Hello")
    }
    else{
        reject("Bye")
    }
})
pro.then(function(str){ // we are consuming promise here
    console.log(str)
},function(str){
    console.log(str)
})
// a==b then we will get Hello
// a not equal to b the we will get Bye

