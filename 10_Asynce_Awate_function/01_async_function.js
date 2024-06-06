async function gride(){//create async function
    throw "404 page is not found";
    return "hello";
}
gride()
 .then((result)=>{
    console.log("promise was resolve");
    console.log("result was: ",result);
 })
 .catch((err)=>{
    console.log("Promise was rejected with err: ",err);
 });

 //create async using arrow function
 let demo=async()=>{
    return 5;
 };
 demo();