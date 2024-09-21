let score = true

console.log(typeof score);// valid
console.log(typeof(score));// valid

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN not a number

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undifined => NaN

let isLoggedIn = "" // false

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "histesh" => true


let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);