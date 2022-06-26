let a1 = [1,2,3]
let a2 = [4,5,6]

//Concatenate:Array Spread Operator
// let newA3 = [...a1,0,9..toExponential.a2]
// console.log(newA3)

//Concatenate:Object Spread Operator
let std1 = {
    fname: 'Mark',
    lname: 'Zuckerberg',
    age:25
}

let std2 = {
    Id: '101',
    Branch: 'Facebook',
    City:'LA'
}

//console.log(std1,std2)
let profile = {...std1, ...std2}
console.log(profile)