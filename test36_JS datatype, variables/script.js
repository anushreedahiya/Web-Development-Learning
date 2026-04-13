console.log("here we will learn about data types in JS, its variables, and objects.")

var a = 5;
var b = 6;
var c = "Anu Anu";
var _a = "pinu";
console.log(a + b);
console.log(a + b + 8);

console.log(typeof a, typeof b)
console.log(typeof c)
// this is a block
{
    let a = 66;   // this value of a scope is till this block only.
    console.log(a)
}
console.log(a)


let a1 = 10;
const a2 = 23;
// a2 = a1 + 2 invalid;
console.log(a2)

// in most cases try to use let in JS instead of var
// in js, var name can start with _ but not with a number
// let and const are local variables whereas var is a  global variable

// DTA TYPES in JS
let x = "Anushree";
let y = 23;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;
console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


// OBJECT is key: value pair combination
let o = {
    name: "Anushree",
    "job code": 1023,    // need to add "" here as job code has space in it.
    "is_student": true
}
console.log(o)

o.salary= "100cr";
console.log(o);

o.salary= "20cr";
console.log(o);