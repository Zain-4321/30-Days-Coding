//DAY 20 in JavaScript Coding
//Write a simple program that can take lots of scores and find their average.

// function avgScore(...scores){

//     let total=scores.reduce((sum,score)=>sum+score,0)
//     return total / scores.length;

// }


// console.log(avgScore(100,100,100,100));



//Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

// function Add(num,num){

//     return num+num
// }
// console.log(5+5);




//Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the users name and age.

let name=prompt("enter your name");
let age=parseInt(prompt("enter your age"));
document.write(`My Name is : ${name}<br> Age :${age}`);