//value we pass to the function
/**
 * function fumctionName(arg1,arg2..){
 *      //do Something
 *  }
*/
function functionName(n,t){
    let m=n*t;
    console.log(m);
}
function NameAge(Name, Age){
    console.log(`${Name}`,"is kay hal hai",`${Age}.`);
}
functionName(3,5);
NameAge("Yuvraj",19);
//Practice Question
//Create a function that give us the avrage of 3 Numbers.
function avrage(n,n1,n2){
    let avrage=(n+n1+n2)/3;
    console.log(Math.floor(avrage));
}
avrage(5,8,6);