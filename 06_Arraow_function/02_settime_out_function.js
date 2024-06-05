/**Set timeout
 * set Timeput(function,timeout) inbuilt function
 * timeout= argument is ms 1s=1000
 */
console.log("hi There!");
let id2=setTimeout(()=>{
    console.log("Yuvraj kumar");
},10000);
console.log("Welcome to");
clearTimeout(id2)
//Set_Interval
console.log("Kay");
let id=setInterval(()=>{
    console.log("Kya hal hai bhi");
},2000);
console.log("Start");
clearInterval(id);
//This With Arrow Function..
const student={
    name:"aman",
    marks:95,
    prop:this,//global scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: ()=>{
        console.log(this);//parents scope=>window
        return this.marks;
    },
    getInfo: function() {
        setTimeout(()=>{
            console.log(this);//student
        },2000);
    },
    getInfo2: function() {
        setTimeout(function() {
            console.log(this);//windoe
        },2000);
    },
};
console.log(student.getName());
console.log(student.getInfo());
console.log(student.getInfo2());