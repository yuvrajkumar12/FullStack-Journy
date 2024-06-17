const express = require("express");
const app = express();
let port = 8080;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

// app.use((req,res)=>{
//     console.log("request received");
//     let code="<h1>fruits</h1><ul><li>Apple</li><li>orange</li></ul>"
//     res.send(code);
//     // res.send({
//     //     name:"apple",
//     //     color:"yellow",
//     // });
// });
app.get("/",(req,res)=>{ //Routing
    res.send("you contect root path");
});
app.get("/apple",(req,res)=>{
    res.send("you connect apple path");
});
app.get("/banana",(req,res)=>{
    res.send("you connect banaa path");
});
app.get("/orange",(req,res)=>{
    res.send("you connect orange path");
});

app.get("/:usename/:id",(req,res)=>{   //path parameter
    let {usrname, id}=  req.params;
    res.send(`welcome to the page of@${username},`);
});
// quary string
app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("No search quary");
    }
    res.send(`Thes are the result for:${q}`);
});