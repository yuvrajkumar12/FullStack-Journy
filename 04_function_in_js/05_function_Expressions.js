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