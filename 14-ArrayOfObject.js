// 20th March 2024 //21st March 2024 //22nd March 2024 //23rd March 2024

// script17.js, script18.js, script19.js, script19b.js

// program 1
//               0         1         2
let names  = ["sonal","chetan","novika"]

let a = names[0]
let b = names[1]
let c = names[2]

console.log(a)
console.log(b)
console.log(c)

let [a1,b1,c1] = names
console.log(a1)
console.log(b1)
console.log(c1)

// program 2
let fruits = ["apple","mango","banana"]
let [q1,,q2] = fruits
console.log(q1)
console.log(q2)

// program 3
//                     0                    1                2
//                0        1          0         1         0         1
let cities =  [["Nagpur","Wardha"],["bhopal","indore"],["lucknow","agra"]]
let [[c11,c22],[c44,c55],[c66,c77]] = cities
console.log(c55)


// program 4

let info = {
    firstName:"sonal",
    lastName:"khante"
}

let {firstName,lastName} = info
console.log(firstName)
console.log(lastName)

let Vehicle = {
    color:"red",
    type:"sedane"
}
let {color:cl,type:ty} = Vehicle
console.log(cl)
console.log(ty)

// program 4

let info2 = {
    fullName:"sonal khante",
    parent:{
        mother:"lalita lambat",
        father:"vijay lambat"
    }
}

let {fullName,parent:{mother,father}} = info2
console.log(fullName)
console.log(mother)
console.log(father)

// program 5

let students = [
    {
        fn:"sonal",
        ln:"khante"
    },
    {
        fn:"novika",
        ln:"khante"  
    }
]
 
let [{fn:f1,ln:l1},{fn:f2,ln:l2}] = students
console.log(f1)
console.log(l1)
console.log(f2)
console.log(l2)

// program 6
let info3 = {
    firstName:"sonal",
    lastName:"khante",
    skills:["python","javascript"]

}

let {firstName:f3,lastName:l3,skills:[sub1,sub2]}  = info3
console.log(f3)
console.log(l3)
console.log(sub1)
console.log(sub2)

// script18.js

// program 1
let name = ["gayatri","sonal","shreya","rashmi"]

let n1 = name[0]
let n2 = name[1]
let n3 = name[2]
let n4 = name[3]

console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)

// program 2
name = ["rashmi","sonal","vaishnavi","sayali"]
let [s1,s2,s3,s4] = name
console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)


// program 3
let fruit = ["apple","banana","grapes"]
let [fru1,,fru2] = fruits
console.log(fru1)
console.log(fru2)

// program 4
let states = [
    ["nagpur","wardha"],
    ["jaipur","udaipur"],
    ["bhopal","indore"]
]

let [[a11,a12],[a13,a14],[a15,a16]]  = states
console.log(a11)
console.log(a15)

// program 5

let info1 = {
    frstName:"sonal",
    lstName:"khante"
}

let {frstName,lstName} = info
console.log(frstName)
console.log(lstName)

// program 6 

let vehicle = {
    type:"cupe",
    model:"suv"
}

let {type:typ,model:mdl} = vehicle
console.log(typ)
console.log(mdl)

// program 7
let info21 = {
    fullName:"sonal khante",
    parent:{
        mother:"lalita lambat",
        father:"vijay lambat"
    }
}

let {fullName:fn,parent:{mother:mr,father:fr}} = info21
console.log(fn)
console.log(mr)
console.log(fr)


// program 8 

let studentList = [
    {
        firstName:"rashmi",
        lastName:"hatwar"
    },
    {
        firstName:"ishita",
        lastName:"gaydhane"
    }
]
let [{firstName:f11,lastName:l11},{firstName:f12,lastName:l12}] = studentList
console.log(f11)
console.log(l11)
console.log(l12)

// program 9
let info22 = {
    fullName:"chetan khante",
    address:"rourkela",
    skills:["django","python"]
}
let {fullName:fn2,address:ad2,skills:[h1,h2]} = info22
console.log(fn2)
console.log(ad2)
console.log(h1)
console.log(h2)


// script19.js

// map and set 

let info4 = {
    firstName:"sonal",
    lastName:"khante",
    age:31,
    1:35
}

for(let key in info4){
    console.log(typeof key)
}

console.log(10)
console.log('10')

// program 1
let roles  = new Map()
console.log(roles)

roles.set(1,"admin")
roles.set(2,"manager")
roles.set(3,"customer")
roles.set(4,"employee")
console.log(roles)

console.log(roles.get(1))
console.log(roles.get(2))
console.log(roles.get(3))
console.log(roles.get(4))

// program 2

let skills= ["python","javascript","html","css"]
let info5 = {firstName:"chetan",lastName:"khante"}
let canDrive = true
let names1 = new Map(
    [
        [skills,4],
        [info5,2],
        [canDrive,"yes"],
        [1,"rollNo"],
        ["fullName","sonal khante"]
    ]

)
console.log(names1)
names.get(1)
names.get(skills)

// program 3
let x = names.has(info5)
console.log(x)

// program 4

let roles2 = new Map(
    [
        [1,'admin'],
        [2,'manage'],
        [3,'customer'],
        [4,'employee']
    ]
)

// roles2.clear()
// console.log(roles2)
roles2.forEach(function(val,key){
    console.log(typeof val,typeof key)
})


// script19.js ===> revision

// map

let info6 = {
    firstName:"indrayani",
    lastName:"lambat",
    age:28,
    rollNo:22.,
    1:35
}
console.log(info6)

for(let key in info6){
    console.log(typeof key)
}

let role = new Map()
role.set(1,"admin")
role.set(2,"manager")
role.set(3,"customer")
role.set(4,"teacher")
role.set(5,"support")
console.log('10')
console.log(10)
console.log(role)

q = role.get(1)
q2 = role.get(2)
q4 = role.get(3)
q5 = role.get(4)
q6 = role.get(5)

// program 2

let mapB = new Map(
    [
        [1,"admin"],
        [2,"customer"],
        [3,"manager"],
        [4,"support"],
    ]
)

console.log(mapB)
let nameList = ["ketan","indrayani"]
let info7 = {firstName:"sonal",lastName:"khante"}
let mapC = new Map([
    [nameList,"students"],
    [info7,"information"],
    [true,"candrive"],
    [12,"rollNo"]
])
console.log(mapC)


// mapC.clear()
// console.log(mapC)

//console.log(mapC.size)

mapC.get(12)
mapC.set('city',"pune")
let q11 = mapC.has(12)
console.log(q11)
mapC.delete(12)
console.log(mapC)

let mapD = new Map([
    ["MH","Nagpur"],
    ["UP","Kanpur"],
    ["RJ","Jaipur"]
])

mapD.forEach(function(x,y){
    console.log(x,y)
})

for(let key of mapD.keys()){
    console.log(key)
}

for(let x of mapD.values()){
    console.log(x)
}

for(let [k,v] of mapD.entries()){  //["MH","Nagpur"]
    console.log(k,v)
}


console.log(mapC)