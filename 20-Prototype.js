//31st March 2024 , 1st April 2024

// script30.js, script31.js

let per1 = {
    fn:"sonal",
    ln:"lambat",
    displayName:function(){
        console.log(this.fn+this.ln)
    }
}
console.log(per1.fn)
console.log(per1.ln)
per1.displayName()

// program 2

function Person(fn,ln){
    this.firstName = fn 
    this.lastName = ln 
    this.displayName = function(){
        console.log(this.firstName + this.lastName)
    }
}

let a1 = new Person("sonal","khante")
let a2 = new Person("chetan","khante")
console.log(a1)
console.log(a2)

a1.displayName()
a2.displayName()

// // program 3

function Person(fn,ln){
    this.firstName = fn 
    this.lastName = ln 
}

let q1 = new Person("sonal","khante")
let q2 = new Person("novika","khante")
console.log(q1)
console.log(q2)
// every object has one property __proto__ === Parent.protype

console.log(q1.__proto__ === Person.prototype)
console.log(q2.__proto__ === Person.prototype)

Person.prototype.displayName  = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.country = "India"

q1.displayName()
q2.displayName()

let names = ["chetan","sonal","novika"]
console.log(names)
names.pop()
console.log(names.__proto__ === Array.prototype)

Array.prototype.sonal = function(){
    console.log("hello sonal !")
}
names.sonal()

console.log(names instanceof Array)
console.log(q1 instanceof Person)
console.log(q2 instanceof Person)

let q = q1.hasOwnProperty("firstName")
let b  = q1.hasOwnProperty("lastName")
let a = q1.hasOwnProperty("country")
console.log(a)
console.log(b)
console.log(q)


// script31.js ///////////////////////////////////

// let sonal = {
//     firstName:"sonal",
//     lastName:"khante",
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// console.log(sonal.firstName)
// console.log(sonal.lastName)
// sonal.displayName()

// function contructor 

function Person(fn,ln){
    this.firstName = fn 
    this.lastName = ln
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }

}
let sonal = new Person("sonal2","khante2")
let chetan = new Person("chetan2","khante2")
console.log(sonal)
console.log(chetan)

// every object has __proto__ === Parent.protype

// console.log(sonal.__proto__ === Person.prototype)
// console.log(chetan.__proto__ === Person.prototype)
// Person.prototype.displayName = function(){
//     console.log(this.firstName + this.lastName)
// }
// Person.prototype.city = "pune"

// sonal.displayName()
// chetan.displayName()

// console.log(sonal instanceof Person)
// console.log(chetan instanceof Person)

// console.log(sonal.hasOwnProperty('firstName'))
// console.log(sonal.hasOwnProperty('lastName'))
// console.log(sonal.city)
// console.log(chetan.city)


// let names = ["rashmi","sayali"]
// console.log(names)
// console.log(names.__proto__ === Array.prototype)
// names.pop()

// Es6 class 

class Person {
    //country = "india"
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
        // this.displayName = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let indu = new Person("indrayani","lambat")
let ketan = new Person("ketan","lambat")
console.log(indu)
console.log(ketan)
indu.displayName()
ketan.displayName()

// Object.create()
let info = {
    init:function(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    },
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let rashmi = Object.create(info)
console.log(rashmi)
rashmi.init("rashmi","hatwar")
rashmi.displayName()