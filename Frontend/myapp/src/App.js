import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard'
import { BrowserRouter } from 'react-router-dom';
import Register from './Pages/Register';
import LoginForm from './Pages/Login';
import OrderPage from './Pages/OrderPage';
import Cart from './Pages/Cart';
import { useState } from 'react';

function App() {
  const [cart,setCart] = useState([]);
  const [menu,CurrentMenu] = useState([]); //get the menu from backend at the begning 

  



  return (
    <>
     
     <Navbar messname = "Shital Mess"/>

     <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<LoginForm/>}></Route>
        <Route path="/user/home" element={<OrderPage cart={cart} setCart={setCart} />}></Route>
        <Route path="/user/cart" element={<Cart cart={cart}/>}></Route>

        
      
      </Routes>
    </BrowserRouter>

     </>
     
  );
}

export default App;
