//Day 30

//Converting Strings to Numbers: Write a function that takes a string representation of a 
//number (e.g., `123`) and converts it into an actual number type.

// let num="123456789";
// let num2=parseInt(num);
// console.log(num2);


// Rounding Numbers: Create a function that takes a number with decimals (e.g., `3.14159`) 
// and rounds it to two decimal places.

// let num1=3.25796;
// let num2=num1.toFixed(2);
// console.log(num2);

// Generating Random Numbers: Write a function that generates a random number between 1 and 10,4
//  inclusive.


function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// Example usage:
let randomNumber = getRandomNumber();
console.log(randomNumber); // Outputs a random number between 1 and 10 (inclusive)
