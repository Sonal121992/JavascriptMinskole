// 1st March 2024

// script14a.js and script14b.js

// string 

let first_name = "sonal"
console.log(first_name)

let last_name = 'khante'
console.log(last_name)

let middle_name = `chetan`
console.log(middle_name)


let fn = "sonal"
let ln  = "khante"

//My firstName is sonal and my lastName is khante
console.log("My firstName is "+fn+" and my lastName is "+ln)

// program 2 string interpolation
console.log(`My firstName is ${fn} and my lastName is ${ln}`)

// program 3

// string + number  ----> string 
// number + string  ----> string 
// string + string  ----> string
// number + number  ----> number

let a = 10
let b = 15
let c = "hello"

console.log(a + b + c)
// number + number + string
// 25 + "hello" 
// 25hello

console.log(c+a+b)
// string + number + number
    //"hello10" + 20
    // "hello1015"

console.log(b+c+a)
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)


// string ------> object ------ properties and methods 

let city = "pune"
console.log(city)
let e = city[0]
console.log(e)

console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

// program 2
// string -----> object -----> properties and methods 
// action and return type

let city3 = "chandrapur"
// 0    1    2    3    4    5    6   7   8    9
// c    h    a    n    d    r    a   p   u    r
console.log(city3.length)
for(let i = 0 ; i < 10 ; i++){
    //console.log(i)
    console.log(city3[i])
}

for(let i = city3.length-1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(city3[i])
}


// program 3
let city4 = "nagpur"
let i1  = 0

while(i1 < city4.length){
    //console.log(i1)
    console.log(city4[i1])
    i1 = i1 + 1
}

let i2 = city4.length - 1
while(i2 >= 0){
    console.log(city4[i2])
    i2 = i2 - 1
}


// 90 % 

let firstname = "sonal"
let lastname = 'khante'
let middlename = `chetan`

console.log(firstname)
console.log(lastname)
console.log(middlename)

console.log(typeof firstname)
console.log(typeof lastname)
console.log(typeof middlename)

// string -----> object ------> properties and methods 
firstname = "sonal"
lastname = "khante"

// My firstName is sonal and my lastname is khante
console.log("My firstname is "+firstname+" my lastName name is "+ lastname)
// string interpolation
console.log(`My firstName is ${firstname} and my lastName is ${lastname}`)

// program 2

// string + string -----> string 
// number + string -----> string 
// string + number -----> string 
// number + number -----> number

let x = 10 
let y = 15 
let z = "hello"

console.log(x+y+z)
// number + number + string
//  10  + 15 
       //25 + "hello"
            // '25hello' 

console.log(z+x+y)

// string + numbe + number
    //"hello" + 10
        // hello10 + 15
            // hello1015

// program 2

let place = "pune"
// 0    1   2    3
// p    u   n    e

console.log(place[0])
console.log(place[1])
console.log(place[2])
console.log(place[3])

// program 3

let place2 = "chandrapur"
//  0     1    2    3    4     5    6     7    8     9
//  c     h    a    n    d     r     a    p    u      r 
// loop
// object --- properties 

console.log(place2.length) // 10
for(let i = 0 ; i < place2.length ; i++){
    //console.log(i)
    console.log(place2[i])
}

for(let i = place2.length - 1 ; i >= 0; i--){
    //console.log(i)
    console.log(place2[i])
}


// program 4 
let place3 = "nagpur"
// N a g p u r

let a1 = 0
while(a1 < place3.length){
    console.log(place3[a1])
    a1 = a1 + 1
}

let a2 = place3.length -1 
while(a2 >= 0){
    //console.log(i2)
    console.log(place3[a2])
    a2 = a2 -1
}


// program 5

let place5 = "pune"
// enup
let revSt = ""

for(let i = 0 ; i < place5.length ; i++){
    //console.log(city5[i])

    revSt = place5[i]  + revSt

             // p     + ""  =====> p
             // u     +  p  =====> up
             // n     +  up  =====> nup
             // e     +  nup ======> enup
}
console.log(revSt)