//importing the model

const Menu=require("../models/menuModel");

//creating menu 
const createMenuItem=async(req,res)=>{
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
const getMenuItem = async (req, res) => {
  try {
    const {id}=req.params.id;
    const menuItems = await Menu.find({_id:id});
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(400).json({ message: "Did not find any menu items for the provided id." });
  }
};
const updateMenuItem = async (req, res) => {
    try {
      const menuItem = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(menuItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};
  
const deleteMenuItem = async (req, res) => {
    try {
      await Menu.findByIdAndDelete(req.params.id);
      res.status(204).json({ message: 'Menu item deleted' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};




//order
const getOrders = async (req, res) => {
    try {
      const orders = await Order.find().populate('user').populate('menuItems');
      res.status(200).json(orders);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
const updateOrder = async (req, res) => {
    try {
      const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(order);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
const deleteOrder = async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(204).json({ message: 'Order deleted' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // User CRUD
const getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
const updateUser = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
const deleteUser = async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(204).json({ message: 'User deleted' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
module.exports={
  createMenuItem,getMenuItem,deleteMenuItem,updateMenuItem,deleteOrder,getOrders,updateOrder,getUsers,updateUser,deleteUser
}