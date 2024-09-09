// try{
//     console.log("try block you can error");
//     // console.log(ZAIN)
// }
// catch(err){
//     console.log(err.name);
//     console.log(err.message);
//     console.log("The Catch Method Will Catch the Error");
// }
// finally{
//     console.log("Finall The error is solve")
// }



//-------CUSTOM ERROR -----------------------//

const err=new Error("Required");
err.name="ERROR";
let name =prompt("Enter Your Name");
try{
    if(name===""){
        throw err
    }
    console.log(name)
}
catch(e){
    console.log(e.anme);
    console.log(e.message)
}











