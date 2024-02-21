/**
 * function Definition(telling js)
 *          function functionName(){
 *              //Do Something
 *          }
 * function Colling(using the function)
 *      functionName();
 */
function hello()//function decleration
{
    console.log("Hello");
}
function printName(){
    console.log("Yuvraj kumar");
    console.log("Kay hal hai");
}
function printnumber(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
hello();
printName();
printnumber();
//practice Question
/***create a function the prints apoem. */
function printpoem(){
    console.log("Twinkal twinkal little star");
}
printpoem();
/**Create a function to roll a dice & always display the value of the dice(1 to 6*/
function displayDice(){
    let random=Math.floor(Math.random()*6)+1;
    console.log(random);
    if(random==6){
        console.log(displayDice());
    }
    else{
        console.log(random);
    }
}
displayDice();