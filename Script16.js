//DAY 16

// Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and
//  a method describe() that logs a sentence about the laptop.


// let laptop={
//    make:"Dell",
//    model:"Elite-Series",
//    year:2022,
//     described: function (){
//    console.log(`This Laptop is a ${laptop.make} ${laptop.model} ${laptop.year}`);
//    }


// }


// laptop.described();





// Array Destructuring: Given an array of objects representing different laptops, 
// each with properties `make`, `model`, and `year`, use array destructuring 
// to assign the first and second laptops to variables. Then, log these variables.

// let laptops=[
// {make:"Dell", model:"Elite-Series",year:2022},
// {make:"hp", model:"Falcon-Series",year:202},
// {make:"Acer", model:"Tiger-Series",year:2020,}

    
// ];

// console.log(laptops[0]);
// console.log(laptops[1]);


// Combining Arrays with Spread Operator: Suppose you are comparing prices of two different sets of laptops.
//  Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
// Spread operator کا استعمال array کے elements کو دوسرے array میں شامل کرنے کے لیے کیا جا سکتا ہے۔
//spread operator do array ko ek sath layata hai
// let prices1=[25000,30000,35000]
// let prices2=[40000,50000,60000]
// let combine=[...prices1,...prices2];
// console.log(combine);