const mongoose = require("mongoose");
const {Schema}=mongoose;

main()
  .then(() => console.log("Connection successful"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

//create a schema  one to few schema
const useSchema=new Schema({
    userName: String,
    addresses:[{
        _id: false,
        location: String,
        city: String
        },
    ],
});

const User= mongoose.model("user", useSchema);

const addUsers=async()=>{
    let user1=new User({
        userName: "Yuvraj Kumar",
        addresses:[{
            location:"221B Baker Street",
            city: "London"
        }]
    });
    user1.addresses.push({location: "p32 WallStress", city:"Jodhpur"});
     let result=await user1.save();
     console.log(result);
};
addUsers();