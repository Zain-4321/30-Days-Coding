//DAY 29

//Finding the Position of a Substring: Write a function that locates the first occurrence of 
//the word `code` within any given string and returns its position.
// function Code(str){

//     return str.indexOf("code");
// }

// console.log(Code("learn JavaScript"));


//Checking for Text Presence: Create a function that checks if the word `JavaScript` is
// present in a given string. It should return `true` if found, otherwise `false`.


// function hasJs(str){

//     return str.includes("JavaScript");    
// }

// console.log(hasJs("I love JavaScript"));


//Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.

function counting(str){

    return str.substring(0,10);
}

console.log(counting("hello,javascriptworld"));