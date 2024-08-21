const divEle=document.querySelector(".container");
console.log(divEle);

let paraa=document.createElement("p");
divEle.appendChild(paraa);
paraa.textContent="this is para"
paraa.style.fontSize=50 + "px"
paraa.classList.add("para")
//append() add karo dive ke ahir mian
//prepend()//add karo dive ke start main
//before()//add karo dive se bhi pehle
//after()add karo div ke bad
//append chikd ek parameter lita hai

// divEle.append("Talha",paraa)    
// divEle.prepend(paraa)

//before dive ke opper p ko add kariga
// divEle.before(paraa)

// //after dive ke akhir p ko add kariga
// divEle.after(paraa)



