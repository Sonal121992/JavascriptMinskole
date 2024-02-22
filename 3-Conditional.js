// 7th Feb 2024

// Conditional Statement
// one input and multiple outcomes

// Circus
// tkt ====> number of ticket
// tkt > 0 && tkt <= 5 ------ 10% discount
// tkt > 5 && tkt <= 10 ----- 20% discount
// tkt> 10 ------------------- 30% discount

// if(condition){
//    statement
//}

// Program 1 ======> only use of "if" statement
let tkt = 3
if(tkt > 0 && tkt <= 5){
    console.log('10% discount')
}
if(tkt > 5 && tkt <= 10){
    console.log('20% discount')
}
if(tkt > 10){
    console.log('30% discount')
}
// if tkt = 3 ---- 10% Discount
// if tkt = 15 ----- 15% Discount

// Program 2 ========> only use of "if ----else if " statement
let tkt1 = -2
if(tkt1 > 0 && tkt1 <= 5){
    console.log('10% discount')
}
else if(tkt1 > 5 && tkt1 <= 10){
    console.log('20% discount')
}
else if(tkt1 > 10){
    console.log('30% discount')
}
else{
    console.log("Invalid Entry")
}

// if tkt1 = 2 ------> 10% discount
// if tkt1 = -2 -----> Invalid Entry

//Program 3 ===> Grade pattern
let marks = 95
if(marks > 90){
    console.log("Grade A")
}
if(marks >= 75){
    console.log("Grade B")
}
if(marks >= 60){
    console.log("Grade C")
}
// Grade A
// Grade B
// Grade C

// Program 4 ===> Grade Pattern with Logical Operator
let marks1 = 80
if(marks1 > 90){
    console.log("Grade A")
}
if(marks1 > 75 && marks1 <= 90){
    console.log("Grade B")
}
if(marks1 > 60 && marks1 <= 75){
    console.log("Grade C")
}
// Grade A === for 92
// Grade B for 80

// Program 5 ===> Grade Pattern with " If else" instead of Logical Operator
let marks2 = 59
if(marks2 > 90){
    console.log("Grade A")
}
else if(marks2 >= 75){
    console.log("Grade B")
}
else if(marks2 >= 60){
    console.log("Grade C")
}
else{
    console.log("Please Try Again")
}
// Grade A ===== for 92
// Please Try Again ==== for 59

// Program 6 ====> between 2 variables

let a = 10
let b = 50
if(a > b){
    console.log("a is greater")
}
if(b > a){
    console.log("b is greater")
}

// b is greater

// Program 7 ====> comparison between 3 variables

let x = 4
let y = 7
let z = 3
if(x > y && x > z){
    console.log("x is greater")
}
else if(y > x && y > z){
    console.log("y is greater")
}
else{
    console.log("z is greater")
}
// y is greater

// Program 8 =====> ternary operator
let a1 = 45
let b1 = 12
a1 > b1 ? console.log("a1 is greater"):console.log("b1 is greater")
// a1 is greater



//node 3-Conditional.js