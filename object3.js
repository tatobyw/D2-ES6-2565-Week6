let obj1 = {
    name1: "Hello",
    name2: "World"
}
let obj2 = {
    name3: "Welcome",
    name4: "to"
}
let obj3 = {
    name5: "Metaverse",
}
//3.Object Destructurin
let { name1, name2 } = obj1
let { name3, name4 } = obj1
let { name5 } = obj1
console.log(name1, name2)

//0.console.log(obj1,obj2,obj3)
//1.Object.assign()
let a = Object.assign(obj1, obj2, obj3)
//console.log(a)

//2.Object Spread
let b = { ...obj1, ...obj2, ...obj3 }
//console.log(b)