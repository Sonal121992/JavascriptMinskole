let x = 10
let y = 50

if(x>y){
    console.log("x is greater")
}else{
    console.log("y is greater")
}

// ternary Operation

// expression ? statementOne : statementTwo
x>y ? console.log("x is greater"): console.log("y is greater")

age = 11
let a1 = age>=18 ? 'can drive': 'cannot drive'
console.log(a1) 

// Switch case without break/////////////////////////////////

let item = "Tomato"
switch(item){
    case "Apple":
        console.log("Fruit")
    case "Tomato":
        console.log("Vegetable")
    case "Potato":
        console.log("Underground vegetable")
    case "Rose":
        console.log("Flower")
    default:
        console.log("Incorrect item")
}// It will give whole grid as output

// Switch case with break///////////////////////////////////

let item1 = "Tomato"
switch(item1){
    case "Apple":
        console.log("Fruit")
        break
    case "Tomato":
        console.log("Vegetable")
        break
    case "Potato":
        console.log("Underground Vegetable")
        break
    case "Rose":
        console.log("Flower")
        break
    default:
        console.log("Incorrect item")
}//vegetable =====> it will break after execution

// Multiple item
let item2 = "Shoeflower"
switch(item2){
    case "Apple":
    case "Orange":
    case "Banana":
    case "cherry":
        console.log("Fruits")
        break
    case "Tomato":
    case "Brinjal":
    case "Cabbage":
    case "onion":
        console.log("Vegetables")
        break
    case "Potato":
    case "Carrot":
    case "Ginger":
        console.log("Underground Vehgetables")
        break
    case "Rose":
    case "Marigold":
    case "Sunflower":
    case "Lotus":
        console.log("Flower")
        break
    default:
        console.log("Incorrect item entered")
}



// node 4-Switch.js
