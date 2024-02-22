// 13th Feb 2024

//Loops -- for / while

// for(initialization; condition; increment/decrement){
//    statements
// }

// program 1
// write 1 to 3
for(i=1; i<=3; i++){
    console.log(i) // 1 2 3
}

console.log("==================")

// program 2
// write 1 to 5
for(i=1; i<=5; i++){
    console.log(i) // 1 2 3 4 5 
}
console.log("----------")

// program 3
// Print 5 to 1
for(i=5; i>=1; i--){
    console.log(i) // 5 4 3 2 1
}
console.log("===========")

// program 4
// print table of 2
for(i=2; i<=20; i=i+2){
    console.log(i)//2 4 6  8 10 12 14 16 18 20
}
console.log("===========")

// print table of 2
for(i=1; i<=10; i++){
    console.log(i*2)//2 4 6 8 10 12 14 16 18 20
}
console.log("------------")

// program 5
//print table of 5 in reverse
for(i=50; i>=5; i=i-5){
    console.log(i)
}
console.log("===========")

// program 6
// print table of 6
for(i=6; i<=60; i=i+6){
    console.log(i)//6 12 18 24 30 36 42 48 54 60
}
console.log("-----------")

// print table of 3
for(i=3; i<=30; i=i+3){
    console.log(i)// 3 6 9 12 15 18 21 24 27 30 
}

// for llop with break statement

// break before pringt
for(i=1; i<=5; i++){
    if (i==3){
        break
    }
    console.log(i) // 1 2
}

//break after print
for(i=1; i<=5; i++){
    console.log(i) //1 2 3 
    if(i==3){
        break
    }
}
console.log("---------")

// break in table of 2
for(i=2; i<=20; i=i+2){
    if(i==8){
        break
    }
    console.log(i)//2 4 6
}
console.log("=======")

// For loop with continue

// continue before print
for(i=1; i<=5; i++){
    if(i==3){
        continue
    }
    console.log(i)// 1 2 4 5
}
console.log("-------")

//continue after print
for(i=1; i<=5; i++){
    console.log(i) // 1 2 3 4 5
    if(i==3){
        continue // No eefect of continue
    }
}

// node 5-ForLoops.js
