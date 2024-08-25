// // Day 15
// // Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of 
// // the array of magicians’ names. Because the original array will be unchanged, return the new array and store 
// // it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


// let magicians= ["Alice", "David", "Chris"];

// function make_great(magicians) {
//   let greatMagicians = [];
//   magicians.forEach((magician) => {
//     greatMagicians.push(`${magician} the Great`);
// });
// return greatMagicians;
// }

// function show_magicians(magicians) {
//   magicians.forEach((magician) => {
//     console.log(magician);
//   });
// }

// // Creates a new modified array
// let greatMagicians = make_great(magicians.slice()); 

// console.log("Original magicians:");
// show_magicians(magicians); // Shows original names
// console.log("Great magicians:");
// show_magicians(greatMagicians); // Shows modified names

              


// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have 
// one parameter that collects as many items as the function call provides, and it should print a summary of the 
// sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// function make_sandwich(...items){
//     console.log(`We make sandwich in this items ${items}`);
// }
// make_sandwich("ham","cheese")
// make_sandwich("tomato","garlic")
// make_sandwich("club sandwich","onoin")

// Cars: Write a function that stores information about a car in a Object. The function should always receive 
// a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
//   Print the Object that’s returned to make sure all the information was stored correctly.

function car(model,make){
    console.log(`The car model Is ${model} And make ${make}`);

}
console.log(car("2023","toyota"));
console.log(car("2021","Bmw"));