/**this keyword*/
/*"This" keyword refers to an object that is executing the current piece of ConvolverNode.*/
const student={
    name:"yuvrajKumar",
    age:25,
    eng:95,
    math:93,phy:97,
    getAvg(){
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(avg);
    }
}
student.getAvg();
/**try and catch */
/**the try statement allows you to define a block of code to be tested for errors while it is being executed.
 *The catch statement allows you to define a block of code to be executed, if an error occurs in the try block,
  */
 //------------------
 /**Example
  * try{
  *     console.log(a);
  * }catch{
  *     console.log("variable does not exist")
  * }
  */
 console.log("hello");
 console.log("hello");
 try{
    console.log(a);
 }
 catch{
    console.log("This is error")
 }
 console.log("yuvraj");
 console.log("Kay hal hai");
 /////
 console.log("Example 2");
 console.log("hello");
 let a=8;
 try{
    console.log(a);
 }
 catch(err){
    console.log("This is error")
    console.log(err);
 }
 console.log("yuvraj");
 console.log("Kay hal hai");