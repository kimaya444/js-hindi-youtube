// 1. Primitive :  String, Number, boolean, null(emty), undefined, symbol, BigInt

const score = 33;

// defined symbol
const id = Symbol('123')
const anotherId = Symbol('123');

console.log(id === anotherId); // false
console.log(typeof id); // symbol

// bigInt defined
const bigNumber = 54584754957n
console.log(bigNumber);

// is javascript statically type or dynamically type?
// javascript is dynamically typed. meaning that checking is performed at runtime runtime, rather than during compilation.


// Reference (non  primitive) : Array, objects, functions

// Array
const heros = ["shaktima", "naagraj", "doga"];

// Objects
let myObj = {
    name: "kimaya",
    age: 22,
}

// function as variable
const myFunction = function () {
    console.log("hello world");
}

console.log(typeof myFunction);// function

// to know the datatype of any variable

console.log(typeof score); // number

// typeof Operator Results
/*

    undefined => undefined
    null => object
    boolean => boolean
    number => number
    string => string


*/

// all the non-primetive datatype typeof result is object.

// read doc : https://262.ecma-international.org/5.1/#sec-11.4.3