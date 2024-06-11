//promis
// function savetoDb(data){
//     return new Promise((success,failure)=>{
//         let internetspeed=Math.floor(Math.random()*3)+1;
//         if(internetspeed>4){
//             success("Data was save");
//         }else{
//             failure("week connection");
//         }
//     });
// }
// console.log(savetoDb("apna college"));//correct this code
function savetoDb(data){
    return new Promise((resolve, reject) => {
        let internetspeed = Math.floor(Math.random() * 5) + 1;
        if(internetspeed > 3){
            resolve("Data was saved");
        } else {
            reject("weak connection");
        }
    });
}

savetoDb("apna college")
    .then(message => console.log(message))
    .catch(error => console.log(error));
//there are two types of object method 
//1-> Resolve-> Sesolve is show Success
//2-> Reject-Reject is show failer
