function stdId(...id){
    let sum = 0;
    for(let i of id){
        sum = sum + i
    }
    return `${sum}`
}

let a = stdId(10,20,30,40,50,60)
console.log(`Sum: ${a}`) //210