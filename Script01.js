// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value
//  for the variable age, and then, full-question

// let age=25;
// if(age< 2){
//     console.log("It is baby");
// }else if(age<13){
//     console.log("the person is kid")
// }else if(age<20){
//     console.log("The person is teennger")
// }else if(age> 65){
//     console.log("the person is elder")
// }else{
//     console.log("the person is die")
// }
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if
//  statements that check for certain fruits in your array. full-question

// let fruits=["Apple","Mango","cherry"];
// if(fruits.includes("Graps")){
// console.log("You really like Graps");
// }
// if(fruits.includes("Orange")){
//     console.log("You really like orange")
// }

// Hello Admin: Make a array of five or more usernames, including the name admin. Imagine you are writing code
// that will print a greeting to each user after they log in to a website. Loop through the array, and print
//  a greeting to each user, full-question

let usernames=["Admin","user1","user2","user3"];

usernames.forEach((username)=>{
    if(username=="Admin"){
        console.log("Hello admin, would you like to see a status report?")
    }else{
        console.log(`Hello ${username} login in  again`)
    }

})