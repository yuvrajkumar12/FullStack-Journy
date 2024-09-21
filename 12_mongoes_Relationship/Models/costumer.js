const mongoose=require('mongoose');
const {Schema}=mongoose;

main()
  .then(() => console.log("Connection successful"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}
//creatr order schema
const orderSchema=new Schema({
    item:String,
    price:Number,
});
//create coustmerSchema
const coustmerSchema=new Schema({
    name:String,
    order:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order"
        },
    ],
});
const Order=mongoose.model("Order",orderSchema);
const Customer=mongoose.model("Customer",coustmerSchema);

const addCustomer=async()=>{
    let cust1=new Customer({
        name: "Rahul Kumar",
    });

    let order1=await Order.findOne({item:"Chips"});
    let order2=await Order.findOne({item:"Chocolate"});
    cust1.orders.push(order1);
    cust1.orders.push(order2);
    let result=await cust1.save();
    console.log(result);
};
addCustomer();
// const addOrders=async()=>{
//     let result=await order.insertMany([
//         { item:"Somassa",price: 25},
//         {item:"Banana",price:20},
//         {item:"Apple",price:30},
//     ]);
//     console.log(result);

// }
// addOrders();