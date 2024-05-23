// 17th April 2024
// day14.js

async function getUser(id){
    try {
        const response = await fetch(`https://reqres.in/api/users/${id}`)
        console.log(response)
        if(!response.ok){
            throw new Error("Failed to fetch users")   
        }
        let data  = await response.json()
        console.log(data.data)
        return data.data
    }
    catch(err){
        console.error('Error while fetching the reponse',err)
        throw err;
    }
}

function raceP(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('function called...race!')
        },1)
    })
}


// 1 ---- Promise.all()
async function PromiseAll(){
    try{
        let [user1, user2, user3] = await Promise.all([
            getUser(1),
            getUser(2),
            getUser(3)
        ])
        console.log(user1)
        console.log(user2)
        console.log(user3)
    }
    catch(err){
        console.log('error while fetching the users: ', err)
    }
}
PromiseAll()

// 2 ---- PromiseAllSettled()
async function PromiseAllSettled(){
    try{
        let arr = await Promise.allSettled([
            getUser(1),
            getUser(1),
            getUser(1),
            Promise.reject("bye")
        ])
        arr.forEach(function(el){
            if(el.status == "fulfilled"){
                console.log(el.value)
            }
            else{
                console.log(el.reason)
            }
        })
        console.log(arr)
    }
    catch(err){
        console.log('error while fetching the users: ', err)
    }
}
PromiseAllSettled()

// 3 ----- Promise.any()
async function PromiseAny(){
    try{
        let user = await Promise.any([
            Promise.reject("rejected"),
            getUser(1),
            getUser(2),
            getUser(3)
        ])
        console.log(user)
    }
    catch(err){
        console.log('error while fetching the users: ', err)
    }
}
PromiseAny()

// 4 ---- Promise.race()
async function PromiseRace(){
    try{
        let user = await Promise.race([
            getUser(1),
            raceP()
        ])
        console.log(user)
    }
    catch(err){
        console.log('error while fetching the users :', err)
    }
}
PromiseRace()

getUser(2)

// node day13-asyncWithPromiseTryCatchMethod.js