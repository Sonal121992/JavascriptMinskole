// 15th Mar 2024
// script10.js and script10b.js

//To find the ages by DOB
//            0     1    2      3    4      5    6
let year = [1989, 1990, 1991, 1992, 1993, 1994, 1995]
let age = []
for(let i=0; i<year.length; i++){
    // console.log(i)//0 1 2 3 4 5 6
    // console.log(year[i])//1989 1990 1991 1992 1993 1994 1995
    let x = 2024 - year[i]
    //console.log(x)// 35 34 33 32 31 30 29
    age.push(x)
}
console.log(age)// [35, 34, 33, 32, 31, 30, 29]

// Solve with method
// To get ans with each element of array use Map method

// 
birthYear = [1989, 1990, 1991, 1992, 1993, 1994, 1995]
let a2 = birthYear.map(function(el,index,arr){
    console.log(el,index,arr)
    return 2024-el
})
console.log(a2)


// add 1 to each element of the array
let numbers = [11,22,33,44,55,66,77,88,99]
let a3 = numbers.map(function(el,index,arr){
    return el + 1
})
console.log(a3) // [12,23,34,45,56,67,78,89,100]

console.log("========================================================================")


// to find the marks above 50
//          0   1   2   3   4   5   6   7   8
let num = [45, 65, 25, 85, 96, 26, 42, 75, 89]
let above50 = []
for (let i=0; i<num.length; i++){
    //console.log(num[i])//45 65 25 85 96 26 42 75 89
    if(num[i]>50){
        a = num[i]// 65 85 96 75 89
        above50.push(a)
    }
}
console.log(above50)//[ 65, 85, 96, 75, 89 ]

// also can be wrtten as

//           0  1  2  3   4  5  6  7 8
let marks = [33,44,55,33,44,55,66,77,88]
let above60 = []
for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i] > 60){
        //console.log(marks[i])
        above50.push(marks[i])
    }
}
console.log(above60)

// By using method

let a4 = num.filter(function(el,index,arr){
    return el > 50
})
console.log(a4)


// filter use in Banking Transaction

let transactions = [11,22,33,44,-77,88,99,67,-89]
let deposit = transactions.filter(function(el,index,arr){
    return el > 0
})
console.log(deposit)
let  withdrawl = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(withdrawl)


console.log("=============================================================================")



// To get the total of array

let digit = [15, 4, 6, 5, 8, 2]
total = 0
for(let i=0; i<digit.length; i++){
    total = total + digit[i]
}
console.log(total)//40

// Write by using method ----- reduce

let a5 = digit.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(a5)



console.log("==============================================================================")



// to write "Welcome to " before the city name

let city = ["pune", "nagpur", "rourkela", "goa"]
for(let i=0; i<city.length; i++){
    console.log("Welcome to " + city[i])
}
// Welcome to pune
// Welcome to nagpur
// Welcome to rourkela
// Welcome to goa

// Write welcome with each element using method ------ forEach

let a6 = city.forEach(function(el,index,arr){
    console.log("Welcome to " + el)
})
console.log(a6)


console.log("=======================================================================")


// Same elemenet with dfiirent method

// filter() ////////////////////////////////////////////////////////
//          0  1  2  3  4  5     
let numA = [22,33,44,55,40,33]
let a7 = numA.filter(function(el,index,arr){
    return el > 40
})
console.log(a7) // [44,55]

// find() ///////////////////////////////////////////////////////////
let a8 = numA.find(function(el,index,arr){
    return el > 40
})
console.log(a8) //44

// findIndex() ///////////////////////////////////////////////////////
let a9 = numA.findIndex(function(el,index,arr){
    return el > 40
})
console.log(a9)//2

// every() /////////////////////////////////////////////////////////////
let a10 = numA.every(function(el,index,arr){
    return el > 10
})
console.log(a10) // true ===> since every number is greater than 10 only

// some() //////////////////////////////////////////////////////////////
let a11 = numA.some(function(el,index,arr){
    return el>60
})
console.log(a11) // false

console.log("======================================================================")


// slice()

//          0  1  2  3  4  5  6  7  8  9
let arr = [11,22,33,44,55,66,77,88,99,100]
//        -10-9 -8 -7  -6 -5 -4 -3 -2  -1
//nums.slice(startIndex, endIndex (not included))
console.log(arr.slice(3))
console.log(arr.slice(3,6))
console.log(arr.slice(-10,6))
console.log(arr.slice(1,-3))
console.log(arr.slice(-3))
console.log(arr.slice(-1,-3))





// node diffExamplewithArrayMethods.js