let odd = [1,3,5]
let combined = [2,4,6,...odd]
//console.log(combined)

//Define
function f(a,b,...cat){
    console.log(a,b,cat)
}

//Call function
f(1,2,3,4,5)