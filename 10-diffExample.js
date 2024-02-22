//To find the ages by DOB
//            0     1    2      3    4      5    6
let year = [1989, 1990, 1991, 1992, 1993, 1994, 1995]
let age = []
for(let i=0; i<year.length; i++){
    // console.log(i)//0 1 2 3 4 5 6
    // console.log(year[i])//1989 1990 1991 1992 1993 1994 1995
    let x = 2024 - year[i]
    //console.log(x)// 35 34 33 32 31 30 29
    age.push(x)
}
console.log(age)// [35, 34, 33, 32, 31, 30, 29]

// to find the marks above 50
//          0   1   2   3   4   5   6   7   8
let num = [45, 65, 25, 85, 96, 26, 42, 75, 89]
let above50 = []
for (let i=0; i<num.length; i++){
    //console.log(num[i])//45 65 25 85 96 26 42 75 89
    if(num[i]>50){
        a = num[i]// 65 85 96 75 89
        above50.push(a)
    }
}
console.log(above50)//[ 65, 85, 96, 75, 89 ]


// To get the total of array

let digit = [15, 4, 6, 5, 8, 2]
total = 0
for(let i=0; i<digit.length; i++){
    total = total + digit[i]
}
console.log(total)//40

// to write "Welcome to " before the city name

let city = ["pune", "nagpur", "rourkela", "goa"]
for(let i=0; i<city.length; i++){
    console.log("Welcome to " + city[i])
}
// Welcome to pune
// Welcome to nagpur
// Welcome to rourkela
// Welcome to goa