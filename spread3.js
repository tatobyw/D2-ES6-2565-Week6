//1.Function
function stdName(std1, std2, std3) {
    return std1 + " " + std2 + " " + std3
}

//2.Array
let member = ['Mark', 'Elon', 'Jeff']
let a = stdName(...member)
//console.log(a)

//3.Object
let obj1 = { first: 'Mark', age: 25, }
let obj2 = { last: 'Zackerberg', gender: 'M' }

let newObj = { ...obj1, ...obj2, manager: 'facebook' }
console.log(newObj)