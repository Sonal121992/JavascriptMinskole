//6th Feb 2024

console.log("Hello")


// let varaible
let num = 12
console.log(num)//12

num = 150
console.log(num)// 150 .........num is updated with the use of let varaible

// const varaible

const num1 = 45
console.log(num1)//45

//num1 = 7845
//console.log(num1) //TypeError: Assignment to constant variable. // const will not updated

console.log("========================")

// Types of comments

// For single line comment

/*

For Multiple line comment

*/

// Arithmetic Operation

// + - Addition
// - - Subtraction
// * - Multiplication
// / - Division
// % - Modulus

//Program 1

let a = 10
let b = 5
console.log(a + b)//15
console.log(a - b)//5
console.log(a * b)//50
console.log(a / b)//2
console.log(a % b)//0

// To avoid repeatative calculation we use function

console.log("====================")

// Function

function operation(x,y){
    console.log(x + y) //20 
    console.log(x - y) //12
    console.log(x * y) //64
    console.log(x / y) //4
    console.log(x % y) //0
}
operation(16,4)
console.log("------------------")

// 1. Function without parameter and without return type

function operation1(){
    console.log(7+3)
}
operation1() //10
operation1() //10
operation1() //10

console.log("--------")


// 2. Function with parameter and without return type

function operation2(x,y){
    console.log(x*y)
}
operation2(4,5) //20
operation2(7,3) //21
operation2(6,5) //30

console.log("--------")

// 3. Function with parameter and witrh return type

function operation3(x,y){
    return (x * y)
}
let a1 = operation3(4, 5)
console.log(a1) //20
console.log(a1/2) //10





// node 1-LetConstArithmeticFunction.js