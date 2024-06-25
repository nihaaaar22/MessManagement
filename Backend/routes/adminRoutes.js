//Admin routes


const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Menu routes
router.post('/menu', adminController.createMenuItem);
router.get('/menu', adminController.getMenuItems);
router.put('/menu/:id', adminController.updateMenuItem);
router.delete('/menu/:id', adminController.deleteMenuItem);

// Order routes
router.get('/orders', adminController.getOrders);
router.put('/orders/:id', adminController.updateOrder);
router.delete('/orders/:id', adminController.deleteOrder);

// User routes
router.get('/users', adminController.getUsers);
router.put('/users/:id', adminController.updateUser);
router.delete('/users/:id', adminController.deleteUser);

module.exports = router;
