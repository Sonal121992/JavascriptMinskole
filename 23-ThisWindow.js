//6th April 2024

// script37.js

// program 1
console.log("hello")



// program 2

var firsName = "sonal"
var lastName = "khante"
console.log(window.firstName)
console.log(window.lastName)

let a1 = {
    firsName:"priya",
    lastName:"gupta",
    displayName:function(){
        // this --- priya
        console.log(this.firsName + this.lastName) // priyagupta
        let displayName2 = function(){
            // this ---> window
            console.log(this.firsName + this.lastName) // sonalkhante
        }
        displayName2()
    }
}
a1.displayName()


//program 2

let a20 = {
    firsName:"vaibhavi",
    lastName:"kuhite",
    displayName:function(){
        // this --- a20
        console.log(this.firsName + this.lastName) // vaibhavikuhite
        let displayName2 = () =>{
            // this - a20
            console.log(this.firsName + this.lastName) // vaibhavikuhite
        }
        displayName2()
    }
}
a20.displayName()



let  a3 = {
    firsName:"suraj",
    lastName:"singh",
    displayName:()=>{
        // this --- window
        console.log(this.firsName + this.lastName) // 
        let displayName2 = () =>{
            // this - window
            console.log(this.firsName + this.lastName) // 
        }
        displayName2()
    }
}
a3.displayName()