//pauses the executing of its surrounding async function until the promise is setted
//(resolved or reject)
// async function show(){
//     await colorChange("violete",1000);
//     await colorChange("indigo",1000);
//     await colorChange("green",1000);
//     await colorChange("yellow",1000);
//     return "done";
// }
//function
function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve(num);  // Resolve with the generated number
        }, 1000);
    });
}

async function demo(){
    try {//handling error
        await getNum();
        await getNum();
        await getNum();
        await getNum();
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
demo();
//jaha promise used hote hai wha hunm async v used krte hai
//Agar koi promise reject tota hai to usko kaise handle krte hai
