/**Qs1. Write a JavaScript function that returns array elements larger than a numbe */
let arr=[9,5,4,7,66,2,1,48];
let n=7;
function larger(arr,n){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>n){
            console.log(arr[i]);
        }
    }
}
larger(arr,n);
/**Qs2. Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh” ans = “abcdefgh”
 */
let str1 = "abcdabcdefgggh";
function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let char1 = str[i];
        if (ans.indexOf(char1) == -1) {
            ans += char1;
        }
    }
    return ans;
}
console.log(getUnique(str1));
/**Qs3. Write a JavaScript function that accepts a list of country names as input and 
returns the longest country name as output.
Example : country = ["Australia", "Germany", "United States of America"] output : 
"United States of America" */
let country=["Australia", "Germany", "United States of America"];
function longestcountry(country){
    let ans=0;
    for(let i=0;i<country.length;i++){
        if(country[i].length>country[ans].length){
            ans=i;
        }
    }
    return country[ans];
}
console.log(longestcountry(country));
/**Qs4. Write a JavaScript function to count the number of vowels in a String 
argument.
 */
let str = "apnacollege";
function countvowel(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i) == "a"||str.charAt(i) == "e" ||str.charAt(i) == "i" ||str.charAt(i) == "o" ||str.charAt(i) == "u"){
            count++;
        }
    }
    return count;
}
console.log(countvowel(str));
/**Qs5. Write a JavaScript function to generate a random number within a range 
(start, end). */
let star=200;
let end=300;
function random(star,end){
    let diff=end-star;
    return Math.floor(Math.random()*diff)+star;

}
console.log(random(star,end));

