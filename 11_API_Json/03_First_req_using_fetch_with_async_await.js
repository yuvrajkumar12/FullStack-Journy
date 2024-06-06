//using fetch with async await\
let url="https://catfact.ninja/fact";
async function getfect(){
    try{
        let res=await fetch(url);
        let data=await res.json();
        console.log(data.fact);
    }   
    catch(e){
        console.log("err ",e);
    }
    console.log("bye");
}
console.log(getfect());