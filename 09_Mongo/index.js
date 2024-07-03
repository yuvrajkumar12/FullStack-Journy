const mongoose=require('mongoose');
main()//to connect the server
    .then(()=>{
        console.log("connection successful");
    })
    .catch((err)=>console.log(err));
async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/test");
}
const userSchema=new mongoose.Schema({//Schema
    name:String,
    email:String,
    age:Number ,
});
const User=mongoose.model("User",userSchema);//create collection 
User.find({age:{$gt:47}}).then((res)=>{
    console.log(res[0].name);
})
.catch((err)=>{
    console.log(err);
});
// const user2=new User({
//     name:"eve",
//     email:"edam@yahoo.in",
//     age:40,
// });
// user2.save().then((res)=>{
//     console.log(res);
// }).catch(err=>{console.log(err)});
// User.insertMany([
//     {name:"yuvra",email:"tony@gmail.com",age:50},
//     {name:"yuvra1",email:"Tony@gmail.com",age:60}
// ]).then((data)=>{
//     console.log(data);
// });