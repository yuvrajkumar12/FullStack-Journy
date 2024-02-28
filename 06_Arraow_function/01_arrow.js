/**Arrow Functions
 * syntex
 * const fun=(a1,a2)=>{function definition}
 * Example
 * const sum=(a,b)=>{
 * console.log(a+b);
 * }
 * => this is arrow function
 */
const sum=(a,b)=>{
    console.log(a+b);
}
sum(5,4);
const code=n=>{//valid statement
    return n*n*n;
}; 
console.log(code(2));
//Implicit Retuen
//console fun=(a1,a2..)=>{valude}
//const mul=(a,b)=>(a*b);
const pow=(a,b) =>{
    return a*b;
};
console.log(pow(5,6));
const mul=(a,b)=> a*b;
console.log(mul(2,9));
//--------
const s=n=>n*n*n;
console.log(s(5));

