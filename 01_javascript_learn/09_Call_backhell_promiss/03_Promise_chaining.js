//To improved version of promise
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
// saveToDb("Apna college")
//  .then(()=>{
//      console.log("Promise resolve");
//      saveToDb("helloworld")
//      .then(()=>{
//         console.log("data2 saved");
//      });
//  })
//  .catch((error) => {
//     console.log("Promise rejected:", error);
// });
//-------------Improve this code
saveToDb("Apna college")
  .then(()=>{
    console.log("Data Saved");
    return saveToDb("helloword");
  })
  .then(()=>{
    console.log("data2 saved");
  })
  .catch(()=>{
    console.log("promise was rejected");
  });//this is called promise channing