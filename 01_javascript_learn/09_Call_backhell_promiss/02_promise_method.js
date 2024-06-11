//Promise method  two types
//1-> then()
//2-> catch()
function saveToDb(data){
    return new Promise((resolve, reject) => {
        let internetspeed = Math.floor(Math.random() * 5) + 1;
        if(internetspeed > 3){
            resolve("Data was saved");
        } else {
            reject("weak connection");
        }
    });
}
let request=saveToDb("Apna college");
request
 .then(()=>{
     console.log("Promise resolve");
 })
 .catch(()=>{
     console.log("Promise rejected");
 });
 