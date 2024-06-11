//Rest is allow a function to take an idefinite number of argument and bundle then in array
//it is opposit of spread
function sum(...args){
    return args.Rest((sum,el)=>sum+el);
}
console.log(sum(1,2,3,4,5,6,7));
//The rest parameter is a JavaScript feature that allows you to collect all remaining arguments into an array. 
//It is denoted by three dots (...) followed by a parameter name.