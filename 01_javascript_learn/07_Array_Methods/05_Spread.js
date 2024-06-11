//Spread is a method tha used to iterable int multiple values function func(...arr)
//...->spread used three dots;
let arr=[1,2,3,4,5,6];
console.log(...arr);
let string="yuvrajkumarkay hal hai";
console.log(...string);//it convert to the char;

///
let odd=[3,5,7,9];
let even=[2,4,6,8];
let nums=[...odd,...even];
console.log(...nums);
/// Spare used whith object literal
let data={
    email:"yuvrajkumar44@gmail.com",
    password:"abcd",
};
let datacopy={...data,id:123};
console.log(datacopy);//output=={ email: 'yuvrajkumar44@gmail.com', password: 'abcd', id: 123 }
//console.log(...datacopy);

let yu="yuvraj kumar kay hai kay ho rha hai";
let add={...yu};
console.log(add);