const bttn=document.querySelector(".btn")
const bodEle=document.querySelector("body");
bodEle.style.backgroundColor="yellow";

// bttn.style.backgroundColor="green";
// bttn.style.Color="white";
// bttn.style.borderRadius= 10 +"px";

// CLASS LIST // TWo Types are use .add or .remove
// bttn.classList.add("btn1");
//  bttn.classList.remove("btn1");

//
// innerHtml
// outerHtml
// textContent
// innerText



const inter=document.querySelector(".intro");
// console.log(inter.innerHTML);
// // console.log(inter.outerHTML);
// //  console.log(inter.innerText);
//  console.log(inter.textContent);
// inter.innerText="My Name Is talha";
// inter.innerHTML="<p>Hello every one </p>"


//Attributes
//getAttributes
//setAttributes
//hasAttribute
//removeAttribute

// let att=inter.getAttribute("class");
// console.log(att);

// let att2=inter.setAttribute("id","intro2");

// let att2=inter.hasAttribute("class");  yeh check karta hai ke id ya class hain ya nahi
// console.log(att2);

inter.removeAttribute("class")