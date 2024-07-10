const Menu = require('../models/Menu');
const Order = require('../models/Order');
const User = require('../models/User');

// Get all menu items
exports.getMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Place a new order
exports.placeOrder = async (req, res) => {
  try {
    const { userId, menuItems } = req.body;

    // Calculate total price
    const menuItemDocs = await Menu.find({ _id: { $in: menuItems } });
    const total = menuItemDocs.reduce((acc, item) => acc + item.price, 0);

    const order = new Order({
      user: userId,
      menuItems: menuItems,
      total: total,
      status: 'Pending',
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all orders for a specific user
exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await Order.find({ user: userId }).populate('menuItems');
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
