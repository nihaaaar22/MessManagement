// const router = express.router()
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Get all menu items
router.get('/menu', customerController.getMenuItems);

// Place a new order
router.post('/order', customerController.placeOrder);

// Get all orders for a specific user
router.get('/orders/:userId', customerController.getUserOrders);

module.exports = router;

// router.post('/login',auth)