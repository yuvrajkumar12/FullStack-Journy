//const variable=function(arg1,arg2){
//  //do or return something
//}
let name="Yuvraj";
let sum=function(a,b){
    return a+b;
}
 let hello=function(){
    console.log("hello");
 }
 hello();
 console.log(sum(5,8));
 /**Higher Order Functions
  * Takes one or multiple function as arguments
  */
 function multipleGreet(func,count){
    //higher order function
    for(let i=0;i<=count;i++){
        func();
    }
 }
 let greet=function(){
    console.log("hello");
 }
 multipleGreet(greet,5);
 //Second method
 function multiple1(func1,count1){
    for(let i=0;i<=count1;i++){
        func1();
    }
 }
 let greet1=function(){
    console.log("hello");
 }
 multiple1(function() {console.log("nameste")},23);
 //Higher order Return 
let odd = function (n) {
    console.log(!(n % 2 == 0));
}

let even = function (n) {
    console.log(n % 2 == 0);
}

function oddOrEvenFactory(request) {
    if (request == "odd") {
        return odd;
    } else if (request == "even") {
        return even;
    } else {
        console.log("Wrong request");
    }
}

let request =  "odd";
let fun = oddOrEvenFactory(request);

if (fun) {
    fun(3);
}
//methods
/*Action that can be performed on an object. */
const calculator={
    add:function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
};
console.log(calculator.add(5,9));
