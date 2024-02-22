// initialization
//while(condition){
//    statement
//    increment/decrement
//}

//program 1
// Print Hello 3 times
let a1 = 1
while(a1 <= 3){
    console.log("Hello") // Hello Hello Hello
    a1 = a1 + 1
}

// program 2
//print 1 to 3
let a2 = 1
while(a2<=3){
    console.log(a2)//1 2 3 
    a2 = a2 + 1
}
console.log("--------")

// Program 3
// print 1 to 5
let a3 = 1
while(a3<=5){
    console.log(a3)// 1 2 3 4 5 
    a3 = a3 + 1
}
console.log("========")

//Program 4
// print 5 to 1
let a4 = 5
while(a4>=1){
    console.log(a4)//  5 4 3 2 1
    a4 = a4 - 1
}
console.log("-------")

// Program 5
// print table of 2
let a5 = 2
while(a5 <= 20){
    console.log(a5)// 2 4 6 8 10 12 14 16 18 20
    a5 = a5 + 2
}
console.log("------")

// Program 6
// Print table of 5 in reverse
let a6 = 50
while(a6>=5){
    console.log(a6)// 50 45 40 35 30 25 20 15 10 5
    a6 = a6 - 5
}
console.log("=========")

// Program 7
// Print table of 3
let a7 = 3
while(a7 <= 30){
    console.log(a7)// 3 6 9 12 15 18 21 24 27 30
    a7 = a7 + 3
}
console.log("========")

// While with break statement

//print after break
let a8 = 1
while(a8 <= 10){
    if(a8 == 5){
        break
    }
    console.log(a8)// 1 2 3 4
    a8 = a8 + 1
}
console.log("========")

//print before break
let a9 = 1
while(a9 <= 10){
    console.log(a9)// 1 2 3 4 5
    if(a9 == 5){
        break
    }
    a9 = a9 + 1
}
console.log("----------")

//While with continue statement

//print after continue
let a10 = 1
while(a10 <= 6){
    if(a10 == 5){
        a10 ++
        continue
    }
    console.log(a10)// 1 2 3 4 6
    a10 = a10 + 1
}
console.log("==========")

//print before continue
let a11 = 1
while(a11 <= 6){
    console.log(a11)// 1 2 3 4 5 6
    if(a11 == 5){
        a11 ++
        continue
    }
    a11 ++
}