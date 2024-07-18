//Admin routes


const express = require('express');
const router = express.Router();

const {getMenuItem,createMenuItem,updateMenuItem,deleteMenuItem,getOrders,updateOrder,deleteOrder,getUsers,updateUser,deleteUser} =require('../controllers/adminController')
// Menu routes
router.post('/menu', createMenuItem);
router.get('/menu', getMenuItem);
router.put('/menu/:id', updateMenuItem);
router.delete('/menu/:id', deleteMenuItem);

// Order routes
router.get('/orders', getOrders);
router.put('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);

// User routes
router.get('/users', getUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
