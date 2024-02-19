/*Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
    positive number].
    For example: for array [7, 9, 0, -2] and n=3
    Print, [7, 9, 0]*/
let arr=[7,9,0,-2];
let n=3;
arr.pop(n);
console.log(arr);
/*Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [9, 0, -2*/
let arr1=[7,9,0,-2];
let n1=3;
let ans=arr1.slice(arr1.length -n1);
console.log(ans);
/*Qs3. Write a JavaScript program to check whether a string is blank or not */
let string="";
if(string.length==0){
    console.log("string is Empty");
}
else{
    console.log("String is not empty");
}
/**t.
Qs4. Write a JavaScript program to test whether the character at the given (character)
index is lower case */
let str="HelloKAYHALhai";
let ind=7;
if(str[ind]==str[ind].toUpperCase){
    console.log("yes");
}
else{
    console.log("NO");
}
/**Write a JavaScript program to strip leading and trailing spaces from a string. */
const str1="     Hai kay hal hai kay hor rhahai        ";
console.log(str1.trim());
console.log(str1.split());
/**Qs6. Write a JavaScript program to check if an element exists in an array or not */
const arr2=[65,40,25,0,14,26,15,4,2,51,5,62,5,1,51,,54];
let item=64;
if(arr2.indexOf(item)!=-1)
{
    console.log("item in  present in the string");
}
else{
    console.log("NOT present in the arr2");
}
