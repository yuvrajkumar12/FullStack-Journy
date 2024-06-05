/**forEach */
let arr=[1,2,3,4,5];
let print=function (el) {
    console.log(el);
};
/**using arrow function */
arr.forEach(print);
arr.forEach((el)=>{
    console.log(el);
});
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
arr1.forEach((el)=>{
    console.log(el);
});