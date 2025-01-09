//MONGODB CONNECTION configuration

const mongoose = require("mongoose");

//create the function to connect to the mongodb

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb is connected successfully");
    }catch(error){
        console.log("connection Error")
    }
}

module.exports = connectDB;