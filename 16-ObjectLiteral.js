// 31st March 2024 // 26th March 2024 // 30th March 2024

// script21.js, script22.js, script29.js



// // object literal
// let stud1 = {
//     firstName:"sonal",
//     lastName:"khante",
//     age:31,
//     rollNo:12
// }

// let stud2 = {
//     firstName:"vijay",
//     lastName:"lambat",
//     age:60,
//     rollNo:35
// }
// // 100 ----- 400 lines

// // Es6 class
// class Person {
//     first_name = "sonal"
//     last_name = "lambat"
//     age = 23
//     rollNo = 56

//     display_name(){
//         console.log(this.first_name+this.last_name)
//     }
// }

// let studA = new Person()
// let studB = new Person()


// console.log(studA.first_name)
// console.log(studA.last_name)
// console.log(studA.age)
// console.log(studA.rollNo)
// console.log(studA)
// studA.display_name()
// console.log(studB)

// studA.first_name ="amol"
// studA.last_name ="rao"
// studA.age = 23
// studA.rollNo = 55
// console.log(studA)

// // program 3
// // Es6 class with constuctor
// class Person {
//     constructor(fn,ln,age,rollNo){
//         this.firstName = fn
//         this.lastName = ln
//         this.rollNo =rollNo 
//         this.age = age

//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let sonalC = new Person("sonal","khante",35,6)
// let indrayaniC = new Person("indrayani","Lambat",32,34)
// indrayaniC.city = "pune"
// console.log(indrayaniC)



// for(let key in studA){
//     console.log(key, studA[key])
// }

// for(let key in Object.keys(studA)){
//     console.log(key)
// }

// for(let val in Object.values(studA)){
//     console.log(val)
// }

// for(let [k,v] in Object.entries(studA)){
//     console.log(k,v)
// }

// script22.js


let sonal = {
    firstName:"sonal",
    lastName:"khante",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

let chetan = {
    firstName:"chetan",
    lastName:"khante",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

class Person {
    first_name  = "sonal"
    last_name = "khante"

    displayName(){
        console.log(this.first_name + this.last_name)
    }
}
let sonalE =  new Person()
let chetanE =  
console.log(chetanE)
sonalE.first_name = "chetanE"
sonalE.last_name = "khanteE"


//program 2
class PersonB {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln 
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let ketanB = new PersonB("ketanB","lambatB")
let shriyaB = new PersonB("shriyaB","guptaB")
amolB.displayName()
sanjayB.displayName()

// program 3
// Set and Get method

class PersonC {

    setFirstName(fn){
        this.firstName = fn 
    }

    setLastName(ln){
        this.lastName = ln
    }
    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName

    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let sonalC = new PersonC()
console.log(sonalC)
sonalC.setFirstName("sonalC")
amolC.setLastName("lambatC")
let a = amolC.getFirstName()
let b = amolC.getLastName()
console.log(a)
console.log(b)

let chinmayC = new PersonC()
chinmayC.setFirstName("sonalC")
chinmayC.setLastName("khanteC")

// set and get keyword