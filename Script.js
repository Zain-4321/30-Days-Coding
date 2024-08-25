//DAY 11

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty. - If the list is empty,
//  print the message We need to find some users! full-question

// let username=[];
// if(username.length==0){
//     console.log("We need to find some users");
// }else{
//     console.log("We don't need a users")
// }


// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone 
// has a unique username. - Make a list of five or more usernames called current_users. full-question

// let current_users = ["user1", "admin", "user3", "user4", "user5"];

// let new_users = ["User1", "User6", "user7", "admin", "User9"];

// new_users.forEach((newUser) => {
//   if (
//     current_users.some(
//       (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
//     )
//   ) {
//     console.log(`${newUser} will need to enter a new username.`);
//   } else {
//     console.log(`${newUser} is available.`);
//   }
// });





// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
// Most ordinal numbers end in th, except 1, 2, and 3. full-question

let num=[1,2,3,4,5,6,7,8,9]
let suffix="th";
if(num==1){
    suffix="st"
}else if(num==2){
    suffix="nd"
}else if(num==3){
    suffix="rd"
}else if(num==4){
    suffix="zt"
}
console.log(`${suffix}`);