// Day 18

// Make a Smartphone Object: Create a simple way to keep track of a smartphones details. Include its brand
// model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

// let smartphones={
//     make:"Samsung",
//     model:"Galaxy A-32",
//     spec:{

//         Storage:"130GB",
//         Screen:"2.5 Inches",
//         Battery:"18 Hours",
//     }
// }
// for(let x in smartphones){
//     console.log(smartphones[x]);
// }
//console.log(smartphones.make);



// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, 
// like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list
//  and show them.



// let developSkills={
// languages:["javaScript","Python","C++"],
// framwork:["React","Angular","vue"],
// tools:["Git","weback","Vs Code"],

// }
// let { languages, framwork, tools } = developSkills;

// console.log(`Languages:${languages[0]}, FramWork:${framwork[0]}, Tools:${tools[0]}`);



// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on
//  what you need at that moment, like adjusting labels based on user choices.




function DeynamicKey(key,value){

    let deynamicobj={}
    deynamicobj[key]=value;
    return deynamicobj
}

let preference=DeynamicKey("Dark","light")
console.log(preference);