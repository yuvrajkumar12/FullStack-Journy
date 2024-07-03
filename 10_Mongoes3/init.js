const mongoose=require('mongoose');
const Chat=require("./models/chat.js");

main()//set connection
    .then(()=>{
        console.log("connection successful");
    })
    .catch((err)=>console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatapp');
}
let allChats=[
    {
        from:"Shakshi",
        to:"Priya",
        msg:"send me your exam sheets",
        created_at:new Date()
    },
    {
        from:"Shakshis",
        to:"Priyas",
        msg:"send me sheets",
        created_at:new Date()
    },
    {
        from:"Ruchi",
        to:"Pooja",
        msg:"send me kiss",
        created_at:new Date()
    },
    {
        from:"Manisha",
        to:"Pooja kiumari",
        msg:"send me kiss",
        created_at:new Date()
    },

    {
        from:"Rishu",
        to:"pinki",
        msg:"send me kiss",
        created_at:new Date()
    },
];
Chat.insertMany(allChats);

