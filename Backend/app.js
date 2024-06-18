const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors')

// const customerRoutes = require('./routes/customerRoutes');
// const adminRoutes = require('./routes/adminRoutes');
// const authMiddleware = require('./middlewares/authMiddleware');
// const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json());
app.use(cors());

// Middleware
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/hello',(req,res)=>{
    res.send("hello world")
})
// app.use('/customer', authMiddleware, customerRoutes);
// app.use('/admin', authMiddleware, adminRoutes);
// app.use(errorMiddleware);

// MongoDB connection
// mongoose.connect('mongodb://localhost:27017/hotelApp', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

module.exports = app;
