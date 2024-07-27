//schema contains username, password(encrypted), phno, address and role
// t

const mongoose=require("mongoose");

//username, mobno, password: hashedPassword, role
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
            maxLength:120
        },
        mobno:{
           type:Number,
           required:true,
           maxLength:10
        },
        role:{
            type:String,
            required:true,
            maxlength:50
        }

    }
)

const User = mongoose.model('User',userSchema);
module.exports=User


