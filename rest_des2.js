let num = new Function('...b','return b')
let a = num(10,20,30)
//console.log(a)

//Rest Operator[...rest]
let myName = ["James","Mark","Nadia"]
const [cat,...dog] = myName
console.log(dog)

//Spread Operator[...spread]
let myName2 = ["James","Mark","Nadia"]
const newName = [...myName2,"Jeff",24]
console.log(newName)