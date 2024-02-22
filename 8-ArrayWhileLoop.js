// With While loop ====> print the index and element of array

let flower = ["rose", "lily", "lotus", "marigold", "daisy"]
console.log(flower)
let x = 0
while(x < flower.length){
    console.log(x) // 0 1 2 3 4
    console.log(flower[x]) // rose lily lotus marigold daisy
    x = x + 1
}
console.log("=============")

// With while loop  =======> Print the element in reverse

let y = flower.length-1
while(y >= 0){
    //console.log(y)// 0 1 2 3 4
    console.log(flower[y]) // daisy marigold lotus lily rose
    y = y - 1
}
console.log("============")

// With while loop ======> break at lotus

let z = 0
while(z < flower.length){
    if(flower[z] == "lotus"){
        break
    }
    console.log(flower[z]) // rose lily
    z = z + 1
}
console.log("============")

// With while loop ====> break at lotus ===> break after console

let z1 = 0
while(z < flower.length){
    console.log(flower[z1]) // rose lily lotus
    if(flower[z1] == "lotus"){
        break
    }
    z1 = z1 + 1
}
console.log("========")

// With while loop =====> continue at lotus

let x1 = 0
while(x1 < flower.length){
    if(flower[x1] == "lotus"){
        x1 = x1 + 1
        continue
    }
    console.log(flower[x1]) // rose lily marigold daisy
    x1 = x1 + 1
}