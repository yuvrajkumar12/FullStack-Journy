/**Scope */
/**Scope determines the accessibility of variable, objects,and functions from difrent parts of the code 
 * function
 * Block
 * Lexical
 * Globel Scope
*/
/**Function scope
 * Variable defined inside a function are note accessible(visible) frome outside the Function.
 * Example 
 * function calSum(a,b){
 *        let sum=(a+b);//Function Scope
 *      }
 * calsum(1,2);
 * console.log(sum)//Error not print
 */
let sum=54;//Global Scope
function calSum(a,b){
    let sum=a+b;//function Scope
    console.log(sum);//3
}
calSum(1,2);
console.log(sum);//54
/*** */
/**Block Scope
 * Veriable declared inside a {} block cannot be Accessed from outeside the block.
 * only applay for( let, const)
 */
{
    let a=25;
    console.log(a)
}
//console.log(a);//Not access 
//lexical Scope=> it is bacisilay used in nested function
/** 
 * lexical Scope a veriable define outside a function can be accessible inside another function
 * defined after the variable declaration.
 * The opposite is NOT true.
*/
/**------------------------------- */
function outerfunc(){
    let x=5;
    let y=6;
    function innerfunc(){//function scope
        let a=58;
        console.log(x);
    }
    //console.log(a);//not accessible 
    innerfunc();
}
//innerfunc();Error
outerfunc();
/**------------------------- */
let greet="Hello";//global scope
function changeGreet(){
    let greet="namaste";//function scope
    console.log(greet);
    function innerfunc(){
        console.log(greet);//lexical scope
    }
    innerfunc();
}
console.log(greet);
changeGreet();