import React from 'react';
import { Table } from 'react-bootstrap';
import './UserBill.css';
import { Link } from 'react-router-dom';


export default function UserBill(props) {
  const { cartItems } = props;

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="user-bill container mt-4 p-4">
      <h2 className="text-center mb-4">Your Bill</h2>
      <Table hover responsive className="table-borderless bill-table">
        <thead className="thead-light">
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <hr />
      <div className="total-amount text-right">
        <h4>Total Amount: <span className="total">${calculateTotalAmount()}</span></h4>
      </div>
      <Link to="/user/home">
      <button type="button" class="btn btn-danger">Return to Cart</button>
      </Link>

      <button style={{ marginLeft: '20px' }} type="button" class="btn btn-success">Place Order</button>




      


    </div>
  );
}
