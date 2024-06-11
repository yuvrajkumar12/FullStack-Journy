/**Return Keyword is used to return somevalue from the function
 * input---->function----->output
 * function FunctionName(arg1,arg2...){
 *      //do Something
 *      return val;
 * }
 */
function sum(a,b){
    console.log("hello");
    console.log("HELLO");
    return a+b;
    //console.log("kay hal hao");//Return statement ke bad code execute nhi hota hai

}
console.log(sum(5,23));
/**Create a Function that return the concatenation of all string in array. */
let str=["hi", "Hello","bye","!"];
function  concatenation(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result+=str[i];
    }
    return result;

}
console.log(concatenation(str));