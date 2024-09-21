// if you assign any value in const you can't change the value

const accountId = 144553
let accountState;
let accountEmail = "kimaya@google.com" // assigned value can be changed
var accountPassword = "12345" 
// assigned value can be changed but do not use var instead use let because of issue in block scope and functional scope

accountCity = "Jaipur" // you can also write like this without using any variable but this is also not good

//accountId = 2 // not allowed

accountEmail = "he@he.com"
accountPassword = "3124"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])