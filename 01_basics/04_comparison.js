// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1); // bad
console.log("02" > 1); // bad

console.log(null > 0); // false bad
console.log(null == 0); // false bad
console.log(null >= 0); // true bad

console.log(undefined > 0); // false bad
console.log(undefined == 0); // false bad
console.log(undefined >= 0); // true bad

// === strictly check 

console.log("2" === 2); // false good