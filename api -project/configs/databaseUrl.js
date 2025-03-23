const { default: mongoose } = require("mongoose")
require('dotenv').config();
const url= process.env.mongoDB_URL
const db=async(req,res)=>{

    try {

        await mongoose.connect(url);
        console.log("MongoDB connected successfully!");
        
    } catch (error) {
        console.log(error.message);
        
    }

}
module.exports = db;