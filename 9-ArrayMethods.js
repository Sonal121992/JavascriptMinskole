// Array Methods

//                1     2           3       4       5       6       =====> length
//               0      1           2       3       4       5       =====> index
let vehicles = ["bus", "train", "airplane", "car", "jeep", "bike"]


//push() ===> insert element at end ===> return length of array
let a1 = vehicles.push("bullet")
console.log(a1)//7
//console.log(vehicles.push("rickshaw"))
console.log(vehicles)//["bus", "train", "airplane", "car", "jeep", "bike", "bullet"]

console.log("==========================================================")

//unshift() =====> insert element at start ===> return length of array
let a2 = vehicles.unshift("cycle")
console.log(a2)//8
//console.log(vehicles.unshift("helicopter"))
console.log(vehicles)//["cycle", "bus", "train", "airplane", "car", "jeep", "bike", "bullet"]

console.log("===========================================================")

//pop() ===> remove element from last ====> return removed element
let a3 = vehicles.pop()
console.log(a3)//bullet
//console.log(vehicles.pop())
console.log(vehicles) // [ 'cycle', 'bus', 'train', 'airplane', 'car', 'jeep', 'bike' ]

console.log("============================================================")

//shift() ====> remove elemengt from start ======> return removed element
let a4 = vehicles.shift()
console.log(a4)//cycle
//console.log(vehicles.shift())
console.log(vehicles)//[ 'bus', 'train', 'airplane', 'car', 'jeep', 'bike' ]

console.log("============================================================")

//indexof() ===> gives us the index of the element
let a5 = vehicles.indexOf('train')
console.log(a5)//1
console.log(vehicles.indexOf('car'))//3

console.log("-------------------")

//includes() ====> sees whether the certain element is present or not ======> gives true or false ===> case sensitive
let a6 = vehicles.includes('jeep')
console.log(a6)//true
console.log(vehicles.includes('Car'))//false
console.log(vehicles.includes('car'))//true

console.log("----------------------")

//reverse() ===> reverse the array ===> returns the array
let a7 = vehicles.reverse()
console.log(a7)//[ 'bike', 'jeep', 'car', 'airplane', 'train', 'bus' ]
//console.log(vehicles.reverse()) //[ 'bike', 'jeep', 'car', 'airplane', 'train', 'bus' ]

console.log("==============================================================")

//at() =====> gives the element at particluar index ===> return element
let a8 = vehicles.at(5)
console.log(a8)//bus
console.log(vehicles.at(3))//airplane

console.log("--------------------------------")

//concat() ====> Join the two array
let a = [11, 22, 33, 44]
let b = [55, 66, 77, 88]
let a9 = a.concat(b)
console.log(a9)//[11, 22, 33, 44, 55, 66, 77, 88]

console.log("=============================================")

//join() ====> join the array with the some a   
let state = ["sonal", "lambat", "8668280134"]
let a10 = state.join("-")
console.log(a10) //sonal-lambat-8668280134
let a11 = state.join("@")
console.log(a11) //sonal@lambat@8668280134

console.log("============================================")

//map(function(el, index, arr)) ===> to perform operation with each element of array

/////// To calculate age
//      0       1     2     3   4       5   6
let year = [1989, 1990, 1991, 1992, 1993, 1994, 1995]
let a12 = year.map(function(el, index, arr){
    //console.log(el, index, arr) //1995 6 [1989, 1990,1991, 1992,1993, 1994,1995]
    return 2024 - el
})
console.log(a12)//[ 35, 34, 33, 32, 31, 30, 29]

////// To add 1 each element of array
let num = [15, 42, 65, 32, 57, 18, 29]
let a13 = num.map(function(el, index, arr){
    return el + 1
})
console.log(a13)//[16, 43, 66, 33, 58, 19, 30]

console.log("=================================================")

// filter(function(el, index, arr)) ===> filter the specific elements in array

////// To filter num greater than 50
let a14 = num.filter(function(el, index, arr){
    return el>50
})
console.log(a14)// [65, 57]

let b1 = num.filter(function(el, index, arr){
    return el>30 && el<60
})
console.log(b1)//[ 42, 32, 57 ]

////// To separate the transaction with withdrawal and deposit
let transaction = [-100, 500, 2000, -50, -400, 600, 700, -300]

let deposit = transaction.filter(function(el, index, arr){
    return el > 0
})
let withdrawal = transaction.filter(function(el, index, arr){
    return el < 0
})
console.log(deposit)//[ 500, 2000, 600, 700 ]
console.log(withdrawal)//[ -100, -50, -400, -300 ]

console.log("=====================================")

// forEach()
let city = ["pune", "mumbai", "nagpur", "rourkela"]
let a16 = city.forEach(function(x, y, z){
    console.log("Welcome to " + x)
})
// Welcome to pune
// Welcome to mumbai
// Welcome to nagpur
// Welcome to rourkela

console.log("===================================")

// reduce(function(acc, el, index, arr))
let digit = [15, 4, 6, 5, 8, 2]
let a15 = digit.reduce(function(acc, el, index, arr){
    return acc + el
},0)
console.log(a15)

console.log("======================================")

// every(function(el, index, arr)) ======> sees whether the condition is applicable to whole array ===> return true or false
let num1 = [11, 22, 33, 44, 55, 66, 77, 88, 99]
let a17 = num1.every(function(el, index, arr){
    return el > 40
})
console.log(a17) // false
let a18 = num1.every(function(x, y, z){
    return x > 10
})
console.log(a18) // true

console.log("=========================================")

// some(function(el, index, arr)) =====> see whether atleast some elements are with condition ===> return boolean true or false
let a19 = num1.some(function(el, index, arr){
    return el > 40
})
console.log(a19) // true

let a20 = num1.some(function(x, y, z){
    return x > 100
})
console.log(a20) // false

console.log("=================")

// find(function(el, index, arr)) ====> finds the 1st character matching the condition ===> return element
let a21 = num1.find(function(el, index, arr){
    return el >40
})
console.log(a21)//44

console.log("=======================")

// findIndex(function(el, index, arr)) ===> it returns the index number of the element
let a22 = num1.findIndex(function(el, index, arr){
    return el >50
})
console.log(a22)//4

let a23 = num1.findIndex(function(el, index, arr){
    return el = 60
})
console.log(a23)//0 ===> No 60 number is present in the array therefore returns 0

console.log("=================================")

//slice() ===>  slice(startIndex, endIndex(not included)) ===> return array

//          0   1   2   3   4   5   6   7   8
let num3 = [11, 22, 33, 44, 55, 66, 77, 88, 99]
//          -9  -8  -7  -6  -5  -4  -3  -2  -1
console.log(num3.slice(4)) //[ 55, 66, 77, 88, 99 ]
console.log(num3.slice(-3)) //[ 77, 88, 99 ]
console.log(num3.slice(3,6)) //[ 44, 55, 66 ]
console.log(num3.slice(-7, -5)) //[ 33, 44 ]
console.log(num3.slice(2,-2)) //[ 33, 44, 55, 66, 77 ]
console.log(num3.slice(-8,5)) //[ 22, 33, 44, 55 ]
console.log(num3.slice(-2,2))// []
console.log(num3.slice(5,-6)) // []
console.log(num3.slice(4,-5)) // []


// node 9-ArrayMethods.js