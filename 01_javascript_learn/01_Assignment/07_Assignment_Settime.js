/**Qsl . Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.*/
const arrayAvrage=(arr)=>{
    let ans=0;
    let s=arr.length;
    for(let i=0;i<s;i++){
        ans+=arr[i];
    }
    return ans/s;
};
const arr=[2,4,5,9,6];
console.log(arrayAvrage(arr));
/**Qs2. Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not. */
const isEven=(n)=>{
   return n%2==0;
};
console.log(isEven(5));