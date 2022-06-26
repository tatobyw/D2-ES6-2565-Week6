let company = "AWS"
let fname="Mark"
let emp = {
    id:101,
    fname,//Shorthand property
    lname:"Zackerberg",
    [company]:'Facebook',

    //consise method:shorthand
    function(){
        // console.log(this.fname, this.lname)
        return `${this.fname} ${this.lname}`
    }
}

let emp1 = emp
// console.log(emp1)
// console.log(emp1.id)
// console.log(emp1.fname)
// console.log(emp1.company)

console.log(emp1.function(),emp1.id)