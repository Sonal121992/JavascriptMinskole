// Object --- Properties and Methods

// 15th March 2024 // 27th Feb 2024
// script12 and script12b

let info = ["sonal","lambat",31,12]
console.log(typeof info) //object

let info1 = {
    // key:values
    // property:values
    firstName: "sonal",
    lastName: "khante",
    age: 31,
    rollNo: 12
}
console.log(typeof info1) // object

// CURD (dot notation and bracket notation) 
// C - create - add
// U - update 
// R - retrive
// D - delete - 

//Create (Add)

info1['language'] = "python" // ===> by Bracket notation
info1.city = "Rourkela" // ===> By dot notation
console.log(info1)
// {
//    firstName: 'sonal',
//    lastName: 'khante',
//    age: 31,
//    rollNo: 12,
//    language: 'python',
//    city: 'Rourkela'
//  }


// Retrive 
console.log(info1['firstName']) // sonal ===> By bracket notation
console.log(info1.language) // python ===> by dot notation

// Update
info1.firstName = "chetan" // ===> dot notation
info1['language'] = "JS, Python, Playwright, Cypress" // -====> bracket notation
console.log(info1)
// {
//  firstName: 'chetan',
//  lastName: 'khante',
//  age: 31,
//  rollNo: 12,
//  language: 'JS, Python, Playwright, Cypress',
//  city: 'Rourkela'
// }

// Delete
delete info1.age // ====> dot notation
delete info1['rollNo'] // ====> bracket notation
console.log(info1)
// {
//  firstName: 'chetan',
//  lastName: 'khante',
//  language: 'JS, Python, Playwright, Cypress',
//  city: 'Rourkela'
// }

// Program 2 /////////////////////////////////////////////////////////////////////////////

vehicle = {
    color: "white",
    type: "cupe",
}

// retrieve //update //add //delete

//dot notation//////////////////////////////
//retrieve
console.log(vehicle.color) // white
//update
vehicle.color = "red"
//add
vehicle.regNo = "2536"
console.log(vehicle) // { color: 'red', type: 'cupe', regNo: '2536' }
//delete
delete vehicle['regNo']
console.log(vehicle) // { color: 'red', type: 'cupe' }

//bracket notation///////////////////////////////
//retrieve
console.log(vehicle['color']) // red
//update
vehicle["color"] = "blue"
//add
vehicle["regNo"] = "4578"
console.log(vehicle) // { color: 'blue', type: 'cupe', regNo: '4578' }
//delete
delete vehicle["regNo"]
console.log(vehicle) //{ color: 'blue', type: 'cupe' }

// Program 3 /////////////////////////////////////////////////////////////////////////////////////

//             0        1           2          3        4
let name = ["sonal", "chetan", "indrayani", "ketan", "novika"]
for(let i=0; i<name.length; i++){
    //console.log(i)//0 1 2 3 4
    console.log(name[i])// sonal chetan indrayani ketan novika 
}
console.log("==============")
// names in reverse
for (let i = name.length - 1; i > -1; i--){
    console.log(name[i]) // novika, ketan indrayani chetan sonal
}
console.log("=================")

// Program 4 //////////////////////////////////////////////////////////////////////////////////////

let sonal = {
    //property : values
    firstName: "sonal",
    lastName: "khante",
    age: 31,
    rollNo: 12
}
console.log(sonal['firstName']) //sonal

for (let x in sonal){
    console.log(x, sonal[x])
}
// firstName sonal
// lastName khante
// age 31
// rollNo 12

let emp = [
    {
        firstName: "sonal",
        lastName: "khante",
        age: 31
    },
    {
        firstName: "chetan",
        lastName: "khante",
        age: 34
    },
    {
        firstName: "novika",
        lastName: "khante",
        age: 3
    }
]
console.log(typeof(emp))
console.log(emp[2].firstName) // novika
console.log(emp[1].age) //34
console.log(emp[0].lastName) //khante

console.log("========================")

// Program 5/////////////////////////////////////////////// 

//              0         1         2       3
let fruit = ["mango", "apple", "cherry", "chickoo"]
console.log(typeof(fruit)) // object
// retrive
console.log(fruit[1]) // apple
// update
fruit[3] = "pineapple"
console.log(fruit) //[ 'manago', 'apple', 'cherry', 'pineapple' ]
// add
fruit.push("grapes")
console.log(fruit) // [ 'manago', 'apple', 'cherry', 'pineapple', 'grapes' ]
fruit.unshift("banana") 
console.log(fruit) // [ 'banana', 'manago', 'apple', 'cherry', 'pineapple', 'grapes' ]
//delete
fruit.pop()
console.log(fruit) // [ 'banana', 'manago', 'apple', 'cherry', 'pineapple' ]
fruit.shift()
console.log(fruit) //[ 'manago', 'apple', 'cherry', 'pineapple' ]

for(let i = 0; i < fruit.length; i++){
    //console.log(i) // 0 1 2 3 
    console.log(fruit[i]) // mango apple cherry pineapple
}



// node 10-ObjectPropertiesMethod.js
