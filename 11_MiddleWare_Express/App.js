const express=require("express");
const app=express();
const ExpressError1 = require("./ExpressError");

const checkToken=(req,res,next)=>{
    let{token}=req.query;
    if(token=="giveaccess"){
        next();
    }
    throw new ExpressError1(401,"ACCESS DENIED!");
};

 app.get("/api",checkToken,(req,res)=>{
    res.send("data");
 });

app.get("/",(req, res)=>{
    res.send("Hi, I am root");
});


app.get("/rendom",(req,res)=>{
    res.send("this is rendom page");
});

app.get("/err",(req,res)=>{
    abcd=abcd;
});
app.use((err,req,res,next)=>{
    let{status,message}=err;
    res.status(status).send(message);
});

// app.use((req,res)=>{
//     res.statusCode(400).send("Page not found");
// });


app.listen(8080, ()=>{
    console.log("Server listining to port  8080");
});