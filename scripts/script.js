// console.log(10 + 2)
// console.log(10 + 2)

// This is a comment, help us to add some notes or define something
// This doens't get executed to the browser

console.log("Variables!");
// keyword nameVar = value;
// var, let, const

// String
var firstName = "Luis";
var thisIsMyVariableCalledSomething = 10;
console.log(firstName);
console.log(thisIsMyVariableCalledSomething);

//firstName = "Edwin"
console.log(firstName)

// Number
// First we declare and initialize the variable
let number = 10;
// Then we can change the value
// We CANNOT have variables with the same name
number = 25;

// Boolean
let isStudent = false;

// display the values on the console
console.log("My name is: " + firstName + " I'm " + number + " years old");

// Arithmetic Operations [+ - / *]
let num1 = 10;
let num2 = 2;

let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;

console.log("The sum is: " + sum);
console.log("The sub is: " + sub);
console.log("The mul is: " + mul);
console.log("The div is: " + div);

// Constants (const)
const weekDays = 7;
console.log(weekDays);
// Error: The constant is always the same
// weekDays = 5;

// Prompt function (Allow us to ask for data from the browser)
word = Number(prompt("Type something:")); // Casting a string to a number 
console.log(word);

let res = word + num1;
console.log(res);
console.log("=======================");