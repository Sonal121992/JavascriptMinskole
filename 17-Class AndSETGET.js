// 26th March 2024 // 31st March 2024

// script24.js, script25.js


let stud1 = {
    firstName:"sonal",
    lastName :"khante",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

let stud2 = {
    firstName:"chetan",
    lastName:"khante",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

//program 2

class Person {
    firstName = "sonal"
    lastName = "khante"

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let perA = new Person()
let perB = new Person()
console.log(perA.firstName)
console.log(perA.lastName)
amolA.displayName()

console.log(perB.firstName)
console.log(perB.lastName)
chinmayA.displayName()

console.log(perA)
console.log(perB)

perA.firstName = "perA"
perA['lastName'] = "perB"
console.log(perA)

//program 3

class PersonB {

    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let indu = new PersonB("indu","lambat")
let ketan = new PersonB("ketan","lambat")
indu.city = "pune"

console.log(indu.firstName)
console.log(indu.lastName)

console.log=(ketan.firstName)
console.log(ketan.lastName)
console.log(indu.city)

//program 3


class PersonC {

    setFirstName(fn){
        this.firstName  = fn 
    }
    setLastName(ln){
        this.lastName  = ln
    }

    getLastName(){
        return this.lastName
    }
    getFirstName(){
        return this.firstName
    }

}
let sonalC = new PersonC()
console.log(sonalC)
sonalC.setFirstName("sonal")
sonalC.setLastName("khante")
console.log(sonalC)

let a = sonalC.getFirstName()
console.log(a)

//program 2

let info = {
    full_name:"indu lambat",
    age:28
}
info.age = 67
info.city  = "pune"

// set and get keyword
class  personD {

    set fn(fn){
        this.firstName  = fn
    }
    get fn(){
        return this.firstName
    }

    set ln(ln){
        this.lastName  = ln
    }
    get ln(){
        return this.lastName
    }

}
// setting class fields as properties 
let chetan = new personD()
chetan.fn = "chetan"
console.log(chetan.fn)
console.log(chetan)

chetan.ln = "khante"
console.log(chetan.ln)
console.log(chetan)