//28th March 2024

//script27.js

// inheritance
// program 1
class Student {

    firstName = "sonal"
    lastName = "khante"

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class Teacher extends Student {
    salary = 1000
    displaySalary(){
        console.log(this.salary)
    }
}
sonalT = new Teacher()
console.log(sonalT.firstName)
console.log(sonalT.lastName)
console.log(sonalT.salary)
sonalT.displayName()
sonalT.displaySalary()

// program 2

class Student {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName  = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class Teacher extends Student {
    salary = 1000
    displaySalary(){
        console.log(this.salary)
    }
}

let chetanK = new Teacher("sonal","khante")
console.log(chetanK.firstName)
console.log(chetanK.lastName)
console.log(chetanK.salary)
chetanK.displayName()
chetanK.displaySalary()


// program 3

class StudentB {
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class TeacherB extends StudentB {
    constructor(fn,ln,salary){
        super(fn,ln)
        this.salary = salary
    }

    displaySalary(){
        console.log(this.salary)
    }
}

let indu= new TeacherB("indi","lambat",90000)
console.log(indu.firstName)
console.log(indu.lastName)
console.log(indu.salary)

indu.displaySalary()
indu.displayName()

// program 4

class StudentC {

    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln 
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }

}

class TeacherC extends StudentC {

    constructor(fn,ln,sl){
        super(fn,ln)
        this.salary = sl
    }

    displaySalary(){
        console.log(this.salary)
    }

}

class Professor extends TeacherC {

    constructor(fn,ln,sl,sp){
        super(fn,ln,sl)
        this.specialization = sp
    }

    displaySpec(){
        console.log(this.specialization)
    }

}

let pro = new Professor("sonal","khante",31,12)
console.log(pro.firstName)
console.log(pro.lastName)
console.log(pro.salary)
console.log(pro.specialization)
pro.displayName()
pro.displaySalary()
pro.displaySpec()