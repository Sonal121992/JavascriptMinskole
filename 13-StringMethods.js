// 4th March 2024 // 4th March 2024 //5th March 2024

//script15.js // script15b.js // script16.js


// string -- object 


let firstname = "sonal"
console.log(firstname)
console.log(typeof firstname)

let q1 = firstname.length
console.log(q1)

// Method 
// Action 
// Return type 


let lastname = "khante"

//program 1
let s1 = lastname.toUpperCase()
console.log(s1)

let middlename = `Chetan`
let s2 = middlename.toLowerCase()
console.log(s2)

// program 2 ===> method chaining
let s3 = "hello".toUpperCase().toLowerCase().length
//let s3 = "hello".toUpperCase().toLowerCase().length.toUpperCase()
console.log(s3)

// program 3 ===> startswith() and endswith()
let fruit = "apple"
let s4 = fruit.startsWith("app")
let s5 = fruit.startsWith("a")
let s6 = fruit.startsWith("A")
let s7 = fruit.endsWith("e")
let s8 = fruit.endsWith("le")
let s9 = fruit.endsWith("lle")

console.log(s4)
console.log(s5)
console.log(s6)
console.log(s7)


// program 4
let vegetable = "brinjal"
//    0  1  2   3   4   5   6
//    b  r  i   n   j   a   l

// includes()
let s10 = vegetable.includes('i')
let s11 = vegetable.includes('in')
let s12 = vegetable.includes('inJ')
console.log(s10)
console.log(s11)
console.log(s12)


// indexof()
let s13 = vegetable.indexOf('b')
let s14 = vegetable.indexOf('e')
console.log(s13)
console.log(s14)


// toUpperCase()
// toLowerCase()
// startWith()
// endsWith() 
// includes()
// indexOf()


// program 5
let a11 = ' hello'
console.log(a11)

// trimStart()
console.log(a11.length)
s15 = a11.trimStart()
console.log(s15.length)

// trimEnd()
a11 = ' hello '
console.log(a11.length)
s16 = a11.trimEnd()
console.log(s16.length)

// trim()
a11 = ' hello '
s17  = a11.trim()
console.log(s17.length)

// program 6 ===> replace()
info = 'i am learning javascript'
s18 = info.replace("javascript","python")
console.log(s18)


// slice()
let city = "chandrapur"
console.log(city)

//  0   1  2  3  4  5  6  7  8  9
//  c   h  a  n  d  r  a  p  u  r
// -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
let a1 = city.slice(2)
let a2 = city.slice(2,8)
console.log(a1)
console.log(city.slice(2,8))
console.log(city.slice(-8))
console.log(city.slice(1,-1))
console.log(city.slice(-7,8))
console.log(city.slice(-1,-3))

// concat()
let last_name = "khante"
let fullName = last_name.concat(" ").concat("sonal")
console.log(fullName)

// split()
let full_name = "sonal khante 8668280134"
let info = full_name.split(" ")
console.log(info) // ["sonal", "khante", "8668280134"]
console.log(full_name.split("a"))
//["son","a kh","nte 8668280134"]


// indexof()

let city2 = "nagpur"
let e2 = city2.indexOf('n')
console.log(e2)

// lastindexof()
let city3 = "chandrapur"
let e3 = city3.lastIndexOf('a')
console.log(e3)

// replace()
let info3 = "I am learning js"
let e4 = info3.replace("js","python")
console.log(e4)

// repeat()
let e5 = info3.repeat(3)
console.log(e5)


// charAt() and charCodeAt()
let city10 = "warDha"

// 0  1  2  3  4   5
// w  a  r  D  h   a

console.log(city10.charAt(1))
console.log(city10.charCodeAt(3))

// substring()
let info2 = "i am learning javascript"
console.log(info2.substring(2,88))
