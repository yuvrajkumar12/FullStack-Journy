const express =require('express');
const app=express();
const mongoose=require('mongoose');
const path=require("path");
const Chat=require("./models/chat.js");
const methodOverride=require("method-override");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));


main()
    .then(()=>{
        console.log("connection successful");
    })
    .catch((err)=>console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatapp');
}



app.get("/" ,  (req,res)=>{
    res.send("working");
});



//Index Rout show all chat
app.get("/chats",async(req,res)=>{
    let chats=await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});


//new rout
app.get("/chats/new",(req,res)=>{ 
    res.render("new.ejs");
});


//Create rout
app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    let newChat= new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
    newChat.save().then((res)=>{
        console.log("chat was saved");
    })
    .catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats");
}); 



//edit route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat });
});



//update rout
app.put("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let {msg: newMsg}=req.body;
    let updatedChat=await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true,new:true});
    console.log(updatedChat);
    res.redirect("/chats");

});

//Destroy Route Delete /chats/:id
app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let chatTobeDeleted=await Chat.findByIdAndDelete(id);
    console.log(chatTobeDeleted);
    res.redirect("/chats");
});
app.listen(8080,()=>{
    console.log("Server is listen");
});