//Ajax => asynch javascript


//synch => line by line
// function add1(){
//     console.log('I am add 1')
// }

// function add2(){
//     console.log('i am add 2')
// }

// add2()
// add1()

//synch => asynch

//setTimeOut

// function add3() {
//     setTimeout(function () {
//         console.log("I am add 3")
//     }, 3000)
// }

// function add4(){
//     console.log('I am add 4')
// }

// add3()
// add4()
//I am add 4
//3 sec
//I am add 3

//User create => getID => show Info

// function GetUserInfo() {
//     setTimeout(function () {
//         console.log('User Created')
//     }, 4000)

//     setTimeout(function () {
//         console.log('Get ID')
//     }, 3000)

//     setTimeout(function () {
//         console.log('Show User')
//     }, 2000)
// }

// GetUserInfo()

//2 sec Show USer
//3 sec GetID
//4 Sec User create

//Synch => Asych => Synch

//callBack hell => 

// function getUSerInfo() {
//     setTimeout(function () {
//         console.log("User Created")

//         setTimeout(function () {
//             console.log('GetID')

//             setTimeout(function () {
//                 console.log('Show User')
//             }, 1000)

//         }, 2000)

//     }, 3000)
// }
// getUSerInfo()


//=======================================================

//promises=> ES6 

let pro=new Promise(function(resolve,reject){
    let a=20
    let b=10
    if(a==b){
        resolve("hello")
    }
    else{
        reject('bye')
    }
})

//consume => .then()
pro.then(function(str){
console.log(str)
})
.catch(function(str){
    console.log(str)
})