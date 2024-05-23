// 4th April 2024 , 5th April 2024

// script34.js, script36.js

let a1 = {
    firstName:"sonal",
    lastName:"khante",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
let a2 = {
    firstName:"indrayani",
    lastName:"lambat"
}

let displayName2 = a1.displayName
// let displayName2  = function(){
//     console.log(this.firstName + this.lastName)
// }
displayName2()

// // bind //////////////////////////////////////////////////////////////////////

let q = displayName2.bind(q2)
let x  = function(){
    console.log(q2.firstName + q2.lastName)
}
x()


// program 2


let e1 = {
    firstName:"sonal",
    lastName:"khante"
}
let e2 = {
    firstName:"supriya",
    lastName:"patil"
}
let e3 = {
    firstName:"rajat",
    lastName:"hatwar"
}
let displayName3 = function(){
    console.log(this.firstName + this.lastName)
}
displayName3.bind(e1)()
displayName3.bind(e2)()
displayName3.bind(e3)()


// program 2


let sonal = {
    firstName:"sonal",
    lastName:"khante"
}
let supriya = {
    firstName:"supriya",
    lastName:"patil"
}
let rajat = {
    firstName:"rajat",
    lastName:"hatwar"
}
let displayName4 = function(a){
    console.log(this.firstName + this.lastName)
    console.log(greet)
}
displayName4.call(sonal,"hello")
displayName4.call(supriya,"hello")
displayName4.call(rajat,"hello")


// apply //////////////////////////////////////////////////////////////////
displayName4.apply(sonal,["bye","hi","bye","good bye","tc"])

let a = a1.displayName
// let a = function(){
//     console.log(this.firstName + this.lastName)
// }
a()
a1.a()
a2.a()

// // call , bind , apply
// // object literal
// let sonal = {
//     firstName:"sonal",
//     lastName:'khante',
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// sonal.displayName()
// let indu  = {
//     firstName:"indrayani",
//     lastName:"lambat",
// }
// let displayName2  = sonal.displayName
// let displayName2 = function(){
//     console.log(this.firstName + this.lastName)
// }

// bind()  //////////////////////////////////////////////////////

// let arr = displayName2.bind(sonal)
// let arr = function(){
//         console.log(sonal.firstName + sonal.lastName)
//     }
// call()
// apply()
// console.log(sonal.firstName)
// console.log(sonal.lastName)
// sonal.displayName()

// program 2

let x1 = {
    firstName:"sonal",
    lastName:"lambat"
} 
let x2 = {
    firstName:"indrayani",
    lastName:"lambat"
} 
let x3 = {
    firstName:"vaishnavi",
    lastName:"kawadkar"
} 
let displayName = function(){
    console.log(this.firstName + this.lastName)
}
let q1 = displayName.bind(x1)
let q2 = displayName.bind(x2)
let q3 = displayName.bind(x3)
let displayName6 = function(greet){
    console.log(this.firstName+ this.lastName)
    console.log(greet)
}
displayName6.call(x1,"hello")
displayName6.call(x2,"hello2")
displayName6.call(x3,"hello3")


displayName6.apply(x1,["bye"])
displayName6.apply(x2,["bye2"])
displayName6.apply(x3,["bye3"])


//function declaration ////////////////////////////////////
function displayColor(cl){
    return cl + "G"
}
let r = displayColor("green")
console.log(r)



let  displayColor3 = function(cl){
    return cl + "G"
}
let r2 = displayColor3("green")
console.log(r2)

// let  displayColor4 = (cl)=>{
//     return cl + "G"
// }
// let r3 = displayColor4("green")
// console.log(r3)

let  displayColor4 = (cl)=>cl + "G"
let r3 = displayColor4("green")
console.log(r3)