
import './OrdersTable.css'
import { useState } from 'react'

export default function OrderTable(){
  


  let [orders,setOrder] = useState([{
    id:1, timestamp:"3:30", orderby:"admin",items:["paneer","sandwhich"],done:false
  },{
    id:2, timestamp:"3:45", orderby:"sahil",items:["kofta","dahi"],done:false
  }  
  ])

  function handleCheckboxChange(id){
    setOrder(
      orders
        // .filter((order) => order.id !== id)
        
        
        .map((order) =>
          //if order.id change the done else just return order;

            order.id === id ? { ...order, done: !order.done } : order
          
        )
      )};



    return(
      <>
        <div className="orders">
          <h1>Current Orders</h1>
<table className="odr-table table table-striped">
  <thead>
   
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Timestamp</th>
      <th scope="col">Items</th>
      <th scope="col">Order Done</th>
    </tr>
  </thead>
  <tbody>
  
    {orders.map((order,index) => (
            <tr key={order.id}>
              <th scope="row">{index+1}</th>
              <td>{order.orderby}</td>
              
              <td>
                <ol>
                  {order.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </td>
          
              <td>{order.timestamp}</td>
              <td><div className="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" value="option2" checked={order.done}
                  onChange={() => handleCheckboxChange(order.id)}/>
  
</div></td>
            </tr>
          ))}
    
    
  </tbody>
</table>
</div>
</>)
}