//Qs1. Square and sum the array elements using the arrow function and then find the average of the arraylet arr=[12,]
let arr=[12,45,23];
let square=arr.map(el=>el*el);
let sum=square.reduce((acc,el)=>acc+el,0);
let avr=sum/arr.length;
console.log(square);
console.log(sum);
console.log(avr);
//2. Create a new array using the map function whose each element is equal to the original element plus 5
let a2=[12,45,23];
let na2=a2.map(el=>el+5);
console.log(a2);
console.log(na2);
//3. Create a new array whose elements are in uppercase of words present in the original array.
let a3=["H","M","l","p"];
let uper=a3.map(el=>el.toUpperCase());
console.log(a3);
console.log(uper);
//4. Write a function called doubleAndReturnArgs which accepts an array and a  
//variable number of arguments. The function should return a new array with 
//the original array values and all of the additional arguments doubled
function doubleAndReturnArgs(arr, ...args) {
     const doubledArgs = args.map(arg => arg * 2);
     return [...arr, ...doubledArgs];
}
let result = doubleAndReturnArgs([1, 2, 3], 4, 5, 6);
console.log(result);

