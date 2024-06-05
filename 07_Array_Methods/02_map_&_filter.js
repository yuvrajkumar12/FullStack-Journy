/**map
 * let ans=arr.map(function defination and retur statement);
 */
let arr=[1, 2,3,4,5,6];
let ans=arr.map(function(el){
    return el*2;

});
console.log(ans);
/**arrow function */
let arr1=[
    {
        name:"yuvraj",
        age:12,
    },
    {
        name:"aman",
        age:23,
    }
];
let ans1=arr1.map((el)=>{
    return el.age*2;
});
console.log(ans1);
/**Filter
 * let newArray=arr.filter(some function definition or name);
 * if the element is true then add 
 * if not true it not add;
 */
let nums=[1,2,3,4,5,6,8,9,10];
let ans2=nums.filter((el)=>{
    return el%2==0;//even->trur, orr->false;
});
console.log(ans2);
