// Day 14



// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in 
// an artist name and an album title, and it should return a Object containing these two pieces of information.
//  Use the function to make three dictionaries representing different albums. Print each return value to show that Objects
//   are storing the album information correctly. full-question

// function show_album(artist,title){
//     let album = { artist, title };
//     if (tracks) {
//       album["tracks"] = tracks;
//     }
//     return album;
  

// }

// console.log(show_album("The Artist","The first Album"));
// console.log(show_album("The Artist","The Second Album"));
// console.log(show_album("The Artist","The Third Album"));


// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.



// let magician=["Alice","Broad","Scarlett"];
// function show_magician(magic){
//     for(i=0;i<magician.length;i++){
//         console.log(magician[i]+" The Great Magicians");
//     }
// }

// show_magician(magician)



// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

// let magician=["Alice","Steve","Scarlett","Johnson"];

// function show_magicians(magicians ) {
//     magicians.forEach((magician) => {
//       console.log(magician);
//     });
//   }
  
//   function make_great(magicians) {
//     for (let i = 0; i < magicians.length; i++) {
//       magicians[i] = magicians[i] + " the Great";
//     }
//   }
  
//   make_great(magician); 
//   show_magicians(magician); 