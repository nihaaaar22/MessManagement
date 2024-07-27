//should authorize the 
let jwt = require('jsonwebtoken')
require('dotenv').config();


const authMiddleware =(req,res,next)=>{
    try{
    let token = req.headers.authorisation;
    const secretToken = process.env.JWT_TOKEN;


    if(!token){
    res.status(401).json({message:"no token found"})
    return;
}

    let decoded = jwt.verify(token,secretToken);

    //can get the user,user role from decoded and verify if present in database and so on.
    next();
}
catch(error){
    console.log(error);
    res.status(401).json({message:'invalid token'})
}
}

module.exports = authMiddleware;