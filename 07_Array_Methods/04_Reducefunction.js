/**Reduce */
//Reduce the array to a single value
//arr.reduce(reducer function with 2 variable for(accumulator,element));
//example;
let arr=[1,2,3,4,5];
let ans=arr.reduce((res,el)=>(res+el));
console.log(ans);
//Create a function to find the min number in array?
let nums=[5,2,4,7,1];
let a=nums.reduce((a,el)=>{
    if(el<a){
        return el;
    }else{
        return a;
    }
});
console.log(a);
//using function
function getmin(nums){
    let min=nums.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    });
    return min;
}
let a1=[2,4,5,6,7,8,1];
console.log(getmin(a1));
