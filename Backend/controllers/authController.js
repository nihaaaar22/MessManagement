const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('../models/userModel'); // Uncommented to import the User model

exports.register = async (req, res) => {

  console.log("register method is getting executed");

  try {
    const { username, mobno, password, repassword } = req.body;

    console.log(`username: ${username}`);
console.log(`mobno: ${mobno}`);
console.log(`password: ${password}`);
console.log(`repassword: ${repassword}`);


    
    if (password !== repassword) {
      return res.status(401).json({ message: "The passwords don't match" });
    }

    console.log("the passwords match");

    const role = "customer";
    const hashedPassword = await bcrypt.hash(password, 7);
    
    const user = new User({ username, mobno, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
    console.log(`User with ${username} and mobile no: ${mobno} saved`);

  } 
  
  catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }

};

exports.login = async (req, res) => {
  try {
    const { mobno, password } = req.body;
    const secretKey = process.env.JWT_TOKEN;

    const user = await User.findOne({ mobno });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid mobile number or password' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
