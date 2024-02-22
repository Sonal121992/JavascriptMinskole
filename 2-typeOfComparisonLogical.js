// introvert and extrovert

// calm             // loud
// less outing      // more outing
// less social      // more social

// human -----type
// Properties ------ weight, height, age, color
// Method ------ walk(), talk()


// Vehicle ---- type
// Properties ----- RegisNo., color, type, model
// Method ----- start(), stop()

// Bank Acc ---- type
// Properties ------ AccNo., AccType, Balance
// Method --- Deposit(), Withdrawal(), FD(), Transfer()

let a = 10
console.log(a) // 10
console.log(typeof a) // number
//10, -10, 0.5, -98.56


let b = 11.56
console.log(b) //1.56
console.log(typeof b) // number

let c = true
console.log(c) // true
console.log(typeof c) // boolean
// true, false

let d = "tree"
console.log(d) // tree
console.log(typeof d) // string
// "A", "a", 'A1234', '$yubb6420'

console.log(typeof 7) // number
console.log(typeof '7') // string

// entity1 < entity2 =====> boolean ====> true or false

// Comparison Operator
// < , > , <= , >= -----> basic
// == , !=  ------> check only value
// === , !== -----> checks both value and type

console.log(2 === 2) // true
console.log(2 === '2') // false
console.log(2 === 3) // false
console.log(2 !== 2) // false
console.log(2 !== '2') // true
console.log(2 !== 3) // true
console.log(2 == 2) // true
console.log(2 == '2') // true
console.log(2 != 2) // false
console.log(2 != '2') // false
console.log(2 < 3) // true
console.log(2 > 3) // false
console.log(2 <= 3) // true
console.log(2 >= 3) // false

console.log("------------")

// logical operator

// && ====> AND Operator

// true && true -----> true
// true && false -----> false
// false && true -----> false
// false && false ----> false

console.log(7===7 && 8===8) // true
console.log(7===7 && 8==="8") // false
console.log(7==="7" && 8===8) // false
console.log(7==="7" && 8==="8") // false

console.log("-----------")

// || =====> OR Operator

// true || true ------> true
// true || fasle -----> true
// false || true -----> true
// false || false ----> false

console.log(7===7 || 8===8) // true
console.log(7===7 || 8==="8") // true
console.log(7==="7" || 8===8) // true
console.log(7==="7" || 8==="8") // false

console.log("--------------")


// ! ======> Not Operator
console.log(!(8===8)) // false
console.log(!(8!==8)) // true


//  node 2-typeOfComparisonLogical.js