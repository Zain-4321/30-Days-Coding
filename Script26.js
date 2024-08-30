//Day 26

// Function Parameters and Return Values: Create a function that takes two numbers as
//  parameters, adds them together, and returns the result. Show how you can call this 
//  function and log the result.

// function Additions(num1,num2){

//     return num1+num2;
// }
// console.log(Additions(5,35));


// Default Parameters: Write a function that greets a user. It should take the users
//  name as a parameter and say hello. If no name is given, it should greet an anonymous user.


// function userName(name){

//     console.log(`Hello ${name} With JavaScript`);
// }

// userName("ZAIN ");


// Function Expressions vs. Function Declarations: Compare function expressions
//  and declarations by creating one of each that performs the same task, such as squaring 
//  a number.
// 1. Function Declaration
// Function declaration ek tareeqa hai jismein function ka naam aur uski body define hoti hai. 
//Yeh code ke upar hoist hoti hai, matlab aap isse define karne se pehle bhi call kar sakte hain.
//Example of Function Declaration
// function Square(num){
//     return num*num;
// }
// console.log(Square(4));


// 2. Function Expression
// Function expression ek tareeqa hai jismein function ko kisi expression ka hissa banaya jata hai,
//  aam tor par yeh kisi variable ko assign kiya jata hai. Function expressions hoist nahin hoti, 
//  matlab aap inhe pehle define karna padta hai, tabhi call kar sakte hain.

//Example of Function Expression

// const Square = function(num){

//     return num * num;
// }

// console.log(Square(8));