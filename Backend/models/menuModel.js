const mongoose = require('mongoose');

// Define the MenuSchema
const menuSchema = new mongoose.Schema({
  items: [{
    itemName: {
      type: String,
      required: true,
    },
      description: String,
    price: {
      type: Number,
      required: true,
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now, // Default value is the current date and time
  }  
});

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;
