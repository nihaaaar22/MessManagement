//should export two functions login and register.Login : should send jwt token as response gets phno and password

//register :gets ph no, password, name, role(admin/customer) in request as json. and sends status 201 on successful registration. stores the data using userModel

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const User = require('../models/userModel');

exports.register = async (req, res) => {
    console.log("register method is getting executed")
    

  
  try {

    const {username, mobno, password,repassword} = req.body;
    console.log(`User with ${username}, mobile no: ${mobno}, hashed password: ${hashedPassword} received`)

    if(password!=repassword){
      return res.status(401).json({message:"the passwords don't match"})
    }

    const role = "customer";
    const hashedPassword = await bcrypt.hash(password, 12);

    // const user = new User({ username,mobno, password: hashedPassword, role });
   // await user.save();

    res.status(201).json({ message: 'User registered successfully' });
    console.log(`User with ${username} and mobile no: ${mobno} saved`)

  } catch (error) {
    console.log("error")
  }

};


exports.login = async (req, res) => {
  try {
    const { mobno, password } = req.body;

    const user = await User.findOne({mobno});
    if (!user || !bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, 'secretKey', { expiresIn: '1h' });
    res.json({ token }); //this method converts json to string instead of seperately using JSON.stringify();
  } catch (error) {
    
    console.log(error);
    res.status(401);
  }
};

