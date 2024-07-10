import UserBill from "../Components/UserBill"
import { useLocation } from 'react-router-dom';


export default function Cart(props){
    let {cart} = props;

      
    console.log(cart)
    const Cartitem = cart.filter((item) => item.quantity > 0);




    return(<UserBill cartItems={Cartitem} ></UserBill>)
}

