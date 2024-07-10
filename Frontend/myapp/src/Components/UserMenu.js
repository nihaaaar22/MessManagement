

import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import './UserMenu.css';
import { Link } from 'react-router-dom';



const UserMenu = (props) => {
  const { menulist,cart,setCart } = props;
  const [menuItems, setMenuItems] = useState(menulist);
  const [cartItemQty,setCartItemQty] = useState(0);

  

  useEffect(()=>  {
    let Initqty = 0; //initial quantity
    menulist.forEach(item => {
    Initqty += item.quantity;   
    setCartItemQty(Initqty);     
    })
  },)



  const handleQuantityChange = (menuItem, quantityChange) => {

    setCartItemQty(cartItemQty+quantityChange);

    const updatedMenuItems = menuItems.map((item) => {

      if (item.id === menuItem.id) {

        item.quantity = Math.max(0, item.quantity + quantityChange);
        return item;

      } else {

        return item;

      }

    });

    setMenuItems(updatedMenuItems);
};



  function Cart(props){

    let Cartqty = props.qty
    console.log(menuItems)
    setCart(menuItems)

    if(Cartqty>0){

        return(
            <Link to={{pathname: "/user/cart" }} >
  

        <button type="button" class="btn btn-success">Cart({Cartqty})</button>
        </Link>
    )

    }

}


  return (
  <>

    <div className="user-menu container mt-4">
      <h2 className="text-center mb-4">Today's Menu</h2>
      <Table hover responsive className="table-borderless">
        <thead className="thead-light">
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
          menuItems.map((menuItem) => (
            <tr key={menuItem.id}>
              <td>{menuItem.name}</td>
              <td>${menuItem.price.toFixed(2)}</td>
              <td className="quantity-control">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => handleQuantityChange(menuItem, -1)}
                  disabled={menuItem.quantity <= 0}
                >
                  -
                </Button>
                <span className="quantity mx-2">{menuItem.quantity}</span>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => handleQuantityChange(menuItem, 1)}
                >
                  +
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Cart qty={cartItemQty}/>


    </div>
    


    </>
    );
};





export default UserMenu;

