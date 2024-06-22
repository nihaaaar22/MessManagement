//schema contains username, password(encrypted), phno, address and role
// t

const mongoose=require("mongoose");

const  userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            maxLength:30
        },
        password:{
            type:String,
            required:true,
            maxLength:30
        },
        phoneNumber:{
           type:Number,
           required:true,
           maxLength:10
        },
        address:{
            type:String,
            required:true,
            maxlength:50
        }
    }
)


module.exports=mongoose.model("User",userSchema);



