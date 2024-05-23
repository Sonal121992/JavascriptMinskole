// 8th April 2024

// Program 1 ==> Write a normal function

// function additionA(){
//     console.log("A is executed")
// }
// function additionB(){
//     console.log("B is executed")
// }
// additionA()
// additionB()
// ===> normal execution 1st function then 2nd function

// Program 2 ==> Write a function with timer

function additionA(){
    setTimeout(function(){
        console.log("A is executed")
    },3000)
}
function additionB(){
    console.log("B is executed")
}
additionA()
additionB()
// ====> because of timer delay in 1st function
// ===> 2nd will execute first then 1st function

// // Program 3
// // Write a program to get create user ====> get id =====> get info

// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//     },3000)
//     setTimeout(function(){
//         console.log("get id")
//     },2000)
//     setTimeout(function(){
//         console.log("get info")
//     },1000)
// }
// getInfo() // ===> Because of Timer execution will
// // ===> get info ===> get id ===> user created

// Program 4 =====> async and sync=====? ""Call Back Hell""

function getInfo(){
    setTimeout(function(){
        console.log("User Created")
        setTimeout(function(){
            console.log("get ID")
            setTimeout(function(){
                console.log("get info")
            },1000)
        },2000)
    },3000)
}
getInfo()//===> everything will be in sync it will execute one after other
// ===> code will get execute one after other  
// User Created =====> get ID ===> get info

// async code ko agar sync me karna hai to promises use karate hai
// async -------sync ----use ---promises

// kuku burrowed 2k -----after 1 month return ------2k

// pending ------resolve(function)------reject(function)
// kuku ne borrow kiye 
// resolve(function) ----- paise return kiya
// reject(function) ----- paise return nai kiya

//  node AJAX\day1.js