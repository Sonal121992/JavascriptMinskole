let arr = []
console.log(typeof arr) // object

let a = "sonal"
console.log(typeof a) // string

let a1 = 20.456
console.log(typeof a1) //number

// Calculate Age ////////////////////////////////////

let birthYear = [1995, 1992, 2000, 2015]
let age = []
for(let i=0; i<birthYear.length; i++){
    let a = 2024 - birthYear[i]
    age.push(a)
}
console.log(age)// [ 29, 32, 24, 9 ]

// With map
let currAge = birthYear.map(function(el, index, arr){
    return 2024 - el
})
console.log(currAge)// [ 29, 32, 24, 9 ]

// Calculate marks above 50 ////////////////////////////

let marks = [45, 26, 75, 83, 12, 2, 68]
let above50 = []
let below50 = []
for (let i=0; i<marks.length; i++){
    if(marks[i]>50){
        above50.push(marks[i])
    }
}
console.log(above50) // [ 75, 83, 68 ]
for(let i=0; i<marks.length; i++){
    if(marks[i]<50){
        below50.push(marks[i])
    }
}
console.log(below50) // [ 45, 26, 12, 2 ]

// With filter method
let abov50 = marks.filter(function(el, index, arr){
    return el > 50
})
console.log(abov50) // [ 75, 83, 68 ]
let belw50 = marks.filter(function(el, index, arr){
    return el < 50
})
console.log(belw50) // [ 45, 26, 12, 2 ]

// Add the number in array ////////////////////////////////////////

let num = [15, 3, 2, 10]
let sum = 0
for(let i=0; i<num.length; i++){
    sum = sum + num[i]
}
console.log(sum)//30

// With reduce method
let sum1 = num.reduce(function(acc, el, index, arr){
    return acc + el
})
console.log(sum1)//30

// Add "Welcome " infront of each element

let str = ["sonal", "chetan", "novika"]
for(let i=0; i<str.length; i++){
    console.log("Welcome "+ str[i])
}
// Welcome sonal
// Welcome chetan
// Welcome novika

// With forEach method

str.forEach(function(x, y, z){
    console.log("Welcome "+ x)
})
// Welcome sonal
// Welcome chetan
// Welcome novika