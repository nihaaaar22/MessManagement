const mongoose=require("mongoose");
const dotenv=require('dotenv')

dotenv.config()

//mongodb://localhost:27017/
const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Mongodb connected");
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports=connectDb

