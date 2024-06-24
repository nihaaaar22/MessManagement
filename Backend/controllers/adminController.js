//importing the model

const Menu=require("../models/menuModel");

//creating menu 
exports.createMenu=async(req,res)=>{
    try{
        const menuItem=new Menu(req.body);
        await menuItem.save();
        res.status(202).json(menuItem);
    }catch(error){
       res.status(400).json({
        message:error.message
       });
    }
};
exports.getMenu = async (req, res) => {
    try {
      const menuItems = await Menu.find();
      res.status(200).json(menuItems);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};
  
exports.updateMenuItem = async (req, res) => {
    try {
      const menuItem = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(menuItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};
  
exports.deleteMenuItem = async (req, res) => {
    try {
      await Menu.findByIdAndDelete(req.params.id);
      res.status(204).json({ message: 'Menu item deleted' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};




//order
exports.getOrders = async (req, res) => {
    try {
      const orders = await Order.find().populate('user').populate('menuItems');
      res.status(200).json(orders);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  exports.updateOrder = async (req, res) => {
    try {
      const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(order);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  exports.deleteOrder = async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(204).json({ message: 'Order deleted' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // User CRUD
  exports.getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  exports.updateUser = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  exports.deleteUser = async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(204).json({ message: 'User deleted' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  