// 17th Feb 2024    

// script8.js



// Define array ======================================
// Program 1 ///////////////////

let a = ["bus", "car", "bike", "jeep", "airplane", "train"]
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
// bus
// car
// bike
// jeep
// airplane
// train

// array stores element by index

// length of array
let b = a.length
console.log(b) //6
console.log(a.length) //6

console.log("==========")

// for loop on array ====> to get index number and array elements =============================================
// Program 2 /////////////////////

let c = ["bus", "car", "bike", "jeep", "airplane", "train"]
for (i=0; i<c.length; i++){
    //console.log(i)//0 1 2 3 4 5 6
    console.log(c[i]) // bus, car, bike, jeep, airplane, train
}
console.log("=========")

// for loop on array ====> print the index and elements of array ==============================================
// Program 3 ////////////////////

let fruit = ["mango", "banana", "apple", "cherry", "grapes"]
for(i=0; i<fruit.length; i++){
    console.log(i) // 0 1 2 3 4
    console.log(fruit[i]) // mango, banana, apple, cherry, grapes
}
console.log("=========")

// With for loop =====> print the element of array in reverse

for(i=fruit.length-1; i>=0; i--){
    console.log(fruit[i]) // grapes, cherry, apple, banana, mango
}
console.log("=========")

// With for loop ====> print the element of array and break at some index

for(i=0; i<fruit.length; i++){
    if(fruit[i] == "apple"){
        break
    }
    console.log(fruit[i]) // mango, banana
}
console.log("==========")

// With for loop ====> print the element of array just eliminate one element and print it with continue

for(i=0; i<fruit.length; i++){
    if(fruit[i]=="apple"){
        continue
    }
    console.log(fruit[i])// mango banana cherry grapes
}
console.log("==========")



