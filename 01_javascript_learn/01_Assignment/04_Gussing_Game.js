let Max=prompt("Enter your Max Number");
let random=Math.floor(Math.random()*Max)+1;
let guss=prompt("Guess the Number");
while(true){
    if(guss==random){
        console.log("Your are Right! ");
        break;
    }
    else if(guee=="Quit")
    {
        console.log("User Quit");
        break;
    }
    else if(guess>random){
        guss=prompt("hint! you gess was too small,pless try again");
    }
    else{
        guss=prompt("HintYou gess was to lagrge.Pless try again ");
    }
}