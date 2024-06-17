const express=require("express");
const { METHODS } = require("http");
const app=express();
const path=require("path");

const port=8080;
//first methods
// app.use(express.static("public"));
//second methods
app.use(express.static(path.join(__dirname,"public")));
//using ejs
app.set("view engine","ejs");
app.set("views",path.join(__dirname, "/views"));
app.get("/",(req,res)=>{
    res.render("Home.ejs");
});
app.get("/hello",(req,res)=>{
    res.send("hello");
});
app.get("/roll",(req,res)=>{
    let dicval=Math.floor(Math.random()*6)+1; //value giv to data base
    res.render("rolldices.ejs",{dicval});

});
app.get("/ig/:username", (req, res) => {
    const {username}=req.params;
    const InstaData=require("./data.json");
    const data=InstaData[username];
    if(data){
        res.render("Instagram.ejs",{data}); 
    }
    else{
        res.render("error.ejs");
    }
});
app.listen(port, ()=>{
    console.log(`Listin on port num ${port}`);
});