import UserMenu from "../Components/UserMenu";

const menuItems = [
    { id: 1, name: 'Pizza', price: 12.99, quantity: 1 },
    { id: 2, name: 'Salad', price: 7.50, quantity: 0 },
    { id: 3, name: 'Drinks', price: 2.50, quantity: 2 },
    // Add more menu items as needed
  ];
  
  export default function OrderPage(props) {
    let {cart,setCart} = props;
    return (
      <div className="order-page">
        <UserMenu menulist={menuItems} cart={cart} setCart={setCart} />
        {/* Add other order details and functionalities here */}
      </div>
    );
  }