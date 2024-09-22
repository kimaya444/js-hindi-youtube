// 1.Stack (use in primitive)
// Whenever you add any data into the stack, you get a copy of it. 


let myYoutubename = "hiteshchoudhry"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename); // hiteshchoudhry
console.log(anothername); // chaiaurcode

// 2.Heap (use in non-primitive)
// and when you add any data into the heap you get the original of it.

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);