/**Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr = [1, 3, 4, 5, 6, 3] */
let arr=[1, 2, 3, 4, 5, 6, 2, 3];
let n=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==n){
        arr.splice(i,1);
    }
}
console.log(arr);
/**Qs2. Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6 */
let number = 287152;
let count = 0;
let copy = number;

while (copy > 0) {
    count++;
    copy = Math.floor(copy / 10);
}

console.log(count);

/**Qs3. Write a JS program to find the sum of digits in a number.
Example : if number = 287152, sum = 25 */
let number1=287152;
let sum=0;
let copy1 = number;

while (copy1 > 0) {
    let digit=copy1%10;
    sum+=digit;
    copy1= Math.floor(copy1 / 10);
}
console.log(sum);
/**Print the factorial of a number n.
[Factorial of a number n is the product of all positive integers less than or equal to a
given positive integer and denoted by that integer. ]
Example :
7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
5! (factorial of 5) = 1x2x3x4x5 = 120
3! (factorial of 3) = 1x2x3 = 6
0! Is always  */
let n2=7;
let ans=1;
for(let i=1;i<=n2;i++){
    ans*=i;
}
console.log(ans);
/**Find the largest number in an array with only positive numbers */
let a=[23,45,1,4,67,45,34,89,8,54,67];
let largest=0;
for(let i=0;i<a.length;i++){
    if(largest<a[i])
    {
        largest=a[i];
    }
}
console.log(largest);