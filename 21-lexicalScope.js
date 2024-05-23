// 3rd April 2024 // 17th April 2024

// script32.js, script33.js


// lexical scope 

function addition(){

    let a = 10
    let b = 5
    //console.log(s+t)
    function additionB(){
        let q = 10 
        let r = 5
        console.log(a + b + q + r)

        function additionC(){
            let s = 9 
            let t = 3
            console.log(a+b+q+r+s+t)
        }
        additionC()
    }
    additionB()
}
addition()


// closures 
function displayName(){
    return function(){
        return "hello"
    }
}
let q1 = displayName()
console.log(q1())

function displayName2(){
    console.log("hello")
    return "bye"
    console.log("hello good bye")
}
let q2 = displayName2()
console.log(q2)

// function additionE(){
//     let x = 100
//     let y = 50 

//     return function(){
//         console.log(x+y)
//     }
// }

// let q = additionE()

// // let q = function(){
// //     console.log(x+y)
// // }

// q()

// actual difference arrow function and function declaration / function expression
//function declaration 
function addition(x,y){
    return x + y
}
let w1 = addition(12,4)
console.log(w1)

// function expression 
let additionB = function(x,y){
    return x + y
}
let w2 = additionB(12,4)
console.log(w2)

// arrow function

let additionC = (x,y)=>{
    return x + y
}
let w3 = additionC(12,4)
console.log(w3)


// program 2
function additionC(){
    console.log(9+9)
    console.log("hello")
    return "bye"
    console.log(9+9)
}
let r1  = additionC()
console.log(r1)

// program 3
// function additionD(){
//     return function(){
//         console.log('hello')
//     }
// }
// let e = additionD()
// // let e = function(){
// //     console.log('hello')
// // }
// e()


// program 3
// closures
function additionR(){
    let r = 10 
    let s = 5
    return function(){
        console.log(s+r)
    }
}
let a = additionR()
console.log(a)
// let a  = function(){
//     console.log(s+r)
// }

// a()

// program 4

// function declaration 

function additionF(x,y){
    return x + y
}
let e = additionF(12,3)
console.log(e)

// function expression 

// let additionF2 = function(x,y){
//     return x + y
// }
// let e2 = additionF2(12,3)
// console.log(e2)

// arrow function 
// let additionF3 = (x,y)=>{
//     return x + y
// }
// let e3 = additionF2(12,3)
// console.log(e3)

// let additionF3 = (x,y)=> x + y
// let e3 = additionF2(12,3)
// console.log(e3)