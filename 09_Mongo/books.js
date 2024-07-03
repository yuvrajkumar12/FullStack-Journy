const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Amazon");
}

main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => console.log(err));

const bookSchema = new mongoose.Schema({
    title: { // Fixed the typo here
        type: String,
        required: true, // Fixed the option name here
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
});

const Book = mongoose.model("Book", bookSchema);