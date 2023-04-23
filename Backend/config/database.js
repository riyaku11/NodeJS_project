const mongoose = require("mongoose");

const DB_URI = "mongodb://127.0.0.1:27017/customerDB"

mongoose.set("strictQuery", false);
const connectDatabase=  ()=>{
    mongoose.connect(DB_URI,{useNewUrlParser:true, useUnifiedTopology:true}).then((data)=>{
        console.log("connected to mongodb successfully !");
        console.log(`mongodb connected with server : ${data.connection.host}`);
    })
    
} 


module.exports = connectDatabase;