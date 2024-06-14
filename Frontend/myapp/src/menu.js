import React, { useState } from 'react';
import { useEffect } from 'react';
import './menu.css'

const CurrentMenu = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Spaghetti', price: 12.99,  },
    { id: 2, name: 'Caesar Salad', price: 8.99 },
  
  ]);

  const [newItem, setNewItem] = useState({ name: '', price: '' });

  useEffect(() => {
    async function sendMenuToBackend() {
      try {
        const response = await fetch('/api/menu', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(menuItems)
        });
  
        if (!response.ok) {
          throw new Error('Failed to send menu to backend');
        }
  
        console.log('Menu sent to backend successfully');
      } catch (error) {
        console.error(error);
      }
    }
  
    sendMenuToBackend();
  }, [menuItems]);

  
 


  const handleAddItem = () => {
    const item = {
      // *** imp ***: the id assigned here is only for the fronted reference ans is temporary for the new items added here
      id: menuItems.length + 1,
      name: newItem.name,
      price: parseFloat(newItem.price),
    };
    setMenuItems([...menuItems, item]);
    setNewItem({ name: '', price: '' });
  };

  const handleRemoveItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };



  return (
    <div className="Container menu-Container">
      <div className="row">
        <h1>Menu</h1>

    <div className="col-8 curr-menu">
      <h2>Today's Menu</h2>
      <table className="menu-tbl table table-striped">
        <thead>
          <tr>
            <th scope="col">Sr.no</th>
            <th scope="col">Item</th>
            <th scope="col">Price ($)</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>



          
          {menuItems.map((item,index) => (
            //to check why it isn't working
            //if(item.id>lastid){lastid=item.id}

            
            
            <tr key={item.id}>
              <th scope="row">{index+1}</th>
              <td>{item.name}</td>
              <td>{item.price.toFixed(2)}</td>
              <td>
                <button 
                  className="btn btn-danger" 
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


     
      <div className="col-4 add-item-form">
        <h4>Add New Item</h4>
        <div className="form-group">
          <label>Item Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            
            onChange={handleChange}
          />
          <h2>{newItem.name}</h2>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary mt-2" onClick={handleAddItem}>
          Add Item
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default CurrentMenu;
