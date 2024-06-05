/**Every function
 * it means say that result true if every element of array given true for some function.else return false.
 * arr.every(some function definitin or name);
 * it return two value true or false;
 * if all the element are true then return true
 */
//example
let arr=[2,4,6];
let ans=arr.every((el)=>el%2==0);
console.log(ans);
//example 2
let arr1=[1,2,4,6,8];//one number are odd the rturn false'
let ans2=arr1.every((el)=>
    el%2==0
);
console.log(ans2);
//Some function
/**Return true if some element of array given true for some function.else return false.
 * arr.some(some function definition or name);
 */
let a1=[1,2,3,4];
let an1=a1.some((el)=>(el%2==0));
console.log(an1);
//example 2
let a2=[1,3];
let an2=a2.some((el)=>(el%2==0));
console.log(an2);